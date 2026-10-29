const NS='http://www.w3.org/2000/svg',P="M0 0C-30-4-46-44-24-64C-10-76 10-76 24-64C46-44 30-4 0 0Z",H="M-17-58C-8-68 8-68 17-58";
const L=[{n:6,s:1.15,d:8,o:0,g:'g1'},{n:5,s:.95,d:6,o:30,g:'g2'},{n:5,s:.75,d:4,o:12,g:'g1'},{n:4,s:.55,d:2,o:40,g:'g2'},{n:3,s:.36,d:0,o:0,g:'g1'}];
function build(t,anim){
 L.forEach((l,i)=>{for(let k=0;k<l.n;k++){
  const o=document.createElementNS(NS,'g');
  o.setAttribute('transform',`translate(100,108) rotate(${k*360/l.n+l.o}) scale(${l.s}) translate(0,${-l.d})`);
  const p=document.createElementNS(NS,'g');
  if(anim){p.setAttribute('class','petal');p.style.setProperty('--d',((L.length-1-i)*.38+k*.07)+'s')}
  p.innerHTML=`<path d="${P}" fill="url(#${l.g})" stroke="rgba(40,0,10,.35)" stroke-width="1.2"/><path d="${H}" fill="none" stroke="rgba(255,255,255,.38)" stroke-width="2" stroke-linecap="round"/>`;
  o.appendChild(p);t.appendChild(o)}});
 const s=document.createElementNS(NS,'path');
 s.setAttribute('d','M100 108c-6-6-2-14 6-12s8 12-2 15-16-4-14-14 16-18 28-10');
 s.setAttribute('fill','none');s.setAttribute('stroke','rgba(40,0,10,.55)');s.setAttribute('stroke-width','2.4');s.setAttribute('stroke-linecap','round');t.appendChild(s);
}
build(document.getElementById('bud'),true);build(document.getElementById('rzg'),false);
const orb=document.getElementById('orb');
for(let i=0;i<14;i++){const e=document.createElement('i');const a=i/14*6.283;e.style.left=(50+47*Math.cos(a))+'%';e.style.top=(50+47*Math.sin(a))+'%';e.style.animationDelay=(i*.25)+'s';orb.appendChild(e)}
// falling petals
const c=document.getElementById('c'),x=c.getContext('2d'),dpr=devicePixelRatio||1;let W,H2,Q=[];
function rs(){W=c.width=innerWidth*dpr;H2=c.height=innerHeight*dpr}addEventListener('resize',rs);rs();
const pc=['#e63950','#ff6b7e','#a8102a','#f6cf8e'];
function mk(a){return{x:Math.random()*W,y:a?Math.random()*H2:-30,s:(Math.random()*9+6)*dpr,v:(Math.random()*.7+.4)*dpr,w:Math.random()*2+.5,ph:Math.random()*6,r:Math.random()*6,vr:(Math.random()-.5)*.03,c:pc[Math.floor(Math.random()*4)]}}
for(let i=0;i<44;i++)Q.push(mk(true));
(function f(t){x.clearRect(0,0,W,H2);Q.forEach(p=>{p.y+=p.v;p.x+=Math.sin(t/900+p.ph)*p.w*.5*dpr;p.r+=p.vr;if(p.y>H2+30)Object.assign(p,mk(false));
 x.save();x.translate(p.x,p.y);x.rotate(p.r);x.scale(1,.6+.4*Math.sin(t/600+p.ph));x.fillStyle=p.c;x.globalAlpha=.8;x.beginPath();x.ellipse(0,0,p.s*.55,p.s,0,0,7);x.fill();x.restore()});requestAnimationFrame(f)})(0);
// flow
const $=id=>document.getElementById(id);
$('go').onclick=function(){this.style.display='none';const sg=$('song');if(sg.getAttribute('src'))sg.play().catch(()=>{});$('stage').classList.add('open');
 setTimeout(()=>{$('letter').classList.add('on');const ps=document.querySelectorAll('.paper p');
  ps.forEach((p,i)=>setTimeout(()=>p.classList.add('in'),900+i*1900));
  setTimeout(()=>$('more').classList.add('in'),900+ps.length*1900+400)},4200)};
function rose(pre){const s=70+Math.random()*90,e=document.createElement('div'),t=7+Math.random()*7;
 e.className='rs';e.style.width=s+'px';e.style.left=(Math.random()*108-4)+'vw';
 e.style.setProperty('--t',t+'s');e.style.setProperty('--sw',(2+Math.random()*2.5)+'s');
 if(pre)e.style.setProperty('--dl',-(Math.random()*t*.9)+'s');
 if(s<95)e.style.opacity=.7;
 e.innerHTML='<svg viewBox="0 0 200 216"><use href="#rz"/></svg>';
 e.addEventListener('animationend',ev=>{if(ev.animationName==='rise')e.remove()});$('garden').appendChild(e)}
let gi;
$('more').onclick=function(){$('garden').classList.add('on');$('garden').style.pointerEvents='auto';
 for(let i=0;i<20;i++)rose(true);gi=setInterval(()=>rose(false),380);setTimeout(()=>$('last').classList.add('in'),7000)};
function startPhoto(){const svg='<svg viewBox="0 0 200 216"><use href="#rz"/></svg>',wrap=$('pw'),fx=$('pfx'),N=26;
 for(let i=0;i<N;i++){const per=2*(1+1.33);let d=i/N*per,x,y;
  if(d<1){x=d;y=0}else if(d<2.33){x=1;y=(d-1)/1.33}else if(d<3.33){x=1-(d-2.33);y=1}else{x=0;y=1-(d-3.33)/1.33}
  const e=document.createElement('div');e.className='rr';e.style.left=x*100+'%';e.style.top=y*100+'%';
  e.style.setProperty('--s',(i%3===0?64:44)+Math.random()*14+'px');e.style.setProperty('--d',(2.4+i*.12)+'s');e.style.setProperty('--sw',(2+Math.random()*2)+'s');
  e.style.zIndex=i%2?6:3;e.innerHTML=svg;wrap.appendChild(e)}
 function emit(){const r=$('pframe').getBoundingClientRect(),per=2*(r.width+r.height);let d=Math.random()*per,x,y;
  if(d<r.width){x=r.left+d;y=r.top}else if(d<r.width+r.height){x=r.right;y=r.top+d-r.width}else if(d<2*r.width+r.height){x=r.right-(d-r.width-r.height);y=r.bottom}else{x=r.left;y=r.bottom-(d-2*r.width-r.height)}
  const s=28+Math.random()*44,e=document.createElement('div');
  e.style.cssText=`position:absolute;left:${x-s/2}px;top:${y-s/2}px;width:${s}px;filter:drop-shadow(0 0 8px rgba(255,70,100,.6))`;e.innerHTML=svg;fx.appendChild(e);
  const cx=r.left+r.width/2,cy=r.top+r.height/2,dx=(x-cx)*(.5+Math.random()*.8)+(Math.random()-.5)*60,dy=-(140+Math.random()*320)+(y-cy)*.4,rot=(Math.random()-.5)*160;
  e.animate([{transform:'translate(0,0) scale(.2) rotate(0)',opacity:0},{opacity:1,offset:.2},{transform:`translate(${dx}px,${dy}px) scale(1) rotate(${rot}deg)`,opacity:1,offset:.75},{transform:`translate(${dx*1.1}px,${dy*1.2}px) scale(1) rotate(${rot*1.2}deg)`,opacity:0}],{duration:5500+Math.random()*3500,easing:'ease-out'}).onfinish=()=>e.remove()}
 function rise(pre){const s=40+Math.random()*60,e=document.createElement('div'),h=innerHeight,t=8000+Math.random()*6000;
  e.style.cssText=`position:absolute;left:${Math.random()*100}vw;top:${h}px;width:${s}px;opacity:${s<70?.55:.8};filter:blur(${s<55?1.5:0}px) drop-shadow(0 0 8px rgba(255,70,100,.5))`;e.innerHTML=svg;fx.appendChild(e);
  const a=e.animate([{transform:'translate(0,0) rotate(0)'},{transform:`translate(${(Math.random()-.5)*120}px,${-(h+200)}px) rotate(${(Math.random()-.5)*200}deg)`}],{duration:t,easing:'linear'});
  if(pre)a.currentTime=Math.random()*t*.8;a.onfinish=()=>e.remove()}
 for(let i=0;i<10;i++)rise(true);setTimeout(()=>setInterval(emit,420),2600);setInterval(()=>rise(false),900)}
$('last').onclick=function(){$('photo').classList.add('on');$('photo').style.pointerEvents='auto';$('last').classList.remove('in');startPhoto();
 setTimeout(()=>{clearInterval(gi);document.querySelectorAll('#garden .rs').forEach(e=>e.remove())},2400)};

// tap anywhere (garden / photo scene) = a rose blooms and floats up
document.addEventListener('pointerdown',e=>{if(e.target.closest('button')||!$('garden').classList.contains('on'))return;
 const s=46+Math.random()*40,el=document.createElement('div'),dx=(Math.random()-.5)*160;
 el.style.cssText=`position:fixed;z-index:20;pointer-events:none;left:${e.clientX-s/2}px;top:${e.clientY-s/2}px;width:${s}px;filter:drop-shadow(0 0 10px rgba(255,70,100,.7))`;
 el.innerHTML='<svg viewBox="0 0 200 216" style="display:block;width:100%"><use href="#rz"/></svg>';document.body.appendChild(el);
 el.animate([{transform:'scale(0) rotate(-60deg)',opacity:0},{transform:'scale(1.15) rotate(0)',opacity:1,offset:.2},{transform:`translate(${dx}px,-220px) rotate(${dx}deg) scale(1)`,opacity:0}],{duration:2600,easing:'ease-out'}).onfinish=()=>el.remove()});
