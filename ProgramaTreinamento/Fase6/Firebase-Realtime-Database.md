    O Firebase Realtime Database é um banco de dados NoSQL hospedado pela Firebase que sincroniza dados em tempo real entre 
clientes (web, mobile, backend).
    Diferente de bancos relacionais como MySQL/PostgreSQL, ele não trabalha com tabelas e SQL. tudo é armazenado como uma
grande árvore JSON.

1. Estrutura NoSQL 
    Como funciona?
        No Realtime Database, os dados são organizados em:
            - Nós (nodes)
            - Chaves (keys)
            - Valores (values)
        
        Exemplo:

            </>JSON
                {
                    "usuarios": {
                        "user1": {
                            "nome": "Davi",
                            "idade": 17
                        },
                        "user2": {
                            "nome": "Samuel",
                            "idade": "40"
                        }
                    }
                }

        Aqui:
            - usuarios => coleção principal
            - user1 => ID único
            - nome e idade => atributos

    Diferença para SQL 
        SQL
            Tabela:
                id          nome            idade
                1           Davi             17
                2           Samuel           40
            
        Você faria:
            </> SQL
                SELECT * FROM usuarios;
    
    Firebase Realtime Database
        Não existe tabela em SQL.
        Você acessa caminhos:
            </> JavaScript
                /users/user1/nome
        ou:
            </> JavaScript
                usuarios/user1
        
    Características do modelo NoSQL
        Vantagens
            - Extremamente rápido para sincronização
            - Estrutura flexível
            - Fácil integração front-end/mobile
            - Tempo real nativo

        Desvantagens
            - Estruturas muito profundas viram caos
            - Normalização é limitada
            - Consultas complexas são ruins
            - Escalabilidade lógica pior que Firestore/SQL
        
    Estrutura recomendada 
        Errado:
            </> JSON
                usuarios => user => posts => comentarios => respostas
        
        Muito alinhado.
        Melhor:
            </> JSON
                {
                    "usuarios": {},
                    "posts": {},
                    "comentarios": {}
                }
        
        Firebase funciona melhor com dados "achatados".

2. Leitura e Escrita de Dados
    Escrita (set)
        </> JavaScript
            import { ref, set } from "firebase/database";
            import { db } from "./firebase";

            set(ref(db, 'usuarios/user1), {
                nome: 'Davi',
                idade: 17
            });

    O que acontece?
        - ref() aponta para um caminho
        - set() substitui completamente os dados daquele nó
    
    Resultado:
        </> JSON
            usuarios: {
                user1: {
                    nome: "Davi"
                }
            }
    
    Atualização parcial (update)
        </> JavaScript
            import { ref, update } from "firebase/database";

            update(ref(db, 'usuarios/user1'), {
                idade: 18
            });
        Só altera a idade.
        Não sobrescreve o resto.

    Leitura (get)
        </> JavaScript
            import { ref, get } from "firebase/database";

            const snapshot = await get(ref(db, 'usuarios/user1'));

            if (snapshot.exists()) {
                console.log(snapshot.val());
            }

    snapshot.val()
        Retorna um objeto armazenado:
            </> JavaScript
                {
                    nome: "Davi",
                    idade: 18
                }
    
    Inserção automática de IDs (push)
        Muito usado para listas/chat/mensagens.
            </> JavaScript
                import { push, ref } from "firebase/database";

                push(ref(db, 'mensagens'),{
                    texto: 'Olá'
                });
            
            Firebase gera algo como: 
                </> JavaScript
                    mensagens:{
                        "-OQ9Xa12ABC":{
                            texto: "Olá"
                        }
                    }

3. Listeners em tempo real 
    Esse é o principal diferencial do Realtime Database.
    O cliente fica "escutando" mudanças no banco.
    Quando algo muda:
        - Todos os clientes recebem atualização instantânea
        - Sem refresh
        - Sem polling

    Listener com onValue
        </> JavaScript
            import { ref , onValue } from "firebase/database";

            const usuariosRef = ref(db, 'usuarios');

            onValue(usuariosRef, (snapshot) => {
                const dados = snapshot.val();
                console.log(dados);
            })
        
        O que acontece internamente?
            Fluxo:
                Cliente conecta -> Firebase abre websocket -> Servidor detecta mudança -> Servidor envia update -> 
                Front-end atualiza instantaneamente

        Exemplo prático
        Chat online
            Usuário A envia mensagem.
                Firebase salva:
                    </> JSON
                        mensagens: {
                            msg1: {
                                texto: "oi"
                            }
                        }
        Todos clientes conectados recebem atualização em milissegundos.
    
    Problema comum 
        Se você esquecer de remover listeners:
            - Memory leak
            - Múltiplos listeners duplicados
            - Consumo excessivo

    Removendo listeners
        </> JavaScript
            import { off } from "firebase/database";

            off(usuariosRef);
    Ou usando cleanup no React:
        </> JavaScript
            useEffect(() =>{
                const unsubscribe = onValue(ref(db, 'usuarios'), callback);

                return () => unsubscribe();
            }, []);

4. Segurança com regras
    Sem regras, qualquer pessoa pode:
        - Ler
        - Escrever 
        - Apagar
     o banco inteiro.
    Então o Firebase usa regras declarativas.

    Exemplo perigoso
        </> JSON
            {
                "rules": {
                    ".read": true,
                    ".write": true
                }
            }
        Isso deixa o banco público.
        Muito comum em projetos amadores vulneráveis.
    
    Exemplo seguro com autenticação 
        </> JSON
            {
                "rules": {
                    ".read": "auth != null",
                    ".write": "auth != null"
                }
            }
        Agora:
            - Apenas usuários autenticados acessam

    Regra por usuário
        </> JSON
            {
                "rules": {
                    "usuarios": {
                        "$uid": {
                            ".read": "$uid === auth.uid",
                            ".write": "$uid === auth.uid"
                        }
                    }
                }
            }
        
        O que isso significa?
            Se usuário logado possui:
                </> JavaScript
                    auth.uid = "abc123"
            Ele só pode acessar:
                usarios/abc123
            Não consegue acessar:
                - Outros usuários
                - Dados administrativos

    Validação de dados
        Você pode impedir estrutura inválida.
            </> JSON
                {
                    "rules": {
                        "usuarios": {
                            "$uid": {
                                ".validate": "newData.isNumber() && newData.val() >= 0"
                            }
                        }
                    }
                }

    Limitações importantes do Realtime Database
        1. Escala lógica pior que Firestore
            Realtime Database:
                - Excelente para sincronização simples
                - Ruim para consultas complexas
            Firestore:
                - Melhor modelagem
                - Indexação
                - Queries avançadas
                - Escalabilidade moderna

        2. Estrutura gigante degrada performance
            Como tudo é uma árvore JSON:
                </> JSON
                    app -> usuarios -> posts -> comentarios
            Consultas mal feitas podem baixar milhares de dados desnecessários.

        3. Segurança depende totalmente das regras
            Erro comum:
                </> JSON
                    ".write": true
            
            Resultado
                - Banco vandalizado
                - Dados apagados
                - Bots escrevendo lixo
            Isso acontece frequentemente em projetos expostos no front-end.

    Quando usar Realtime Database
        Excelente para
            - Chats
            - Multiplayer simples
            - Dashboards ao vivo
            - Presença online
            - Notificações em tempo real
            - Sincronização instantânea

        Ruim para
            - Sistemas financeiros
            - Relatórios complexos
            - Analytics
            - Consultas relacionais
            - Sistemas corporativos grandes

    Diferença entre Realtime Database e Firestore
        Realtime DB                                       Firestore

        JSON gigante                                      Coleções/Documentos
        Mais rápido em streaming                          Mais escalável
        Queries limitadas                                 Queries avançadas
        Mais simples                                      Mais robusto
        Mais antigo                                       Arquitetura moderna

    Hoje, para projetos novos, o Firestore é superior. O Realtime Database ainda é forte quando latência extremamente baixa
e sincronização contínua são prioridade.