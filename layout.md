# Especificacao de Layout Completa - Metrik Marketing

## Direcao de Arte Global
- **Fontes Base:** Unbounded (Heading) + Geist (Body) - Tech & Futuristic Display
- **Paleta de Cores:**
  - Background Principal: `#000000`
  - Surface/Paineis: `#0a0a0a` ou vidro `rgba(255, 255, 255, 0.02)`
  - Destaque Primario: `#00FFFF` (Cyan) + Glow `rgba(0, 255, 255, 0.4)`
  - Destaque Secundario: `#FFDE21` (Yellow)
  - Texto Principal: `#FFFFFF`
  - Texto Secundario/Muted: `#a0a0a0`
- **Elementos Constantes:** Cantos chanfrados (geometric tech clip-path), grids sutis ao fundo, glows de luz direcional.

---

## Secao 1: Hero

### Arquetipo e Constraints
- **Arquetipo:** Hero Dominante + Spotlight
- **Constraints:** Texto com Gradiente, Botao com Glow, Absolut Positioning (Header)
- **Justificativa:** Cria impacto imediato focando 100% na proposta de valor, com um elemento luminoso atras puxando o olhar.

### Conteudo
- Headline: Ajudamos empresas a vender mais todos os dias atraves de Trafego Pago, Estrategia Digital e Midias Sociais.
- Subheadline: Nao e sobre curtidas. E sobre gerar leads qualificados, aumentar o faturamento e criar uma estrutura digital previsivel de vendas. Estrategias personalizadas para negocios que querem crescer de verdade.
- CTA: AGENDAR CONSULTORIA GRATUITA
- Badge: Aceleradora de Vendas B2B/B2C

### Layout
- Padding: `160px 0 80px`. Min-height: `100vh`.
- Container: Max-width `1100px`, texto centralizado.
- O header fica absolute no top com `32px 48px` de padding.
- Fundo contem `#00FFFF` radial gradient filter blur `80px`.

### Tipografia
- Badge: Geist `0.75rem`, weight 600, uppercase, letter-spacing `0.1em`.
- Headline: Unbounded `clamp(2.5rem, 6vw, 5rem)`, weight 900, line-height `1.1`, tracking `-0.02em`.
- Subheadline: Geist `clamp(1rem, 2vw, 1.25rem)`, weight 400, max-width `800px`.
- CTA: Unbounded `0.875rem`, weight 700, letter-spacing `0.05em`.

### Cores
- Badge: Cor `#00FFFF`, border `rgba(0, 255, 255, 0.2)`.
- Headline: "Ajudamos empresas a vender mais todos os dias" em linear-gradient `90deg, #FFFFFF, #00FFFF`. Resto `#FFFFFF`.
- Subheadline: `#a0a0a0`.
- CTA: Background `#FFFFFF`, texto `#000000`. Hover background `#00FFFF`. Glow CTA: Radial gradient `#FFDE21` opacidade `0.4`.

### Elementos Visuais
- Spotlight traseiro: Div absolute, blur 80px.
- Botao tem um clip-path chanfrado: `polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)`.

### Animacoes
- Spotlight flutua com keyframes translateY de `10px` a cada `4s` ease-in-out.
- Entrada do texto: Fade-up de `20px` opacity 0 para 1. Duracao `800ms` cubic bezier `(0.16, 1, 0.3, 1)`.

### Interatividade
- Botao on hover: Elevacao `translateY(-2px)`, revela o glow amarelo `#FFDE21` interno escalando de `scale(0)` para `scale(1)`.

### Responsividade
- Mobile: Padding diminui para `120px 0 60px`. Headline cai para `2.5rem`.

---

## Secao 2: Prova Rapida (Abaixo do Hero)

### Arquetipo e Constraints
- **Arquetipo:** Bento Box / Modular (Grid 4 colunas)
- **Constraints:** Glassmorphism, Selective Color (Vendas e Valores em destaque), Hover Lift.
- **Justificativa:** Numeros precisam ser facilmente escaneaveis. Os paineis de vidro organizam as provas sem pesar o layout.

### Conteudo
- Card 1: Desde | 2018 | no mercado
- Card 2: +R$ | 1.000.000 | gerenciados em anuncios
- Card 3: Estrategias baseadas em | Dados | nao em achismo
- Card 4: Foco total em | Vendas | e maximo ROI

### Layout
- Grid: `grid-template-columns: repeat(4, 1fr)`. Gap `24px`.
- Container wide: `max-width: 1400px`. Padding `60px 0 120px`.
- Cada card tem padding `48px 32px` e bordas chanfradas (clip-path brutalista).

### Tipografia
- Label superio (metric-value): Geist `0.875rem`, uppercase, letter-spacing `0.1em`.
- Numero/Destaque Central (metric-title): Unbounded `clamp(1.8rem, 3vw, 2.5rem)`, weight 900.
- Texto base (metric-desc): Geist `1rem`.

### Cores
- Cards: Background `rgba(255,255,255, 0.02)`. Border `rgba(255,255,255, 0.05)`.
- Texto labels: `#a0a0a0`.
- Titulo nos Cards 1,2 e 3: `#00FFFF`.
- Titulo no Card 4 (Vendas): `#FFDE21`.
- Border hover no card 4: `rgba(255, 222, 33, 0.2)`.

### Elementos Visuais
- Backdrop filter `blur(24px)` nos cards para puxar o grid layer traseiro.

### Animacoes
- Scroll trigger (View Timeline): Staggered fade in com translateY de `40px`, com `100ms` de atraso entre cada card.

### Interatividade
- Hover state: Card sobe `translateY(-8px)`, border color transiciona para cyan opaco `rgba(0, 255, 255, 0.3)`.

### Responsividade
- Tablet: Grid de `2` colunas.
- Mobile: Grid de `1` coluna.

---

## Secao 3: Quem Somos (Socios & Eventos)

### Arquetipo e Constraints
- **Arquetipo:** Split Assimetrico (40% Texto / 60% Carrossel)
- **Constraints:** Carousel Coverflow 3D, Imagem Granulada (Noise Texture), Sticky Element (Texto travado na esquerda).
- **Justificativa:** Entrega a narrativa institucional enquanto atende ao pedido de colocar as fotos dos socios (Alvaro Pandev e Edilson Santiago) e eventos. O Coverflow 3D da um aspecto premium, high-tech, tirando a secao do lugar comum.

### Conteudo
- Titulo: Conheca a Metrik
- Texto: A Metrik Marketing e uma agencia de marketing digital que atua desde 2018 ajudando empresas de diferentes segmentos a aumentarem seu fluxo de atendimento, autoridade digital e faturamento. Ao longo dessa jornada, ja investimos e administramos mais de R$ 1 milhao em campanhas patrocinadas, sempre com foco em performance, previsibilidade e crescimento sustentavel. Mais do que anunciar, nos estruturamos o marketing da sua empresa para gerar resultados no curto, medio e longo prazo.
- Metodologia: Dados reais, Estrategia clara, Processos bem definidos, Decisoes orientadas a vendas.
- Fotos do Carrossel: Socios Alvaro Pandev, Socio Edilson Santiago e Fotos de Eventos/Imersoes.

### Layout
- Container em Flexbox. Left Column `width: 40%`, padding-right `80px`. Right Column `width: 60%`.
- Left Column vira Sticky. `top: 15vh`.
- O carrossel (Right View) usa um swiper container com largura transbordando para fora do viewport (`Overflow Visible` ou `Bleed Right`).
- Espacamento da secao: Padding topo `120px`, base `120px`.

### Tipografia
- Titulo: Unbounded `3.5rem`, bold, line-height `1.1`.
- Parafo: Geist `1.125rem`, weight 300, line-height `1.8`. Corzinha muted `#a0a0a0`.
- Labels do Carrossel: Unbounded `1rem`, uppercase, espaçamento alto.

### Cores
- Fundo: `#050505` (Leve mudanca da base preta para dividir a secao).
- Titulo: `#FFFFFF`.
- Paragrafo: `#a0a0a0`.
- Overlay no Carrossel: Gradiente escuro para frente `linear-gradient(to top, rgba(0,0,0,1), transparent)`. Nome overlay em Cyan `#00FFFF`.

### Elementos Visuais
- Noise texture sobre as fotos dos socios em `opacity: 0.15` usando mix-blend-mode `overlay`.
- Imagens dos socios em preto e branco (grayscale `100%`) no estado inativo do carrossel, cor volta no card ativo.

### Animacoes
- Entrada do texto: Slide da esquerda com `opacity 0` chegando a `1`, duracao `1s`.
- O carrossel gira em Coverflow mode (telas inclinadas em perspectiva tridimensional).
- Efeito de parallax no texto interno dos slides.

### Interatividade
- Cursor customizado "Arrastar" (Custom Arrow SVG Cursor) quando o usuario passa o mouse sobre a area do carrossel.
- Click nas fotos centra-as na tela.

### Responsividade
- Breakpoint 1024px: Layout reverte para empilhado (Stack). Texto ocupa 100%, perde position sticky e carrossel desce, usando largura de `100%`.
- Altura dos cards do carrossel no mobile: `350px`.

---

## Secao 4: Nosso Diferencial

### Arquetipo e Constraints
- **Arquetipo:** Zoom Focus / Single Focus
- **Constraints:** Texto Revelar (Type de Scroll Progress), Dark Mode Extreme, Texto com Sombra Colorida.
- **Justificativa:** Reduz a carga cognitiva da secao anterior. Forca o foco unicamente na promessa forte "Nao vendemos promessas irreais". Como o texto e revelado com o scroll, prende a atencao do leitor 100%.

### Conteudo
- Titulo: Marketing com metodo, estrategia e resultado
- Conteudo: Diferente de muitas agencias do mercado, nao vendemos promessas irreais. Aqui, cada decisao e baseada em dados, testes e otimizacoes constantes. Nada de achismo. Nada de formulas magicas. Nos atuamos como o setor de marketing remoto da sua empresa, com um custo ate 70% menor do que manter uma equipe interna — e com foco total em gerar retorno sobre o investimento.

### Layout
- Flex center absolute text num container de altura `150vh`.
- Text container usa position sticky `top: 30vh`.
- Largura do texto max-width `900px`, texto centralizado.

### Tipografia
- Titulo: Unbounded `1rem`, text-align center, uppercase, letter-spacing `0.2em`. Text-stroke e neon.
- Texto gigante (Conteudo): Geist `clamp(1.5rem, 3.5vw, 3rem)`. Font-weight 500, line-height `1.3`. Todas as palavras iniciam com `opacity: 0.2`.

### Cores
- Background: `#000000`. Limpo, vindo do `050505` da secao anterior.
- Titulo: Cyan luminoso text-shadow `0 0 10px rgba(0, 255, 255, 0.5)`. Text color `#00FFFF`.
- Conteudo base: rgba(255, 255, 255, 0.2).
- Conteudo ativo (preenchido na rolagem): `#FFFFFF`. Palavras especificas ("dados", "achismo", "70% menor") preenchidas em `#FFDE21` (Amarelo).

### Elementos Visuais
- Fundo sem nenhum asset, total espaco negativo, black hole style.

### Animacoes
- Scroll Storytelling usando `View Timeline`. Cada palavra do conteudo principal vai de `opacity: 0.2` para `opacity: 1` e adiciona shadow progressivamente a medida que a secao sofre scroll vertical.

### Interatividade
- Experiencia inteiramente movida a roda do mouse. Exige atencao passiva via scroll.

### Responsividade
- Mobile: Container height reduz e tamanho das letras cai para legibilidade, com padding lateral `24px`.

---

## Secao 5: Para quem e a Metrik

### Arquetipo e Constraints
- **Arquetipo:** Asymmetric Grid / Modular
- **Constraints:** Hover Reveal, Cursor Repel, Bleed Top (alguns boxes mais altos que outros).
- **Justificativa:** Quebra a centralizacao do diferencial usando um padrao mais fragmentado na tela. Itens de lista tradicionais sao chatos; cards dispersos e interativos transmitem inovacao digital.

### Conteudo
- Titulo: A Metrik e ideal para empresas que:
- Item 1: Querem aumentar vendas e leads, nao apenas seguidores
- Item 2: Precisam de uma estrutura digital profissional
- Item 3: Ja anunciam, mas nao tem resultados consistentes
- Item 4: Querem escalar com trafego pago de forma inteligente
- Item 5: Buscam um parceiro estrategico, nao apenas um prestador
- Fechamento: Se esse e o seu caso, voce esta no lugar certo.

### Layout
- Grid Masonry Assimetrico. Coluna 1 (Cards 1 e 3), Coluna 2 (Titulo e Card 5), Coluna 3 (Cards 2 e 4).
- Gap `32px`. Max width container `1200px`.
- Padding `100px 0`.

### Tipografia
- Titulo de Secao: Unbounded `2.5rem`, color `#FFFFFF`.
- Texto dos cards: Geist `1.25rem`, light weight 300. Destacar em bold certas frases (ex: "nao apenas seguidores").
- Fechamento: Unbounded `1.2rem`, color `#00FFFF`, margin-top `60px`.

### Cores
- Fundo: `#000000`.
- Cards: Background gradient subtil de `#111111` no top left a `#050505` bottom right.
- Bordas Cards: `#1a1a1a`. Hover bordas: `#00FFFF`.
- Numeros de Fundo nos Cards (ex: 01, 02... gigantes no fundo da div): `rgba(255, 255, 255, 0.03)`.

### Elementos Visuais
- Cada card possui um numero gigante de fundo usando font `Unbounded` weight `900` tamanho `8rem` cortado no bottom right via overflow hidden do pai (Clip-path).

### Animacoes
- Entrada staggered normal on scroll enter viewer (translateY subindo).

### Interatividade
- Cursor Ripple Reveal Effect: Quando o mouse entra no card, o cursor revela um brilho de raio 100px interno.
- Hover em *qualquer* card obfusca (grayscale 100%, opacity 0.4) os irmaos e aplica brilho de border scale 1.05 no item atuado.

### Responsividade
- Tudo converge em 1 coluna unificada no mobile. Numerators desaparecem. Padding 60px. Texto desce pra `1.125rem`.

---

## Secao 6: Solucoes

### Arquetipo e Constraints
- **Arquetipo:** Scroll Animado Vertical + Sticky Image Base
- **Constraints:** Scroll Triggered, Text Split, Rotated Container (iconografia sutil nas descricoes).
- **Justificativa:** Muitas solucoes tendem a cansar o leitor em blocos de texto compridos iguais. Usar sticky container esquerda e listas de dados deslizando pela direita cria uma narrativa sequencial elegante e imersiva.

### Conteudo
- Titulo: Solucoes pensadas para gerar crescimento real
- Estrutura Digital Completa: Criamos toda a base digital...
- Gestao de Trafego no Meta (Facebook e Instagram): Campanhas altamente segmentadas...
- Gestao de Trafego no Google: Atraimos pessoas que ja estao buscando...
- Landing Pages que Convertem: Criamos paginas focadas...
- Social Media Estrategico: Gerenciamos suas redes sociais...

### Layout
- `display: flex`, container `width: 100%`, `height: 400vh` (para os 5 servicos permitirem rolagem ampla sem passar rapido).
- Container Left (`40%`): Fixado pelo sticky no Top 150px. Mostra o Icone animado e sub-imagem do relatorio/dashboard ou wireframes (Assets digitais ficticios ou texturas graficas correspondentes).
- Container Right (`60%`): Percorre as secoes, cada item de solucao tem uma altura de min `80vh`, flex vertical center com padding.

### Tipografia
- Servicos Headings: Unbounded `2rem`, weight 700.
- Body Servicos: Geist `1.1rem`, color `#a0a0a0`, linha com dots na bullet part.
- Topico ativo da left bar: Ghost text, full outline, bold, gigante.

### Cores
- Background: Base preta mas com gradient `#040b12` a `#000000` (leve toque noturno azulejado bem obscuro).
- Active card Text: `#FFFFFF`, Inactive card text escurece para `#333333`.
- Icones esquerdos e grafico iluminado em Cyan `#00FFFF`.

### Elementos Visuais
- Um "Dashboard Digital" ou "HUD" na barra lateral esquerda se modifica visualmente conforme as 5 fases entram no threshold da Intersect Observer.
- Wireframes wire neon.

### Animacoes
- Mudanca de icone e asset direito acontecem via Morph Shape e SVG stroke path drawing.
- A rolagem vertical aciona o opacity in/out para escurecer a solucao anterior e clarear a solucao atual que a viewport captura.

### Interatividade
- Rolagem simples. Interacao 100% ligada a scroll-timeline para ditar fluidez.

### Responsividade
- Breakpoint 768px: Remove-se a estrutura pesada CSS Sticky left/right box. Subside em cards de 100% largura empilhados com os icones no topo com borda de `1px` gradient.

---

## Secao 7: Como Funciona

### Arquetipo e Constraints
- **Arquetipo:** Timeline Horizontal Cinematico
- **Constraints:** Cursor Horizontal Drag, Text Vertical, Stroke Dashed Animated.
- **Justificativa:** O processo em seis (6) etapas deve provar sistematizaçao e metodo cientifico B2B. Uma timeline customizada evoca processos de engenharia que o prospect empresarial mais conservador (ou scale-up) adora comprar.

### Conteudo
- Titulo: Nosso processo e simples e eficiente
- 1: Diagnostico do seu negocio
- 2: Analise de mercado e concorrencia
- 3: Criacao da estrategia personalizada
- 4: Implementacao da estrutura digital
- 5: Trafego pago, otimizacoes e escala
- 6: Acompanhamento, metricas e evolucao constante

### Layout
- Container Full Bleed. Slider track com `width: max-content`. Margin bottom `120px`. Top `80px`.
- Linha SVG central cruza o centro de todos os espacos horizontalmente. Box impares em cima da linha central, Boxes pares na base da linha central (formato ECG batimento senoidal).

### Tipografia
- Numero dos steps: Unbounded, Stroke only (`-webkit-text-stroke: 1px rgba(255, 255, 255, 0.1)`), color transparent, font-size `6rem`. Absoluto no fundo das palavras.
- Titulo dos steps: Geist `1.25rem`, strong caps weight 600, color branca.

### Cores
- Timeline Line: Cor Cyan escuro `#006666`. Bolinha indicadora Cyan bright `#00FFFF`.
- Dot Indicator na linha que acende em yellow `#FFDE21` on hover/view.

### Elementos Visuais
- Linha de conexao desenhada de ponto vermelho/amarelo em dot line trace.

### Animacoes
- Como esta secao e horizontal, utiliza Locomotive scroll parallax ou um Swiper no modo drag-free. O ponto da linha percorre o viewport do comeco ao fim na medida que o usuario desliza.
- Cada etapa escala up "Scale In" quando chega em seu 30% view central da tela.

### Interatividade
- Puxar as caixas lateralmente com rato ou dedo gera movimento fluido de mola "Drag Free Elasticity".

### Responsividade
- Tablet/Mobile: Transforma a linha horizontal em linha Vertical na margem Left (Timeline classica). Pontos alinham verticalmente a esquerda.

---

## Secao 8: Quebra de Objecao e Consulta Gratuita

### Arquetipo e Constraints
- **Arquetipo:** Split Horizontal + Spotlight Central
- **Constraints:** Glow Central Cyan, Botao Pulse Loop, Imagem com Overlay Noise.
- **Justificativa:** Ultimo apelo argumentativo. Necessario alta densidade visual convergindo todo foco para a call-to-action.

### Conteudo
- Titulo: Ainda em duvida se a Metrik pode gerar resultados para voce?
- Conteudo: E exatamente por isso que oferecemos uma consultoria gratuita. Nessa conversa, fazemos uma analise criteriosa da sua empresa, identificamos: Gargalos de vendas, Oportunidades de crescimento, Ajustes necessarios no marketing e o Melhor caminho para escalar seus resultados. Sem compromisso. Sem promessa vazia. So estrategia.
- CTA: QUERO AGENDAR AGORA

### Layout
- Bloco solido com bordas arredondadas (24px raio), flutuante com margem 24px da parent window.
- Max-width `900px`, margin `0 auto 120px`. Altura cerca de `600px` padding forte nas laterais (ex `80px`).
- Foco em alinhamento Center total de todos os elementos P/ Titulos / Listas / CTA.

### Tipografia
- Titulo Objecao: Unbounded `2.5rem`, color `#FFFFFF`. Text-shadow Cyan sutil.
- Paragrafos Explicativos: Geist `1.125rem`, color `#e0e0e0`, texto corrido intercalado. Texto em bold em "Sem compromisso. Sem promessa vazia. So estrategia".

### Cores
- Fundo container: Radial gradient `#04161a` (Dark Cyan) saindo do meio inferior ate chegar ao pretao solido nas bordas. Border color cyan solido `rgba(0, 255, 255, 0.5)`. Box shadow outer blur `0 0 60px rgba(0, 255, 255, 0.1)`.
- Buttom Color: `#000000` text sobre background solido `#00FFFF`. Glow externo yellow hover `#FFDE21`.

### Elementos Visuais
- Elementos texturizados com scanlines ou micro dot grid como asset traseiro opacidade muito fraca dentro do bloco da box shadow.

### Animacoes
- Glow respira continuamente "Breathe Loop" de shadow radius.
- Botao "Pulse Loop" do scale muito leve scale(1.03) ao scale(1) eternamente atraindo cliques.

### Interatividade
- Efeito Glitch Effect rapido aleatorio de 0.2s nos textos bold em hover no bloco para invocar Matrix/Cyberpunk "So estrategia" vibe.

### Responsividade
- Mobile: box fica totalmente encostada com borda 24px removendo padding. Border radius pequeno.

---

## Secao 9: Prova Social

### Arquetipo e Constraints
- **Arquetipo:** Infinite Scroll / Logo Marquee
- **Constraints:** Scroll Horizontal Infinito, Filter Grayscale, Opacity reduzida.
- **Justificativa:** Validar autoridade por volume. Layout horizontal rodando soluciona espaco e aumenta a dinamica de validacao constante.

### Conteudo
- Titulo: Algumas empresas que ja confiaram na Metrik
- Area para Logos (Logos temporarias de placeholder com formas ou fontes padroes corporativas se nescessario SVG generico ate os reais serem inseridos).

### Layout
- Margins globais zeradas no container especifico. Full viewport width track.
- Duas (2) linhas rodando em sentidos opostos (uma esquerda, uma direita).
- Altura dos logos limitados a `40px` ou `60px`.

### Tipografia
- Header: Unbounded `1rem`, letter spacing longo, color `#a0a0a0`, opacity `0.8`, text-align center padding bottom `40px`.

### Cores
- Fundos totalmente negros `#000000`.
- Logos em branco SVG: Incial com opacity `0.3` e `filter: grayscale(100%)`.
- Logos viajam sem margens cortadas.

### Elementos Visuais
- Mascara Gradiente nos limites Right e Left do viewport para criar illusao suave de sumir fading-to-black `mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)`.

### Animacoes
- Marquee scroll infinito (Linear speed 25 segundos do translate `0` a `-50%`).

### Interatividade
- Hover state paralisa as duas tracks da marquee, eleva opacity individual do logo para `1.0` aplicando o filtro da cor brand do logo em mix blend screen para aparecer com glow ou revertendo do cinza neutro perfeitamente colorido.

### Responsividade
- Mobile: Mask image mais agresivas nos paineis (30%) p/ melhor adaptacao; logo width diminui. Header desce para `0.85rem`.

---

**Resumo das Direcoes e Assets**
Esta documentacao exige que um script AOS/LocomotiveScroll e uma biblioteca GSAP ou IntersectionObservers nativos deem peso a gravidade dos layers. Tudo deve prezar pelo performance frame rate (60FPS). Imagens texturizadas de placeholder devem ser implementadas usando canvas background ou css `mix-blend-mode` e background SVG inline data uri's para zeros calls de network requests em padroes geometricos decorativos.

Fim da Especificacao. Pronta para Desevolvimento.
