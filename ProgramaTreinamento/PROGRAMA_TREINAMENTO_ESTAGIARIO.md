# 📚 Programa de Treinamento para Estagiário em Programação

Bem-vindo! Este documento contém o plano estruturado de estudo baseado na stack do projeto Vigarista Band Website.

---

## **FASE 1: FUNDAMENTOS (1-2 semanas)**

### 1.1 Git & Versionamento
**Conceitos:**
- Inicializar repositórios
- Commits, branches, merges
- Colaboração com Pull Requests

**Recursos com Links:**
- 🎥 [Git para Iniciantes - Code.org (PT-BR)](https://youtu.be/DqTITcMq68k) - ~30min
- 🎥 [Git & GitHub Completo - Gustavo Guanabara](https://youtu.be/xEKo29OWND4?list=PLHz_AreHm4dm7ZoBccn-A8bp3QmwqYx23) - Playlist ~4h ⭐ **Recomendado**

**Prática:**
- Fazer 5 commits com mensagens descritivas
- Criar 3 branches diferentes
- Fazer um merge com conflito e resolver

---

## **FASE 2: FRONTEND - FUNDAMENTOS (2-3 semanas)**

### 2.1 JavaScript Moderno (ES6+)
**Conceitos essenciais:**
- Arrow functions, const/let
- Destructuring, spread operator
- Promises e async/await
- Array methods (map, filter, reduce)

**Recursos com Links:**
- 🎥 [JavaScript Completo - Curso em Vídeo](https://youtu.be/jS4aFq5-91o) - ~4h
- 🎥 [Async/Await na Prática](https://youtu.be/IqZUtVVI4ao) - ~30min

**Prática:**
```javascript
// Exercício: Converter callback para async/await
// Trabalhar com fetch API básico
```

### 2.2 React Basics (17-18)
**Conceitos:**
- Componentes funcionais
- JSX syntax
- Props & State (hooks: useState)
- Lifecycle com useEffect
- Eventos no React

**Recursos com Links:**
- 🎥 [React do Zero - Maykão Silva](https://youtu.be/wqHJ6WzW8bw) - ~1h30
- 🎥 [React Completo - Cod3r](https://youtu.be/PrchCJftjSY?list=PLuYvnPHEn_78iu1kByQlKXHfzlj_elh6F) - Playlist ~8h ⭐ **Excelente**

**Prática no seu projeto:**
- Criar componente simples (CartãoConcerto)
- Passar dados via props
- Usar useState para contador de clicks
- Usar useEffect para logs

### 2.3 React Router v6
**Conceitos:**
- BrowserRouter
- Routes e Route
- Link vs useNavigate
- Parâmetros de URL (useParams)
- Protected Routes (já existe no projeto!)

**Recursos com Links:**
- 🎥 [React Router v6 - João Gabriel](https://youtu.be/rZQW7dWlUGI) - ~1h

**Prática:**
- Estudar `ProtectedRoute.js` do projeto
- Criar uma nova página de teste
- Implementar navegação entre múltiplas páginas

---

## **FASE 3: FRONTEND - INTERMEDIÁRIO (2-3 semanas)**

### 3.1 Context API
**Conceitos:**
- createContext
- useContext hook
- Provider pattern
- Gerenciamento de estado global

**Recursos com Links:**
- 🎥 [Context API - Rocketseat](https://youtu.be/gI6W1mFqBQc) - ~30min
- 🎥 [Context API Deep Dive](https://youtu.be/5LrDIUGkIbc) - ~45min

**Prática no seu projeto:**
- Estudar `context/AuthContext.js` em detalhes
- Entender como funciona o fluxo de autenticação
- Criar um novo Context para "notificações" (toast messages)

### 3.2 HTTP & Axios
**Conceitos:**
- Requisições GET, POST, PUT, DELETE
- Headers e autenticação
- Interceptadores
- Tratamento de erros

**Recursos com Links:**
- 🎥 [Axios Completo](https://youtu.be/Yq8dUVO6vFo) - ~1h
- 🎥 [Fetch vs Axios](https://youtu.be/gVauVgebaXA) - ~30min

**Prática:**
- Estudar `services/api.js` do projeto
- Entender como o token JWT é injetado
- Criar um hook customizado para requisições

### 3.3 Custom Hooks Pattern
**Conceitos:**
- Isolamento de lógica
- Reutilização de código
- Exemplo: `usePhotos`, `useConcerts`, `useComments`

**Recursos com Links:**
- 🎥 [Custom Hooks - Felipe Rocha](https://youtu.be/x5Ykqp1VhEc) - ~45min
- 🎥 [React Hooks Avançado](https://youtu.be/HJ1p2-lJNYE) - ~1h

**Prática:**
- Criar hook `useFetch` genérico
- Refatorar um componente usando o novo hook
- Estudar os hooks existentes do projeto

### 3.4 Formulários & Validação
**Conceitos:**
- Controlled components
- Validação frontend
- Feedback ao usuário

**Recursos com Links:**
- 🎥 [Formulários React](https://youtu.be/V2kgAXSAyK4) - ~1h
- 🎥 [Validação com React Hook Form](https://youtu.be/IkjJo6n1LnE) - ~40min

**Prática:**
- Estudar `LoginForm.js` e `RegisterForm.js`
- Criar validador customizado
- Implementar feedback visual

---

## **FASE 4: FRONTEND AVANÇADO (1-2 semanas)**

### 4.1 CSS & Responsividade
**Conceitos:**
- CSS Grid e Flexbox
- Media Queries
- Mobile-first approach

**Recursos com Links:**
- 🎥 [Flexbox Completo](https://youtu.be/GW6oJXka5Z0) - ~1h
- 🎥 [Design Responsivo na Prática](https://youtu.be/RJhNgZ4QLK0) - ~1h30

**Prática:**
- Refatorar um componente com Flexbox
- Testar em diferentes resoluções
- Estudar o padrão de CSS do projeto

### 4.2 Otimização & Performance
**Conceitos:**
- React.memo
- useCallback e useMemo
- Code splitting
- Lazy loading

**Recursos com Links:**
- 🎥 [React Performance - Rocketseat](https://youtu.be/BcVAq3Ysv24) - ~1h
- 🎥 [Otimização React Completa](https://youtu.be/oLpvpIxjsFo) - ~1h

**Prática:**
- Analisar componentes do projeto usando DevTools
- Identificar re-renders desnecessários
- Aplicar memo onde apropriado

---

## **FASE 5: BACKEND - FUNDAMENTOS (2-3 semanas)**

### 5.1 Node.js & NPM
**Conceitos:**
- Runtime JavaScript
- Módulos CommonJS
- npm e package.json
- Dependências e versioning

**Recursos com Links:**
- 🎥 [Node.js para Iniciantes](https://youtu.be/7t8dHWxVaIE) - ~1h30
- 🎥 [NPM Completo](https://youtu.be/3O0fTH-C7Ws) - ~45min

**Prática:**
- Entender `api/package.json`
- Instalar dependências
- Explorar o `api/README.md`

### 5.2 Express.js Basics
**Conceitos:**
- Criar servidor HTTP
- Rotas (GET, POST, PUT, DELETE)
- Middleware
- Request/Response

**Recursos com Links:**
- 🎥 [Express Básico](https://youtu.be/2Oyu_d-HEIU) - ~1h
- 🎥 [Express Completo - Cod3r](https://youtu.be/ROE0gDjT3aA?list=PLP-X8zv8kaXMBqMvS3UkuuKTxV-2WqyEk) - Playlist ~6h ⭐ **Excelente**

**Prática no seu projeto:**
- Estudar `api/server.js`
- Compreender a ordem das middlewares
- Criar uma nova rota simples GET

### 5.3 REST API Design
**Conceitos:**
- HTTP status codes
- Convenções de naming
- Request/Response patterns
- CRUD operations

**Recursos com Links:**
- 🎥 [REST API Design - Dev Superior](https://youtu.be/8cYFHJPOu_I) - ~1h
- 🎥 [HTTP Status Codes na Prática](https://youtu.be/5lXDMi9mJqo) - ~30min

**Prática:**
- Documentar as rotas do projeto
- Entender padrão RESTful usado

---

## **FASE 6: BACKEND - BANCO DE DADOS (2 semanas)**

### 6.1 Firebase Realtime Database (específico do projeto)
**Conceitos:**
- Estrutura NoSQL
- Leitura/Escrita de dados
- Listeners em tempo real
- Segurança com regras

**Recursos com Links:**
- 🎥 [Firebase Realtime DB](https://youtu.be/U8gH4hNJYkQ) - ~45min
- 🎥 [Firebase com Node.js](https://youtu.be/5V3C4_5bfio) - ~1h30

**Prática no seu projeto:**
- Estudar `config/firebase.js`
- Entender modelo de dados em `/concerts`, `/photos`, `/comments`
- Fazer requisições simples (read/write)

### 6.2 SQL vs NoSQL
**Conceitos:**
- Diferenças fundamentais
- Quando usar cada um
- Estruturação de dados

**Recursos com Links:**
- 🎥 [SQL vs NoSQL - Código Fonte TV](https://youtu.be/cK6YSErFydE) - ~30min
- 🎥 [Modelagem Firebase](https://youtu.be/6FWjJf_2_Gw) - ~1h

**Prática:**
- Entender porque Firebase Realtime foi escolhido
- Planejar estrutura para uma nova feature

---

## **FASE 7: BACKEND - AUTENTICAÇÃO (1-2 semanas)**

### 7.1 Firebase Authentication
**Conceitos:**
- Registro e login
- JWT tokens
- Custom claims (admin)
- Segurança de senhas

**Recursos com Links:**
- 🎥 [Firebase Auth - Rocketseat](https://youtu.be/xKHkwqKPfvM) - ~45min
- 🎥 [Firebase Auth Completo](https://youtu.be/r_Omo-8oBFE) - ~1h30

**Prática no seu projeto:**
- Estudar `api/middleware/auth.js`
- Entender diferença entre `authenticateUser` e `authenticateAdmin`
- Estudar `api/controllers/authController.js`

### 7.2 JWT & Segurança
**Conceitos:**
- O que é JWT
- Claim-based authorization
- Refresh tokens
- CORS

**Recursos com Links:**
- 🎥 [JWT Explicado](https://youtu.be/kYjVxJKw8t0) - ~1h
- 🎥 [Segurança em APIs](https://youtu.be/e0qzjVmB890) - ~1h

**Prática:**
- Decodificar um token JWT
- Entender o flow de autenticação do projeto
- Implementar nova role (ex: moderador)

---

## **FASE 8: BACKEND - ARQUIVOS & STORAGE (1-2 semanas)**

### 8.1 Google Cloud Storage + Sharp (processamento de imagens)
**Conceitos:**
- Upload de arquivos
- Processamento com Sharp (redimensionamento, thumbnails)
- URLs públicas
- Estrutura de pastas no GCS

**Recursos com Links:**
- 🎥 [GCS com Node.js](https://youtu.be/9TQx7CJpDu8) - ~50min
- 🎥 [Sharp - Image Processing](https://youtu.be/U9-TxK3z8RA) - ~30min
- 🎥 [Upload de Arquivos Express](https://youtu.be/QbKVAyNKxhk) - ~1h

**Prática no seu projeto:**
- Estudar `api/controllers/photoController.js` (linhas 8-100)
- Entender pipeline: Multer → Sharp → GCS
- Testar upload de foto na aplicação
- Entender geração automática de thumbnails

### 8.2 Multer para upload
**Conceitos:**
- Middleware de upload
- Validações de arquivo
- Storage em memória vs disco

**Recursos com Links:**
- 🎥 [Multer Completo](https://youtu.be/e68j_BvXHrg) - ~1h
- 🎥 [Validação de Arquivo](https://youtu.be/M_c2HgF0XkI) - ~30min

---

## **FASE 9: BACKEND - EMAIL & LOGGING (1 semana)**

### 9.1 Nodemailer (envio de emails)
**Conceitos:**
- Configuração SMTP
- Templates de email
- Envio assíncrono

**Recursos com Links:**
- 🎥 [Nodemailer na Prática](https://youtu.be/5-_47iuzqKc) - ~1h
- 🎥 [Gmail + Nodemailer](https://youtu.be/hO3aN-YNCUM) - ~30min

**Prática no seu projeto:**
- Estudar `api/utils/emailSender.js`
- Entender como funciona o formulário de contato
- Testar envio de email

### 9.2 Winston para Logging
**Conceitos:**
- Diferentes níveis de log (info, warn, error)
- Persistência em arquivo
- Formato e estruturação

**Recursos com Links:**
- 🎥 [Winston Logger](https://youtu.be/vLyoXl_Z3RE) - ~30min
- 🎥 [Logging Best Practices](https://youtu.be/4L1gVQEhL7Q) - ~45min

**Prática:**
- Estudar `api/utils/logger.js`
- Verificar logs em `api/logs/`
- Adicionar logs em uma nova rota

---

## **FASE 10: INTEGRAÇÃO & DEPLOY (2 semanas)**

### 10.1 Docker
**Conceitos:**
- Containerização
- Dockerfile
- Docker Compose

**Recursos com Links:**
- 🎥 [Docker para Iniciantes](https://youtu.be/np_-6-J0eno) - ~1h
- 🎥 [Docker Completo - Matheus Battisti](https://youtu.be/VAcGcR8ZBDs) - ~3h ⭐ **Completo**

**Prática no seu projeto:**
- Estudar `api/Dockerfile`
- Fazer build da imagem
- Executar container localmente

### 10.2 Variáveis de Ambiente
**Conceitos:**
- Arquivo `.env`
- Configurações por ambiente
- Segurança de credenciais

**Recursos com Links:**
- 🎥 [Variáveis de Ambiente](https://youtu.be/TKl4tBy06tY) - ~30min

**Prática:**
- Estudar as variáveis necessárias em `api/README.md:52-70`
- Configurar arquivo `.env.example`
- Entender cada variável

### 10.3 Fluxo de Deployment
**Conceitos:**
- Build pipeline
- Testing antes de deploy
- Rollback

**Recursos com Links:**
- 🎥 [CI/CD Básico](https://youtu.be/1R0pJ8K1VXY) - ~1h

---

## **FASE 11: PROJETO INTEGRADOR (2-3 semanas)**

Após completar as fases anteriores, criar uma **nova feature completa** no projeto:

### Sugestão: Sistema de Avaliações
- **Frontend**: Componente de rating (1-5 stars)
- **Backend**: Rota POST para salvar avaliação
- **Banco**: Novo nó `/ratings/{ratingId}`
- **Autenticação**: Apenas usuários autenticados
- **Email**: Notificar admin de nova avaliação

**Fluxo:**
1. Planejar estrutura de dados
2. Criar rotas backend
3. Criar middleware de validação
4. Implementar frontend
5. Testar integração
6. Deploy em container

---

## **📋 CHECKLIST SEMANAL SUGERIDO**

- [ ] Entender nova tecnologia (teoria + video)
- [ ] Fazer exercício prático isolado
- [ ] Aplicar no projeto real (ou criar mini-projeto)
- [ ] Code review seu código
- [ ] Documentar aprendizado e dúvidas
- [ ] Commit no git com mensagem descritiva

---

## **📚 RECURSOS EXTRAS RECOMENDADOS**

- **Documentação oficial**: Sempre consultar (React.dev, Express.js, Firebase)
- **MDN Web Docs**: Referência de JavaScript e web APIs
- **DevTools do navegador**: Aprender a debugar
- **Postman/Insomnia**: Testar APIs
- **ChatGPT**: Use para tirar dúvidas de conceitos (mas sempre valide)

---

## **⏱️ TEMPO ESTIMADO TOTAL**
- **Frontend**: 6-8 semanas
- **Backend**: 6-8 semanas  
- **Integração & Deploy**: 2 semanas
- **Projeto Integrador**: 2-3 semanas

**TOTAL: ~16-21 semanas (~4-5 meses) de estudo dedicado**

---

## **💡 Dicas Finais**

1. **Estude de forma prática**: Não apenas assista vídeos, codifique junto
2. **Tire notas**: Crie seu próprio material de referência
3. **Pergunte**: Não tenha medo de tirar dúvidas
4. **Faça commits**: Pratique versionamento desde o início
5. **Revise código**: Leia código do projeto frequentemente
6. **Paciência**: Programação leva tempo, não tenha pressa

---

**BOA SORTE NO SEU TREINAMENTO! 🚀**
