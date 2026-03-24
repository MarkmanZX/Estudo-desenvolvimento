# Task de Implementação — Fase 2.2 (React Basics)

## Objetivo
Implementar um componente simples de cartão de concerto para praticar:
- Props
- `useState`
- `useEffect`

Esta task é baseada na estrutura atual do frontend já existente no projeto.

## Contexto atual mapeado
- A página de shows está em [frontend/bandwebsite/src/pages/ConcertsPage.js](frontend/bandwebsite/src/pages/ConcertsPage.js) e hoje está com conteúdo mínimo.
- Existe estrutura de estilos em [frontend/bandwebsite/src/pages/ConcertsPage.css](frontend/bandwebsite/src/pages/ConcertsPage.css), incluindo classes como `.concerts-grid` e `.concert-card`.
- A pasta de componentes de shows já existe em [frontend/bandwebsite/src/components/concerts](frontend/bandwebsite/src/components/concerts).

## Escopo da task (MVP)
Você deve criar um componente chamado **CartaoConcerto** e usá-lo em `ConcertsPage` com dados mockados (sem API nesta etapa).

### 1) Criar componente simples (CartaoConcerto)
Criar arquivo:
- [frontend/bandwebsite/src/components/concerts/CartaoConcerto.js](frontend/bandwebsite/src/components/concerts/CartaoConcerto.js)

O componente deve renderizar:
- Título do show
- Data
- Local
- Descrição curta
- Botão de “Cliquei”

### 2) Passar dados via props
`CartaoConcerto` deve receber via props:
- `titulo`
- `data`
- `local`
- `descricao`

### 3) Usar useState para contador de clicks
Dentro de `CartaoConcerto`:
- Criar estado `clicks` iniciado em `0`
- Incrementar `clicks` ao clicar no botão
- Exibir o valor em tela (`Cliques: X`)

### 4) Usar useEffect para logs
Dentro de `CartaoConcerto`:
- Fazer log no console sempre que `clicks` mudar
- Fazer log de montagem/desmontagem do componente

Exemplo esperado de logs:
- `CartaoConcerto montado: Show XYZ`
- `Clicks atualizados para 3 no show XYZ`
- `CartaoConcerto desmontado: Show XYZ`

## Integração na página de shows
Editar:
- [frontend/bandwebsite/src/pages/ConcertsPage.js](frontend/bandwebsite/src/pages/ConcertsPage.js)

Passos:
1. Importar `CartaoConcerto`
2. Criar um array local com 3 shows mockados
3. Renderizar os cartões com `.map()` dentro de uma `div` com classe `concerts-grid`
4. Passar os dados via props para cada cartão

## Restrições
- Não integrar com backend/API nesta task.
- Não alterar rotas.
- Não criar Context.
- Não adicionar bibliotecas novas.
- Manter foco somente em React Basics (`props`, `useState`, `useEffect`).

## Critérios de aceite
- Componente `CartaoConcerto` criado e reutilizável.
- Dados renderizados por props.
- Contador de cliques funcionando individualmente em cada cartão.
- Logs de `useEffect` visíveis no console (mudança de clicks + mount/unmount).
- `ConcertsPage` exibindo pelo menos 3 cartões mockados.
- Aplicação frontend inicia sem erro (`npm start`).

## Validação manual (passo a passo)
1. Subir frontend:
   - `cd frontend/bandwebsite`
   - `npm start`
2. Abrir rota `/concerts`
3. Clicar no botão de cada cartão
4. Confirmar:
   - contador de cada cartão incrementa separadamente
   - logs aparecem no console do navegador

## Entregáveis
- Código implementado nos arquivos definidos.
- Commits descritivos (sugestão):
  - `feat(frontend): cria componente CartaoConcerto com props`
  - `feat(frontend): adiciona contador de cliques com useState`
  - `feat(frontend): integra CartaoConcerto na ConcertsPage com dados mockados`
