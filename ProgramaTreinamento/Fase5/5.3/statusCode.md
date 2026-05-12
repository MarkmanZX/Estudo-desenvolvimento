REST é um padrão arquitetural para construir APIs HTTP de forma previsível e padronizada.

*Ideia central*
    Resources + HTTP Methods + Status Codes

EXEMPLO
    GET /users
    POST /users
    PUT /users/1
    DELETE /users/1
Cada URL representa um recurso

1. HTTP Status Codes
    Status codes são códigos que indicam o resultado da requisição
    Eles são fundamentais porque:
        - front-end depende deles
        - APIs profissionais usam eles corretamente
        - Facilitam debug e integração

Categorias

faixa       significado
2xx         Sucesso
4xx         Erro do cliente
5xx         Erro do servidor

*Status mais importantes*

    200 OK
    Requisição funcionou.
        | res.status(200).json(users);
    Usado em:
        - GET
        - PUT
        - DELETE

    201 Created
    Recurso criado.
        | res.status(201).json(newUser);
    Usado em:
        - POST

    204 No Content
    Sucesso sem resposta.
        | res.status(204).send();
    Muito usado em DELETE

    400 Bad Request
    Dados inválidos enviados pelo cliente.
        |res.status(400).json({
            error: 'Email inválido'
         });
    
    401 Unauthorized
    Usuário não autenticado.
    Exemplo:
        - JWT inválido
        - Token ausente

    403 Forbidden
    Usuário autenticado, mas sem permissão.
    Exemplo:
        - Usuário comum tentando acessar rota admin

    404 Not Found
    Recurso não encontrado.
        | res.status(404).json({
            error: 'Usuário não encontrado'
         });

    500 Internal Server Error
    Erro interno da aplicação.
        | res.status(500).json({
            error: 'Erro interno'
         });
    Nunca exponha stack trace em produção.

2. Convenções de Naming
APIs REST boas seguem padrões consistentes.
Inconsistência destrói manutenção.

*Use substantivos, não verbos*
    ERRADO:
        /getUsers
        /createUsers
        /deleteUsers

    CORRETO:
        /users
        /users/:id
O método HTTP já indica ação.

*Use plural*
    CORRETO:
        /users
        /products
        /orders
    
    Evite:
        /user
        /product
Porque a rota representa coleção de recursos.

*Use Lowercase*
    CORRETO:
        /users
        /user-orders

    ERRADO:
        /Users
        /UserOrders
URLs normalmente seguem lowercase.

*Use hyphen, não underscore*
    CORRETO:
        /user-orders

    Evite:
        /user_orders

*Hierarquia de recursos*
    Exemplo:
        /users/1/orders
 Significa:
    pedidos do usuário 1

 Versão da API
    Muito comum:
        /api/v1/users
    Permite evouluir API sem quebrar clientes antigos.

3. Request Patterns
Request = o que o cliente envia.
Uma request HTTP geralmente tem:
    *Method*
    - URL
    - Headers
    - Body
    - Query params

 Get com query params
    GET products?category=games&page=2

 No Express:
    req.query.category
    req.query.page
 Usado para:
    - Filtros
    - Paginção
    - Busca
 
 POST com body JSON
    Request:
        {
            "name": "Davi",
            "email": "davi@mail.com"
        }
    
    Express:
        req.body

 Headers
    Metadados da requisição.
    Exemplo:
        req.headers.authorization

4. Response Patterns
    Respostas REST devem ser previsíveis.
    Front-end odeia respostas inconsistentes.

    Resposta de sucesso
        Boa prática 
            {
                "id": 1,
                "name": "Davi"
            }
        OU
            {
                "data": {
                    "id": 1,
                    "name": "Davi"
                }
            }
    
    Resposta de erro
        Padronize
        Exemplo:
            {
                "error": "Usuário não encontrado"
            }
        Ou mais profissional:
            {
                "error": {
                    "message": "Usuário não encontrado",
                    "code": "USER_NOT_FOUND"
                }
            }
    
    Consistência importa mais que formato
        Pior cenário:
            { "msg": "erro" }
        Em uma rota e:

            { "message": "erro" }
        Em outra.
    Isso gera complexidade desnecessária no front-end.

5. CRUD Operations
    CRUD representa operações básicas de banco de dados.

    *Operação*            *HTTP*            *Exemplo*
     Create                POST              POST /users
     Read                  GET               GET /users
     Update                PUT/PATCH         PUT /users/1
     Delete                DELETE            DELETE /users/1

 CREATE
    Cria um recurso.
        POST /users

    Body:
        {
            "name": "Davi"
        }

    Resposta ideal:
        res.status(201).json(user);

 READ
    Buscar dados.
        Todos:
            | GET /users

        UM:
            | GET /users/1
        
 UPDATE
    Atualizar recurso.
        PUT /users/1

    Ou:
        PATCH /users/1
    
 PUT vs PATCH
    PUT 
        Atualização completa.
            {
                "name": "Davi",
                "email": "davi@mail.com"
            }
        Substitui recurso inteiro.
    
    PATCH
        Atualização parcial.
            {
                "name": "Novo nome"
            }
        Mais comum hoje em APIs modernas.
    
    DELETE
        Remover recurso.
            DELETE /users/1
        Resposta comum:
            res.status(204).send();
    
6. Exemplo REST completo
    Rotas
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    
    Implementação Express
        const express = require('express');
        const app = express();

        app.use(express.json());

        let users = [];

        app.get('/users', (req, res) => {
            res.status(200).json(users);
        })

        app.get('/users/:id', (req, res)=> {
            const user = users.find(u => u.id == req.params.id);

            if (!user){
                return res.status(404).json({
                    error: 'Usuário não encontrado'
                });
            }

            res.json(user);
        });

        app.post('/users', (req, res) => {
            const user = {
                id: Date.now(),
                name: req.body.name
            };

            users.push(user);
            
            res.status(201).json(user);
        });

        app.patch('/users/:id', (req, res) => {
            res.status(200).json({
                message: 'Usuário atualizado'
            });
        });

        app.delete('/users/:id', (req, res) => {
            res.status(204).send();
        });

        app.listen(3000);

7. Estrutura mental correta
    REST não é:
        "usar Express"
    
    REST é:
        modelar recursos HTTP de forma consistente.
    
    A lógica principal: 
         Resource -> URL
         Action -> HTTP Method
         Result -> Status Code
         Data -> JSON

8. Erros comuns de iniciantes

 Misturar verbos na URL
    ERRADO:
        POST /createUser
 
 Ignorar status codes
    ERRADO: 
        res.send('Erro');
    Sem status.

 Retornar HTML em API REST
    APIs Modernas normalmente retornam JSON.

 Não validar entrada
    Nunca confiar no req.body

 Inconsistência
    Exemplo ruim:
        /users
        /getProducts
        /clientes
    Mistura:
     - idioma
     - padrão
     - semântica

9. Padrão usado no mercado
    Stack comum:
        - Node.js
        - Express
        - REST API
        - JWT
        - PostgreSQL/MySQL
        - Prisma/Sequelize
        - Swagger/OpenAPI
    REST ainda domina back-end corporativo.

GraphQL existe, mas REST continua sendo o padrão mais usado em APIs gerais.