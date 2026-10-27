# DêConta: guia de marca e design para marketing

Este é o único documento que o marketing precisa para criar qualquer peça da DêConta: landing page, site, post, anúncio, apresentação, e-mail, banner, material impresso. Tudo o que é marca está aqui: voz, logo, cores, tipografia, formas, ilustração, ícones, imagens e as regras de qualidade.

Os valores vêm do produto (DêConta Sistema, design system v2.1). Quem precisa dos tokens completos da interface encontra em [`../deconta-sistema/`](../deconta-sistema/README.md), mas para marketing este arquivo basta.

## Sumário

1. [Antes de começar: instale as skills](#1-antes-de-começar-instale-as-skills)
2. [Essência da marca](#2-essência-da-marca)
3. [Voz e texto](#3-voz-e-texto)
4. [Logo](#4-logo)
5. [Cores](#5-cores)
6. [Tipografia](#6-tipografia)
7. [Formas da marca](#7-formas-da-marca)
8. [Ilustração flat](#8-ilustração-flat)
9. [Ícones](#9-ícones)
10. [Imagens](#10-imagens)
11. [Landing page e site](#11-landing-page-e-site)
12. [Peças por formato](#12-peças-por-formato)
13. [Checklist final contra "AI slop"](#13-checklist-final-contra-ai-slop)

---

## 1. Antes de começar: instale as skills

Toda peça feita com IA (Claude Code, Cursor, Codex) passa por estas skills. Elas dão critério de design ao agente e evitam o **"AI slop"**: aquele resultado genérico, com cara de template, que qualquer IA produz sem direção.

Instale uma vez, a partir da pasta do projeto onde a peça será criada.

### Impeccable (obrigatória)

Refina e audita qualquer interface: hierarquia, tipografia, cor, espaçamento, acessibilidade, estados, texto. Use para criar, criticar e polir.

```bash
npx impeccable install
```

Depois, dentro da ferramenta de IA, rode `/impeccable init` uma vez. Documentação: [impeccable.style](https://impeccable.style) · repositório [pbakaus/impeccable](https://github.com/pbakaus/impeccable).

### Skills do Emil Kowalski (obrigatórias)

Gosto de design engineer (Vercel, Linear): acabamento de componentes, detalhes invisíveis, decisões de animação. Inclui `emil-design-eng` (filosofia de polimento) e as de movimento (criar, revisar e auditar animações).

```bash
npx skills@latest add emilkowalski/skills
```

Repositório: [emilkowalski/skills](https://github.com/emilkowalski/skills).

### Taste Skill (para landing page e site)

Faz o agente desenhar um site de verdade em vez de montar a landing page média. Foi construída a partir de um estudo de sites curados e de referências premiadas (Awwwards), dá direção de arte, usa imagens reais e confere o próprio resultado no navegador. Use sempre que o marketing for criar uma **landing page ou site**.

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Ou, como plugin do Claude Code:

```text
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill
```

Repositório: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · site [tasteskill.dev](https://tasteskill.dev).

### Como usar as três juntas

| Momento | Skill |
| --- | --- |
| Criar landing page ou site do zero | Taste Skill, com este documento como direção de marca |
| Criar qualquer outra peça ou tela | Impeccable |
| Revisar e polir antes de publicar | Impeccable (crítica e polimento) + `emil-design-eng` |
| Adicionar ou revisar animação | Skills de movimento do Emil Kowalski |

Sempre entregue este arquivo ao agente junto com o pedido: **"Siga o BRANDING-DECONTA.md"**. As skills dão o critério; este documento dá a marca. Quando os dois conflitarem, a marca vence.

### AGENTS.md: as regras de layout ficam no projeto

Todo projeto de site, landing page ou peça feito com IA tem um **`AGENTS.md` na raiz**, e as informações importantes de layout **sempre** são registradas nele. É o arquivo que os agentes de IA (Claude Code, Cursor, Codex) leem antes de trabalhar: o que está ali vale em toda conversa, mesmo quando ninguém lembra de pedir. (O Claude Code lê o `CLAUDE.md`; nesse caso, crie um `CLAUDE.md` com a linha `@AGENTS.md`, para que os dois usem o mesmo conteúdo.)

Regras:

- **Crie o `AGENTS.md` no início do projeto**, antes da primeira página, a partir do modelo abaixo, já preenchido com os dados do projeto.
- **O agente atualiza o `AGENTS.md` sozinho, sem esperar pedido.** A cada tarefa, antes de encerrar, ele confere se decidiu algo de layout e, se decidiu, acrescenta as linhas no lugar certo do arquivo. Quanto mais o projeto avança, mais linhas o `AGENTS.md` ganha e mais preciso fica o layout das próximas tarefas.
- **Linha boa é específica e verificável:** "Hero com título de 80px no desktop e 44px no celular, imagem do produto à direita sobre a pílula verde" instrui; "Hero bonito e moderno" não instrui nada. Escreva a medida, a cor, o componente e o porquê.
- **Toda decisão de layout tomada no caminho entra na hora**, inclusive o que foi testado e reprovado (para ninguém repetir o erro). Decisão que fica só na conversa se perde na próxima.
- **O `AGENTS.md` resume, não substitui** este guia: ele aponta para o `BRANDING-DECONTA.md` e guarda o que é específico daquele projeto.
- Se o `AGENTS.md` e este guia divergirem, vale este guia; corrija o `AGENTS.md`.
- Nada de segredo no `AGENTS.md`: sem senha, token, chave de API ou dado de cliente.

#### O que vai no AGENTS.md

Mapa completo das informações. As linhas marcadas como "no início" entram quando o arquivo é criado; as outras crescem conforme o projeto anda.

| Bloco | O que registrar | Quando | Fonte neste guia |
| --- | --- | --- | --- |
| Projeto | Nome, objetivo, público, domínio, página principal, ação esperada do visitante (ex.: agendar demonstração) | No início | Seção 2 |
| Instruções ao agente | Seguir este guia, usar as skills, atualizar o `AGENTS.md`, validar antes de entregar | No início | Seção 1 |
| Skills | Qual skill usar em cada momento e o que pedir a cada uma | No início | Seção 1 |
| Voz e texto | Tom da DêConta, regras de pontuação, vícios proibidos, termos do projeto e como escrevê-los | No início, e a cada termo novo | Seção 3 |
| Marca e logo | Versão da logo usada em cada fundo, tamanho no cabeçalho e no rodapé, área de proteção | No início | Seção 4 |
| Cores | Tema principal, cores usadas de fato, onde entra o verde, combinações aprovadas | No início, e a cada uso novo de cor | Seção 5 |
| Tipografia | Tamanho de cada nível (display, títulos, corpo) no celular e no desktop, pesos, entrelinhas | No início, e a cada ajuste | Seção 6 |
| Grade e espaçamento | Largura máxima, colunas, margens laterais por tamanho de tela, espaço entre seções, espaço interno de cards | No início, e a cada ajuste | Seções 7 e 11 |
| Formas da marca | Arranjo escolhido em cada seção, tamanhos, cores, o que foi reprovado | A cada seção criada | Seção 7 |
| Componentes | Especificação de cada componente criado: botões, cards, etiquetas, formulário, cabeçalho, rodapé, menu do celular, com medidas e estados (hover, foco, desabilitado) | A cada componente | Seção 11 |
| Mapa de páginas e seções | Lista das páginas e, em cada uma, a ordem das seções com o objetivo de cada seção | No início, e a cada página nova | Seção 11 |
| Imagens e ilustrações | Cada imagem usada, origem (enviada, gerada, tela do produto), arquivo, formato, onde aparece, texto alternativo | A cada imagem | Seções 8 e 10 |
| Ícones | Ícones do lucide em uso e o significado de cada um no projeto | A cada ícone | Seção 9 |
| Movimento | Animações aprovadas: o que anima, duração, curva, comportamento com movimento reduzido | A cada animação | Seção 11 |
| Responsividade | O que muda em cada tamanho de tela (celular, tablet, desktop pequeno, desktop grande) e o resultado da última conferência | A cada conferência | Seção 11 |
| SEO | Título e descrição de cada página, URL canônica, imagem de compartilhamento, situação do `sitemap.xml` e do `robots.txt` | A cada página | Seção 11 |
| Performance | Notas do PageSpeed Insights em celular e desktop (data, nota, link do relatório) e o que foi corrigido | A cada validação | Seção 11 |
| Proibido neste projeto | O que não pode aparecer, além do que este guia já proíbe | Sempre que surgir | Seção 13 |
| Registro de decisões | Data, decisão, motivo e quem pediu | A cada decisão | Todas |

#### Modelo do AGENTS.md

Copie, preencha o que está entre colchetes e apague o que não se aplica.

```markdown
# AGENTS.md: [nome do projeto]

Este arquivo guia todo agente de IA que trabalha neste projeto. Leia inteiro antes de cada tarefa.

## Instruções ao agente (obrigatório)
- Siga sempre o BRANDING-DECONTA.md, o guia de marca e design da DêConta. Em conflito com qualquer outra fonte, ele vence.
- Atualize este AGENTS.md sozinho, sem esperar pedido: ao final de cada tarefa, registre toda decisão de layout tomada (medida, cor, componente, imagem, animação, o que foi reprovado) no bloco certo e no "Registro de decisões". Linhas específicas e verificáveis, nunca genéricas.
- Antes de entregar qualquer tela: rode as skills (bloco abaixo), confira a responsividade nos quatro tamanhos e, em site ou landing page, rode o PageSpeed Insights.
- Nunca invente número, depoimento, logo de cliente ou dado. Sem a informação, pergunte.
- Nunca coloque senha, token ou dado de cliente neste arquivo.

## Skills (obrigatórias)
- Impeccable: use para criar e para revisar toda tela. Antes de entregar, peça a crítica completa (hierarquia, tipografia, cor, espaçamento, acessibilidade, estados, texto) e aplique o polimento. Rode /impeccable init uma vez por projeto.
- emil-design-eng (Emil Kowalski): use em todo componente interativo (botão, card clicável, menu, formulário, modal) para o acabamento e os detalhes invisíveis.
- Skills de movimento do Emil Kowalski: use para criar qualquer animação e para revisar as existentes antes de entregar.
- Taste Skill: use para criar site ou landing page do zero e para redesenhar seções inteiras, com o BRANDING-DECONTA.md como direção de arte.
- Ordem numa landing page: Taste Skill para construir, Impeccable para criticar e polir, emil-design-eng e as de movimento para o acabamento final.

## Projeto
- Objetivo: [o que esta página precisa conseguir]
- Público: [quem visita: donos de escritório contábil, gestores, equipes]
- Ação principal: [ex.: agendar demonstração] · ação secundária: [ex.: ver recursos]
- Domínio: [https://...]

## Voz e texto
- A marca se escreve DêConta. Português do Brasil, no tom de voz da DêConta (BRANDING-DECONTA.md, seção 3).
- Nunca hífen ou travessão separando ideias no meio do texto: só vírgula e ponto. Sem emoji. Sem exclamação.
- Sem vícios de texto de IA: nada de "potencialize", "revolucione", "não é só X, é Y", trio de adjetivos, abertura genérica, pergunta retórica em série.
- Botões começam por verbo, em caixa de frase.
- Termos do projeto: [ex.: "honorários", nunca "mensalidade"]

## Layout base
- Tema principal: [escuro, fundo #0f172a / claro, fundo #f8fafc]. Superfícies: [#152034 / #ffffff].
- Cores: só a paleta da seção 5, regra 60/30/10. Verde #22c55e só na ação e no destaque; texto sobre verde #052e16; verde em texto #4ade80 (escuro) ou #15803d (claro).
- Fonte: Sora, pesos 400, 500, 600 e 700, com display=swap.
- Tipografia: display [80]px no desktop e [44]px no celular; título 1 [48/32]px; título 2 [32/26]px; corpo [16]px; apoio [14]px. Hierarquia por peso e cor antes de tamanho.
- Grade: conteúdo até 1200px, centralizado; [12] colunas com espaço de [24]px entre colunas no desktop e [16]px no celular.
- Margens laterais: [16]px no celular, [32]px no tablet, [48]px no desktop.
- Espaço entre seções: [128]px no desktop, [80]px no celular. Texto corrido até 680px de largura.
- Medidas em múltiplos de 8.

## Componentes
- Botão principal: pílula #22c55e, texto #052e16 Sora 600 16px, 48px de altura, 24px nas laterais; hover com halo verde; foco com anel verde de 2px.
- Botão secundário: pílula com contorno de 1px [#2b3a52 / #e2e8f0].
- Card: raio 16px, [#152034 / #ffffff com borda #e2e8f0], 24 a 32px de espaço interno, sem sombra.
- Etiqueta: pílula pequena, fundo verde translúcido, texto verde.
- Cabeçalho: [altura, logo, links, botão]. Rodapé: [conteúdo]. Menu do celular: [comportamento].
- [Registre aqui cada componente novo com medidas e estados]

## Formas da marca
- Pílulas perfeitas (raio = metade da altura), discos e grade de pontos, de 3 a 5 formas por composição, nunca atrás de texto ou botão (seção 7).
- [Seção: arranjo usado]

## Mapa de páginas e seções
- [/]: [hero, prova, problema, recursos, como funciona, depoimento, chamada final, rodapé]
- [Para cada seção: objetivo, imagem usada, componente principal]

## Imagens, ilustrações e ícones
- Toda seção tem imagem. Sem imagem enviada, buscar ou gerar: tela do produto, ilustração flat no estilo DêConta (seção 8), ícones e formas.
- Ilustração flat sempre em SVG, com versão clara e escura. Foto e tela do produto em WebP ou AVIF no tamanho exibido.
- Ícones só do lucide, traço 1,75, tamanho acompanhando o texto.
- [Arquivo · origem · onde aparece · texto alternativo]

## Movimento
- Discreto: aparecer ao rolar com opacidade e 8 a 16px de deslocamento, 400 a 600ms; hover em 300ms com cubic-bezier(0.16, 1, 0.3, 1).
- Só transform e opacity. Sem animação em loop. Respeitar prefers-reduced-motion.
- [Animação aprovada: elemento, duração, curva]

## Responsividade
- Conferir sempre em 360 e 390px (celular), 768 e 1024px (tablet), 1280 a 1366px (desktop pequeno) e 1920px (desktop grande). Sem rolagem horizontal.
- Toque mínimo de 44px no celular.
- [O que muda em cada tamanho]
- [AAAA-MM-DD: resultado da última conferência]

## SEO
- Todas as páginas indexáveis. sitemap.xml e robots.txt na raiz, atualizados a cada página nova.
- Cada página com title (até 60 caracteres), description (até 155), canonical, um único h1, Open Graph com imagem 1200 x 630, lang="pt-BR".
- [Página · title · description]

## Performance
- PageSpeed Insights em celular e desktop antes e depois de publicar. Metas: Performance 90+, Acessibilidade 95+, Boas práticas 95+, SEO 100, LCP até 2,5s, INP até 200ms, CLS até 0,1.
- [AAAA-MM-DD · celular: notas · desktop: notas · link do relatório]

## Proibido neste projeto
- Tudo o que o BRANDING-DECONTA.md proíbe (seção 13).
- [Proibições específicas deste projeto]

## Registro de decisões
<!-- Uma linha por decisão, mais recente embaixo. O agente acrescenta sem apagar as anteriores. -->
- [AAAA-MM-DD] [decisão] · motivo: [por quê] · pedido por: [pessoa ou agente]
```

---

## 2. Essência da marca

- **Nome:** DêConta. Sempre com circunflexo no "ê" e com D e C maiúsculos. Nunca "Deconta", "DeConta", "Dê Conta" ou "DECONTA" em texto corrido.
- **O que é:** plataforma de gestão para escritórios contábeis brasileiros. Clientes PF e PJ, contratos de honorários, jornadas de atendimento, atividades, CRM e métricas.
- **Tagline:** Gestão inteligente para escritórios contábeis.
- **Para quem:** donos, gestores e equipes de escritórios contábeis. Gente que trabalha com prazo, número e responsabilidade, e que usa o sistema o dia inteiro.
- **Promessa:** o escritório inteiro em ordem, num lugar só. O contador "dá conta" de tudo.
- **Personalidade:** profissional, limpa, confiável, calma. Moderna sem ser modinha. Próxima sem ser informal demais.
- **Ideia visual:** o verde é a ação e o crescimento; o azul-marinho profundo é a seriedade e a confiança; as formas arredondadas são a leveza de um trabalho que flui.

---

## 3. Voz e texto

**Como a DêConta fala:** direto, claro, sem jargão técnico de software. Fala a língua do escritório contábil (honorários, competência, obrigações, carteira de clientes, regime tributário) sem exagerar no "contabilês".

| Faça | Evite |
| --- | --- |
| Frases curtas, uma ideia por frase | Parágrafos longos e genéricos |
| Benefício concreto: "Veja todos os contratos que vencem este mês" | Promessa vazia: "Revolucione sua gestão" |
| Números reais quando existirem | Números inventados ("+10.000 clientes") |
| Verbo no início do botão: "Agendar demonstração", "Começar agora" | "Clique aqui", "Saiba mais" sozinho |
| Caixa de frase: "Gestão de contratos" | Caixa Alta Em Toda Palavra |
| Português do Brasil, com acentuação correta | Palavras em inglês quando há equivalente ("dashboard" vira "painel" em texto de marketing) |

Regras fixas:

- **Nunca use hífen ou traço no meio do texto** como separador de ideias: nem o hífen solto ("Contratos - prazos"), nem o travessão (—), nem a meia-risca (–). Use vírgula ou ponto, e quando precisar, dois-pontos ou parênteses. O hífen só aparece dentro de palavras que já o têm ("e-mail", "dois-pontos", "bem-vindo").
- **Sem emoji** em peças institucionais, site e anúncios.
- **Sem exclamação** em excesso: no máximo uma por peça, e de preferência nenhuma.
- **Sem superlativos vazios:** "o melhor", "o mais completo", "revolucionário", "incrível".

### Escrita sem "AI slop"

Texto gerado por IA tem vícios fáceis de reconhecer, e o leitor desconfia na hora. Todo texto da DêConta, escrito por pessoa ou por IA, é revisado contra esta lista antes de publicar:

| Vício | Exemplo a evitar | Como fica no tom da DêConta |
| --- | --- | --- |
| Verbo de efeito vazio | "Potencialize", "Revolucione", "Transforme", "Eleve", "Desbloqueie" | Diga o que acontece: "Veja os contratos que vencem este mês" |
| Contraste fabricado | "Não é só um sistema, é uma parceria" | Afirme direto: "Clientes, contratos e prazos num lugar só" |
| Trio por hábito | "Simples, rápido e eficiente" | Um benefício concreto vale mais que três adjetivos |
| Abertura genérica | "No mundo de hoje...", "Em um cenário cada vez mais competitivo..." | Comece pelo problema real do escritório |
| Pergunta retórica em série | "Cansado de planilhas? Perdendo prazos?" | No máximo uma pergunta, e só se for a dúvida real do leitor |
| Adjetivo sem prova | "Solução completa", "inovadora", "robusta", "de ponta" | Mostre o recurso, a tela ou o número |
| Dois-pontos em todo título | "Contratos: simplificados" | Frase normal: "Contratos sem planilha" |
| Fecho moralista | "Afinal, seu tempo é o seu bem mais precioso." | Termine na chamada para ação |
| Inglês e jargão de startup | "Game changer", "next level", "all-in-one", "seamless" | Português simples |

Para conferir o tom: leia em voz alta. Se soar como anúncio de qualquer software, reescreva com uma palavra do dia a dia do escritório contábil (honorário, competência, obrigação, carteira, prazo, cliente).

Exemplos de títulos no tom certo:

- "Seu escritório inteiro em ordem, num lugar só."
- "Contratos, clientes e prazos sem planilha."
- "Saiba quem precisa de atenção hoje."

---

## 4. Logo

Arquivos (SVG, vetor):

| Versão | Arquivo | Usar sobre |
| --- | --- | --- |
| Logo para fundo claro (toda em verde `#22c55e`) | [`deconta-logo.svg`](../deconta-sistema/assets/Logos/deconta-logo.svg) | Branco, `#f8fafc` e cinzas claros |
| Logo para fundo escuro (texto branco, símbolo verde) | [`deconta-logo-dark.svg`](../deconta-sistema/assets/Logos/deconta-logo-dark.svg) | Azul-marinho `#0f172a` e superfícies escuras |
| Símbolo sozinho | [`favicon.svg`](../deconta-sistema/assets/Logos/favicon.svg) | Avatar de rede social, favicon, selo, espaço pequeno |

![Logo DêConta para fundo escuro](../deconta-sistema/assets/Logos/deconta-logo-dark.svg)

Regras:

- **Área de proteção:** em volta da logo, deixe livre no mínimo a altura do círculo do símbolo. Nada de texto, forma ou borda dentro dessa área.
- **Tamanho mínimo:** logo completa com 120px de largura na tela (30mm impresso); abaixo disso, use só o símbolo (mínimo 24px).
- **Não faça:** esticar, girar, mudar as cores, aplicar sombra, contorno, degradê ou efeito; colocar sobre foto sem uma área calma de cor sólida; recriar a logo à mão ou pedir a uma IA que "desenhe a logo da DêConta". Use sempre os arquivos.
- O símbolo (um anel e uma curva) é a base das formas da marca (seção 7), mas a logo em si nunca é alterada.

---

## 5. Cores

### Paleta principal

| Nome | Hex | Papel |
| --- | --- | --- |
| **Verde DêConta** | `#22c55e` | A cor da marca e da ação: botões, destaques, formas principais |
| **Verde símbolo** | `#11f723` | Verde vivo do símbolo. Uso pontual: o símbolo em fundo escuro e brilhos de destaque. Nunca em texto nem em áreas grandes |
| **Verde profundo** | `#052e16` | Texto sobre o verde, discos dentro de formas verdes |
| **Verde texto** | `#15803d` (fundo claro) · `#4ade80` (fundo escuro) | Verde quando ele é texto ou ícone sobre fundo neutro |
| **Azul-marinho** | `#0f172a` | Fundo escuro principal e texto principal no claro |
| **Superfície escura** | `#152034` | Cards e painéis sobre o azul-marinho |
| **Degrau escuro** | `#1e293b` | Hover, trilhos, áreas um passo acima |
| **Branco gelo** | `#f8fafc` | Fundo claro principal e texto principal no escuro |
| **Branco** | `#ffffff` | Cards e painéis sobre o branco gelo |

### Neutros

| Hex | Papel |
| --- | --- |
| `#94a3b8` | Texto secundário sobre fundo escuro |
| `#64748b` | Texto secundário sobre fundo claro |
| `#cbd5e1` | Linhas e bordas no claro; texto terciário no escuro |
| `#e2e8f0` | Divisórias e bordas suaves no claro |
| `#2b3a52` | Bordas e divisórias no escuro |
| `#f1f5f9` | Áreas suaves e trilhos no claro |

### Apoio (só gráfico, dado e categoria)

| Hex claro | Hex escuro | Uso |
| --- | --- | --- |
| `#2563eb` | `#a5b4fc` | Série de gráfico azul |
| `#f97316` | `#fbbf24` | Série de gráfico laranja/âmbar |
| `#7c3aed` | `#a78bfa` | Violeta |
| `#0891b2` | `#22d3ee` | Ciano |
| `#db2777` | `#f472b6` | Rosa |

### Estados

| Estado | Cor sólida | Fundo suave (claro) | Texto (claro) |
| --- | --- | --- | --- |
| Sucesso | `#16a34a` | `#dcfce7` | `#14532d` |
| Atenção | `#f59e0b` | `#fef3c7` | `#92400e` |
| Erro | `#ef4444` | `#fee2e2` | `#991b1b` |
| Informação | `#4f46e5` | `#e0e7ff` | `#3730a3` |

### Como combinar

- **Regra 60/30/10:** 60% neutro (azul-marinho ou branco gelo), 30% superfícies e texto, 10% verde. O verde funciona porque é raro.
- **Tema escuro é a cara da marca** (é o padrão do produto). Use o claro quando o meio pedir (impressão, documentos, e-mail).
- **Texto sobre verde é sempre verde profundo `#052e16`**, nunca branco.
- **Combinações aprovadas** (contraste de leitura garantido):
  - `#f8fafc` sobre `#0f172a` · `#94a3b8` sobre `#0f172a`
  - `#0f172a` sobre `#f8fafc` ou `#ffffff` · `#64748b` sobre `#ffffff`
  - `#052e16` sobre `#22c55e`
  - `#4ade80` sobre `#0f172a` · `#15803d` sobre `#ffffff`
- **Não faça:** degradê roxo-azulado, neon, verde sobre vermelho, mais de três cores fortes na mesma peça, verde `#22c55e` como cor de texto longo em fundo branco (use `#15803d`).
- Degradê só existe numa forma: **verde `#22c55e` para verde profundo `#052e16`**, e só em áreas grandes de fundo (capa de apresentação, fundo de seção). Nunca em botão, texto ou logo.

---

## 6. Tipografia

**Fonte única: Sora**, do Google Fonts ([fonts.google.com/specimen/Sora](https://fonts.google.com/specimen/Sora)). Pesos 400 (regular), 500 (médio), 600 (semibold) e 700 (bold).

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Escala para marketing (o produto usa uma escala menor e fechada; esta é a das peças):

| Papel | Tamanho (tela) | Peso | Entrelinha | Espaçamento |
| --- | --- | --- | --- | --- |
| Display (hero, capa) | 64 a 96px | 600 | 0,95 a 1,05 | -0,02em |
| Título 1 | 40 a 56px | 600 | 1,1 | -0,02em |
| Título 2 | 28 a 36px | 600 | 1,2 | -0,01em |
| Título 3 | 20 a 24px | 600 | 1,3 | 0 |
| Corpo grande (subtítulo) | 18 a 20px | 400 | 1,6 | 0 |
| Corpo | 16px | 400 | 1,6 | 0 |
| Apoio e legenda | 13 a 14px | 400 | 1,5 | 0 |
| Sobretítulo (eyebrow) | 12 a 13px | 600 | 1 | 0,08em, CAIXA ALTA |
| Número de destaque | 48 a 80px | 600 | 1 | -0,02em, algarismos tabulares |

Regras:

- Hierarquia por **peso e cor** antes de tamanho: título em 600 e cor principal, apoio em 400 e cor secundária.
- Um título por bloco. Nunca dois tamanhos display na mesma tela.
- Linhas de texto com no máximo 65 a 75 caracteres.
- Números (valores, métricas, prazos) com algarismos tabulares (`font-variant-numeric: tabular-nums`).
- Sem outras fontes. Sem itálico decorativo, sem fonte manuscrita, sem fonte serifada.

---

## 7. Formas da marca

O sistema de formas é a assinatura visual da DêConta fora do produto. Ele aparece na capa do design system: blocos verdes e escuros em **pílula**, **discos** e uma **grade de pontos**, ocupando um lado da peça enquanto o nome ou título fica do outro.

### De onde vêm

Tudo o que a pessoa toca na DêConta é pílula: botões, etiquetas, abas, filtros, avatares. E o símbolo da marca é um **anel** e uma **curva**. As formas da marca levam isso para o marketing: só curvas completas, nenhum canto vivo.

### Os quatro elementos

| Elemento | Construção | Cor |
| --- | --- | --- |
| **Pílula** | Retângulo com raio igual à metade do lado menor (as pontas são semicírculos perfeitos) | Verde `#22c55e` (a principal), ou a cor do texto do tema (`#f8fafc` no escuro, `#0f172a` no claro) |
| **Disco** | Círculo | Cinza `#94a3b8` (escuro) / `#64748b` (claro) |
| **Disco interno** | Círculo dentro de uma pílula verde, eco do anel do símbolo | Verde profundo `#052e16` |
| **Grade de pontos** | Pontos de raio 4 com passo de 16 (proporcional ao formato) | Verde `#22c55e` |

### Regras de construção

1. **Medidas em múltiplos de 8.** Larguras, alturas, distâncias e raios saem da escala 8, 16, 24, 32, 40, 48, 64, 96, 104, 168...
2. **Pílula sempre perfeita:** raio = metade da altura (ou da largura, se for vertical). Nunca um retângulo com cantos levemente arredondados.
3. **A pílula verde principal é a maior forma** e pode **sangrar** para fora da borda superior e direita da peça.
4. **De três a cinco formas por peça**, mais uma grade de pontos. Mais que isso vira confete.
5. **No máximo quatro cores** nas formas: verde, verde profundo, cor do texto do tema e cinza.
6. **As formas ocupam um lado; o texto ocupa o outro.** Nenhuma forma passa por trás de título, texto ou botão.
7. **Grade de pontos com 12 a 60 pontos**, num bloco retangular, nunca espalhada.
8. Sem sombra, sem contorno, sem degradê, sem transparência sobre as formas.

### A composição de referência

Peça horizontal (proporção da capa, 960 × 288, que escala para qualquer banner):

```text
┌───────────────────────────────┬───────────────────────────────┐
│                               │      ████████████████████████████  ← pílula verde (sangra no topo e à direita)
│                               │      ██ ●●  █████████████████████     com disco verde profundo dentro
│                               │                               │
│  DêConta                      │  ▓▓▓▓▓▓▓▓▓▓▓▓   ○○○○    · · · · ·  ← pílula clara + disco cinza + grade de pontos
│  Gestão inteligente para      │  ▓▓▓▓▓▓▓▓▓▓▓▓   ○○○○    · · · · ·
│  escritórios contábeis        │                         · · · · ·
└───────────────────────────────┴───────────────────────────────┘
   texto: metade esquerda             formas: metade direita
```

SVG base, pronto para copiar (tema escuro; para o claro troque o fundo para `#f8fafc`, a pílula clara para `#0f172a` e o disco para `#64748b`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 288">
  <rect width="960" height="288" fill="#0f172a"/>
  <!-- formas: metade direita (x a partir de 480) -->
  <rect x="528" y="-56" width="480" height="168" rx="84" fill="#22c55e"/>
  <circle cx="616" cy="56" r="32" fill="#052e16"/>
  <rect x="528" y="136" width="208" height="104" rx="52" fill="#f8fafc"/>
  <circle cx="804" cy="188" r="52" fill="#94a3b8"/>
  <g fill="#22c55e">
    <!-- grade 5 × 8, passo 16, raio 4: começa em (880, 140) -->
    <circle cx="880" cy="140" r="4"/><circle cx="896" cy="140" r="4"/><circle cx="912" cy="140" r="4"/><circle cx="928" cy="140" r="4"/><circle cx="944" cy="140" r="4"/>
    <!-- repita a linha nas alturas 156, 172, 188, 204, 220, 236 e 252 -->
  </g>
  <!-- texto: metade esquerda -->
  <text x="40" y="200" fill="#f8fafc" font-family="Sora" font-weight="600" font-size="96" letter-spacing="-1.9">DêConta</text>
  <text x="40" y="244" fill="#94a3b8" font-family="Sora" font-size="14">Gestão inteligente para escritórios contábeis</text>
</svg>
```

### Como usar em cada formato

| Formato | Arranjo das formas |
| --- | --- |
| Banner horizontal (site, LinkedIn, e-mail) | Como a referência: formas na metade direita, texto à esquerda |
| Quadrado (post 1080 × 1080) | Formas no terço superior, sangrando no topo e à direita; título e texto na metade de baixo, alinhados à esquerda |
| Vertical (story 1080 × 1920) | Faixa de formas no topo (cerca de um terço da altura); texto embaixo; uma pílula pequena pode fechar o rodapé |
| Capa de apresentação (16:9) | Referência ampliada; título no lugar do nome, subtítulo no lugar da tagline |
| Divisória de seção (slide ou site) | Só a pílula verde sangrando e a grade de pontos, com o título da seção à esquerda |
| Hero de landing page | Formas como fundo do lado oposto ao título, ou emoldurando a imagem do produto (a imagem fica por cima de uma pílula verde grande) |
| Avatar e selo | Só o símbolo sobre fundo azul-marinho; sem formas |

### Não faça

- Pílula com cantos "quase redondos" (raio menor que metade da altura).
- Formas atrás do texto ou cortando o título.
- Muitas formas pequenas espalhadas (confete).
- Grade de linhas finas verticais (efeito "código de barras").
- Formas em cores de apoio (roxo, rosa, laranja). As formas são só da marca.
- Texto dentro das formas. Exceção única: um botão, que já é uma pílula.
- Ícones, rostos ou figuras dentro das formas. Forma é forma; ilustração é outra coisa (seção 8).

---

## 8. Ilustração flat

Quando a peça precisa explicar uma situação (um processo, um problema, um benefício), use ilustração no estilo **flat vector** da DêConta, o mesmo das telas do produto.

Exemplos aprovados (pares claro e escuro em [`../deconta-sistema/assets/Illustrations/`](../deconta-sistema/assets/Illustrations/README.md)):

![Ilustração DêConta: primeiros passos](../deconta-sistema/assets/Illustrations/dec-conta-first-steps-dark.svg)

### DNA do estilo

- Formas 2D limpas e arredondadas, geometria simples.
- Poucos elementos principais e bastante espaço livre.
- Sombras muito leves; profundidade só por sobreposição e diferença de tom.
- Sem contorno preto grosso, sem 3D, sem fotorrealismo, sem desenho infantil.
- Personagem opcional: rosto simplificado, olhos pequenos, cabelo em blocos geométricos, roupa na cor da marca, expressão calma.
- Objetos do mundo contábil: documentos, pastas, gráficos, calendário, calculadora, painéis abstratos, cards, conectores.
- **Nenhum texto dentro da ilustração**, nem logo inventada, nem letras soltas. Interface é representada por linhas e blocos.

### Paleta da ilustração (v2.1)

| Papel | Tema claro | Tema escuro |
| --- | --- | --- |
| Fundo | `#f8fafc` | `#0f172a` |
| Superfícies (painéis, laptop, cards) | `#ffffff`, `#f1f5f9` | `#152034`, `#1e293b` |
| Estrutura e contornos | `#0f172a` | `#cbd5e1` |
| Verde da marca (destaque, roupa, indicadores) | `#22c55e` | `#22c55e`, `#4ade80` |
| Verde suave | `#dcfce7` | `#052e16` |
| Neutros | `#e2e8f0`, `#64748b`, `#cbd5e1` | `#94a3b8`, `#2b3a52` |
| Alerta (só pontual) | `#ef4444` | `#ef4444` |

### Metáfora certa para cada mensagem

| Mensagem | Metáfora |
| --- | --- |
| Organização, tudo num lugar | Painel com cards encaixados, pastas alinhadas |
| Prazo sob controle | Calendário com marcações verdes, relógio calmo |
| Contratos e honorários | Documento com selo verde, gráfico subindo |
| Equipe trabalhando junto | Pessoas em volta de um painel, conectores entre módulos |
| Atendimento ao cliente | Conversa entre escritório e cliente, check verde |
| Problema que a DêConta resolve | Pilha de papéis e planilhas soltas virando um painel organizado |

### Prompt base para gerar

Use em qualquer gerador de imagem. Troque o que está entre colchetes.

```text
Create a polished flat vector illustration for DêConta, a SaaS platform for Brazilian accounting firms.

The illustration represents: [MENSAGEM].
Communicate this with: [METÁFORA].

Modern flat vector product style, clean rounded geometry, crisp shapes, minimal outlines, subtle soft shadows, slight tonal depth. Professional, friendly and calm. No photorealism, no 3D, no childish cartoon look.

Centered composition with [OBJETO PRINCIPAL] as the main focus, [PERSONAGEM, SE AJUDAR] and 2 to 5 secondary elements (abstract UI cards, charts, documents, calendar, connectors). Generous negative space.

Palette ([CLARO ou ESCURO]):
- light: background #f8fafc, surfaces #ffffff and #f1f5f9, structure #0f172a, brand green #22c55e, soft green #dcfce7, neutrals #e2e8f0 #64748b #cbd5e1
- dark: background #0f172a, surfaces #152034 and #1e293b, structure #cbd5e1, brand green #22c55e and #4ade80, deep green #052e16, neutrals #94a3b8 #2b3a52
Use #ef4444 only as a tiny alert accent when the message is a problem.

No readable text, no fake logos, no letters or codes inside the image. Represent interface content with abstract lines and shapes.
Avoid: heavy gradients, thick black outlines, neon glow, clutter, stock illustration look, dramatic expressions.

Background: solid [#f8fafc ou #0f172a], blending with the page.
Format: [1:1 / 4:3 / 16:9], product-ready, clear at medium size.
```

### Depois de gerar

- **Ilustração flat é sempre vetor (SVG).** Imagem gerada em PNG é vetorizada antes de publicar; não se publica ilustração flat em PNG, JPG ou WebP.
- Ajuste as cores que saíram próximas da paleta para o valor exato (a IA gera `#22df75` quando a marca é `#22c55e`).
- Faça sempre o par claro e escuro da mesma cena (recalibrando cores, não invertendo).
- Confira: sem texto na arte, metáfora entendida em 2 segundos, vermelho só no ponto do problema, espaço livre nas bordas.

---

## 9. Ícones

- **Sempre lucide**: [lucide.dev](https://lucide.dev). Antes de desenhar ou gerar qualquer ícone, procure no lucide. Não misture com outras bibliotecas (Font Awesome, Material, Heroicons) nem com emoji.
- **Traço de 1,75** (o padrão do lucide é 2; a DêConta usa 1,75 em tudo).
- **Tamanho acompanha o texto ao lado:** 16px com texto de 14px, 20px com texto de 16 a 24px, 24px com títulos maiores. Ícone sozinho em card de destaque: 20 a 24px dentro de uma caixa de 40 a 48px, com raio de 12px e fundo `#1e293b` (escuro) ou `#f1f5f9` (claro).
- **Cor:** a do texto vizinho, ou verde (`#4ade80` no escuro, `#15803d` no claro) quando for destaque. Nunca multicolorido.
- Ícone sempre à esquerda do texto, com 8px de distância.
- Ícones úteis para a DêConta: `building-2` (empresa), `users` (equipe), `file-text` (contrato), `calendar-check` (prazo), `chart-column` (painel), `wallet` (honorários), `clipboard-check` (tarefa), `route` (jornada), `bell` (aviso), `shield-check` (segurança), `search`, `plus`.

---

## 10. Imagens

**Toda landing page, site e peça de divulgação é composta com imagens.** Página só de texto e formas não é aceita.

Se o marketing **não enviar** as imagens, quem estiver criando (pessoa ou IA) deve **buscar ou gerar**, nesta ordem de preferência:

1. **Telas do produto** (capturas da DêConta Sistema, de preferência no tema escuro), em moldura de janela ou notebook, com dados fictícios realistas (nomes, CNPJs e valores inventados, nunca dados de clientes reais).
2. **Ilustrações flat** no estilo da seção 8, geradas com o prompt base e vetorizadas.
3. **Ícones do lucide** (seção 9) para listas de recursos, benefícios e passos.
4. **Formas da marca** (seção 7) para fundos, divisórias e composição.
5. **Fotografia** só quando a peça pedir pessoas reais: escritórios contábeis brasileiros, luz natural, ambiente de trabalho real, tons neutros. Nada de banco de imagem genérico (aperto de mão, gráfico 3D, pessoa apontando para tela transparente).

Regras:

- Cada seção da landing page tem pelo menos um elemento visual (imagem do produto, ilustração ou conjunto de ícones).
- Imagem do produto vale mais que qualquer ilustração para mostrar recurso: mostre a tela real.
- Imagem com bordas arredondadas de 16 a 24px; sobre fundo escuro, uma borda fina `#2b3a52`.
- Nunca imagem com texto em inglês, nem interface de outro produto, nem logo de terceiros sem autorização.
- Toda imagem tem texto alternativo descritivo em português.

---

## 11. Landing page e site

Use a **Taste Skill** com este documento. Direção:

### Estrutura recomendada

1. **Hero:** título display (benefício principal), subtítulo de uma ou duas linhas, botão verde principal ("Agendar demonstração") e um secundário em contorno; imagem do produto ao lado ou abaixo, sobre as formas da marca.
2. **Prova:** logos ou números reais de escritórios clientes (só se existirem).
3. **Problema:** a rotina do escritório sem a DêConta (planilhas, prazos perdidos), com ilustração flat.
4. **Recursos:** três a seis blocos, cada um com ícone lucide, título curto, uma frase e tela do produto.
5. **Como funciona:** três passos numerados.
6. **Depoimento:** pessoa real, nome, escritório e cidade.
7. **Chamada final:** fundo verde com formas, título e botão em azul-marinho.
8. **Rodapé:** logo, links, contato, CNPJ.

### Componentes

| Elemento | Especificação |
| --- | --- |
| Botão principal | Pílula, fundo `#22c55e`, texto `#052e16` em Sora 600 16px, altura 48px, padding lateral 24px. Hover: halo verde `0 0 0 4px rgba(34, 197, 94, 0.25)` |
| Botão secundário | Pílula, fundo transparente, contorno de 1px `#2b3a52` (escuro) ou `#e2e8f0` (claro), texto na cor principal |
| Card | Raio 16px, fundo `#152034` (escuro) ou `#ffffff` com borda `#e2e8f0` (claro), padding 24 a 32px, sem sombra |
| Etiqueta / eyebrow | Pílula pequena, fundo `rgba(34, 197, 94, 0.14)`, texto `#4ade80` (escuro) ou fundo `#dcfce7` e texto `#14532d` (claro) |
| Campo de formulário | Altura 48px, raio 20px, borda `#334155` (escuro) ou `#cbd5e1` (claro); foco com borda verde |
| Largura do conteúdo | Máximo 1200px; texto corrido no máximo 680px |
| Espaço entre seções | 96 a 160px no desktop, 64 a 96px no celular |

### Movimento

- Discreto e com propósito: aparecer suave ao rolar (opacidade e 8 a 16px de deslocamento, 400 a 600ms), hover de botão em 300ms com a curva `cubic-bezier(0.16, 1, 0.3, 1)`.
- Sem parallax exagerado, sem texto girando, sem animação em loop chamando atenção.
- Respeite `prefers-reduced-motion`: sem deslocamento nem escala para quem pediu menos movimento.
- Revise toda animação com as skills do Emil Kowalski.

### SEO e indexação (obrigatório em todo site e landing page)

Todo site ou landing page é publicado **indexável** e sai com os dois arquivos abaixo na raiz do domínio:

- **`robots.txt`** liberando tudo e apontando o sitemap:

  ```text
  User-agent: *
  Allow: /

  Sitemap: https://[dominio]/sitemap.xml
  ```

- **`sitemap.xml`** com todas as páginas públicas, atualizado a cada página nova:

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://[dominio]/</loc>
      <lastmod>[AAAA-MM-DD]</lastmod>
    </url>
  </urlset>
  ```

E em cada página:

- **Tudo indexável:** nenhuma página pública com `noindex`, `nofollow` ou bloqueio no `robots.txt`. Ambiente de teste (homologação) é a única exceção e nunca vai para o domínio oficial.
- `<html lang="pt-BR">`, `<title>` único (até 60 caracteres, com "DêConta") e `<meta name="description">` única (até 155 caracteres), no tom da marca.
- URL canônica (`<link rel="canonical">`), um único `<h1>` por página e títulos em ordem (`h2`, `h3`).
- Open Graph e cartão de redes sociais (`og:title`, `og:description`, `og:image` de 1200 × 630 com as formas da marca).
- Texto alternativo em português em toda imagem; links com texto que explica o destino.
- Dados estruturados (JSON-LD) de `Organization` e, quando houver preço, `SoftwareApplication`.
- Favicon com o símbolo (`favicon.svg`).

### Performance e validação no PageSpeed Insights

Antes de publicar, e de novo depois de publicado, rode a página no **[PageSpeed Insights](https://pagespeed.web.dev)**. Ele mostra a análise completa em **celular e desktop**: Performance, Acessibilidade, Boas práticas e SEO, além das métricas de experiência real.

| Critério | Meta mínima, em celular e desktop |
| --- | --- |
| Performance | 90 ou mais |
| Acessibilidade | 95 ou mais |
| Boas práticas | 95 ou mais |
| SEO | 100 |
| LCP (maior elemento visível carregado) | Até 2,5s |
| INP (resposta ao toque ou clique) | Até 200ms |
| CLS (estabilidade do layout) | Até 0,1 |

Corrija tudo o que o relatório apontar até bater as metas. Guarde o resultado (print ou link do relatório) junto com a entrega. O que mais derruba a nota, e como evitar:

- Imagens em SVG (ilustração, ícone, logo) ou WebP/AVIF (foto e tela do produto), no tamanho em que aparecem, com `width` e `height` definidos e `loading="lazy"` abaixo da primeira tela.
- A imagem principal do topo carrega com prioridade (`fetchpriority="high"`), nunca com `lazy`.
- Fonte Sora com `display=swap` e só os pesos usados.
- Sem scripts de terceiros desnecessários; os que ficarem carregam depois da página (`defer`).
- Animação só em `transform` e `opacity`.
- Contraste de leitura mínimo 4,5:1 em texto (seção 5 traz as combinações aprovadas).

### Responsividade: validar em quatro tamanhos

Toda página é conferida, no navegador, em cada um destes tamanhos, rolando a página inteira:

| Tamanho | Largura de teste | O que conferir |
| --- | --- | --- |
| Celular | 360px e 390px | Uma coluna, texto legível sem zoom, botões com pelo menos 44px de altura, nada vazando para os lados, menu funcionando |
| Tablet | 768px e 1024px | Grades de duas colunas, imagens sem distorcer, formas da marca sem cobrir o texto |
| Desktop pequeno | 1280px a 1366px | Hero inteiro na primeira tela, sem espaços vazios estranhos |
| Desktop grande | 1920px | Conteúdo centralizado no limite de 1200px, sem texto esticado de ponta a ponta |

Nenhuma rolagem horizontal em nenhum tamanho. Se algo quebrar em um deles, a página não está pronta.

---

## 12. Peças por formato

| Peça | Tamanho | Composição |
| --- | --- | --- |
| Post quadrado | 1080 × 1080 | Formas no terço superior; título 64 a 80px; uma linha de apoio; logo pequena no rodapé |
| Post retrato | 1080 × 1350 | Igual ao quadrado com espaço para tela do produto ou ilustração no meio |
| Story / Reels capa | 1080 × 1920 | Faixa de formas no topo; título grande no meio; botão ou chamada embaixo, fora da área de interface do app (150px de margem em cima e embaixo) |
| Capa LinkedIn | 1584 × 396 | Composição de referência; deixe o canto inferior esquerdo livre (foto de perfil) |
| Banner de e-mail | 600 × 200 | Composição de referência reduzida; texto mínimo 16px; fundo sólido, sem depender de SVG (exporte PNG para e-mail) |
| Apresentação | 16:9 | Capa com formas; slides de conteúdo em fundo `#0f172a` com título 40px e no máximo 6 linhas; divisórias com a pílula verde |
| Anúncio | Conforme a plataforma | Uma mensagem só, imagem do produto ou ilustração, botão verde, logo |

Em toda peça: logo presente (completa ou símbolo), uma única mensagem principal, o verde em no máximo 10% da área (exceto a chamada final com fundo verde), e nenhum texto menor que 14px em tela ou 9pt impresso.

---

## 13. Checklist final contra "AI slop"

Antes de publicar, a peça precisa passar em tudo:

- [ ] Passou por **Impeccable** (crítica e polimento) e, se tem animação, pelas skills do **Emil Kowalski**.
- [ ] Landing page ou site criados com a **Taste Skill**.
- [ ] `AGENTS.md` na raiz do projeto, preenchido com todos os blocos do mapa da seção 1 e atualizado com as decisões desta entrega.
- [ ] "DêConta" escrito certo em todos os lugares.
- [ ] Português correto, no tom de voz da DêConta, sem hífen ou travessão separando ideias no meio do texto (só vírgula e ponto), sem emoji, sem superlativo vazio, sem palavra em inglês desnecessária.
- [ ] Texto revisado contra a tabela "Escrita sem AI slop" (seção 3): nenhum verbo de efeito vazio, contraste fabricado, trio por hábito ou abertura genérica.
- [ ] Só cores da paleta; verde é o destaque, não o fundo de tudo.
- [ ] Só Sora; hierarquia por peso e cor.
- [ ] Formas da marca seguindo a seção 7 (pílulas perfeitas, de 3 a 5 formas, nada atrás do texto).
- [ ] Imagens em todas as seções; ilustração flat em SVG; ícones só do lucide com traço 1,75.
- [ ] Nada de: degradê roxo-azulado, cards com borda colorida à esquerda, emoji como ícone, grade de "três cards iguais com ícone" sem imagem, números inventados, banco de imagem genérico, brilho neon, sombra pesada.
- [ ] Contraste de leitura conferido nos fundos usados.
- [ ] Responsividade conferida em celular, tablet, desktop pequeno e desktop grande (seção 11), sem rolagem horizontal.
- [ ] Site ou landing page: `sitemap.xml` e `robots.txt` publicados, todas as páginas indexáveis, metadados preenchidos.
- [ ] PageSpeed Insights rodado em celular e desktop, com as metas da seção 11 atingidas e o relatório guardado.
- [ ] Faria sentido só com a logo coberta? Se a peça poderia ser de qualquer empresa, falta marca: reforce as formas, o verde e a imagem do produto.
