/* =============================================
   SAM'S CLUB - JS
   Member Moments + page interactivity
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- VIDEO DATA ---------- */
  const videos = [
    { id:1, title:"Sam's Club grocery haul - healthy snack finds!", author:"@thatcrunchymomkate", av:"K", abg:"#5b6abf", bg:"#1a1a1a", src:"images/moment1.mp4", dur:"0:47", views:"12.4K", likes:342, comments:[
      {u:"SarahL",a:"S",bg:"#f43f5e",t:"I need to try those Jackson's chips!",time:"2h"},
      {u:"MarkD",a:"M",bg:"#3b82f6",t:"The One Mighty Mill stuff is so good",time:"3h"},
      {u:"AshleyR",a:"A",bg:"#22c55e",t:"Adding all of this to my list for Saturday",time:"5h"}
    ]},
    { id:2, title:"Here's everything I get at Sam's Club", author:"@caseykellyy", av:"C", abg:"#3b82f6", bg:"#1a1a1a", src:"images/moment2.mp4", dur:"0:32", views:"23.1K", likes:891, comments:[
      {u:"JennyW",a:"J",bg:"#5b6abf",t:"The romaine and broccoli deal is unbeatable",time:"1h"},
      {u:"DaveP",a:"D",bg:"#fb923c",t:"What's that salsa brand? Looks amazing",time:"2h"},
      {u:"RyanK",a:"R",bg:"#22c55e",t:"This is basically my exact cart every week",time:"4h"},
      {u:"NicoleF",a:"N",bg:"#f97316",t:"The singles cheese packs are clutch for lunches",time:"5h"}
    ]},
    { id:3, title:"Sam's Club new active wear for men", author:"@costcoandsamsclubmama", av:"M", abg:"#22c55e", bg:"#1a1a1a", src:"images/moment3.mp4", dur:"0:58", views:"8.7K", likes:189, comments:[
      {u:"ChrisB",a:"C",bg:"#a855f7",t:"Those CloudKnit tees look super soft!",time:"30m"},
      {u:"TinaM",a:"T",bg:"#ec4899",t:"What size did you grab? Do they run big?",time:"1h"}
    ]},
    { id:4, title:"My top 3 Sam's Club staples with price per serving", author:"@george.h", av:"G", abg:"#f97316", bg:"#1a1a1a", src:"images/moment4.mp4", dur:"1:05", views:"15.8K", likes:567, comments:[
      {u:"LindsayP",a:"L",bg:"#5b6abf",t:"The price per serving breakdown is so helpful!",time:"2h"},
      {u:"KarenS",a:"K",bg:"#fb923c",t:"$13.98 for that much chicken? Going today",time:"5h"}
    ]},
    { id:5, title:"Best cleaning products at Sam's Club", author:"@DanaCleans", av:"D", abg:"#f97316", bg:"#1a1a1a", src:"images/moment5.mp4", dur:"0:55", views:"15.8K", likes:567, comments:[
      {u:"AmyH",a:"A",bg:"#3b82f6",t:"The Member's Mark cleaning wipes are underrated!",time:"1h"},
      {u:"BethR",a:"B",bg:"#a855f7",t:"Finally someone talks about the laundry pods",time:"3h"},
      {u:"TomW",a:"T",bg:"#22c55e",t:"Do they still carry the floor cleaner you mentioned?",time:"4h"}
    ]},
    { id:6, title:"Tire change at Sam's - how fast is it really?", author:"@TonyDrives", av:"T", abg:"#a855f7", bg:"#1a1a1a", src:"images/moment6.mp4", dur:"0:38", views:"9.2K", likes:234, comments:[
      {u:"JasonM",a:"J",bg:"#f43f5e",t:"30 minutes?! That's faster than my usual place",time:"45m"},
      {u:"MelissaG",a:"M",bg:"#5b6abf",t:"What brand tires did you go with?",time:"2h"}
    ]},
    { id:7, title:"Making dinner with only Sam's Club finds", author:"@LisaCooks", av:"L", abg:"#fb923c", bg:"#1a1a1a", src:"images/moment7.mp4", dur:"1:15", views:"31.5K", likes:1243, comments:[
      {u:"PaulC",a:"P",bg:"#3b82f6",t:"That salmon recipe is going straight to my list",time:"20m"},
      {u:"EmmaK",a:"E",bg:"#ec4899",t:"My family would LOVE this",time:"1h"},
      {u:"DanielR",a:"D",bg:"#22c55e",t:"You make cooking look so easy!",time:"2h"},
      {u:"SophiaL",a:"S",bg:"#f97316",t:"Part 2 please!!",time:"3h"}
    ]},
    { id:8, title:"Back-to-school supply haul 2026", author:"@BrianDad", av:"B", abg:"#818cf8", bg:"linear-gradient(160deg,#38bdf8,#818cf8)", dur:"0:42", views:"7.6K", likes:198, comments:[
      {u:"CindyT",a:"C",bg:"#fb923c",t:"Those backpacks look so durable! How much were they?",time:"1h"},
      {u:"PatrickS",a:"P",bg:"#5b6abf",t:"Bulk crayons for the win",time:"3h"}
    ]}
  ];

  const liked = new Set();

  /* ---------- CAROUSEL ---------- */
  const track = document.getElementById('momentsTrack');
  const prevBtn = document.querySelector('.sc-m-prev');
  const nextBtn = document.querySelector('.sc-m-next');
  if (track) {
    prevBtn?.addEventListener('click', () => track.scrollBy({left:-420,behavior:'smooth'}));
    nextBtn?.addEventListener('click', () => track.scrollBy({left:420,behavior:'smooth'}));
  }

  /* Product carousel arrows */
  document.querySelectorAll('.sc-carousel-arrow[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const dir = btn.classList.contains('sc-arrow-prev') ? -400 : 400;
      target.scrollBy({left:dir,behavior:'smooth'});
    });
  });

  /* ---------- HOVER TO PLAY CAROUSEL VIDEOS ---------- */
  document.querySelectorAll('.mcard').forEach(card => {
    const vid = card.querySelector('.mcard-video');
    if (!vid) return;
    card.addEventListener('mouseenter', () => { vid.currentTime = 0; vid.play().catch(()=>{}); });
    card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  });

  /* ---------- MODAL ---------- */
  const modal = document.getElementById('vmodal');
  const feed = document.getElementById('vfeed');
  const closeBtn = document.querySelector('.vmodal-close');
  const bg = document.querySelector('.vmodal-bg');

  function openModal(startId) {
    const idx = videos.findIndex(v => v.id === startId);
    const ordered = [...videos.slice(idx), ...videos.slice(0, idx)];
    feed.innerHTML = ordered.map(buildItem).join('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    bindFeedEvents();
    autoProgress(feed.querySelector('.vfeed-item'));
  }

  function closeModal() {
    feed.querySelectorAll('.vcard-vid').forEach(v => { v.pause(); v.src = ''; });
    modal.classList.remove('open');
    document.body.style.overflow = '';
    feed.innerHTML = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  bg?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.mcard').forEach(c => {
    c.addEventListener('click', () => openModal(+c.dataset.id));
  });

  /* ---------- BUILD FEED ITEM ---------- */
  function buildItem(v) {
    const isLiked = liked.has(v.id);
    const lc = isLiked ? v.likes + 1 : v.likes;
    const cmts = v.comments.map(c => `
      <div class="vcmt"><div class="vcmt-av" style="background:${c.bg}">${c.a}</div><div><div class="vcmt-user">${c.u}</div><div class="vcmt-text">${c.t}</div><div class="vcmt-time">${c.time}</div></div></div>
    `).join('');

    return `
    <div class="vfeed-item" data-id="${v.id}">
      <div class="vcard">
        <div class="vcard-player" style="background:${v.bg}">
          ${v.src ? `<video class="vcard-vid" src="${v.src}" muted loop playsinline preload="metadata"></video>` : ''}
          <svg class="dbl-heart" width="80" height="80" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <div class="vcard-info">
            <div class="vcard-author"><div class="vcard-av" style="background:${v.abg}">${v.av}</div><span class="vcard-name">${v.author}</span></div>
            <p class="vcard-title">${v.title}</p>
          </div>
          <div class="vcard-actions">
            <button class="vact like-btn${isLiked?' liked':''}" data-id="${v.id}">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="${isLiked?'#ff3040':'none'}" stroke="${isLiked?'#ff3040':'white'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span>${fmtNum(lc)}</span>
            </button>
            <button class="vact cmt-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>${v.comments.length}</span>
            </button>
            <button class="vact share-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        <div class="vcard-progress"><div class="vcard-progress-bar"></div></div>
        <div class="vcard-comments">
          <div class="vcmt-head"><h4>Comments (${v.comments.length})</h4><button class="vcmt-close">&times;</button></div>
          <div class="vcmt-list">${cmts}</div>
          <div class="vcmt-input-row"><input class="vcmt-input" placeholder="Add a comment..." data-id="${v.id}"><button class="vcmt-send">Post</button></div>
        </div>
      </div>
    </div>`;
  }

  function fmtNum(n) { return n >= 1000 ? (n/1000).toFixed(1)+'K' : n.toString(); }
  function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  /* ---------- FEED EVENTS ---------- */
  function bindFeedEvents() {
    // LIKE
    feed.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); toggleLike(btn); });
    });

    // DOUBLE TAP TO LIKE
    feed.querySelectorAll('.vcard-player').forEach(player => {
      let lastTap = 0;
      player.addEventListener('click', e => {
        const now = Date.now();
        if (now - lastTap < 300) {
          // Double tap
          const item = player.closest('.vfeed-item');
          const likeBtn = item.querySelector('.like-btn');
          const vid = +item.dataset.id;
          if (!liked.has(vid)) toggleLike(likeBtn);
          // Show heart animation
          const heart = player.querySelector('.dbl-heart');
          heart.classList.remove('pop');
          void heart.offsetWidth; // reflow
          heart.classList.add('pop');
        }
        lastTap = now;
      });
    });

    // COMMENTS
    feed.querySelectorAll('.cmt-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const panel = btn.closest('.vcard').querySelector('.vcard-comments');
        panel.classList.toggle('open');
      });
    });

    feed.querySelectorAll('.vcmt-close').forEach(btn => {
      btn.addEventListener('click', () => btn.closest('.vcard-comments').classList.remove('open'));
    });

    // POST COMMENT
    feed.querySelectorAll('.vcmt-send').forEach(btn => {
      btn.addEventListener('click', () => postComment(btn));
    });
    feed.querySelectorAll('.vcmt-input').forEach(inp => {
      inp.addEventListener('keypress', e => {
        if (e.key === 'Enter') postComment(inp.closest('.vcmt-input-row').querySelector('.vcmt-send'));
      });
    });

    // SHARE
    feed.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const sp = btn.querySelector('span');
        sp.textContent = 'Copied!';
        setTimeout(() => sp.textContent = 'Share', 1200);
      });
    });

    // SCROLL SNAP OBSERVER
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) autoProgress(en.target); });
    }, {root: feed, threshold: 0.6});
    feed.querySelectorAll('.vfeed-item').forEach(it => obs.observe(it));
  }

  function toggleLike(btn) {
    const vid = +btn.dataset.id;
    const svg = btn.querySelector('svg path');
    const span = btn.querySelector('span');
    const v = videos.find(x => x.id === vid);
    if (liked.has(vid)) {
      liked.delete(vid);
      btn.classList.remove('liked');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'white');
      span.textContent = fmtNum(v.likes);
    } else {
      liked.add(vid);
      btn.classList.add('liked');
      svg.setAttribute('fill', '#ff3040');
      svg.setAttribute('stroke', '#ff3040');
      span.textContent = fmtNum(v.likes + 1);
      btn.style.transform = 'scale(1.25)';
      setTimeout(() => btn.style.transform = '', 200);
    }
  }

  function postComment(sendBtn) {
    const row = sendBtn.closest('.vcmt-input-row');
    const input = row.querySelector('.vcmt-input');
    const text = input.value.trim();
    if (!text) return;
    const panel = sendBtn.closest('.vcard-comments');
    const list = panel.querySelector('.vcmt-list');
    const el = document.createElement('div');
    el.className = 'vcmt';
    el.innerHTML = `<div class="vcmt-av" style="background:#0071dc">Y</div><div><div class="vcmt-user">You</div><div class="vcmt-text">${escHtml(text)}</div><div class="vcmt-time">Just now</div></div>`;
    list.prepend(el);
    list.scrollTop = 0;
    input.value = '';

    // Update comment count in header and sidebar button
    const card = panel.closest('.vcard');
    const count = list.querySelectorAll('.vcmt').length;
    const header = panel.querySelector('.vcmt-head h4');
    if (header) header.textContent = `Comments (${count})`;
    const feedItem = card.closest('.vfeed-item');
    if (feedItem) {
      const cmtBtn = feedItem.querySelector('.cmt-btn span');
      if (cmtBtn) cmtBtn.textContent = count;
    }
  }

  function autoProgress(item) {
    if (!item) return;
    // Stop all other videos in feed
    feed.querySelectorAll('.vcard-vid').forEach(v => { v.pause(); v.currentTime = 0; });
    // Play this item's video
    const vid = item.querySelector('.vcard-vid');
    const bar = item.querySelector('.vcard-progress-bar');
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(()=>{});
      if (bar) {
        vid.addEventListener('loadedmetadata', () => {
          bar.style.transition = 'none';
          bar.style.width = '0%';
          requestAnimationFrame(() => {
            bar.style.transition = `width ${vid.duration}s linear`;
            bar.style.width = '100%';
          });
        }, {once:true});
        // Fallback if metadata already loaded
        if (vid.duration) {
          bar.style.transition = 'none';
          bar.style.width = '0%';
          requestAnimationFrame(() => {
            bar.style.transition = `width ${vid.duration}s linear`;
            bar.style.width = '100%';
          });
        }
      }
    } else if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        bar.style.transition = 'width 12s linear';
        bar.style.width = '100%';
      });
    }
  }

  /* ---------- SEARCH ---------- */
  const searchBtn = document.querySelector('.search-submit');
  const searchInp = document.querySelector('.header-search input');
  searchBtn?.addEventListener('click', () => {
    const q = searchInp.value.trim();
    if (q) alert(`Search: "${q}"`);
  });
  searchInp?.addEventListener('keypress', e => { if (e.key === 'Enter') searchBtn?.click(); });

  /* ---------- PRELOAD VIDEO THUMBNAILS (mobile fix) ---------- */
  document.querySelectorAll('.mcard-video').forEach(vid => {
    // Force first frame load on mobile by setting currentTime
    vid.addEventListener('loadeddata', () => { vid.currentTime = 0.1; }, {once:true});
    // Fallback: try to trigger load
    vid.load();
  });

  /* ---------- DEPT BUTTON ---------- */
  document.querySelector('.sc-dept-btn')?.addEventListener('click', () => {
    alert('All Departments\n\n(Add dropdown menu here)');
  });

  /* ---------- ADD TO CART ---------- */
  document.querySelectorAll('.sc-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const badge = document.querySelector('.sc-cart-badge');
      if (badge) badge.textContent = +badge.textContent + 1;
      btn.textContent = '✓';
      btn.style.background = '#2a8703';
      setTimeout(() => { btn.textContent = 'Add'; btn.style.background = ''; }, 1200);
    });
  });

});
