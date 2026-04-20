/* =============================================
   SAM'S CLUB - JS
   Member Moments + page interactivity
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- VIDEO DATA ---------- */
  const videos = [
    { id:1, title:"My top 3 Sam's Club staples with price per serving", author:"@george.kamel", av:"G", abg:"#f97316", bg:"#1a1a1a", src:"images/moment1.mp4", dur:"0:47", views:"2.3M", likes:187200, products:[
      {name:"Member's Mark Chicken Pad Thai Frozen Meal",price:"$14.98",pricef:14.98,img:"images/products_real/chicken-pad-thai.jpg"},
      {name:"Member's Mark Cauliflower Crust Cheese Pizza, 2 pk",price:"$14.98",pricef:14.98,img:"images/products_real/cauliflower-pizza.jpg"},
      {name:"La Croix Sparkling Water Variety Pack, 24 ct",price:"$8.98",pricef:8.98,img:"images/products_real/lacroix-variety.jpg"}
    ], comments:[
      {u:"LindsayP",a:"L",bg:"#f59e0b",t:"The price per serving breakdown is so helpful!",time:"2h"},
      {u:"KarenS",a:"K",bg:"#0ea5e9",t:"$13.98 for that much chicken? Going today",time:"5h"},
      {u:"MarkD",a:"M",bg:"#10b981",t:"That cauliflower pizza is legit good",time:"3h"},
      {u:"DanielR",a:"D",bg:"#f97316",t:"Finally someone doing real math on grocery prices",time:"1h"},
      {u:"MeganT",a:"M",bg:"#ec4899",t:"I do the same thing every month, saves me hundreds",time:"4h"},
      {u:"JamieP",a:"J",bg:"#fb923c",t:"The pad thai frozen meal is a game changer for busy nights",time:"6h"},
      {u:"BrianK",a:"B",bg:"#5b6abf",t:"Just joined Plus, heading here today",time:"2h"},
      {u:"SophieW",a:"S",bg:"#6366f1",t:"Please do this for Costco next!",time:"7h"},
      {u:"ErinM",a:"E",bg:"#f43f5e",t:"Your videos made me join Sam's Club",time:"3d"},
      {u:"CharlesH",a:"C",bg:"#3b82f6",t:"Wife and I do this breakdown monthly now",time:"1d"},
      {u:"NicoleB",a:"N",bg:"#8b5cf6",t:"That chicken freezes great too, tip",time:"2d"},
      {u:"TomG",a:"T",bg:"#84cc16",t:"This is why I follow. Pure value.",time:"5h"},
      {u:"AshleyR",a:"A",bg:"#22c55e",t:"Adding these to my list for weekend",time:"8h"},
      {u:"MichaelJ",a:"M",bg:"#a855f7",t:"How long does the chicken last in your fridge?",time:"11h"},
      {u:"RachelF",a:"R",bg:"#db2777",t:"My family of 5 basically lives off these staples",time:"1d"},
      {u:"KevinO",a:"K",bg:"#06b6d4",t:"Per serving math is the ultimate flex",time:"2d"},
      {u:"LauraS",a:"L",bg:"#f59e0b",t:"The pizza crust is lower carb too btw",time:"6h"},
      {u:"JennyW",a:"J",bg:"#5b6abf",t:"Okay I'm convinced, pickup order going in",time:"4h"},
      {u:"PaulC",a:"P",bg:"#3b82f6",t:"Man George making finance cool with groceries",time:"1d"},
      {u:"GregM",a:"G",bg:"#a855f7",t:"This is the only grocery content I need",time:"3h"},
      {u:"StephenR",a:"S",bg:"#0071dc",t:"Gonna start my own version, thank you",time:"2d"},
      {u:"OliviaN",a:"O",bg:"#ec4899",t:"Sam's Club app makes this even faster. Highly rec.",time:"1h"}
    ]},
    { id:2, title:"Sam's Club grocery haul - healthy snack finds!", author:"@crunchymom", av:"K", abg:"#5b6abf", bg:"#1a1a1a", src:"images/moment2.mp4", dur:"0:32", views:"1.8M", likes:142100, products:[
      {name:"One Mighty Mill Stone Milled Organic Sourdough",price:"$6.98",pricef:6.98,img:"images/products_real/sourdough-bread.jpg"},
      {name:"Spindrift Sparkling Water Variety Pack, 30 ct",price:"$15.98",pricef:15.98,img:"images/products_real/spindrift.jpg"},
      {name:"Naturally More Organic Creamy Peanut Butter, 2 pk",price:"$13.98",pricef:13.98,img:"images/products_real/peanut-butter-natural.jpg"},
      {name:"Goodles Cheddy Mac & Shella Good Mac & Cheese, 8 pk",price:"$11.98",pricef:11.98,img:"images/products_real/goodles.jpg"},
      {name:"Sun Date Organic Medjool Dates, 2 lbs",price:"$9.98",pricef:9.98,img:"images/products_real/medjool-dates.jpg"},
      {name:"Tropical Fields Organic Crispy Coconut Rolls",price:"$9.98",pricef:9.98,img:"images/products_real/coconut-rolls.jpg"},
      {name:"Solely Organic Fruit Jerky Variety, 16 pk",price:"$13.98",pricef:13.98,img:"images/products_real/solely-jerky.jpg"},
      {name:"Jackson's Sweet Potato Chips, Sea Salt, 4 pk",price:"$8.98",pricef:8.98,img:"images/products_real/jacksons-chips.jpg"},
      {name:"Simple Mills Almond Flour Crackers, Sea Salt, 2 pk",price:"$10.98",pricef:10.98,img:"images/products_real/simple-mills-crackers.jpg"},
      {name:"Poppi Cranberry Fizz Prebiotic Soda, 15 pk",price:"$21.98",pricef:21.98,img:"images/products_real/poppi-soda.jpg"}
    ], comments:[
      {u:"SarahL",a:"S",bg:"#f43f5e",t:"The Spindrift variety pack is amazing!",time:"2h"},
      {u:"MarkD",a:"M",bg:"#3b82f6",t:"Goodles is the best mac & cheese we've tried",time:"3h"},
      {u:"AshleyR",a:"A",bg:"#22c55e",t:"Adding all of this to my list for Saturday",time:"5h"},
      {u:"EmilyP",a:"E",bg:"#ec4899",t:"The coconut rolls are addicting, kids love them",time:"1h"},
      {u:"JessicaM",a:"J",bg:"#fb923c",t:"How many does the Spindrift 30 pack last your family?",time:"4h"},
      {u:"KatieB",a:"K",bg:"#0ea5e9",t:"Love this type of haul - real healthy mom stuff",time:"6h"},
      {u:"RyanN",a:"R",bg:"#db2777",t:"Wife sent me this video, now she wants Goodles",time:"2h"},
      {u:"MeganK",a:"M",bg:"#10b981",t:"These are all in my cart as we speak",time:"30m"},
      {u:"ChelseaO",a:"C",bg:"#3b82f6",t:"Finally a haul that isn't 90% junk food",time:"8h"},
      {u:"TinaR",a:"T",bg:"#84cc16",t:"My toddler literally eats these coconut rolls daily",time:"1d"},
      {u:"BrookeS",a:"B",bg:"#a855f7",t:"Okay the Spindrift grapefruit is tier S",time:"5h"},
      {u:"AlexH",a:"A",bg:"#0071dc",t:"Any protein recs from Sam's?",time:"3h"},
      {u:"DanaL",a:"D",bg:"#f59e0b",t:"The raspberry lime Spindrift is everything",time:"7h"},
      {u:"GregP",a:"G",bg:"#6366f1",t:"Just joined Sam's Club because of these videos",time:"2d"},
      {u:"OliviaT",a:"O",bg:"#ec4899",t:"Bought the Goodles after your last post, kids approved",time:"1d"},
      {u:"VictoriaM",a:"V",bg:"#fb923c",t:"Crunchy mom squad rise up",time:"4h"},
      {u:"NicoleS",a:"N",bg:"#8b5cf6",t:"Going this weekend, thanks for the list",time:"2h"},
      {u:"HannahB",a:"H",bg:"#f43f5e",t:"Wait those cauli crust pizzas are here too right?",time:"5h"},
      {u:"PeterW",a:"P",bg:"#06b6d4",t:"Great stuff, gonna try the mac this week",time:"1d"},
      {u:"JennaC",a:"J",bg:"#5b6abf",t:"We just got a Sam's membership and this is gold",time:"3h"},
      {u:"MariaG",a:"M",bg:"#22c55e",t:"Sugar content on coconut rolls? Thinking for kids",time:"6h"},
      {u:"LaurenF",a:"L",bg:"#f97316",t:"Perfect timing, meal planning tonight",time:"45m"}
    ]},
    { id:3, title:"Here's everything I get at Sam's Club", author:"@caseykelly", av:"C", abg:"#3b82f6", bg:"#1a1a1a", src:"images/moment3.mp4", dur:"0:58", views:"3.1M", likes:267500, products:[
      {name:"Grass-Fed Ground Beef, 4 lb",price:"$19.98",pricef:19.98,img:"images/products_real/ground-beef-grass.jpg"},
      {name:"Member's Mark Chicken Breast, Boneless Skinless",price:"$13.98",pricef:13.98,img:"images/products_real/chicken-breast.jpg"},
      {name:"Simply Nature Organic White Corn Tortillas",price:"$5.98",pricef:5.98,img:"images/products_real/corn-tortillas.jpg"},
      {name:"Blue Diamond Oven Roasted Almonds, Lightly Salted",price:"$11.98",pricef:11.98,img:"images/products_real/blue-diamond-almonds.jpg"},
      {name:"Organic Valley Stringles String Cheese, 24 ct",price:"$12.98",pricef:12.98,img:"images/products_real/string-cheese.jpg"},
      {name:"Member's Mark Organic Peanut Butter, 40 oz",price:"$9.98",pricef:9.98,img:"images/products_real/peanut-butter-organic.jpg"},
      {name:"Organic Romaine Hearts, 6 ct",price:"$3.98",pricef:3.98,img:"images/products_real/romaine-hearts.jpg"},
      {name:"Member's Mark Pink Himalayan Salt Grinder + Peppercorn",price:"$10.98",pricef:10.98,img:"images/products_real/salt-grinder.jpg"}
    ], comments:[
      {u:"JennyW",a:"J",bg:"#5b6abf",t:"The romaine and broccoli deal is unbeatable",time:"1h"},
      {u:"DaveP",a:"D",bg:"#fb923c",t:"That grass-fed beef is such a good price",time:"2h"},
      {u:"RyanK",a:"R",bg:"#22c55e",t:"This is basically my exact cart every week",time:"4h"},
      {u:"NicoleF",a:"N",bg:"#f97316",t:"The singles cheese packs are clutch for lunches",time:"5h"},
      {u:"SarahT",a:"S",bg:"#ec4899",t:"First time watching Casey and I'm obsessed",time:"1h"},
      {u:"MikeS",a:"M",bg:"#3b82f6",t:"Bought the beef last week, best flavor ever",time:"3h"},
      {u:"LisaK",a:"L",bg:"#a855f7",t:"Can we talk about the produce quality though",time:"30m"},
      {u:"BryanO",a:"B",bg:"#0ea5e9",t:"Romaine hearts for $3.98 - incredible",time:"6h"},
      {u:"HollyM",a:"H",bg:"#f43f5e",t:"Doing this exact haul tomorrow, thank you",time:"2h"},
      {u:"EricR",a:"E",bg:"#10b981",t:"The whole family shops off your lists now",time:"1d"},
      {u:"JakeD",a:"J",bg:"#fb923c",t:"You pick the best staples every time",time:"8h"},
      {u:"StephaniP",a:"S",bg:"#db2777",t:"Sent this to my husband as my shopping list",time:"4h"},
      {u:"DerekF",a:"D",bg:"#f59e0b",t:"Sam's Club or Costco? You always pick Sam's?",time:"7h"},
      {u:"MariaC",a:"M",bg:"#84cc16",t:"Been a member 12 years. Agree with every pick.",time:"2d"},
      {u:"SophiaL",a:"S",bg:"#6366f1",t:"You need your own cookbook at this point",time:"1d"},
      {u:"TanyaB",a:"T",bg:"#0071dc",t:"Switching from Costco after this series",time:"9h"},
      {u:"ChrisN",a:"C",bg:"#8b5cf6",t:"My wife made me watch. Now I get it.",time:"3h"},
      {u:"BethanyH",a:"B",bg:"#ec4899",t:"What freezer bags do you use for the beef?",time:"45m"},
      {u:"JustinL",a:"J",bg:"#f43f5e",t:"$19.98 for 4lb grass-fed? Not possible elsewhere",time:"6h"},
      {u:"KelsieG",a:"K",bg:"#22c55e",t:"Love the energy, love the prices. Subbed.",time:"2h"},
      {u:"BrianM",a:"B",bg:"#fb923c",t:"Okay Casey fanboy here. Never miss a haul.",time:"1d"},
      {u:"AmandaW",a:"A",bg:"#0ea5e9",t:"The bakery section is actually next level too",time:"5h"}
    ]},
    { id:4, title:"Sam's Club new active wear for men", author:"@samsclubmama", av:"M", abg:"#22c55e", bg:"#1a1a1a", src:"images/moment4.mp4", dur:"1:05", views:"1.2M", likes:108400, products:[
      {name:"Outdoor Voices CloudKnit Crew Tee, Men's Olive",price:"$14.98",pricef:14.98,img:"images/products_real/tee-olive.jpg"},
      {name:"Outdoor Voices CloudKnit Crew Tee, Men's Navy",price:"$14.98",pricef:14.98,img:"images/products_real/tee-navy.jpg"},
      {name:"Outdoor Voices CloudKnit Crew Tee, Men's Cream",price:"$14.98",pricef:14.98,img:"images/products_real/tee-cream.jpg"},
      {name:"Outdoor Voices CloudKnit Crew Tee, Men's Black",price:"$14.98",pricef:14.98,img:"images/products_real/tee-black.jpg"},
      {name:"Outdoor Voices Athletic Shorts, Men's Tan",price:"$16.98",pricef:16.98,img:"images/products_real/shorts-tan.jpg"},
      {name:"Outdoor Voices Athletic Shorts, Men's Navy",price:"$16.98",pricef:16.98,img:"images/products_real/shorts-navy.jpg"},
      {name:"Outdoor Voices Athletic Shorts, Men's Green",price:"$16.98",pricef:16.98,img:"images/products_real/shorts-green.jpg"},
      {name:"Outdoor Voices Zip-Pocket Training Pants, Men's",price:"$22.98",pricef:22.98,img:"images/products_real/training-pants.jpg"}
    ], comments:[
      {u:"ChrisB",a:"C",bg:"#a855f7",t:"Those CloudKnit tees look super soft!",time:"30m"},
      {u:"TinaM",a:"T",bg:"#ec4899",t:"What size did you grab? Do they run big?",time:"1h"},
      {u:"JordanP",a:"J",bg:"#3b82f6",t:"Been waiting for Sam's to do activewear right",time:"2h"},
      {u:"DanielO",a:"D",bg:"#0ea5e9",t:"Picking these up for my husband this weekend",time:"3h"},
      {u:"KevinR",a:"K",bg:"#22c55e",t:"The price point makes these a no brainer",time:"4h"},
      {u:"MeganS",a:"M",bg:"#f97316",t:"My husband lives in these now lol",time:"1d"},
      {u:"NickT",a:"N",bg:"#fb923c",t:"CloudKnit > Lululemon in my opinion",time:"5h"},
      {u:"ClaudiaB",a:"C",bg:"#db2777",t:"Do they hold up in the wash?",time:"6h"},
      {u:"TylerM",a:"T",bg:"#84cc16",t:"$14.98 for a shirt this nice is wild",time:"2h"},
      {u:"HeatherK",a:"H",bg:"#f43f5e",t:"Just grabbed two for my brother's birthday",time:"45m"},
      {u:"AndyP",a:"A",bg:"#6366f1",t:"Sam's Club is quietly having a fashion moment",time:"1d"},
      {u:"JustinC",a:"J",bg:"#a855f7",t:"Need the black one in all sizes",time:"3h"},
      {u:"RachelD",a:"R",bg:"#ec4899",t:"This whole line is solid, kids got sweatpants too",time:"8h"},
      {u:"SteveF",a:"S",bg:"#f59e0b",t:"They were sold out at mine - link in bio?",time:"12h"},
      {u:"KevinJ",a:"K",bg:"#3b82f6",t:"Best men's tee under $20 easily",time:"1d"},
      {u:"SarahO",a:"S",bg:"#fb923c",t:"Husband tested, husband approved",time:"4h"},
      {u:"MikaylaR",a:"M",bg:"#0ea5e9",t:"Did they have joggers too?",time:"6h"},
      {u:"DrewL",a:"D",bg:"#22c55e",t:"Already on my third CloudKnit - they're great",time:"2h"},
      {u:"JenniferB",a:"J",bg:"#db2777",t:"Do they have women's versions coming?",time:"30m"},
      {u:"MichaelT",a:"M",bg:"#8b5cf6",t:"Perfect for the gym, perfect for lounging",time:"1d"},
      {u:"AlexP",a:"A",bg:"#0071dc",t:"Mama always finds the best stuff",time:"5h"},
      {u:"VictoriaG",a:"V",bg:"#f97316",t:"Stocking up, my husband wears them daily",time:"1h"}
    ]},
    { id:5, title:"Everything I wish I knew before becoming a content creator", author:"@sams.jen", av:"S", abg:"#f97316", bg:"#1a1a1a", src:"images/moment5.mp4", dur:"0:55", views:"1.5M", likes:129300, comments:[
      {u:"AmyH",a:"A",bg:"#3b82f6",t:"Love this series! So helpful for beginners",time:"1h"},
      {u:"BethR",a:"B",bg:"#a855f7",t:"The mindset tips are everything",time:"3h"},
      {u:"TomW",a:"T",bg:"#22c55e",t:"Part 4 when??",time:"4h"},
      {u:"CarlaF",a:"C",bg:"#ec4899",t:"This advice saved me from quitting last year",time:"2h"},
      {u:"PeterO",a:"P",bg:"#fb923c",t:"Saving this and rewatching weekly",time:"30m"},
      {u:"DianaM",a:"D",bg:"#6366f1",t:"Need every aspiring creator to see this",time:"5h"},
      {u:"JasonR",a:"J",bg:"#f43f5e",t:"Thank you for being honest about the hard parts",time:"1d"},
      {u:"MichelleK",a:"M",bg:"#0ea5e9",t:"The consistency tip hit hard",time:"3h"},
      {u:"BrandonS",a:"B",bg:"#84cc16",t:"Real talk from a real creator",time:"6h"},
      {u:"LauraN",a:"L",bg:"#db2777",t:"Sending to my sister who just started",time:"2h"},
      {u:"NikolasP",a:"N",bg:"#f59e0b",t:"The authenticity point is so underrated",time:"8h"},
      {u:"AshlynT",a:"A",bg:"#22c55e",t:"Joined Sam's Creator Club because of you",time:"1d"},
      {u:"GarrettH",a:"G",bg:"#a855f7",t:"More like this, less of the fake content",time:"4h"},
      {u:"MollyC",a:"M",bg:"#3b82f6",t:"Thank you for the mic drop on comparison",time:"45m"},
      {u:"RileyP",a:"R",bg:"#fb923c",t:"The money part nobody ever talks about!",time:"1d"},
      {u:"OliviaS",a:"O",bg:"#ec4899",t:"Watched this 3 times. Notes taken.",time:"2h"},
      {u:"DavidM",a:"D",bg:"#6366f1",t:"Your content always feels grounded",time:"5h"},
      {u:"KellyB",a:"K",bg:"#0071dc",t:"What camera do you shoot on?",time:"30m"},
      {u:"AdamR",a:"A",bg:"#f43f5e",t:"Bookmarked forever",time:"6h"},
      {u:"HannahG",a:"H",bg:"#8b5cf6",t:"Creator Club invite was the best thing this year",time:"3h"},
      {u:"ConnorJ",a:"C",bg:"#fb923c",t:"Practical advice that actually works",time:"1d"},
      {u:"MeganL",a:"M",bg:"#22c55e",t:"Thank you for being transparent about this",time:"4h"}
    ]},
    { id:6, title:"My first SXSW panel - Sam's Club Creator Club!", author:"@sams.jen", av:"S", abg:"#a855f7", bg:"#1a1a1a", src:"images/moment6.mp4", dur:"0:38", views:"1.1M", likes:115800, comments:[
      {u:"JasonM",a:"J",bg:"#f43f5e",t:"This is so cool! How do you join Creator Club?",time:"45m"},
      {u:"MelissaG",a:"M",bg:"#5b6abf",t:"SXSW looked amazing this year",time:"2h"},
      {u:"DougP",a:"D",bg:"#fb923c",t:"Congrats on the panel - well deserved!",time:"1h"},
      {u:"TiffanyR",a:"T",bg:"#ec4899",t:"The Creator Club has been a game changer",time:"3h"},
      {u:"MarkL",a:"M",bg:"#3b82f6",t:"Representing Sam's Club at SXSW is huge",time:"4h"},
      {u:"AlisonB",a:"A",bg:"#a855f7",t:"So proud of you!! Amazing milestone",time:"30m"},
      {u:"PaulS",a:"P",bg:"#22c55e",t:"Wish I could have attended, what was your biggest takeaway?",time:"5h"},
      {u:"RachelH",a:"R",bg:"#db2777",t:"Loved the panel! Such insightful convo",time:"2h"},
      {u:"DerekM",a:"D",bg:"#f59e0b",t:"SXSW Creator Panels > everything else",time:"6h"},
      {u:"BriannaT",a:"B",bg:"#0ea5e9",t:"Please do a recap of the full panel",time:"1h"},
      {u:"EricC",a:"E",bg:"#84cc16",t:"You crushed it, saw the Sam's booth online",time:"8h"},
      {u:"SashaV",a:"S",bg:"#6366f1",t:"Creator Club info please!",time:"3h"},
      {u:"NatalieP",a:"N",bg:"#fb923c",t:"This is what brand partnerships should look like",time:"1d"},
      {u:"ChrisF",a:"C",bg:"#0071dc",t:"Sam's Club Creator Club is elite",time:"4h"},
      {u:"EmilyR",a:"E",bg:"#ec4899",t:"Brava! Can't wait for the next one",time:"2h"},
      {u:"MitchellW",a:"M",bg:"#a855f7",t:"That lineup was stacked",time:"7h"},
      {u:"JennaK",a:"J",bg:"#f43f5e",t:"Saw the coverage - you all killed it",time:"5h"},
      {u:"AaronL",a:"A",bg:"#22c55e",t:"Congrats on your first panel, many more to come",time:"1d"},
      {u:"SydneyB",a:"S",bg:"#db2777",t:"Inspiration. Pure inspiration.",time:"6h"},
      {u:"KendraN",a:"K",bg:"#8b5cf6",t:"How do I apply to Creator Club?",time:"30m"},
      {u:"BrianO",a:"B",bg:"#fb923c",t:"Keep growing, rooting for you!",time:"3h"},
      {u:"HannahR",a:"H",bg:"#3b82f6",t:"Sam's Club treating their creators right",time:"1h"}
    ]},
    { id:7, title:"Sam's Club haul - paper towels, meat & more", author:"@sams.jen", av:"S", abg:"#fb923c", bg:"#1a1a1a", src:"images/moment7.mp4", dur:"1:15", views:"2.7M", likes:198600, products:[
      {name:"Member's Mark Ultra Strong Paper Towels, 15 mega rolls, 2200+ sheets",price:"$18.98",pricef:18.98,img:"images/products_real/paper-towels.jpg"},
      {name:"Ground Beef 80/20, 5 lb Value Pack",price:"$22.98",pricef:22.98,img:"images/products_real/ground-beef-grass.jpg"},
      {name:"Member's Mark Large White Eggs, 5 doz",price:"$12.78",pricef:12.78,img:"images/products_real/eggs-dozen.jpg"},
      {name:"Member's Mark Vitamin D Whole Milk, 1 gal",price:"$3.98",pricef:3.98,img:"images/products_real/whole-milk.jpg"},
      {name:"Member's Mark Woven Wicker Laundry Hamper with Liner",price:"$49.98",pricef:49.98,img:"images/products_real/wicker-hamper.jpg"},
      {name:"Member's Mark Heavy Duty Storage Tote, Large",price:"$24.98",pricef:24.98,img:"images/products_real/storage-tote.jpg"}
    ], comments:[
      {u:"PaulC",a:"P",bg:"#3b82f6",t:"Those paper towels are the best deal in the store",time:"20m"},
      {u:"EmmaK",a:"E",bg:"#ec4899",t:"My family would LOVE this haul",time:"1h"},
      {u:"DanielR",a:"D",bg:"#22c55e",t:"That ground beef price is unbeatable!",time:"2h"},
      {u:"SophiaL",a:"S",bg:"#f97316",t:"Part 2 please!!",time:"3h"},
      {u:"JakeT",a:"J",bg:"#fb923c",t:"15 mega rolls for $18.98 is insane",time:"30m"},
      {u:"MelanieG",a:"M",bg:"#a855f7",t:"Members Mark paper towels are the real deal",time:"4h"},
      {u:"AnthonyP",a:"A",bg:"#0ea5e9",t:"Eggs 5 doz for $12.78 - how?!",time:"5h"},
      {u:"KarenB",a:"K",bg:"#db2777",t:"Stocking up this weekend based on this",time:"1d"},
      {u:"TrevorO",a:"T",bg:"#84cc16",t:"80/20 beef, 5 lb pack = best deal in freezer",time:"6h"},
      {u:"LilyR",a:"L",bg:"#f43f5e",t:"Paper towels held up through a spaghetti disaster",time:"2h"},
      {u:"BrianS",a:"B",bg:"#6366f1",t:"Mama my grocery budget loves you",time:"8h"},
      {u:"NatashaM",a:"N",bg:"#fb923c",t:"Eggs at Sam's have been fresh every time",time:"1h"},
      {u:"EdwardW",a:"E",bg:"#3b82f6",t:"Members Mark is the hidden hero brand",time:"1d"},
      {u:"GraceP",a:"G",bg:"#22c55e",t:"Buying the exact same things tomorrow",time:"3h"},
      {u:"RyanF",a:"R",bg:"#ec4899",t:"Sam's has the best meat prices period",time:"45m"},
      {u:"AnnaC",a:"A",bg:"#f59e0b",t:"Those mega rolls last me a month",time:"4h"},
      {u:"JustinH",a:"J",bg:"#a855f7",t:"Your hauls are the reason I joined Plus",time:"1d"},
      {u:"KateL",a:"K",bg:"#0071dc",t:"Need more haul videos like this!",time:"2h"},
      {u:"PatrickG",a:"P",bg:"#f43f5e",t:"Ground beef for burgers tonight, price can't be beat",time:"5h"},
      {u:"LaurenK",a:"L",bg:"#8b5cf6",t:"The true value of membership right here",time:"6h"},
      {u:"SteveR",a:"S",bg:"#db2777",t:"Eggs, beef, paper towels - the trinity",time:"30m"},
      {u:"NicholasB",a:"N",bg:"#fb923c",t:"Sam's Club hauls are my comfort scroll",time:"3h"}
    ]},
    { id:8, title:"Sam's Club associates - 43 years of memories", author:"@samsclub", av:"S", abg:"#0071dc", bg:"#1a1a1a", src:"images/moment8.mp4", dur:"0:27", views:"892K", likes:88400, comments:[
      {u:"KayleeM",a:"K",bg:"#5b6abf",t:"Juan's smile is the whole vibe of Sam's Club",time:"1h"},
      {u:"RogerT",a:"R",bg:"#f97316",t:"42 years at the same club - that is loyalty",time:"3h"},
      {u:"HeatherL",a:"H",bg:"#ec4899",t:"Happy 43rd birthday Sam's!!",time:"2h"},
      {u:"MarcusD",a:"M",bg:"#22c55e",t:"Best associates in retail period",time:"5h"},
      {u:"SueK",a:"S",bg:"#a855f7",t:"We LOVE our Fayetteville club",time:"45m"},
      {u:"JessieP",a:"J",bg:"#f43f5e",t:"Tell Juan hi from Arkansas <3",time:"6h"},
      {u:"BrianO",a:"B",bg:"#0ea5e9",t:"That birthday cake though",time:"1d"},
      {u:"AmandaT",a:"A",bg:"#fb923c",t:"Shoutout to the associates who make it a community",time:"4h"},
      {u:"WilliamC",a:"W",bg:"#84cc16",t:"Best employer in our town",time:"2d"},
      {u:"MeganR",a:"M",bg:"#db2777",t:"Juan sold me my first TV, still works",time:"3h"},
      {u:"ClaireP",a:"C",bg:"#3b82f6",t:"This made my day",time:"30m"},
      {u:"DerekH",a:"D",bg:"#f59e0b",t:"43 years strong, here for 43 more",time:"8h"},
      {u:"ElizaG",a:"E",bg:"#6366f1",t:"Sam's treats their people right",time:"1d"},
      {u:"PatriciaN",a:"P",bg:"#8b5cf6",t:"Happy birthday from a 20 year member",time:"2h"},
      {u:"NateJ",a:"N",bg:"#0071dc",t:"The blue vest crew deserves all the flowers",time:"5h"},
      {u:"StacyK",a:"S",bg:"#22c55e",t:"Proud to be a plus member",time:"1h"},
      {u:"MaxB",a:"M",bg:"#ec4899",t:"The best shopping experience comes from these folks",time:"4h"},
      {u:"OliviaT",a:"O",bg:"#f43f5e",t:"Cheers to Juan and the whole team!",time:"6h"},
      {u:"TylerS",a:"T",bg:"#a855f7",t:"Community first, always",time:"2d"},
      {u:"RachelB",a:"R",bg:"#fb923c",t:"Saving this, gave me goosebumps",time:"3h"},
      {u:"FrankL",a:"F",bg:"#06b6d4",t:"Happy 43rd!!",time:"1h"},
      {u:"ShawnaK",a:"S",bg:"#db2777",t:"Love seeing the real people behind the club",time:"5h"}
    ]},
    { id:9, title:"Fun new finds at Sam's Club this week", author:"@samsclubfavorites", av:"F", abg:"#ec4899", bg:"#1a1a1a", src:"images/moment9.mp4", dur:"0:18", views:"1.6M", likes:134800, products:[
      {name:"4-in-1 Plush Pet Bag",price:"$24.98",pricef:24.98,img:"images/products_real/plush-pet-bag.jpg"},
      {name:"Hello Kitty Peeps Plush",price:"$32.98",pricef:32.98,img:"images/products_real/peeps-plush.jpg"},
      {name:"M&M's Honey Roasted Peanut, 26 oz",price:"$10.48",pricef:10.48,img:"images/products_real/mm-honey-peanut.jpg"},
      {name:"Spring Cutout Cookies, 15 ct",price:"$10.98",pricef:10.98,img:"images/products_real/spring-cookies.jpg"}
    ], comments:[
      {u:"BrookeM",a:"B",bg:"#ec4899",t:"The plush pet bags are adorable",time:"1h"},
      {u:"JasmineK",a:"J",bg:"#5b6abf",t:"Taking my daughter tomorrow for the Peeps plush",time:"2h"},
      {u:"TarynL",a:"T",bg:"#f97316",t:"Honey roasted M&Ms are criminally underrated",time:"30m"},
      {u:"MeganC",a:"M",bg:"#22c55e",t:"Spring cookies look so cute",time:"3h"},
      {u:"AnnieW",a:"A",bg:"#a855f7",t:"Why is the pet bag $24.98 that's a steal",time:"4h"},
      {u:"DaniG",a:"D",bg:"#f43f5e",t:"Going this weekend for all of these",time:"5h"},
      {u:"BlakeS",a:"B",bg:"#0ea5e9",t:"Sam's always has the best random finds",time:"6h"},
      {u:"EmilyR",a:"E",bg:"#db2777",t:"Hello Kitty fans assemble",time:"2h"},
      {u:"JuliaF",a:"J",bg:"#84cc16",t:"That bag for $24.98 is unreal",time:"1d"},
      {u:"LaurenO",a:"L",bg:"#fb923c",t:"I love the weekly finds series",time:"3h"},
      {u:"SarahP",a:"S",bg:"#6366f1",t:"Getting the cookies for Easter brunch",time:"45m"},
      {u:"ChloeN",a:"C",bg:"#8b5cf6",t:"Need that Peeps plush in my life",time:"2h"},
      {u:"NataliaK",a:"N",bg:"#f59e0b",t:"Sam's is winning the spring aesthetic",time:"5h"},
      {u:"RebeccaH",a:"R",bg:"#3b82f6",t:"Cookies sold out at mine, heads up",time:"1h"},
      {u:"AshtonP",a:"A",bg:"#ec4899",t:"Adding all of these to my list right now",time:"4h"},
      {u:"CarolineE",a:"C",bg:"#22c55e",t:"Honey roasted M&Ms > everything",time:"2d"},
      {u:"MirandaB",a:"M",bg:"#a855f7",t:"The plush pet bag could also be a kids gift",time:"6h"},
      {u:"TobyR",a:"T",bg:"#db2777",t:"That is such a good price for cookies",time:"30m"},
      {u:"KristenJ",a:"K",bg:"#f43f5e",t:"Sam's nailing the cute factor lately",time:"3h"},
      {u:"MarkT",a:"M",bg:"#0071dc",t:"Instant add, love these roundups",time:"1d"},
      {u:"JennaD",a:"J",bg:"#fb923c",t:"Members Mark cookies are fresh too",time:"5h"},
      {u:"NicoleG",a:"N",bg:"#06b6d4",t:"Easter week Sam's run confirmed",time:"2h"}
    ]},
    { id:10, title:"5 brand-new items at Sam's Club", author:"@samsclublovers", av:"L", abg:"#a855f7", bg:"#1a1a1a", src:"images/moment10.mp4", dur:"0:20", views:"2.1M", likes:167300, products:[
      {name:"Tandy Gummy Bears, 12 pk fun size",price:"$14.98",pricef:14.98,img:"images/products_real/gummy-bears.jpg"},
      {name:"Life Savers Sparkling Ice, Limited Edition",price:"$17.98",pricef:17.98,img:"images/products_real/sparkling-ice.jpg"},
      {name:"Member's Mark Oversized Inflatable Bow Float",price:"$19.84",pricef:19.84,img:"images/products_real/pool-float.jpg"},
      {name:"Hi-Chew Fantasy Mix Candy",price:"$9.97",pricef:9.97,img:"images/products_real/hichew-fantasy.jpg"}
    ], comments:[
      {u:"NoahK",a:"N",bg:"#3b82f6",t:"Tandy gummy bears are so good no dyes",time:"1h"},
      {u:"RileyC",a:"R",bg:"#fb923c",t:"Life Savers sparkling ice?? take my money",time:"2h"},
      {u:"PaigeL",a:"P",bg:"#ec4899",t:"Pool float season starting strong",time:"3h"},
      {u:"HaileyM",a:"H",bg:"#a855f7",t:"Hi-Chew Fantasy Mix is unreal",time:"30m"},
      {u:"DanielT",a:"D",bg:"#22c55e",t:"Bow float is the cutest, ordering today",time:"4h"},
      {u:"TaylorK",a:"T",bg:"#f43f5e",t:"$19.84 for that pool float is wild",time:"5h"},
      {u:"IsabellaS",a:"I",bg:"#0ea5e9",t:"Tandy bears are a good post-workout snack",time:"45m"},
      {u:"AidanB",a:"A",bg:"#84cc16",t:"Need to stock up on Hi-Chew asap",time:"2h"},
      {u:"EmmaJ",a:"E",bg:"#6366f1",t:"Sparkling Ice Life Savers - childhood core",time:"6h"},
      {u:"CarlaN",a:"C",bg:"#db2777",t:"Sam's continues to deliver fun finds",time:"1d"},
      {u:"EvanM",a:"E",bg:"#8b5cf6",t:"Making my pool float run this week",time:"3h"},
      {u:"SierraP",a:"S",bg:"#f59e0b",t:"The bow float is giving bridal brunch",time:"1h"},
      {u:"BrodyO",a:"B",bg:"#fb923c",t:"Going tomorrow for all 5",time:"4h"},
      {u:"LilaR",a:"L",bg:"#0071dc",t:"Hi-Chew variety pack >>>",time:"5h"},
      {u:"NoraW",a:"N",bg:"#ec4899",t:"Tandy bears for the kids are clutch",time:"2h"},
      {u:"GrantH",a:"G",bg:"#22c55e",t:"Sparkling Ice flavors are so good",time:"7h"},
      {u:"KenzieF",a:"K",bg:"#a855f7",t:"My summer is gonna be all Sam's",time:"1d"},
      {u:"AshleyB",a:"A",bg:"#f43f5e",t:"Bow float and done",time:"30m"},
      {u:"MasonG",a:"M",bg:"#6366f1",t:"Sam's new items series is elite",time:"3h"},
      {u:"VanessaT",a:"V",bg:"#db2777",t:"All of this needs to be in my cart yesterday",time:"8h"},
      {u:"DerekN",a:"D",bg:"#f59e0b",t:"Life Savers collab is genius",time:"2h"},
      {u:"QuinnP",a:"Q",bg:"#fb923c",t:"Hauling the Peeps plush AND bow float",time:"1h"}
    ]},
    { id:11, title:"Massive clearance finds at Sam's Club", author:"@samsclublovers", av:"L", abg:"#f59e0b", bg:"#1a1a1a", src:"images/moment11.mp4", dur:"0:19", views:"1.3M", likes:118900, products:[
      {name:"Philips Ambilight 55\" 4K Roku TV (Clearance)",price:"$219.91",pricef:219.91,img:"images/products_real/roku-tv.jpg"},
      {name:"Norsk Reversible Flooring, 12 ct drift-wood",price:"$29.31",pricef:29.31,img:"images/products_real/interlock-flooring.jpg"},
      {name:"GreenPan Advanced Skillet, 6-in-1, 7 qt",price:"$34.98",pricef:34.98,img:"images/products_real/greenpan-skillet.jpg"},
      {name:"Member's Mark Mini Steel Tool Box",price:"$17.99",pricef:17.99,img:"images/products_real/tool-box.jpg"}
    ], comments:[
      {u:"MikeA",a:"M",bg:"#0071dc",t:"$219 for a 55 inch Ambilight is a steal",time:"30m"},
      {u:"TinaP",a:"T",bg:"#f59e0b",t:"Running to Sam's for the flooring",time:"1h"},
      {u:"GarrettL",a:"G",bg:"#a855f7",t:"GreenPan at $34.98 is criminal",time:"2h"},
      {u:"BriannaK",a:"B",bg:"#ec4899",t:"Need that mini tool box immediately",time:"3h"},
      {u:"ChaseM",a:"C",bg:"#22c55e",t:"Philips Ambilight is chef's kiss for gaming",time:"4h"},
      {u:"SierraJ",a:"S",bg:"#f43f5e",t:"Sam's clearance game is unmatched",time:"5h"},
      {u:"RyanD",a:"R",bg:"#fb923c",t:"Getting that skillet for Mother's Day",time:"1h"},
      {u:"AmandaB",a:"A",bg:"#0ea5e9",t:"Tool box is so cute in pink",time:"45m"},
      {u:"LoganK",a:"L",bg:"#84cc16",t:"TV deal of the year honestly",time:"6h"},
      {u:"PaulaT",a:"P",bg:"#6366f1",t:"The flooring for the patio is calling",time:"2h"},
      {u:"NateC",a:"N",bg:"#db2777",t:"Greenpan 6-in-1 for this cheap? yes",time:"1d"},
      {u:"HollyR",a:"H",bg:"#8b5cf6",t:"Sam's always wins on clearance",time:"3h"},
      {u:"JonathanE",a:"J",bg:"#f59e0b",t:"Ambilight TV under $220 impossible",time:"7h"},
      {u:"MorganS",a:"M",bg:"#3b82f6",t:"Going this afternoon for the TV",time:"30m"},
      {u:"IanG",a:"I",bg:"#ec4899",t:"Flooring will cover my gym area",time:"4h"},
      {u:"VictoriaP",a:"V",bg:"#22c55e",t:"These clearance runs are a thrill",time:"5h"},
      {u:"TrevorH",a:"T",bg:"#a855f7",t:"Members Mark mini tool box is the move",time:"2h"},
      {u:"CaitlinN",a:"C",bg:"#fb923c",t:"Sam's clearance >>> any weekly deal",time:"1h"},
      {u:"AdamK",a:"A",bg:"#f43f5e",t:"This GreenPan is a birthday gift sorted",time:"1d"},
      {u:"NadiaB",a:"N",bg:"#0071dc",t:"Sam's just keeps hitting on price",time:"6h"},
      {u:"EthanL",a:"E",bg:"#06b6d4",t:"If it's still there Saturday it's mine",time:"3h"},
      {u:"JaimeP",a:"J",bg:"#db2777",t:"Every clearance video I've needed",time:"2h"}
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
  // Desktop only - touch devices skip this entirely so we don't burn
  // bandwidth/battery on scroll events that mimic hover.
  const isHoverDevice = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  if (isHoverDevice) {
    document.querySelectorAll('.mcard').forEach(card => {
      const vid = card.querySelector('.mcard-video');
      if (!vid) return;
      card.addEventListener('mouseenter', () => {
        try { vid.currentTime = 0; } catch(_){}
        try { vid.play().catch(()=>{}); } catch(_){}
      });
      card.addEventListener('mouseleave', () => {
        try { vid.pause(); vid.currentTime = 0; } catch(_){}
      });
    });
  }

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
    feed.querySelectorAll('.vcard-vid').forEach(v => {
      try { v.pause(); v.removeAttribute('src'); v.load(); } catch(_){}
    });
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
          ${v.src ? `<video class="vcard-vid" src="${v.src}" poster="${v.src.replace('.mp4','.jpeg')}" loop playsinline webkit-playsinline preload="metadata" disablepictureinpicture controlslist="nodownload nofullscreen noplaybackrate"></video>` : ''}
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
            <div class="vcard-products-list">${v.products.map(p => { const thumb = p.img || productThumb(p.name); return `
              <div class="vcard-product-item" data-pname="${p.name}" data-pprice="${p.pricef||0}" data-pimg="${thumb}">
                <img class="vcard-product-thumb" src="${thumb}" alt="${p.name}" onerror="this.onerror=null;this.src='${productThumb(p.name)}'">
                <div class="vcard-product-info"><span class="vcard-product-name">${p.name}</span><span class="vcard-product-price">${p.price}</span></div>
                <button class="vcard-add-btn">Add</button>
              </div>`; }).join('')}
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

  function fmtNum(n) {
    if (n >= 1000000) return (n/1000000).toFixed(1).replace(/\.0$/,'')+'M';
    if (n >= 1000) {
      const k = n/1000;
      return (k >= 100 ? Math.round(k) : k.toFixed(1).replace(/\.0$/,'')) + 'K';
    }
    return n.toString();
  }
  function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // Deterministic unique thumbnail per product name — ensures no two
  // products ever share the same visual in the "Featured in this video" popup.
  function productThumb(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
    const hue = Math.abs(h) % 360;
    const hue2 = (hue + 40) % 360;
    const c1 = `hsl(${hue},62%,52%)`;
    const c2 = `hsl(${hue2},68%,38%)`;
    const letters = name.replace(/[^A-Za-z ]/g,'').trim().split(/\s+/);
    const initial = (letters[0]?.[0] || '?').toUpperCase();
    const second = (letters[1]?.[0] || '').toUpperCase();
    const label = second ? initial + second : initial;
    const fontSize = label.length === 2 ? 24 : 34;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="64" height="64" rx="10" fill="url(#g)"/><text x="32" y="${label.length===2?41:43}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${fontSize}" fill="white" font-weight="800">${label}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /* ---------- FEED EVENTS ---------- */
  function bindFeedEvents() {
    // VIDEO ERROR FALLBACK - if any reel fails to load, hide the video
    // element so the poster keeps showing instead of a black screen.
    feed.querySelectorAll('.vcard-vid').forEach(vid => {
      const onFail = () => { vid.style.display = 'none'; };
      vid.addEventListener('error', onFail, {once:true});
      vid.addEventListener('abort', onFail, {once:true});
      vid.setAttribute('webkit-playsinline', '');
      vid.setAttribute('playsinline', '');
    });

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
            const muteBtn = player.querySelector('.vcard-mute-btn');
            if (vid) {
              if (vid.paused) {
                vid.play().catch(()=>{});
                pauseIcon?.classList.remove('show');
                muteBtn?.classList.remove('visible');
              } else {
                vid.pause();
                pauseIcon?.classList.add('show');
                muteBtn?.classList.add('visible');
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
              const muteBtn = player.querySelector('.vcard-mute-btn');
              if (vid) { if (vid.paused) { vid.play().catch(()=>{}); pauseIcon?.classList.remove('show'); muteBtn?.classList.remove('visible'); } else { vid.pause(); pauseIcon?.classList.add('show'); muteBtn?.classList.add('visible'); } }
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
    feed.querySelectorAll('.vcard-vid').forEach(v => {
      try { v.pause(); v.currentTime = 0; } catch(_){}
    });
    // Close any open product popups and hide pause icons
    feed.querySelectorAll('.vcard-products.open').forEach(p => p.classList.remove('open'));
    feed.querySelectorAll('.vcard-pause-icon.show').forEach(p => p.classList.remove('show'));
    feed.querySelectorAll('.vcard-mute-btn.visible').forEach(b => b.classList.remove('visible'));
    // Play this item's video
    const vid = item.querySelector('.vcard-vid');
    const bar = item.querySelector('.vcard-progress-bar');
    if (vid) {
      try { vid.muted = isMuted; } catch(_){}
      try { vid.currentTime = 0; } catch(_){}
      try { vid.play().catch(()=>{}); } catch(_){}
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

  /* ---------- CAROUSEL VIDEO ROBUSTNESS (mobile-safe) ---------- */
  // Keeps posters visible even if the video can't load, lazy-primes videos
  // as they approach the viewport, and pauses anything that scrolls away.
  const safeCall = (fn) => { try { fn(); } catch(_){} };
  const mcardVideos = document.querySelectorAll('.mcard-video');

  // Always show the poster image as a background on the thumb so the card
  // never renders as a black box — even if the video element never loads.
  mcardVideos.forEach(vid => {
    const thumb = vid.closest('.mcard-thumb');
    if (thumb && vid.poster) {
      thumb.style.backgroundImage = `url('${vid.poster}')`;
      thumb.style.backgroundSize = 'cover';
      thumb.style.backgroundPosition = 'center';
    }
    // Belt and suspenders for iOS Safari inline playback.
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', '');
    vid.muted = true;
  });

  function primeCarouselVideo(vid) {
    if (vid.dataset.primed) return;
    vid.dataset.primed = '1';
    // Safari/iOS fix: force first frame render so the poster doesn't flash away.
    vid.addEventListener('loadeddata', () => { safeCall(() => { vid.currentTime = 0.1; }); }, {once:true});
    // On failure, hide the broken video and let the thumb background (poster) stand in.
    const onFail = () => { vid.style.display = 'none'; };
    vid.addEventListener('error', onFail, {once:true});
    vid.addEventListener('abort', onFail, {once:true});
    safeCall(() => vid.load());
  }

  if ('IntersectionObserver' in window && mcardVideos.length > 0) {
    const primeObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          primeCarouselVideo(entry.target);
          primeObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px', threshold: 0.01 });
    mcardVideos.forEach(v => primeObs.observe(v));

    // Pause & reset any carousel video once it scrolls fully out of view
    // so we don't keep a dead play stream alive as the user scrolls the page.
    const pauseObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          safeCall(() => { entry.target.pause(); entry.target.currentTime = 0; });
        }
      });
    }, { threshold: 0 });
    mcardVideos.forEach(v => pauseObs.observe(v));
  } else {
    // Old browsers: just prime them all once and rely on poster fallback.
    mcardVideos.forEach(primeCarouselVideo);
  }

  // When the tab is backgrounded, pause every carousel video to free memory.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      mcardVideos.forEach(v => safeCall(() => v.pause()));
    }
  });

  /* ---------- MEMBER MOMENTS "VIEW ALL" -> OPEN MODAL ---------- */
  document.querySelector('.sc-moments-section .sc-see-all')?.addEventListener('click', e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    openModal(1);
  });

  /* ---------- DEMO PAGE LINKS ---------- */
  // All anchor links with href="#" show demo overlay instead of navigating
  document.querySelectorAll('a[href="#"]').forEach(link => {
    // Skip account and cart - they have their own handlers
    if (link.classList.contains('sc-account-pill') || link.classList.contains('sc-cart-item')) return;
    // Skip the "View all" in Member Moments - it opens the modal
    if (link.classList.contains('sc-see-all') && link.closest('.sc-moments-section')) return;
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
