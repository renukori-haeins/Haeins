/* =================================================================
   HAEINS — script.js
   All logic for index.html.
   ---------------------------------------------------------------
   ██████████████████████████████████████████████████████████████
   HOW TO REPLACE IMAGES WITH YOUR OWN
   ██████████████████████████████████████████████████████████████

   OPTION A — LOCAL FILES (recommended for final launch)
     1. Create a folder called  images/  next to index.html
        Suggested sub-folders:
          images/hero/
          images/categories/
          images/products/
          images/collections/
          images/instagram/
     2. Copy your .jpg / .webp / .png files into those folders.
     3. In every "img:" field below, replace the full https://
        URL with your relative path, e.g.:
          "images/products/aura-vanki-ring.jpg"

   OPTION B — HOSTED IMAGES (Google Drive, Cloudinary, etc.)
     Replace the URL string with the direct download/public link.
     Make sure the link ends with an image extension or the CDN
     returns an image content-type, not an HTML page.

   FALLBACK IMAGE
     If any image fails to load, the site shows FALLBACK_IMG
     instead of a broken icon. Set it to your logo or a neutral
     product shot.
================================================================= */

const FALLBACK_IMG = "images/fallback.jpg";
// ↑ Replace with your own fallback photo path or URL.
//   Until you do, the site falls back to a plain transparent GIF.

function imgTag(src, alt, cls){
  return `<img src="${src}" alt="${alt}" class="${cls||''}" loading="lazy"
    onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" />`;
}


/* =================================================================
   SECTION 1 · HERO IMAGES  (4 images)
   Slot positions: see the hero bento grid at the top of the page.
   Recommended size: min 800×1000 px, portrait or square.
================================================================= */
const HERO_IMAGES = {

  // ── Slot 1: MAIN PRODUCT TILE (cream card, centre of hero)
  // Best choice: close-up of your hero product on a white/cream surface.
  heroProduct: "images/hero/hero-product.jpg",

  // ── Slot 2: MODEL TILE (terracotta / pink card — the "18K Gold Plated" tile)
  // Best choice: model wearing HAEINS jewellery, warm background.
  heroBust:    "images/hero/hero-model.jpg",

  // ── Slot 3: DETAIL TILE (dark card — "Designed by Renu Kori")
  // Best choice: close macro shot of a bangle or ring against dark fabric.
  heroBangle:  "images/hero/hero-detail.jpg",

  // ── Slot 4: EDITORIAL BANNER (the full-width pink banner mid-page)
  // Best choice: lifestyle shot, model or flat-lay, wide aspect (16:9 or wider).
  editorial:   "images/hero/hero-editorial.jpg",

};


/* =================================================================
   SECTION 2 · SHOP BY CATEGORY  (8 tiles, one per category)
   Recommended size: 500×625 px portrait, cropped centre.
================================================================= */
const categories = [
  { name: "Rings",
    img: "images/categories/rings.jpg" },
  //       ↑ Replace with your Rings category photo

  { name: "Thumb Rings",
    img: "images/categories/thumb-rings.jpg" },

  { name: "Vanki Rings",
    img: "images/categories/vanki-rings.jpg" },

  { name: "Necklaces",
    img: "images/categories/necklaces.jpg" },

  { name: "Earrings",
    img: "images/categories/earrings.jpg" },

  { name: "Nose Pins",
    img: "images/categories/nose-pins.jpg" },

  { name: "Bracelets",
    img: "images/categories/bracelets.jpg" },

  { name: "Statement Bangles",
    img: "images/categories/statement-bangles.jpg" },
];


/* =================================================================
   SECTION 3 · BEST SELLERS  (8 products × 2 images each)
   img  = front / default photo shown on the card
   img2 = hover-swap photo (shown when customer hovers the card)
   Recommended size: 600×750 px portrait, consistent crop.
================================================================= */
const products = [

  { name: "Aura Vanki Ring", tag: "Ring", price: "₹1,890", rating: 4.9,
    img:  "images/products/aura-vanki-ring-front.jpg",
    img2: "images/products/aura-vanki-ring-hover.jpg" },
  // ↑ img  → front-facing shot of the Aura Vanki Ring
  // ↑ img2 → alternate angle (side / worn on hand) shown on hover

  { name: "Lune Hoop Earrings", tag: "Earrings", price: "₹1,450", rating: 4.8,
    img:  "images/products/lune-hoop-earrings-front.jpg",
    img2: "images/products/lune-hoop-earrings-hover.jpg" },

  { name: "Solstice Necklace", tag: "Necklace", price: "₹2,290", rating: 5.0,
    img:  "images/products/solstice-necklace-front.jpg",
    img2: "images/products/solstice-necklace-hover.jpg" },

  { name: "Petal Nose Pin", tag: "Nose Pin", price: "₹890", rating: 4.7,
    img:  "images/products/petal-nose-pin-front.jpg",
    img2: "images/products/petal-nose-pin-hover.jpg" },

  { name: "Coil Thumb Ring", tag: "Ring", price: "₹1,190", rating: 4.9,
    img:  "images/products/coil-thumb-ring-front.jpg",
    img2: "images/products/coil-thumb-ring-hover.jpg" },

  { name: "Meridian Bracelet", tag: "Bracelet", price: "₹1,690", rating: 4.8,
    img:  "images/products/meridian-bracelet-front.jpg",
    img2: "images/products/meridian-bracelet-hover.jpg" },

  { name: "Dune Statement Bangle", tag: "Bangle", price: "₹2,690", rating: 4.9,
    img:  "images/products/dune-statement-bangle-front.jpg",
    img2: "images/products/dune-statement-bangle-hover.jpg" },

  { name: "Halo Studs", tag: "Earrings", price: "₹990", rating: 4.9,
    img:  "images/products/halo-studs-front.jpg",
    img2: "images/products/halo-studs-hover.jpg" },

];


/* =================================================================
   SECTION 4 · COLLECTIONS BENTO  (6 tiles)
   The first entry (Minimal Luxe) is the big double-height tile.
   Recommended sizes:
     [0] Minimal Luxe  → 900×1200 px  (tall portrait)
     [1] Statement Edit → 900×500 px  (landscape)
     [2–5] small tiles  → 700×700 px  (square)
================================================================= */
const collections = [

  { name: "Minimal Luxe", sub: "Everyday minimal pieces", big: true,
    img: "images/collections/minimal-luxe.jpg" },
  // ↑ Big left tile — use a tall lifestyle / model shot

  { name: "Statement Edit",
    img: "images/collections/statement-edit.jpg" },

  { name: "Everyday Gold",
    img: "images/collections/everyday-gold.jpg" },

  { name: "Office Essentials",
    img: "images/collections/office-essentials.jpg" },

  { name: "Wedding Guest",
    img: "images/collections/wedding-guest.jpg" },

  { name: "Weekend Edit",
    img: "images/collections/weekend-edit.jpg" },

];


/* =================================================================
   SECTION 5 · INSTAGRAM / GALLERY GRID  (6 square tiles)
   Recommended size: 400×400 px square.
   These link to # by default — change the href in igData
   to your actual Instagram post URLs if you want them clickable.
================================================================= */
const igData = [
  { img: "images/instagram/ig-1.jpg", href: "#" },
  { img: "images/instagram/ig-2.jpg", href: "#" },
  { img: "images/instagram/ig-3.jpg", href: "#" },
  { img: "images/instagram/ig-4.jpg", href: "#" },
  { img: "images/instagram/ig-5.jpg", href: "#" },
  { img: "images/instagram/ig-6.jpg", href: "#" },
  // ↑ Replace each path with your own Instagram photo
  //   and each href with the post's Instagram URL.
];


/* =================================================================
   STATIC DATA — no images here, edit text as needed
================================================================= */
const benefits = [
  { t: "Sweat Proof",     icon: "droplet" },
  { t: "Waterproof",      icon: "waves"   },
  { t: "Anti Tarnish",    icon: "shield"  },
  { t: "Stainless Steel", icon: "hex"     },
  { t: "Gold Plated",     icon: "gem"     },
  { t: "Hypoallergenic",  icon: "heart"   },
  { t: "Lightweight",     icon: "feather" },
  { t: "Everyday Luxury", icon: "circle"  },
];

const benefitIcons = {
  droplet: '<path d="M12 2s6 7 6 11.5A6 6 0 1 1 6 13.5C6 9 12 2 12 2Z"/>',
  waves:   '<path d="M2 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"/><path d="M2 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"/>',
  shield:  '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/>',
  hex:     '<path d="M12 2 20 7v10l-8 5-8-5V7l8-5Z"/>',
  gem:     '<path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M2 9h20M9 3l2 6-2 12M15 3l-2 6 2 12"/>',
  heart:   '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  feather: '<path d="M20 2 9 13"/><path d="M14 3a17 17 0 0 0-9 16H3a17 17 0 0 1 8-15"/><path d="M4 21c1-3.5 2.5-5.5 5-7"/>',
  circle:  '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
};

const testimonials = [
  { name: "Ananya R.",  role: "Verified Buyer", text: "I've worn my Vanki ring every single day for four months — showers, gym, everything — and it still looks brand new. This is what everyday luxury should feel like." },
  { name: "Meher K.",   role: "Verified Buyer", text: "Finally jewellery that doesn't turn my skin green. The Solstice necklace has become part of my daily uniform, from meetings to dinners." },
  { name: "Ishita P.", role: "Verified Buyer", text: "HAEINS pieces photograph beautifully but feel even better in person. Renu clearly designs for women who actually live in their jewellery." },
  { name: "Sana V.",    role: "Verified Buyer", text: "Lightweight, elegant, and it hasn't tarnished once. Worth every rupee — I've since gifted three sets to friends." },
];


/* =================================================================
   RENDER FUNCTIONS — nothing to edit below this line
================================================================= */

/* ── Hero images ── */
document.getElementById('heroProductArt').innerHTML = `<div class="img-box w-full h-full"><div class="img-box-inner">${imgTag(HERO_IMAGES.heroProduct,"Gold Plated Vanki Ring","w-full h-full object-contain")}</div></div>`;
document.getElementById('heroBustArt').innerHTML    = `<div class="img-box w-full h-full"><div class="img-box-inner">${imgTag(HERO_IMAGES.heroBust,"Model wearing HAEINS jewellery","w-full h-full object-cover")}</div></div>`;
document.getElementById('heroBangleArt').innerHTML  = `<div class="img-box w-full h-full"><div class="img-box-inner">${imgTag(HERO_IMAGES.heroBangle,"Gold bangle detail","w-full h-full object-cover")}</div></div>`;
document.getElementById('editorialArt').innerHTML   = `<div class="img-box w-full h-full"><div class="img-box-inner">${imgTag(HERO_IMAGES.editorial,"Model wearing layered HAEINS necklaces","w-full h-full object-cover")}</div></div>`;

/* ── Categories ── */
document.getElementById('categoryGrid').innerHTML = categories.map((c,i)=>`
  <a href="#" class="group reveal" style="transition-delay:${i*70}ms">
    <div class="rounded-[22px] overflow-hidden aspect-[4/5] img-zoom relative elegant-frame" style="background:var(--choc2);">
      ${imgTag(c.img, c.name, "w-full h-full object-cover absolute inset-0")}
      <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 55%,rgba(10,6,3,.65));"></div>
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
        <span class="serif italic text-lg">${c.name}</span>
        <span class="w-7 h-7 rounded-full border border-cream/60 flex items-center justify-center group-hover:bg-cream group-hover:text-ink transition-all">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
        </span>
      </div>
    </div>
  </a>`).join('');

/* ── Best Sellers ── */
let cartCount = 0;
document.getElementById('productGrid').innerHTML = products.map((p,i)=>`
  <div class="group reveal rounded-[22px] p-3 md:p-4" style="background:var(--cream); transition-delay:${(i%4)*70}ms">
    <div class="relative rounded-[15px] overflow-hidden aspect-[4/5] mb-3 card-swap" style="border:1px solid rgba(51,20,26,.08);">
      ${imgTag(p.img,  p.name, "img-a w-full h-full object-cover absolute inset-0")}
      ${imgTag(p.img2, p.name + " alternate", "img-b w-full h-full object-cover absolute inset-0")}
      <span class="absolute top-2.5 left-2.5 text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full z-10" style="background:rgba(21,14,9,.75); color:var(--cream);">${p.tag}</span>
      <button class="wishlist-btn absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-cream/90 flex items-center justify-center z-10 transition-transform hover:scale-110" aria-label="Add to wishlist">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#241812" stroke-width="1.6"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
    </div>
    <div class="flex items-start justify-between gap-2">
      <div class="min-w-0">
        <p class="text-[13.5px] leading-tight text-ink truncate">${p.name}</p>
        <div class="flex items-center gap-1 mt-1.5">
          ${'<svg class="star" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>'.repeat(5)}
          <span class="text-[10.5px] text-ink/50 ml-1">${p.rating}</span>
        </div>
        <p class="text-[13px] text-ink/70 mt-1">${p.price}</p>
      </div>
      <button class="quick-add-btn w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform hover:scale-110" style="background:var(--ink); color:var(--cream);" data-name="${p.name}" aria-label="Quick add ${p.name}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  </div>`).join('');

/* ── Benefits ── */
document.getElementById('benefitsGrid').innerHTML = benefits.map((b,i)=>`
  <div class="flex flex-col items-center text-center gap-3 reveal" style="transition-delay:${i*60}ms">
    <div class="w-14 h-14 rounded-full flex items-center justify-center" style="border:1px solid rgba(201,164,106,.5);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A46A" stroke-width="1.4">${benefitIcons[b.icon]}</svg>
    </div>
    <p class="text-[12.5px] tracking-[0.06em] uppercase text-cream/80">${b.t}</p>
  </div>`).join('');

/* ── Collections ── */
const cg = document.getElementById('collectionGrid');
cg.innerHTML = `
  <div class="md:col-span-3 md:row-span-2 rounded-[26px] overflow-hidden relative min-h-[280px] md:min-h-full img-zoom reveal elegant-frame">
    ${imgTag(collections[0].img, collections[0].name, "absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 40%,rgba(10,6,3,.65));"></div>
    <div class="absolute bottom-6 left-6 text-cream">
      <p class="serif italic text-2xl md:text-3xl">${collections[0].name}</p>
      <p class="text-[11px] tracking-[0.15em] uppercase opacity-80 mt-1">${collections[0].sub}</p>
    </div>
  </div>
  <div class="md:col-span-3 rounded-[26px] overflow-hidden relative min-h-[140px] img-zoom reveal elegant-frame" style="transition-delay:.05s">
    ${imgTag(collections[1].img, collections[1].name, "absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 30%,rgba(10,6,3,.6));"></div>
    <div class="absolute bottom-5 left-6 text-cream"><p class="serif italic text-xl">${collections[1].name}</p></div>
  </div>
  ${collections.slice(2).map((c,i)=>`
  <div class="rounded-[26px] overflow-hidden relative min-h-[140px] img-zoom reveal elegant-frame-sm" style="transition-delay:${.1+i*.05}s">
    ${imgTag(c.img, c.name, "absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 30%,rgba(10,6,3,.6));"></div>
    <div class="absolute bottom-5 left-5 text-cream"><p class="serif italic text-lg">${c.name}</p></div>
  </div>`).join('')}`;

/* ── Instagram grid ── */
document.getElementById('igGrid').innerHTML = igData.map((d,i)=>`
  <a href="${d.href||'#'}" class="img-zoom rounded-[16px] overflow-hidden aspect-square block reveal elegant-frame-sm" style="transition-delay:${i*50}ms">
    ${imgTag(d.img, `HAEINS Instagram post ${i+1}`, "w-full h-full object-cover")}
  </a>`).join('');

/* ── Testimonials ── */
const testiTrack = document.getElementById('testiTrack');
const testiDots  = document.getElementById('testiDots');
testiTrack.innerHTML = testimonials.map(t=>`
  <div class="min-w-full px-2 md:px-10">
    <div class="flex items-center justify-center gap-1 mb-6">
      ${'<svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>'.repeat(5)}
    </div>
    <p class="serif italic text-xl md:text-2xl leading-snug text-ink mb-7">&ldquo;${t.text}&rdquo;</p>
    <p class="text-[13px] tracking-[0.05em] uppercase text-ink/50">${t.name} <span class="mx-1">·</span> ${t.role}</p>
  </div>`).join('');

let testiIndex = 0;
function renderDots(){
  testiDots.innerHTML = testimonials.map((_,i)=>`
    <button class="dot h-1.5 rounded-full transition-all" style="background:${i===testiIndex ? 'var(--terracotta)' : 'rgba(51,20,26,.15)'}; width:${i===testiIndex?'18px':'6px'}" data-i="${i}"></button>
  `).join('');
}
function goToTesti(i){
  testiIndex = (i + testimonials.length) % testimonials.length;
  testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
  renderDots();
}
renderDots();
testiDots.addEventListener('click', e=>{
  const btn = e.target.closest('.dot');
  if(btn) goToTesti(parseInt(btn.dataset.i));
});
let testiTimer = setInterval(()=>goToTesti(testiIndex+1), 5500);
testiTrack.addEventListener('mouseenter', ()=>clearInterval(testiTimer));
testiTrack.addEventListener('mouseleave', ()=>{ testiTimer = setInterval(()=>goToTesti(testiIndex+1), 5500); });

/* ── Interactions ── */
const cartCountEl    = document.getElementById('cartCount');
const mobileCartBar  = document.getElementById('mobileCartBar');
const mobileCartLabel = document.getElementById('mobileCartLabel');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2200);
}
function addToCart(name){
  cartCount++;
  cartCountEl.textContent = cartCount;
  mobileCartLabel.textContent = `${cartCount} item${cartCount>1?'s':''} in cart`;
  mobileCartBar.style.transform = 'translateY(0)';
  showToast(`${name} added to cart`);
}
document.addEventListener('click', e=>{
  const addBtn  = e.target.closest('.quick-add-btn');
  if(addBtn){ addToCart(addBtn.dataset.name); }
  const wishBtn = e.target.closest('.wishlist-btn');
  if(wishBtn){
    const svg = wishBtn.querySelector('svg');
    const active = svg.getAttribute('fill') === '#C9A46A';
    svg.setAttribute('fill',   active ? 'none'    : '#C9A46A');
    svg.setAttribute('stroke', active ? '#33141A' : '#C9A46A');
    showToast(active ? 'Removed from wishlist' : 'Added to wishlist');
  }
});

document.getElementById('newsForm').addEventListener('submit', e=>{
  e.preventDefault();
  document.getElementById('newsMsg').textContent = "Welcome to the Circle — check your inbox for 10% off.";
  e.target.reset();
});

/* ── Nav scroll shrink ── */
const navInner = document.getElementById('navInner');
const navbar   = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 40){
    navInner.classList.remove('py-5'); navInner.classList.add('py-3.5');
    navbar.classList.add('nav-shadow');
  } else {
    navInner.classList.add('py-5'); navInner.classList.remove('py-3.5');
    navbar.classList.remove('nav-shadow');
  }
});

/* ── Mobile menu ── */
const menuBtn   = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
  menuOpen = !menuOpen;
  mobileMenu.style.maxHeight = menuOpen ? '360px' : '0px';
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  menuOpen = false; mobileMenu.style.maxHeight = '0px';
}));

/* ── Scroll reveal ── */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in'); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .reveal-scale').forEach(el=>io.observe(el));
setTimeout(()=>{
  document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)').forEach(el=>io.observe(el));
}, 50);

/* ── Loader hide ── */
window.addEventListener('load', ()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hide'), 500);
});
