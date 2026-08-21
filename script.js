/* ================================================================
   IMAGE CONFIGURATION
   ── Replace the URLs below with your own images ──────────────────
   Use a relative path like "images/products/ring.jpg" for local
   files, or a full https:// URL for hosted images.
================================================================ */

/* HERO SLIDER — add as many slides as you like */
const HERO_SLIDES = [
  { img:"https://drive.google.com/file/d/1b68Kc2fRqFJpmpTYaD0IvAtIJsXMSvcn/view?usp=sharing", label:"Lustre Wave Earrings" },
  { img:"https://drive.google.com/file/d/1v6biDx0al9t2WtfVVIcp-kMwmP3U3QgS/view?usp=drive_link", label:"Lune Hoop Earrings" },
  { img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=85&auto=format&fit=crop", label:"Solstice Necklace" },
  // ↑ REPLACE with your product images. Add more lines freely.
];

/* HERO SMALL TILES */
const HERO_BUST   = "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=500&q=80&auto=format&fit=crop";  // model tile
const HERO_BANGLE = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80&auto=format&fit=crop";  // detail tile
const EDITORIAL   = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=700&q=80&auto=format&fit=crop";  // editorial banner

/* CATEGORIES */
const categories = [
  { name:"Rings",            img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80&auto=format&fit=crop" },
  { name:"Thumb Rings",      img:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80&auto=format&fit=crop" },
  { name:"Vanki Rings",      img:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80&auto=format&fit=crop" },
  { name:"Necklaces",        img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80&auto=format&fit=crop" },
  { name:"Earrings",         img:"https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=500&q=80&auto=format&fit=crop" },
  { name:"Nose Pins",        img:"https://images.unsplash.com/photo-1631982690223-8aa4c6e0b3f9?w=500&q=80&auto=format&fit=crop" },
  { name:"Bracelets",        img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80&auto=format&fit=crop" },
  { name:"Statement Bangles",img:"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=500&q=80&auto=format&fit=crop" },
];

/* BEST SELLERS — img = front photo, img2 = hover photo */
const products = [
  { name:"Aura Vanki Ring",      tag:"Ring",     price:"₹1,890", rating:4.9, img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop" },
  { name:"Lune Hoop Earrings",   tag:"Earrings", price:"₹1,450", rating:4.8, img:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1602752250015-52934bc45613?w=600&q=80&auto=format&fit=crop" },
  { name:"Solstice Necklace",    tag:"Necklace", price:"₹2,290", rating:5.0, img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop" },
  { name:"Petal Nose Pin",       tag:"Nose Pin", price:"₹890",   rating:4.7, img:"https://images.unsplash.com/photo-1631982690223-8aa4c6e0b3f9?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=80&auto=format&fit=crop" },
  { name:"Coil Thumb Ring",      tag:"Ring",     price:"₹1,190", rating:4.9, img:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&auto=format&fit=crop" },
  { name:"Meridian Bracelet",    tag:"Bracelet", price:"₹1,690", rating:4.8, img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop" },
  { name:"Dune Statement Bangle",tag:"Bangle",   price:"₹2,690", rating:4.9, img:"https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80&auto=format&fit=crop" },
  { name:"Halo Studs",           tag:"Earrings", price:"₹990",   rating:4.9, img:"https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80&auto=format&fit=crop",  img2:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80&auto=format&fit=crop" },
];

/* COLLECTIONS */
const collections = [
  { name:"Minimal Luxe",      sub:"Everyday minimal pieces", big:true, img:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=80&auto=format&fit=crop" },
  { name:"Statement Edit",    img:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=80&auto=format&fit=crop" },
  { name:"Everyday Gold",     img:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700&q=80&auto=format&fit=crop" },
  { name:"Office Essentials", img:"https://images.unsplash.com/photo-1602752250015-52934bc45613?w=700&q=80&auto=format&fit=crop" },
  { name:"Wedding Guest",     img:"https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=700&q=80&auto=format&fit=crop" },
  { name:"Weekend Edit",      img:"https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=700&q=80&auto=format&fit=crop" },
];

/* INSTAGRAM GRID */
const igData = [
  { img:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80&auto=format&fit=crop", href:"#" },
  { img:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80&auto=format&fit=crop", href:"#" },
  { img:"https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=400&q=80&auto=format&fit=crop", href:"#" },
  { img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80&auto=format&fit=crop", href:"#" },
  { img:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80&auto=format&fit=crop", href:"#" },
  { img:"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80&auto=format&fit=crop", href:"#" },
];

/* ================================================================
   STATIC TEXT DATA
================================================================ */
const benefits = [
  {t:"Sweat Proof",icon:"droplet"},{t:"Waterproof",icon:"waves"},
  {t:"Anti Tarnish",icon:"shield"},{t:"Stainless Steel",icon:"hex"},
  {t:"Gold Plated",icon:"gem"},{t:"Hypoallergenic",icon:"heart"},
  {t:"Lightweight",icon:"feather"},{t:"Everyday Luxury",icon:"circle"},
];
const benefitIcons = {
  droplet:'<path d="M12 2s6 7 6 11.5A6 6 0 1 1 6 13.5C6 9 12 2 12 2Z"/>',
  waves:'<path d="M2 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"/><path d="M2 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"/>',
  shield:'<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/>',
  hex:'<path d="M12 2 20 7v10l-8 5-8-5V7l8-5Z"/>',
  gem:'<path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M2 9h20M9 3l2 6-2 12M15 3l-2 6 2 12"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  feather:'<path d="M20 2 9 13"/><path d="M14 3a17 17 0 0 0-9 16H3a17 17 0 0 1 8-15"/><path d="M4 21c1-3.5 2.5-5.5 5-7"/>',
  circle:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
};
const testimonials = [
  {name:"Ananya R.",role:"Verified Buyer",text:"I've worn my Vanki ring every single day for four months — showers, gym, everything — and it still looks brand new. This is what everyday luxury should feel like."},
  {name:"Meher K.",role:"Verified Buyer",text:"Finally jewellery that doesn't turn my skin green. The Solstice necklace has become part of my daily uniform, from meetings to dinners."},
  {name:"Ishita P.",role:"Verified Buyer",text:"HAEINS pieces photograph beautifully but feel even better in person. Renu clearly designs for women who actually live in their jewellery."},
  {name:"Sana V.",role:"Verified Buyer",text:"Lightweight, elegant, and it hasn't tarnished once. Worth every rupee — I've since gifted three sets to friends."},
];

/* ================================================================
   RENDER ENGINE — do not edit below
================================================================ */
const FB = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
function img(src,alt,cls){
  return `<img src="${src}" alt="${alt}" class="${cls||''}" loading="lazy" onerror="this.onerror=null;this.src='${FB}';">`;
}

/* ── HERO SLIDER ── */
(function(){
  const track  = document.getElementById('heroSliderTrack');
  const dotsEl = document.getElementById('heroSliderDots');
  const prevBtn= document.getElementById('heroSliderPrev');
  const nextBtn= document.getElementById('heroSliderNext');
  const labelEl= document.getElementById('heroSliderLabel');
  if(!track||!HERO_SLIDES.length) return;

  let cur=0, timer;

  track.innerHTML = HERO_SLIDES.map((s,i)=>`
    <div style="min-width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--cream-dim);">
      <img src="${s.img}" alt="${s.label}"
        style="width:100%;height:100%;object-fit:cover;display:block;"
        loading="${i===0?'eager':'lazy'}"
        onerror="this.onerror=null;this.src='${FB}';">
    </div>`).join('');

  function dots(){
    dotsEl.innerHTML = HERO_SLIDES.map((_,i)=>`
      <button class="hero-dot" data-i="${i}" aria-label="Slide ${i+1}"
        style="height:6px;width:${i===cur?'22px':'6px'};border-radius:999px;border:none;cursor:pointer;
               background:${i===cur?'var(--ink)':'rgba(51,20,26,.22)'};transition:all .3s ease;padding:0;"></button>`
    ).join('');
  }
  function go(n){
    cur=(n+HERO_SLIDES.length)%HERO_SLIDES.length;
    track.style.transform=`translateX(-${cur*100}%)`;
    if(labelEl) labelEl.textContent=HERO_SLIDES[cur].label;
    dots();
  }
  function start(){ timer=setInterval(()=>go(cur+1),3800); }
  function stop() { clearInterval(timer); }

  prevBtn.onclick=()=>{stop();go(cur-1);start();};
  nextBtn.onclick=()=>{stop();go(cur+1);start();};
  dotsEl.addEventListener('click',e=>{
    const b=e.target.closest('.hero-dot');
    if(b){stop();go(+b.dataset.i);start();}
  });
  let tx=0;
  track.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{
    const d=tx-e.changedTouches[0].clientX;
    if(Math.abs(d)>40){stop();go(cur+(d>0?1:-1));start();}
  });
  dots();start();
})();

/* ── Hero small tiles ── */
document.getElementById('heroBustArt').innerHTML=`<div class="img-box w-full h-full"><div class="img-box-inner">${img(HERO_BUST,"Model","w-full h-full object-cover")}</div></div>`;
document.getElementById('heroBangleArt').innerHTML=`<div class="img-box w-full h-full"><div class="img-box-inner">${img(HERO_BANGLE,"Detail","w-full h-full object-cover")}</div></div>`;
document.getElementById('editorialArt').innerHTML=`<div class="img-box w-full h-full"><div class="img-box-inner">${img(EDITORIAL,"Editorial","w-full h-full object-cover")}</div></div>`;

/* ── Categories ── */
document.getElementById('categoryGrid').innerHTML=categories.map((c,i)=>`
  <a href="#" class="group reveal" style="transition-delay:${i*70}ms">
    <div class="rounded-[22px] overflow-hidden aspect-[4/5] img-zoom relative elegant-frame" style="background:var(--choc2);">
      ${img(c.img,c.name,"w-full h-full object-cover absolute inset-0")}
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
let cartCount=0;
document.getElementById('productGrid').innerHTML=products.map((p,i)=>`
  <div class="group reveal rounded-[22px] p-3 md:p-4" style="background:var(--cream);transition-delay:${(i%4)*70}ms">
    <div class="relative rounded-[15px] overflow-hidden aspect-[4/5] mb-3 card-swap" style="border:1px solid rgba(51,20,26,.08);">
      ${img(p.img,p.name,"img-a w-full h-full object-cover absolute inset-0")}
      ${img(p.img2,p.name+" alt","img-b w-full h-full object-cover absolute inset-0")}
      <span class="absolute top-2.5 left-2.5 text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full z-10" style="background:rgba(21,14,9,.75);color:var(--cream);">${p.tag}</span>
      <button class="wishlist-btn absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-cream/90 flex items-center justify-center z-10 transition-transform hover:scale-110" aria-label="Wishlist">
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
      <button class="quick-add-btn w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform hover:scale-110" style="background:var(--ink);color:var(--cream);" data-name="${p.name}" aria-label="Quick add">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  </div>`).join('');

/* ── Benefits ── */
document.getElementById('benefitsGrid').innerHTML=benefits.map((b,i)=>`
  <div class="flex flex-col items-center text-center gap-3 reveal" style="transition-delay:${i*60}ms">
    <div class="w-14 h-14 rounded-full flex items-center justify-center" style="border:1px solid rgba(201,164,106,.5);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A46A" stroke-width="1.4">${benefitIcons[b.icon]}</svg>
    </div>
    <p class="text-[12.5px] tracking-[0.06em] uppercase text-cream/80">${b.t}</p>
  </div>`).join('');

/* ── Collections ── */
document.getElementById('collectionGrid').innerHTML=`
  <div class="md:col-span-3 md:row-span-2 rounded-[26px] overflow-hidden relative min-h-[280px] md:min-h-full img-zoom reveal elegant-frame">
    ${img(collections[0].img,collections[0].name,"absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 40%,rgba(10,6,3,.65));"></div>
    <div class="absolute bottom-6 left-6 text-cream">
      <p class="serif italic text-2xl md:text-3xl">${collections[0].name}</p>
      <p class="text-[11px] tracking-[0.15em] uppercase opacity-80 mt-1">${collections[0].sub}</p>
    </div>
  </div>
  <div class="md:col-span-3 rounded-[26px] overflow-hidden relative min-h-[140px] img-zoom reveal elegant-frame" style="transition-delay:.05s">
    ${img(collections[1].img,collections[1].name,"absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 30%,rgba(10,6,3,.6));"></div>
    <div class="absolute bottom-5 left-6 text-cream"><p class="serif italic text-xl">${collections[1].name}</p></div>
  </div>
  ${collections.slice(2).map((c,i)=>`
  <div class="rounded-[26px] overflow-hidden relative min-h-[140px] img-zoom reveal elegant-frame-sm" style="transition-delay:${.1+i*.05}s">
    ${img(c.img,c.name,"absolute inset-0 w-full h-full object-cover")}
    <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 30%,rgba(10,6,3,.6));"></div>
    <div class="absolute bottom-5 left-5 text-cream"><p class="serif italic text-lg">${c.name}</p></div>
  </div>`).join('')}`;

/* ── Instagram ── */
document.getElementById('igGrid').innerHTML=igData.map((d,i)=>`
  <a href="${d.href}" class="img-zoom rounded-[16px] overflow-hidden aspect-square block reveal elegant-frame-sm" style="transition-delay:${i*50}ms">
    ${img(d.img,`HAEINS post ${i+1}`,"w-full h-full object-cover")}
  </a>`).join('');

/* ── Testimonials ── */
const tt=document.getElementById('testiTrack'), td=document.getElementById('testiDots');
tt.innerHTML=testimonials.map(t=>`
  <div class="min-w-full px-2 md:px-10">
    <div class="flex items-center justify-center gap-1 mb-6">
      ${'<svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>'.repeat(5)}
    </div>
    <p class="serif italic text-xl md:text-2xl leading-snug text-ink mb-7">&ldquo;${t.text}&rdquo;</p>
    <p class="text-[13px] tracking-[0.05em] uppercase text-ink/50">${t.name} <span class="mx-1">·</span> ${t.role}</p>
  </div>`).join('');
let ti=0;
function rdots(){td.innerHTML=testimonials.map((_,i)=>`<button class="dot h-1.5 rounded-full transition-all" style="background:${i===ti?'var(--terracotta)':'rgba(51,20,26,.15)'};width:${i===ti?'18px':'6px'}" data-i="${i}"></button>`).join('');}
function gtt(i){ti=(i+testimonials.length)%testimonials.length;tt.style.transform=`translateX(-${ti*100}%)`;rdots();}
rdots();
td.addEventListener('click',e=>{const b=e.target.closest('.dot');if(b)gtt(+b.dataset.i);});
let ttr=setInterval(()=>gtt(ti+1),5500);
tt.addEventListener('mouseenter',()=>clearInterval(ttr));
tt.addEventListener('mouseleave',()=>{ttr=setInterval(()=>gtt(ti+1),5500);});

/* ── Interactions ── */
const cartEl=document.getElementById('cartCount');
const mcb=document.getElementById('mobileCartBar');
const mcl=document.getElementById('mobileCartLabel');
const toast=document.getElementById('toast');
let tt2;
function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt2);tt2=setTimeout(()=>toast.classList.remove('show'),2200);}
function addToCart(n){cartCount++;cartEl.textContent=cartCount;mcl.textContent=`${cartCount} item${cartCount>1?'s':''} in cart`;mcb.style.transform='translateY(0)';showToast(`${n} added to cart`);}
document.addEventListener('click',e=>{
  const ab=e.target.closest('.quick-add-btn');if(ab)addToCart(ab.dataset.name);
  const wb=e.target.closest('.wishlist-btn');
  if(wb){const s=wb.querySelector('svg');const a=s.getAttribute('fill')==='#C9A46A';s.setAttribute('fill',a?'none':'#C9A46A');s.setAttribute('stroke',a?'#33141A':'#C9A46A');showToast(a?'Removed from wishlist':'Added to wishlist');}
});
document.getElementById('newsForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('newsMsg').textContent="Welcome to the Circle — check your inbox for 10% off.";e.target.reset();});

/* ── Nav ── */
const ni=document.getElementById('navInner'),nb=document.getElementById('navbar');
window.addEventListener('scroll',()=>{if(window.scrollY>40){ni.classList.remove('py-5');ni.classList.add('py-3.5');nb.classList.add('nav-shadow');}else{ni.classList.add('py-5');ni.classList.remove('py-3.5');nb.classList.remove('nav-shadow');}});
const mb2=document.getElementById('menuBtn'),mm=document.getElementById('mobileMenu');let mo=false;
mb2.addEventListener('click',()=>{mo=!mo;mm.style.maxHeight=mo?'360px':'0px';});
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mo=false;mm.style.maxHeight='0px';}));

/* ── Scroll reveal ── */
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});},{threshold:0.12});
document.querySelectorAll('.reveal,.reveal-scale').forEach(el=>io.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal:not(.in),.reveal-scale:not(.in)').forEach(el=>io.observe(el)),50);

/* ── Loader ── */
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),500));
