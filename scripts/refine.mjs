import fs from 'node:fs';
let s=fs.readFileSync('dist/index.html','utf8');
s=s.replace('<p>O DêConta está no Conecta Cnpjotas 2026 como patrocinador Master.<br class="desktop"> E quem faz parte da nossa história tem um encontro marcado com a gente.</p>','<p class="hero-date">12 de dezembro de 2026 · Ibirité, MG</p><p>Como patrocinador Master do Conecta Cnpjotas 2026, o DêConta convida você para um dia de conteúdo e conexões.</p>');
s=s.replace('<span class="image-note">Boas conversas abrem caminhos.</span>','').replace('Assuntos de hoje.<br>Decisões de amanhã.','Ideias de hoje.<br>Próximos passos.').replace('Vamos juntos<br>ao Conecta?','Vamos<br>ao Conecta?');
fs.writeFileSync('dist/index.html',s);
let c=fs.readFileSync('dist/styles.css','utf8').replaceAll('font-size:15px','font-size:16px');
c=c.replace('.button:not(.outline):not(.dark):hover{box-shadow:0 0 0 4px rgb(34 197 94 / .2)}','.button:not(.outline):not(.dark):hover{outline:4px solid rgb(34 197 94 / .2);outline-offset:0}');
fs.writeFileSync('dist/styles.css',c);
