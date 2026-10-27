# DeConta-Conecta

## Projeto e instruções
- Landing page para convidar clientes DêConta ao Conecta Cnpjotas 2026. Ação principal: comprar ingresso no site oficial. Secundária: conhecer oportunidades de patrocínio.
- Siga BRANDING-DECONTA.md. Use Taste Skill para composição, Impeccable para revisão e emil-design-eng para interações. Atualize este arquivo a cada decisão de layout.
- Nunca invente números, depoimentos, preços, descontos ou contrapartidas comerciais.
- Implementação estática em dist/. Execute `npm run dev` para visualizar.

## Voz, marca e logo
- DêConta, sempre com acento. Português brasileiro, frases concretas, sem emojis ou travessões separando ideias.
- Logo SVG oficial de www.deconta.com.br/brand/deconta-logo-dark.svg. Cabeçalho: 144px; rodapé: 152px. Preserve proporção e área livre.

## Layout e componentes
- Tema escuro #0f172a; superfície #152034; texto #f8fafc; apoio #94a3b8. Verde #22c55e na ação; texto sobre verde #052e16. Sora 400, 500, 600 e 700.
- Conteúdo até 1200px. Margens de 24px no celular e 48px no desktop. Seções separadas por 112px no desktop e 72px no celular.
- Hero como convite: título central de 88px desktop e 44px celular; fotografia panorâmica dentro do painel com data em aba e ficha do evento abaixo.
- Títulos de seção 48px desktop, 32px celular; corpo 16px, entrelinha 1,65. Apoio mínimo 14px.
- Botões em pílula de 48px de altura e 24px de padding; foco de 2px, hover apenas em ponteiro preciso. Links internos com margem para cabeçalho.
- Cards de imagem com raio 16px. Sem sombras ou gradientes decorativos.
- Menu móvel abre sob o cabeçalho, fecha por Escape ou link, com aria-expanded.

## Mapa de seções e imagens
- Hero: convite, data, local, patrocínio Master e CTA.
- Sobre: motivo do convite ao cliente DêConta, imagem de networking.
- Temas: menu interativo dos três eixos publicados; seleção troca conteúdo e foto, com conteúdo legível sem JS.
- Patrocínio: convite a clientes, foto de ambiente empresarial e link para conectacnpjotas.com/patrocinio.
- Informações e FAQ: detalhes de participação, sem inventar inclusões de ingresso.
- Chamada final verde: compra de ingresso. Rodapé: marca, realização e fontes oficiais.
- Fotos genéricas Unsplash em dist/assets/, provisórias por instrução do usuário; não são registros do Conecta. Fontes em REFERENCIAS.md.
- Ícones Lucide com traço 1,75; setas acompanham o texto.

## Formas e movimento
- Pílulas e discos apenas em áreas sem texto sobreposto. Grade de pontos restrita ao painel de patrocínio.
- Sem animações de entrada que ocultem conteúdo ou loops. Feedback de botões com transform em 200ms. Prefers-reduced-motion elimina deslocamentos.

## Responsividade, SEO e performance
- Validar 360, 390, 768, 1024, 1366 e 1920px. Uma coluna no celular; foto e conteúdo lado a lado no desktop; toque mínimo de 44px.
- Um h1, lang pt-BR, descrição, canonical, Open Graph e JSON-LD Event e Organization. Sitemap e robots na raiz de dist.
- Domínio provisório de preview em .openai/hosting.json; atualizar canonical e sitemap se mudar o domínio.
- Fotos WebP com dimensões, hero prioritário e demais lazy. Fonte local com font-display swap.
- PageSpeed deve ser conferido antes de lançamento oficial; não declarar notas sem medição.

## Registro de decisões
- 2026-10-27: página em formato de convite na identidade DêConta, com imagens provisórias e dois caminhos externos, conforme pedido do usuário.
- 2026-10-27: horário 8h às 17h conforme API atual do site oficial, que diverge de 8h às 18h na Even3. Confirmar antes de campanha.
- 2026-10-27: hero final com título “Nos vemos no Conecta.”, data e cidade visíveis antes da compra; em 360px usa 40px e em desktop 88px. Menu, temas, FAQ, imagens e fonte validados em 360/390/768/1024/1366/1920px sem overflow e sem erros JS.
- 2026-10-27: Lighthouse local: celular Performance 99, Acessibilidade 100, Boas práticas 100, SEO 100; desktop 100 nas quatro categorias. Não são notas do PageSpeed do domínio publicado, que exige verificação separada. Relatórios em .taste-skill/lighthouse-mobile.json e lighthouse-desktop.json.
