/* =============================================
   SAM'S CLUB - JS
   Member Moments + page interactivity
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- VIDEO DATA ---------- */
  const videos = [
    { id:1, title:"My top 3 Sam's Club staples with price per serving", author:"@george.kamel", av:"G", abg:"#f97316", bg:"#1a1a1a", src:"images/moment1.mp4", dur:"0:47", views:"15.8K", likes:567, products:[
      {name:"Member's Mark Chicken Breast, 6 lb",price:"$13.98",pricef:13.98,img:"images/products/chicken.jpeg"},
      {name:"Member's Mark Cauliflower Crust Pizza, 2 pk",price:"$14.48",pricef:14.48,img:"images/products/brownie.png"},
      {name:"Chicken Pad Thai Frozen Meal",price:"$11.98",pricef:11.98,img:"images/products/rice.jpeg"}
    ], comments:[
      {u:"LindsayP",a:"L",bg:"#5b6abf",t:"The price per serving breakdown is so helpful!",time:"2h"},
      {u:"KarenS",a:"K",bg:"#fb923c",t:"$13.98 for that much chicken? Going today",time:"5h"},
      {u:"MarkD",a:"M",bg:"#3b82f6",t:"That cauliflower pizza is legit good",time:"3h"}
    ]},
    { id:2, title:"Sam's Club grocery haul - healthy snack finds!", author:"@thatcrunchymomkate", av:"K", abg:"#5b6abf", bg:"#1a1a1a", src:"images/moment2.mp4", dur:"0:32", views:"12.4K", likes:342, products:[
      {name:"Spindrift Sparkling Water Variety, 30 ct",price:"$15.98",pricef:15.98,img:"images/products/dawn.jpeg"},
      {name:"Goodles Mac & Cheese Variety, 8 pk",price:"$11.98",pricef:11.98,img:"images/products/brownie.png"},
      {name:"Organic Crispy Coconut Rolls",price:"$9.98",pricef:9.98,img:"images/products/butter.jpeg"}
    ], comments:[
      {u:"SarahL",a:"S",bg:"#f43f5e",t:"The Spindrift variety pack is amazing!",time:"2h"},
      {u:"MarkD",a:"M",bg:"#3b82f6",t:"Goodles is the best mac & cheese we've tried",time:"3h"},
      {u:"AshleyR",a:"A",bg:"#22c55e",t:"Adding all of this to my list for Saturday",time:"5h"}
    ]},
    { id:3, title:"Here's everything I get at Sam's Club", author:"@caseykellyy", av:"C", abg:"#3b82f6", bg:"#1a1a1a", src:"images/moment3.mp4", dur:"0:58", views:"23.1K", likes:891, products:[
      {name:"Organic Romaine Hearts, 6 ct",price:"$3.98",pricef:3.98,img:"images/products/rice.jpeg"},
      {name:"100% Grass-Fed Ground Beef, 4 lb",price:"$19.98",pricef:19.98,img:"images/products/chicken.jpeg"},
      {name:"Member's Mark Chicken Breast, 6 lb",price:"$13.98",pricef:13.98,img:"images/products/chicken.jpeg"}
    ], comments:[
      {u:"JennyW",a:"J",bg:"#5b6abf",t:"The romaine and broccoli deal is unbeatable",time:"1h"},
      {u:"DaveP",a:"D",bg:"#fb923c",t:"That grass-fed beef is such a good price",time:"2h"},
      {u:"RyanK",a:"R",bg:"#22c55e",t:"This is basically my exact cart every week",time:"4h"},
      {u:"NicoleF",a:"N",bg:"#f97316",t:"The singles cheese packs are clutch for lunches",time:"5h"}
    ]},
    { id:4, title:"Sam's Club new active wear for men", author:"@costcoandsamsclubmama", av:"M", abg:"#22c55e", bg:"#1a1a1a", src:"images/moment4.mp4", dur:"1:05", views:"8.7K", likes:189, products:[
      {name:"Outdoor Voices CloudKnit Tee, Men's",price:"$14.98",pricef:14.98,img:"images/products/shorts.jpg"},
      {name:"Outdoor Voices CloudKnit Tee (Blue)",price:"$14.98",pricef:14.98,img:"images/products/shorts.jpg"}
    ], comments:[
      {u:"ChrisB",a:"C",bg:"#a855f7",t:"Those CloudKnit tees look super soft!",time:"30m"},
      {u:"TinaM",a:"T",bg:"#ec4899",t:"What size did you grab? Do they run big?",time:"1h"}
    ]},
    { id:5, title:"Everything I wish I knew before becoming a content creator", author:"@SamsPartner", av:"S", abg:"#f97316", bg:"#1a1a1a", src:"images/moment5.mp4", dur:"0:55", views:"15.8K", likes:567, comments:[
      {u:"AmyH",a:"A",bg:"#3b82f6",t:"Love this series! So helpful for beginners",time:"1h"},
      {u:"BethR",a:"B",bg:"#a855f7",t:"The mindset tips are everything",time:"3h"},
      {u:"TomW",a:"T",bg:"#22c55e",t:"Part 4 when??",time:"4h"}
    ]},
    { id:6, title:"My first SXSW panel - Sam's Club Creator Club!", author:"@SamsPartner", av:"S", abg:"#a855f7", bg:"#1a1a1a", src:"images/moment6.mp4", dur:"0:38", views:"9.2K", likes:234, comments:[
      {u:"JasonM",a:"J",bg:"#f43f5e",t:"This is so cool! How do you join Creator Club?",time:"45m"},
      {u:"MelissaG",a:"M",bg:"#5b6abf",t:"SXSW looked amazing this year",time:"2h"}
    ]},
    { id:7, title:"Sam's Club haul - paper towels, meat & more", author:"@SamsPartner", av:"S", abg:"#fb923c", bg:"#1a1a1a", src:"images/moment7.mp4", dur:"1:15", views:"31.5K", likes:1243, products:[
      {name:"Member's Mark Paper Towels, 15 mega rolls",price:"$18.98",pricef:18.98,img:"images/products/swiffer.jpeg"},
      {name:"Ground Beef 80/20, 5 lb",price:"$22.98",pricef:22.98,img:"images/products/chicken.jpeg"},
      {name:"Member's Mark Large Eggs, 5 doz",price:"$12.78",pricef:12.78,img:"images/products/butter.jpeg"}
    ], comments:[
      {u:"PaulC",a:"P",bg:"#3b82f6",t:"Those paper towels are the best deal in the store",time:"20m"},
      {u:"EmmaK",a:"E",bg:"#ec4899",t:"My family would LOVE this haul",time:"1h"},
      {u:"DanielR",a:"D",bg:"#22c55e",t:"That ground beef price is unbeatable!",time:"2h"},
      {u:"SophiaL",a:"S",bg:"#f97316",t:"Part 2 please!!",time:"3h"}
    ]},
    { id:8, title:"Back-to-school supply haul 2026", author:"@BrianDad", av:"B", abg:"#818cf8", bg:"linear-gradient(160deg,#38bdf8,#818cf8)", dur:"0:42", views:"7.6K", likes:198, comments:[
      {u:"CindyT",a:"C",bg:"#fb923c",t:"Those backpacks look so durable! How much were they?",time:"1h"},
      {u:"PatrickS",a:"P",bg:"#5b6abf",t:"Bulk crayons for the win",time:"3h"}
    ]}
  ];

  const liked = new Set();
  let isMuted = false; // Start unmuted - sound on by default

  function updateMuteIcon(btn, muted) {
    const on = btn.querySelector('.mute-on');
    const off = btn.querySelector('.mute-off');
    if (on) on.style.display = muted ? '' : 'none';
    if (off) off.style.display = muted ? 'none' : '';
  }

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
  // Click anywhere outside the vcard to close
  document.querySelector('.vmodal-body')?.addEventListener('click', e => {
    if (!e.target.closest('.vcard')) closeModal();
  });
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
          ${v.src ? `<video class="vcard-vid" src="${v.src}" loop playsinline preload="metadata" disablepictureinpicture controlslist="nodownload nofullscreen noplaybackrate"></video>` : ''}
          <div class="vcard-pause-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg></div>
          <button class="vcard-mute-btn"><svg class="mute-on" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M23 9l-6 6M17 9l6 6"/></svg><svg class="mute-off" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="display:none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
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
            <button class="vact save-btn" data-id="${v.id}">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span>Save</span>
            </button>
            <button class="vact share-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span>Share</span>
            </button>
          </div>
          ${v.products ? `
          <div class="vcard-product-tag">
            <span class="vcard-product-tag-dot"></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            See products (${v.products.length})
          </div>
          <div class="vcard-products">
            <div class="vcard-products-header"><span class="vcard-products-title">Featured in this video</span><button class="vcard-products-close">&times;</button></div>
            <div class="vcard-products-list">${v.products.map(p => `
              <div class="vcard-product-item" data-pname="${p.name}" data-pprice="${p.pricef||0}" data-pimg="${p.img}">
                <img class="vcard-product-thumb" src="${p.img}" alt="${p.name}">
                <div class="vcard-product-info"><span class="vcard-product-name">${p.name}</span><span class="vcard-product-price">${p.price}</span></div>
                <button class="vcard-add-btn">Add</button>
              </div>`).join('')}
            </div>
          </div>` : ''}
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

    // TAP TO PAUSE/PLAY + DOUBLE TAP TO LIKE
    feed.querySelectorAll('.vcard-player').forEach(player => {
      let lastTap = 0;
      let tapTimeout = null;
      player.addEventListener('click', e => {
        // Ignore clicks on action buttons, product tag, mute btn
        if (e.target.closest('.vcard-actions') || e.target.closest('.vcard-product-tag') || e.target.closest('.vcard-products') || e.target.closest('.vcard-mute-btn')) return;
        const now = Date.now();
        if (now - lastTap < 300) {
          // Double tap - like
          clearTimeout(tapTimeout);
          const item = player.closest('.vfeed-item');
          const likeBtn = item.querySelector('.like-btn');
          const vid = +item.dataset.id;
          if (!liked.has(vid)) toggleLike(likeBtn);
          const heart = player.querySelector('.dbl-heart');
          heart.classList.remove('pop');
          void heart.offsetWidth;
          heart.classList.add('pop');
          lastTap = 0;
        } else {
          // Single tap - wait to confirm it's not a double tap
          lastTap = now;
          tapTimeout = setTimeout(() => {
            const vid = player.querySelector('.vcard-vid');
            const pauseIcon = player.querySelector('.vcard-pause-icon');
            if (vid) {
              if (vid.paused) {
                vid.play().catch(()=>{});
                pauseIcon?.classList.remove('show');
              } else {
                vid.pause();
                pauseIcon?.classList.add('show');
              }
            }
          }, 300);
        }
      });
    });

    // MUTE/UNMUTE BUTTON
    feed.querySelectorAll('.vcard-mute-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const vid = btn.closest('.vcard-player').querySelector('.vcard-vid');
        if (!vid) return;
        vid.muted = !vid.muted;
        isMuted = vid.muted;
        // Update all mute buttons to match
        feed.querySelectorAll('.vcard-mute-btn').forEach(b => updateMuteIcon(b, isMuted));
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

    // PRODUCT TAG - tap to open popup
    feed.querySelectorAll('.vcard-product-tag').forEach(tag => {
      tag.addEventListener('click', e => {
        e.stopPropagation();
        const card = tag.closest('.vcard');
        const popup = card.querySelector('.vcard-products');
        if (popup) { popup.classList.toggle('open'); }
      });
    });

    // PRODUCT POPUP CLOSE
    feed.querySelectorAll('.vcard-products-close').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.closest('.vcard-products').classList.remove('open');
      });
    });

    // SAVE BUTTON
    feed.querySelectorAll('.save-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const sp = btn.querySelector('span');
        const vid = +btn.dataset.id;
        const v = videos.find(x => x.id === vid);
        if (btn.classList.contains('saved')) {
          btn.classList.remove('saved');
          sp.textContent = 'Save';
          const idx = savedVideos.findIndex(s => s.id === vid);
          if (idx > -1) savedVideos.splice(idx, 1);
        } else {
          btn.classList.add('saved');
          sp.textContent = 'Saved';
          btn.style.transform = 'scale(1.25)';
          setTimeout(() => btn.style.transform = '', 200);
          if (v && !savedVideos.find(s => s.id === vid)) savedVideos.push(v);
        }
      });
    });

    // ADD TO CART (in product popup)
    feed.querySelectorAll('.vcard-add-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const item = btn.closest('.vcard-product-item');
        const name = item?.dataset.pname || 'Item';
        const price = item?.dataset.pprice || '0';
        const img = item?.dataset.pimg || '';
        addToCart(name, price, img);
        btn.textContent = '✓ Added';
        btn.classList.add('added');
        setTimeout(() => { btn.textContent = 'Add'; btn.classList.remove('added'); }, 1500);
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

    // SEAMLESS LOOP: duplicate all items at the end, when user enters
    // the duplicate zone, instantly jump back to the matching original position
    const realItems = feed.querySelectorAll('.vfeed-item');
    const realCount = realItems.length;
    if (realCount > 1) {
      // Clone all items and append to feed
      realItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('vfeed-clone');
        feed.appendChild(clone);
      });

      // Re-bind events on clones (like, comment, etc.)
      feed.querySelectorAll('.vfeed-clone .like-btn').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); toggleLike(btn); });
      });
      feed.querySelectorAll('.vfeed-clone .cmt-btn').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); btn.closest('.vcard').querySelector('.vcard-comments').classList.toggle('open'); });
      });
      feed.querySelectorAll('.vfeed-clone .vcmt-close').forEach(btn => {
        btn.addEventListener('click', () => btn.closest('.vcard-comments').classList.remove('open'));
      });
      feed.querySelectorAll('.vfeed-clone .save-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const sp = btn.querySelector('span');
          const vid = +btn.dataset.id;
          const v = videos.find(x => x.id === vid);
          if (btn.classList.contains('saved')) { btn.classList.remove('saved'); sp.textContent = 'Save'; const idx = savedVideos.findIndex(s => s.id === vid); if (idx > -1) savedVideos.splice(idx, 1); }
          else { btn.classList.add('saved'); sp.textContent = 'Saved'; btn.style.transform = 'scale(1.25)'; setTimeout(() => btn.style.transform = '', 200); if (v && !savedVideos.find(s => s.id === vid)) savedVideos.push(v); }
        });
      });
      feed.querySelectorAll('.vfeed-clone .share-btn').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); const sp = btn.querySelector('span'); sp.textContent = 'Copied!'; setTimeout(() => sp.textContent = 'Share', 1200); });
      });
      feed.querySelectorAll('.vfeed-clone .vcard-product-tag').forEach(tag => {
        tag.addEventListener('click', e => { e.stopPropagation(); tag.closest('.vcard').querySelector('.vcard-products')?.classList.toggle('open'); });
      });
      feed.querySelectorAll('.vfeed-clone .vcard-products-close').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); btn.closest('.vcard-products').classList.remove('open'); });
      });
      feed.querySelectorAll('.vfeed-clone .vcard-add-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const item = btn.closest('.vcard-product-item');
          addToCart(item?.dataset.pname||'Item', item?.dataset.pprice||'0', item?.dataset.pimg||'');
          btn.textContent = '✓ Added'; btn.classList.add('added');
          setTimeout(() => { btn.textContent = 'Add'; btn.classList.remove('added'); }, 1500);
        });
      });

      // Mute button on clones
      feed.querySelectorAll('.vfeed-clone .vcard-mute-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const vid = btn.closest('.vcard-player').querySelector('.vcard-vid');
          if (!vid) return;
          vid.muted = !vid.muted;
          isMuted = vid.muted;
          feed.querySelectorAll('.vcard-mute-btn').forEach(b => updateMuteIcon(b, isMuted));
        });
      });

      // Observe clones for video autoplay too
      feed.querySelectorAll('.vfeed-clone').forEach(it => obs.observe(it));

      // Tap/double-tap on clones
      feed.querySelectorAll('.vfeed-clone .vcard-player').forEach(player => {
        let lastTap = 0;
        let tapTimeout = null;
        player.addEventListener('click', e => {
          if (e.target.closest('.vcard-actions') || e.target.closest('.vcard-product-tag') || e.target.closest('.vcard-products') || e.target.closest('.vcard-mute-btn')) return;
          const now = Date.now();
          if (now - lastTap < 300) {
            clearTimeout(tapTimeout);
            const item = player.closest('.vfeed-item');
            const likeBtn = item.querySelector('.like-btn');
            const vid = +item.dataset.id;
            if (!liked.has(vid)) toggleLike(likeBtn);
            const heart = player.querySelector('.dbl-heart');
            heart.classList.remove('pop'); void heart.offsetWidth; heart.classList.add('pop');
            lastTap = 0;
          } else {
            lastTap = now;
            tapTimeout = setTimeout(() => {
              const vid = player.querySelector('.vcard-vid');
              const pauseIcon = player.querySelector('.vcard-pause-icon');
              if (vid) { if (vid.paused) { vid.play().catch(()=>{}); pauseIcon?.classList.remove('show'); } else { vid.pause(); pauseIcon?.classList.add('show'); } }
            }, 300);
          }
        });
      });

      // When user scrolls into the first clone, instantly reset to top
      const firstClone = feed.querySelector('.vfeed-clone');
      if (firstClone) {
        const loopObs = new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              // Disable snap temporarily for instant jump
              feed.style.scrollSnapType = 'none';
              feed.scrollTop = 0;
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  feed.style.scrollSnapType = 'y mandatory';
                });
              });
            }
          });
        }, {root: feed, threshold: 0.8});
        loopObs.observe(firstClone);
      }
    }
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
    // Close any open product popups and hide pause icons
    feed.querySelectorAll('.vcard-products.open').forEach(p => p.classList.remove('open'));
    feed.querySelectorAll('.vcard-pause-icon.show').forEach(p => p.classList.remove('show'));
    // Play this item's video
    const vid = item.querySelector('.vcard-vid');
    const bar = item.querySelector('.vcard-progress-bar');
    if (vid) {
      vid.muted = isMuted;
      vid.currentTime = 0;
      vid.play().catch(()=>{});
      // Update mute icon for this item
      const muteBtn = item.querySelector('.vcard-mute-btn');
      if (muteBtn) updateMuteIcon(muteBtn, isMuted);

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
  const searchForm = document.querySelector('.sc-search');
  searchForm?.addEventListener('submit', e => {
    e.preventDefault();
    showDemoOverlay();
  });

  /* ---------- PRELOAD VIDEO THUMBNAILS (mobile fix) ---------- */
  document.querySelectorAll('.mcard-video').forEach(vid => {
    // Force first frame load on mobile by setting currentTime
    vid.addEventListener('loadeddata', () => { vid.currentTime = 0.1; }, {once:true});
    // Fallback: try to trigger load
    vid.load();
  });

  /* ---------- DEMO PAGE LINKS ---------- */
  // All anchor links with href="#" show demo overlay instead of navigating
  document.querySelectorAll('a[href="#"]').forEach(link => {
    // Skip account and cart - they have their own handlers
    if (link.classList.contains('sc-account-pill') || link.classList.contains('sc-cart-item')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      showDemoOverlay();
    });
  });

  // Dept button
  document.querySelector('.sc-dept-btn')?.addEventListener('click', () => {
    showDemoOverlay();
  });

  function showDemoOverlay() {
    // Don't create multiple overlays
    if (document.querySelector('.demo-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'demo-overlay';
    overlay.innerHTML = `
      <div class="demo-overlay-bg"></div>
      <div class="demo-overlay-card">
        <div class="demo-overlay-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" fill="#0071dc"/><polygon points="10,7 17,12 10,17" fill="white"/></svg>
        </div>
        <h2>This is just a demo</h2>
        <p>This page is a concept prototype. Head back and check out <strong>Member Moments</strong> to see the full experience!</p>
        <button class="demo-overlay-btn" onclick="this.closest('.demo-overlay').remove()">Back to Demo</button>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.demo-overlay-bg').addEventListener('click', () => overlay.remove());
  }

  /* ---------- CHECKOUT PAGE ---------- */
  function showCheckout() {
    if (document.querySelector('.checkout-page')) return;
    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const tax = subtotal * 0.095;
    const total = subtotal + tax;

    const page = document.createElement('div');
    page.className = 'checkout-page';
    page.innerHTML = `
      <div class="checkout-header">
        <button class="checkout-back">&larr; Back</button>
        <h2>Checkout</h2>
        <div style="width:60px"></div>
      </div>
      <div class="checkout-body">
        <div class="checkout-main">
          <div class="checkout-section">
            <h3>Delivery Method</h3>
            <div class="checkout-methods">
              <label class="checkout-method active"><input type="radio" name="method" value="pickup" checked><span class="checkout-method-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span><span>Club Pickup</span><span class="checkout-method-sub">Free - ${currentClub.name}</span></label>
              <label class="checkout-method"><input type="radio" name="method" value="delivery"><span class="checkout-method-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span><span>Delivery</span><span class="checkout-method-sub">Free over $50</span></label>
              <label class="checkout-method"><input type="radio" name="method" value="shipping"><span class="checkout-method-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span><span>Shipping</span><span class="checkout-method-sub">Free for Plus</span></label>
            </div>
          </div>
          <div class="checkout-section">
            <h3>Items (${totalItems})</h3>
            <div class="checkout-items">
              ${cart.map(item => `
                <div class="checkout-item">
                  ${item.img ? `<img src="${item.img}" alt="" class="checkout-item-img">` : '<div class="checkout-item-img" style="background:var(--gray-10)"></div>'}
                  <div class="checkout-item-info"><span>${item.name}${item.qty > 1 ? ` x${item.qty}` : ''}</span><strong>$${(item.price * item.qty).toFixed(2)}</strong></div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="checkout-section">
            <h3>Payment</h3>
            <div class="checkout-payment">
              <div class="checkout-card-row">
                <svg width="32" height="22" viewBox="0 0 32 22" fill="none"><rect width="32" height="22" rx="3" fill="#1A1F71"/><circle cx="12" cy="11" r="7" fill="#EB001B"/><circle cx="20" cy="11" r="7" fill="#F79E1B"/><path d="M16 5.8a7 7 0 0 1 0 10.4 7 7 0 0 1 0-10.4z" fill="#FF5F00"/></svg>
                <span>Mastercard ending in 4821</span>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-sidebar">
          <div class="checkout-summary">
            <h3>Order Summary</h3>
            <div class="checkout-summary-row"><span>Subtotal (${totalItems} items)</span><span>$${subtotal.toFixed(2)}</span></div>
            <div class="checkout-summary-row"><span>Estimated Tax</span><span>$${tax.toFixed(2)}</span></div>
            <div class="checkout-summary-row"><span>Shipping</span><span style="color:var(--green);font-weight:600">Free</span></div>
            <div class="checkout-summary-divider"></div>
            <div class="checkout-summary-row checkout-total"><span>Estimated Total</span><strong>$${total.toFixed(2)}</strong></div>
            <button class="checkout-place-btn">Place Order</button>
            <p class="checkout-fine">By placing this order you agree to Sam's Club Terms of Use.</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(page);
    document.body.style.overflow = 'hidden';

    // Back button
    page.querySelector('.checkout-back').addEventListener('click', () => {
      page.remove();
      document.body.style.overflow = '';
    });

    // Method toggle
    page.querySelectorAll('.checkout-method input').forEach(radio => {
      radio.addEventListener('change', () => {
        page.querySelectorAll('.checkout-method').forEach(m => m.classList.remove('active'));
        radio.closest('.checkout-method').classList.add('active');
      });
    });

    // Place order
    page.querySelector('.checkout-place-btn').addEventListener('click', () => {
      const btn = page.querySelector('.checkout-place-btn');
      btn.textContent = 'Placing Order...';
      btn.disabled = true;
      const orderNum = 'SC-' + Math.floor(Math.random()*900000+100000);
      const orderItems = [...cart];
      const orderTotal = total;
      orders.unshift({id: orderNum, items: orderItems, total: orderTotal, date: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}), club: currentClub.name + ' ' + currentClub.num});
      setTimeout(() => {
        page.innerHTML = `
          <div class="checkout-header">
            <div style="width:60px"></div>
            <h2>Order Confirmed</h2>
            <div style="width:60px"></div>
          </div>
          <div class="checkout-confirm">
            <div class="checkout-confirm-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2a8703" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="16 8.5 10.5 14 8 11.5"/></svg>
            </div>
            <h2>Thank you, Gage!</h2>
            <p>Your order of <strong>$${total.toFixed(2)}</strong> has been placed.</p>
            <p class="checkout-order-num">Order #${orderNum}</p>
            <p class="checkout-pickup-msg">Pickup at <strong>${currentClub.name} ${currentClub.num}</strong><br>${currentClub.addr}</p>
            <button class="checkout-done-btn">Continue Shopping</button>
          </div>
        `;
        // Clear cart
        cart.length = 0;
        updateCartUI();
        page.querySelector('.checkout-done-btn').addEventListener('click', () => {
          page.remove();
          document.body.style.overflow = '';
        });
      }, 1500);
    });
  }

  /* ---------- CART SYSTEM ---------- */
  const cart = [];
  const savedVideos = [];
  const orders = [];
  const cartBadge = document.querySelector('.sc-cart-badge');
  const cartPriceEl = document.querySelector('.sc-cart-item span:last-child');

  function updateCartUI() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    if (cartBadge) {
      cartBadge.textContent = totalQty;
      cartBadge.style.transform = 'scale(1.4)';
      setTimeout(() => cartBadge.style.transform = '', 200);
    }
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    if (cartPriceEl) cartPriceEl.textContent = '$' + total.toFixed(2);
    renderCartDrawer();
  }

  function addToCart(name, price, img) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({name, price: parseFloat(price)||0, img: img||'', qty:1});
    }
    updateCartUI();
    showToast(name, img);
  }

  /* ---------- TOAST NOTIFICATIONS ---------- */
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);

  function showToast(name, img) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      ${img ? `<img src="${img}" alt="" class="toast-img">` : '<div class="toast-img toast-img-placeholder"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0071dc" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div>'}
      <span class="toast-text"><strong>Added to cart</strong>${name}</span>
      <button class="toast-view">View Cart</button>
    `;
    toastContainer.appendChild(toast);
    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('show'));
    toast.querySelector('.toast-view').addEventListener('click', () => {
      toast.remove();
      cartDrawer.classList.add('open');
    });
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function removeFromCart(idx) {
    cart.splice(idx, 1);
    updateCartUI();
  }

  function changeQty(idx, delta) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI();
  }

  // Cart Drawer
  const cartDrawer = document.createElement('div');
  cartDrawer.className = 'cart-drawer';
  cartDrawer.innerHTML = `<div class="cart-drawer-bg"></div><div class="cart-drawer-panel"><div class="cart-drawer-head"><h3>Your Cart</h3><button class="cart-drawer-close">&times;</button></div><div class="cart-drawer-items"></div><div class="cart-drawer-footer"><div class="cart-drawer-total"><span>Subtotal</span><strong>$0.00</strong></div><button class="cart-drawer-checkout">Checkout</button></div></div>`;
  document.body.appendChild(cartDrawer);
  cartDrawer.querySelector('.cart-drawer-bg').addEventListener('click', () => cartDrawer.classList.remove('open'));
  cartDrawer.querySelector('.cart-drawer-close').addEventListener('click', () => cartDrawer.classList.remove('open'));
  cartDrawer.querySelector('.cart-drawer-checkout').addEventListener('click', () => {
    if (cart.length === 0) return;
    cartDrawer.classList.remove('open');
    showCheckout();
  });

  function renderCartDrawer() {
    const list = cartDrawer.querySelector('.cart-drawer-items');
    const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    cartDrawer.querySelector('.cart-drawer-total strong').textContent = '$' + total.toFixed(2);
    if (cart.length === 0) {
      list.innerHTML = '<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#babbbe" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><p>Your cart is empty</p></div>';
      return;
    }
    list.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        ${item.img ? `<img class="cart-item-img" src="${item.img}" alt="">` : '<div class="cart-item-img cart-item-placeholder"></div>'}
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
          <div class="cart-qty">
            <button class="cart-qty-btn" data-idx="${i}" data-delta="-1">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" data-idx="${i}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-idx="${i}">&times;</button>
      </div>
    `).join('');
    list.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(+btn.dataset.idx));
    });
    list.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => changeQty(+btn.dataset.idx, +btn.dataset.delta));
    });
  }
  renderCartDrawer();

  // Open cart on cart icon click
  document.querySelector('.sc-cart-item')?.addEventListener('click', e => {
    e.preventDefault();
    cartDrawer.classList.add('open');
  });

  /* ---------- ADD TO CART (product carousel) ---------- */
  document.querySelectorAll('.sc-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prod = btn.closest('.sc-product');
      const name = prod?.dataset.pname || 'Item';
      const price = prod?.dataset.pprice || '0';
      const img = prod?.dataset.pimg || '';
      addToCart(name, price, img);
      btn.textContent = '✓';
      btn.style.background = '#2a8703';
      setTimeout(() => { btn.textContent = 'Add'; btn.style.background = ''; }, 1200);
    });
  });

  /* ---------- ACCOUNT PAGE ---------- */
  const accountOverlay = document.createElement('div');
  accountOverlay.className = 'account-page';
  accountOverlay.innerHTML = `
    <div class="account-page-bg"></div>
    <div class="account-panel">
      <div class="account-head">
        <h2>My Account</h2>
        <button class="account-close">&times;</button>
      </div>
      <div class="account-body">
        <div class="account-profile">
          <div class="account-avatar">GG</div>
          <div><strong>Gage Gaskill</strong><span>Plus Member since 2023</span></div>
        </div>
        <div class="account-nav">
          <button class="account-nav-btn active" data-tab="saved">Saved Videos</button>
          <button class="account-nav-btn" data-tab="orders">Orders</button>
          <button class="account-nav-btn" data-tab="settings">Settings</button>
        </div>
        <div class="account-tab" id="tab-saved">
          <div class="account-saved-list"></div>
        </div>
        <div class="account-tab" id="tab-orders" style="display:none">
          <div class="account-empty"><p>No recent orders</p><span>Items you purchase will appear here.</span></div>
        </div>
        <div class="account-tab" id="tab-settings" style="display:none">
          <div class="account-settings-list">
            <div class="account-setting"><span>Notifications</span><label class="toggle"><input type="checkbox" checked id="toggle-notif"><span class="toggle-slider"></span></label></div>
            <div class="account-setting"><span>Email Promotions</span><label class="toggle"><input type="checkbox" checked id="toggle-email"><span class="toggle-slider"></span></label></div>
            <div class="account-setting"><span>Dark Mode</span><label class="toggle"><input type="checkbox" id="toggle-dark"><span class="toggle-slider"></span></label></div>
            <div class="account-setting"><span>Club Location</span><button class="account-location-btn" id="club-location-btn">Fayetteville #4739</button></div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(accountOverlay);
  accountOverlay.querySelector('.account-page-bg').addEventListener('click', () => accountOverlay.classList.remove('open'));
  accountOverlay.querySelector('.account-close').addEventListener('click', () => accountOverlay.classList.remove('open'));

  // Tab switching
  accountOverlay.querySelectorAll('.account-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      accountOverlay.querySelectorAll('.account-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      accountOverlay.querySelectorAll('.account-tab').forEach(t => t.style.display = 'none');
      accountOverlay.querySelector('#tab-' + btn.dataset.tab).style.display = '';
    });
  });

  // Dark Mode toggle
  accountOverlay.querySelector('#toggle-dark')?.addEventListener('change', e => {
    document.body.classList.toggle('dark-mode', e.target.checked);
  });

  // Club location picker
  const clubLocations = [
    {name:'Fayetteville',num:'#4739',addr:'3081 N College Ave, Fayetteville, AR 72703'},
    {name:'Rogers',num:'#8152',addr:'2110 W Walnut St, Rogers, AR 72756'},
    {name:'Fort Smith',num:'#4738',addr:'8301 Rogers Ave, Fort Smith, AR 72903'},
    {name:'Bentonville',num:'#6344',addr:'801 SE Walton Blvd, Bentonville, AR 72712'},
    {name:'Springdale',num:'#6482',addr:'4870 Elm Springs Rd, Springdale, AR 72762'},
  ];
  let currentClub = clubLocations[0];

  function updateClubDisplay() {
    const btn = accountOverlay.querySelector('#club-location-btn');
    if (btn) btn.textContent = currentClub.name + ' ' + currentClub.num;
    // Update header pill too
    const locLabel = document.querySelector('.sc-loc-label');
    const locDetail = document.querySelector('.sc-loc-detail');
    if (locLabel) locLabel.textContent = currentClub.name + ' ' + currentClub.num;
    if (locDetail) locDetail.textContent = currentClub.addr;
  }
  updateClubDisplay();

  accountOverlay.querySelector('#club-location-btn')?.addEventListener('click', () => {
    // Show club picker
    if (document.querySelector('.club-picker')) return;
    const picker = document.createElement('div');
    picker.className = 'club-picker';
    picker.innerHTML = `
      <div class="club-picker-head"><h4>Select Your Club</h4></div>
      ${clubLocations.map((c, i) => `
        <button class="club-picker-item${c.num === currentClub.num ? ' active' : ''}" data-idx="${i}">
          <div><strong>${c.name} ${c.num}</strong><span>${c.addr}</span></div>
          ${c.num === currentClub.num ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0071dc" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
        </button>
      `).join('')}
    `;
    accountOverlay.querySelector('#tab-settings').appendChild(picker);
    picker.querySelectorAll('.club-picker-item').forEach(btn => {
      btn.addEventListener('click', () => {
        currentClub = clubLocations[+btn.dataset.idx];
        updateClubDisplay();
        picker.remove();
      });
    });
  });

  function renderOrders() {
    const container = accountOverlay.querySelector('#tab-orders');
    if (orders.length === 0) {
      container.innerHTML = '<div class="account-empty"><p>No recent orders</p><span>Items you purchase will appear here.</span></div>';
      return;
    }
    container.innerHTML = orders.map(o => `
      <div class="account-order">
        <div class="account-order-head">
          <div><strong>${o.id}</strong><span>${o.date}</span></div>
          <span class="account-order-total">$${o.total.toFixed(2)}</span>
        </div>
        <div class="account-order-items">
          ${o.items.map(item => `
            <div class="account-order-item">
              ${item.img ? `<img src="${item.img}" alt="" class="account-order-img">` : '<div class="account-order-img"></div>'}
              <span>${item.name}</span>
              <strong>$${item.price.toFixed(2)}</strong>
            </div>
          `).join('')}
        </div>
        <div class="account-order-foot">
          <span>Pickup at ${o.club}</span>
        </div>
      </div>
    `).join('');
  }

  function renderSavedVideos() {
    const list = accountOverlay.querySelector('.account-saved-list');
    if (savedVideos.length === 0) {
      list.innerHTML = '<div class="account-empty"><p>No saved videos yet</p><span>Tap the bookmark icon on any Member Moment to save it here.</span></div>';
      return;
    }
    list.innerHTML = savedVideos.map(v => `
      <div class="account-saved-item" data-id="${v.id}">
        <div class="account-saved-thumb" style="background:#111">
          ${v.src ? `<img src="${v.src.replace('.mp4','.jpeg')}" alt="">` : `<div style="background:${v.bg};width:100%;height:100%;border-radius:8px"></div>`}
          <span class="account-saved-dur">${v.dur}</span>
        </div>
        <div class="account-saved-info">
          <span class="account-saved-title">${v.title}</span>
          <span class="account-saved-author">${v.author}</span>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('.account-saved-item').forEach(item => {
      item.addEventListener('click', () => {
        accountOverlay.classList.remove('open');
        openModal(+item.dataset.id);
      });
    });
  }

  // Open account on account pill click
  document.querySelector('.sc-account-pill')?.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    renderSavedVideos();
    renderOrders();
    accountOverlay.classList.add('open');
  });

  /* ---------- HERO BANNER CAROUSEL ---------- */
  const heroSlider = document.getElementById('heroSlider');
  const heroDots = document.getElementById('heroDots');
  if (heroSlider && heroDots) {
    const slides = heroSlider.querySelectorAll('.sc-hero-card');
    const dots = heroDots.querySelectorAll('.sc-dot');
    let currentSlide = 0;
    let heroInterval;

    function goToSlide(idx) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = idx % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function startHeroAuto() {
      heroInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(heroInterval);
        goToSlide(+dot.dataset.slide);
        startHeroAuto();
      });
    });

    startHeroAuto();
  }

  /* ---------- SHARE - COPY TO CLIPBOARD ---------- */
  // Override share handlers to actually copy a URL
  function bindShareReal(container) {
    container.querySelectorAll('.share-btn').forEach(btn => {
      btn.replaceWith(btn.cloneNode(true)); // remove old listeners
    });
    container.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const item = btn.closest('.vfeed-item');
        const vid = item ? videos.find(v => v.id === +item.dataset.id) : null;
        const text = vid ? `Check out "${vid.title}" by ${vid.author} on Sam's Club Member Moments!` : 'Check out Sam\'s Club Member Moments!';
        navigator.clipboard.writeText(text).then(() => {
          const sp = btn.querySelector('span');
          sp.textContent = 'Copied!';
          setTimeout(() => sp.textContent = 'Share', 1500);
        }).catch(() => {
          const sp = btn.querySelector('span');
          sp.textContent = 'Copied!';
          setTimeout(() => sp.textContent = 'Share', 1500);
        });
      });
    });
  }

  // Patch into bindFeedEvents - wrap original
  const origBindFeed = bindFeedEvents;
  // We already called bindFeedEvents from openModal, so let's patch the share part
  // by adding a MutationObserver on feed
  const feedObs = new MutationObserver(() => {
    if (feed.children.length > 0) bindShareReal(feed);
  });
  feedObs.observe(feed, {childList: true});

  /* ---------- QUANTITY IN CART ---------- */
  // Enhance cart items with qty +/- controls
  const origRenderCartDrawer = renderCartDrawer;

});
