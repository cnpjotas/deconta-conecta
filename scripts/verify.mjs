import {Browser} from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import {writeFileSync,mkdirSync} from 'node:fs';
const browser=await Browser.launch();
const results=[];
try{
 for(const width of [360,390,768,1024,1366,1920]){
  const page=await browser.newPage({width,height:900,mobile:width<768});
  await page.goto('http://127.0.0.1:4173',{settleMs:400});
  await page.eval(async()=>{await Promise.all([...document.images].map(img=>{img.loading='eager';return img.decode().catch(()=>{});}));});
  const state=await page.eval(()=>({overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),font:document.fonts.check('16px Sora'),h1:document.querySelectorAll('h1').length}));
  if(width<768){await page.eval(()=>document.querySelector('.menu-toggle').click());state.menuOpen=await page.eval(()=>document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true'&&getComputedStyle(document.querySelector('#menu')).display!=='none');await page.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});state.escapeCloses=await page.eval(()=>document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='false');}
  state.topic=await page.eval(()=>{document.querySelectorAll('.topic button')[1].click();return document.querySelector('#tema-ia').hidden===false&&document.querySelector('#tema-reforma').hidden===true&&document.querySelector('#topic-image').getAttribute('src')==='assets/encontro.webp';});
  state.faq=await page.eval(()=>{const d=document.querySelector('details');d.querySelector('summary').click();return d.open;});
  state.errors=page.consoleErrors;
  results.push({width,...state});
  await page.close();
 }
 const page=await browser.newPage({width:1200,height:630});
 await page.goto('http://127.0.0.1:4173',{settleMs:200});
 await page.eval(()=>{document.body.innerHTML='<div style="position:relative;width:1200px;height:630px;background:#0f172a;color:#f8fafc;padding:64px;font-family:Sora"><img src="/assets/deconta-logo-dark.svg" style="width:200px;height:auto"><h1 style="font-size:80px;line-height:1.08;letter-spacing:-.04em;margin-top:64px;max-width:680px">Nos vemos<br>no Conecta.</h1><p style="font-size:24px;color:#94a3b8;margin-top:24px">12 de dezembro de 2026 · Ibirité, MG</p><p style="font-size:20px;color:#4ade80;margin-top:16px">DêConta, patrocinador Master.</p><div style="position:absolute;right:-64px;top:-48px;width:340px;height:160px;border-radius:80px;background:#22c55e"></div><div style="position:absolute;right:80px;top:160px;width:120px;height:120px;border-radius:60px;background:#94a3b8"></div><div style="position:absolute;right:-32px;top:312px;width:240px;height:120px;border-radius:60px;background:#f8fafc"></div></div>';});
 await page.screenshot({path:'dist/assets/compartilhar.jpg',quality:90});
 await page.close();
 mkdirSync('.taste-skill',{recursive:true});
 writeFileSync('.taste-skill/verification.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));
 if(results.some(r=>r.overflow||r.broken.length||!r.font||r.h1!==1||!r.topic||!r.faq||r.errors.length||r.menuOpen===false||r.escapeCloses===false))process.exitCode=1;
}finally{await browser.close();}
