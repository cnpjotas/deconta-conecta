# Design da landing page

## Identidade
Página em formato de convite para o encontro entre clientes DêConta e o Conecta Cnpjotas. A identidade é herdada de BRANDING-DECONTA.md: azul-marinho #0f172a, superfícies #152034, verde #22c55e e fonte Sora local. A composição segue a direção `page-is-the-object` da Taste Skill.

## Composição implementada
Cabeçalho fixo com logo oficial e compra persistente. Hero central, título em duas linhas, data e local visíveis, CTA principal e painel fotográfico com ficha do evento. Conteúdo de relacionamento em duas colunas, menu dos três temas com troca de fotografia, convite a patrocínio, informações práticas e FAQ. Encerramento em campo verde com um ingresso gráfico. Contêiner de 1200px com margens simétricas.

## Componentes e comportamento
Botões em pílula, 48 a 52px, com texto verde profundo sobre verde e contraste claro no CTA azul. Menu móvel com estado acessível e fechamento por Escape. Temas são botões expansíveis; sem JavaScript todas as descrições continuam disponíveis. FAQ usa details/summary nativos. Download de calendário em ICS, sem integração externa ou coleta de dados.

## Responsividade e acessibilidade
Celular em coluna única, teclado com foco visível, um h1, alt em português, links externos com noopener e noreferrer. Imagens com dimensões e carregamento tardio abaixo do hero. Conferência funcional em 360, 390, 768, 1024, 1366 e 1920px sem overflow horizontal. Não há conteúdo dependente de animação. A preferência por movimento reduzido é respeitada.

## Exceções justificadas da inspeção Taste
- `still-page`: marca proíbe loops e pede movimento discreto. A página usa feedback de controles; não força animação de entrada ou vídeo genérico apenas para pontuação.
- `eyebrow`: a heurística confunde o botão de compra da coluna anterior com um rótulo acima da data do ingresso. Não há sobretítulo decorativo nessa posição.
- Sora, contorno de botão secundário e selo de patrocínio seguem o guia de marca.
- Hierarquia de tamanhos inclui informações de evento, título fotográfico e número do ingresso; a variação é intencional, com corpo de 16px e informações auxiliares de pelo menos 14px, exceto CTA compacto do cabeçalho.

## Imagens
Quatro fotografias genéricas Unsplash, convertidas para WebP e substituíveis pelos arquivos de mesmo nome em dist/assets. Não são apresentadas como registros de edições passadas. A origem de cada arquivo está em REFERENCIAS.md. Compartilhamento social em JPG 1200×630 com formas da marca e título, produzido a partir do mesmo HTML e fonte.
