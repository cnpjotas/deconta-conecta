<div align="center">
  <h1>DêConta × Conecta Cnpjotas 2026</h1>
  <p><strong>Uma landing page para aproximar clientes, negócios e novas ideias.</strong></p>
  <p>
    <a href="https://www.deconta.com.br/"><img src="https://img.shields.io/badge/D%C3%AAConta-marca-22c55e?style=for-the-badge&labelColor=0f172a" alt="DêConta"></a>
    <img src="https://img.shields.io/badge/HTML-CSS-JavaScript-0f172a?style=for-the-badge&labelColor=152034" alt="HTML, CSS e JavaScript">
    <img src="https://img.shields.io/badge/idioma-pt--BR-22c55e?style=for-the-badge&labelColor=0f172a" alt="Português brasileiro">
    <img src="https://img.shields.io/badge/site-est%C3%A1tico-94a3b8?style=for-the-badge&labelColor=0f172a" alt="Site estático">
  </p>
  <p>
    <a href="https://conectacnpjotas.com/">Site oficial do Conecta</a>
    ·
    <a href="https://conectacnpjotas.com/patrocinio">Informações sobre patrocínio</a>
  </p>
</div>

---

## Sobre o projeto

Página-convite do **DêConta**, patrocinador Master do Conecta Cnpjotas 2026. A experiência apresenta o encontro, seus temas e informações práticas, com caminhos para consultar ingressos e oportunidades de patrocínio nos canais oficiais.

| Quando | Onde | Horário divulgado no site oficial |
|---|---|---|
| 12 de dezembro de 2026 | Fundação Helena Antipoff, Ibirité, MG | Das 8h às 17h |

> **Atenção ao horário:** a página oficial do evento informa encerramento às 17h, enquanto a página da Even3 informa 18h. Confirme com a organização antes de divulgar essa informação em campanhas. Fontes e contexto estão em [`REFERENCIAS.md`](REFERENCIAS.md).

## Comece por aqui

### Requisitos

- Node.js
- pnpm ou npm

### Executar localmente

```bash
pnpm dev
```

Abra [http://127.0.0.1:4173](http://127.0.0.1:4173).

Para usar outra porta:

```bash
pnpm dev -- --port 3000
```

Ou configure a variável de ambiente `PORT`:

```bash
# macOS ou Linux
PORT=3000 pnpm dev

# PowerShell
$env:PORT=3000; pnpm dev
```

O servidor local entrega os arquivos de `dist/`. Não há etapa de build nem dependências de runtime a instalar.

## O que a página oferece

- Apresentação do evento e do convite aos clientes DêConta.
- Destaque para os temas publicados: Reforma Tributária, Inteligência Artificial e Capitalismo Social.
- Links para ingressos, programação oficial, localização e patrocínio.
- Perguntas frequentes e opção para adicionar o evento à agenda (`.ics`).
- Layout responsivo, navegação móvel acessível e conteúdo que permanece legível sem JavaScript.
- Metadados para compartilhamento, dados estruturados de evento e organização e recursos locais para a página.

## Estrutura

```text
.
├── dist/
│   ├── assets/           # Fotos provisórias, marca, fonte e imagem social
│   ├── app.js            # Menu móvel e interação dos temas
│   ├── conecta.ics       # Evento para calendário
│   ├── index.html        # Conteúdo e metadados
│   ├── robots.txt
│   ├── sitemap.xml
│   └── styles.css        # Layout, identidade visual e responsividade
├── scripts/
│   ├── serve.mjs         # Servidor local para dist/
│   └── verify.mjs        # Verificação visual em vários tamanhos
├── BRANDING-DECONTA.md   # Guia de marca
├── DESIGN.md             # Decisões de design e acessibilidade
├── PRODUCT.md            # Público, propósito e escopo
└── REFERENCIAS.md        # Fontes factuais e imagens
```

## Editar conteúdo

- **Texto, links e metadados:** `dist/index.html`
- **Estilos e responsividade:** `dist/styles.css`
- **Menu e temas interativos:** `dist/app.js`
- **Fotos provisórias:** arquivos `.webp` em `dist/assets/`
- **Dados de calendário:** `dist/conecta.ics`

As fotografias são imagens genéricas do Unsplash, usadas como placeholders; não representam registros do evento. As fontes de cada imagem estão em [`REFERENCIAS.md`](REFERENCIAS.md). Não acrescente preços, descontos, depoimentos, patrocinadores ou condições comerciais sem confirmação oficial.

## Verificação

O script `scripts/verify.mjs` confere a página em diferentes larguras de tela e verifica interações, imagens, fonte e erros de console. Ele usa o servidor local e o navegador configurado no ambiente de desenvolvimento:

```bash
pnpm dev
```

Em outro terminal:

```bash
node scripts/verify.mjs
```

## Publicação

Os arquivos estáticos prontos para publicação estão em `dist/`. Configure a hospedagem para servir essa pasta como raiz. Antes de disponibilizar publicamente, revise o domínio canônico em `dist/index.html` e `dist/sitemap.xml`, confirme o horário com a organização e faça uma verificação final dos links e das informações do evento.

---

<div align="center">
  <sub>Feito para o encontro entre DêConta e Conecta Cnpjotas.</sub>
</div>
