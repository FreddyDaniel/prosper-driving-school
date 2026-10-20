const R=matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,D=document,H=D.documentElement;
H.classList.add('js');
D.querySelectorAll('h1.rv,h2.rv').forEach(h=>{h.classList.add('split');h.innerHTML=h.innerHTML.split(/<br\s*\/?>/i).map(l=>`<span class="ln"><span>${l}</span></span>`).join('')});
D.querySelectorAll('.split').forEach(h=>h.querySelectorAll('.ln>span').forEach((s,i)=>s.style.transitionDelay=(+(h.dataset.d||0)+i*90)+'ms'));
let start=()=>{},delayed=false;
if(!R&&!sessionStorage.pds&&!/[?&]noload/.test(location.search)){sessionStorage.pds=1;delayed=true;
 const l=D.createElement('div');l.className='loader';l.setAttribute('aria-hidden','true');l.innerHTML='<img class="lg" src="/assets/logo.webp" alt="" width="480" height="153"><div class="road"><i class="bar"></i></div><span class="ct">0</span>';D.body.appendChild(l);
 const ct=l.querySelector('.ct'),bar=l.querySelector('.bar');let t0=performance.now();
 (function tick(t){const n=Math.min(100,Math.max(0,Math.round((t-t0)/12)));ct.textContent=n;bar.style.width=n+'%';n<100?requestAnimationFrame(tick):setTimeout(()=>{l.classList.add('done');setTimeout(()=>start(),300);setTimeout(()=>l.remove(),1100)},150)})(t0)}
const h=D.querySelector('.hdr'),t=D.querySelector('.menu-t');let lenis=null;
const sc=()=>h.classList.toggle('scrolled',scrollY>20);sc();addEventListener('scroll',sc,{passive:true});
t&&t.addEventListener('click',()=>{const o=h.classList.toggle('open');t.setAttribute('aria-expanded',o);D.body.style.overflow=o?'hidden':'';lenis&&(o?lenis.stop():lenis.start())});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.matches('.cards,.pkg')&&e.target.querySelectorAll('.card.rv').forEach((c,i)=>{c.style.transitionDelay=i*70+'ms';c.classList.add('in')});io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});
const els=D.querySelectorAll('.rv');els.forEach(el=>{if(!el.classList.contains('split')&&!el.matches('.card'))el.style.transitionDelay=(el.dataset.d||0)+'ms'});
const obs=()=>{els.forEach(el=>el.matches('.card')||io.observe(el));D.querySelectorAll('.cards,.pkg').forEach(el=>io.observe(el))};delayed?(start=obs):obs();
if(!R&&FINE&&window.Lenis){lenis=new Lenis({lerp:.1,smoothWheel:true});(function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0)}
const hv=D.querySelector('.hv');
if(hv){if(R||navigator.connection&&navigator.connection.saveData){hv.removeAttribute('autoplay');hv.pause()}else{new IntersectionObserver(([e])=>{e.isIntersecting?hv.play().catch(()=>{}):hv.pause()}).observe(hv)}}
const px=[...D.querySelectorAll('.hero-bg')];
if(!R&&FINE&&px.length){let tk=false;px.forEach(e=>e.classList.add('parallax'));addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(()=>{const y=scrollY;if(y<innerHeight*1.2)px.forEach(e=>e.style.transform=`translate3d(0,${y*.25}px,0)`);tk=false})}},{passive:true})}
if(!R&&FINE)D.querySelectorAll('.btn').forEach(b=>{b.classList.add('magnetic');b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
const VT='onpagereveal' in window&&CSS.supports('view-transition-name:a');
if(!R&&!VT){const cu=D.createElement('div');cu.className='curtain';cu.setAttribute('aria-hidden','true');D.body.appendChild(cu);
 if(sessionStorage.wipe){sessionStorage.removeItem('wipe');cu.classList.add('leave')}
 D.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||a.target||a.origin!==location.origin||a.hash&&a.pathname===location.pathname||/^(tel|mailto):/.test(a.href))return;
  e.preventDefault();cu.classList.remove('leave');void cu.offsetWidth;cu.classList.add('cover');sessionStorage.wipe=1;setTimeout(()=>location.href=a.href,560)});
 addEventListener('pageshow',e=>{if(e.persisted)cu.className='curtain'})}
D.getElementById('y')&&(D.getElementById('y').textContent=new Date().getFullYear());
const f=D.querySelector('form[data-ajax]');
if(f)f.addEventListener('submit',async e=>{e.preventDefault();const m=f.querySelector('.form-msg');m.textContent='Sending…';
try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});if(!r.ok)throw 0;f.reset();m.textContent='Thank you! We\'ll call you back shortly to confirm your lesson.'}catch(_){m.textContent='Something went wrong. Please call us at 551-999-6131.'}});
