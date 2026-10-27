const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
matchMedia('(min-width:768px)').addEventListener('change',()=>closeMenu());
const topics=[...document.querySelectorAll('.topic')];
const image=document.querySelector('#topic-image');
function selectTopic(selected){topics.forEach(topic=>{const active=topic===selected;topic.classList.toggle('active',active);topic.querySelector('button').setAttribute('aria-expanded',String(active));topic.querySelector('.topic-content').hidden=!active;});image.src=selected.dataset.image;image.alt=selected.dataset.alt;}
topics.forEach(topic=>topic.querySelector('button').addEventListener('click',()=>selectTopic(topic)));
selectTopic(topics[0]);
const dots=document.querySelector('.dots');
for(let i=0;i<25;i++)dots.append(document.createElement('span'));
