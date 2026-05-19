SQL vs NoSQL
A diferença principal não é "qual é mais moderno".
É sobre:
    - Como os dados são organizados
    - Como o sistema escala
    - Consistência vs flexibilidade
    - Tipo de consulta que o projeto exige
    
1. Diferenças Fundamentais SQL
    SQL
        SQL = banco relacional.
            Exemplos:
                - PostgreSQL
                - MySQL
                - SQLite
                - Microsoft SQL Server
            Os dados são organizados em: 
                - Tabelas
                - Linhas
                - Colunas
                - Relações
        
        Exemplo SQL 
            Tabela usuarios
                id                  nome                    idade

                1                   Davi                    17

            Tabela pedidos
                id                  usuario_id              produto

                1                   1                       Mouse
        O relacionamento acontece por:
            - Chaves primárias 
            - Chaves estrangeiras

        Consulta SQL
            </> SQL
                SELECT usuarios.nome, pedidos.produto
                FROM usuarios
                JOIN pedidos
                ON usuarios.id = pedidos.usuario_id;

NoSQL
    NoSQL = "Not Only SQL".
    Não existe em um único modelo.
    Tipos:
        - Documento
        - Chave-valor
        - Grafo
        - Colunar
    Os mais comuns hoje:
        - MongoDB -> Documento
        - Firebase -> chave-valor JSON
        - Redis -> memória/chave-valor
    
    Exemplo NoSQL
        </> JSON
            {
                "usuario": {
                    "nome": "Davi",
                    "pedidos": [{
                        "produto": "Mouse"
                    }
                  ]
                }
            }
    Aqui: 
        - Os dados ficam agrupados
        - Sem JOIN
        - Sem relação rígida

1. Comparação direta

    SQL                                     NoSQL
     Estrutura rígida                         Estrutura flexível
     Schema obrigatório                       Schema opcional
     Relações fortes                          Dados agregados
     JOIN nativo                              JOIN limitado/inexistente
     ACID forte                               Escala horizontal 
     Excelente para queries complexas         Excelente para alta escala
     Normalização                             Desnormalização 

2. Estruturação de Dados
 SQL -> Normalização
    Objetivo:
        - Evitar duplicação 
        - Garantir consistência
    Exemplo normalizado
        usuarios
            id                  nome
             1                   Davi
        pedidos
            id          usuario_id              produto
             10          1                       Mouse
    
    Vantagem
        Se o nome mudar:
            </> SQL
                UPDATE usuarios SET nome = 'Davi Markman'
        Todos os relacionamentos continuam corretos.
    
    Desvantagem 
        Consultas podem ficar caras: 
            </> SQL
                JOIN usuarios
                JOIN pedidos
                JOIN pagamentos
                JOIN produtos
        Em escala enorme:
            - Mais CPU
            - Mais disco
            - Queries complexas

 NoSQL -> Desnormalização
    Objetivo:
        - Leitura rápida
        - menos JOIN
        - Alta escala

    Exemplo desnormalização
        </> JSON
            {
                "pedido": {
                    "produto": "Mouse",
                    "usuario_nome": "Davi"
                }
            }
        O nome do usuário foi copiado.
    Vantagem
        Leitura muito rápida:
            - Um único documento
            - sem JOIN
        Excelente para:
            - Apps em tempo real
            - Feeds
            - Redes sociais
    Desvantagem
        Duplicação
        Se o nome mudar:
            - Talvez precise atualizar milhares de documentos
    
    Estrutura mental correta
        SQL
            Você modela:
                - Entidades
                - Relações
                - Integridade
            O foco é consistência. 
        
        NoSQL
            você modela:
                - Padrões de acesso
                - Velocidade de leitura
                - Distribuição 
            O foco é performance/escalabilidade.

3. Quando usar SQL
    SQL é superior quando:
        1. Existem relações complexas
            Exemplo:
                - ERP
                - Sistema bancário
                - Estoque
                - Financeiro
                - Escola
                - RH
        
        2. Consistência é crítica
            Você não pode aceitar:
                - Perda de dados
                - Insonsistência
            Exemplo:
                - Pix
                - Cartão
                - Saldo bancário
        
        3. Queries complexas
            SQL domina:
                - Filtros complexos
                - Agrupamentos
                - Relatórios
                - Analytics
            
            Exemplo
                </> SQL
                    SELECT produto, SUM(valor)
                    FROM vendas
                    GROUP BY produto
                    HAVING SUM(valor) > 10000
            NoSQL costuma ser pior nisso.

        4. Quando usar NoSQL
        NoSQL é superior quando:
            1. Escala massiva
                Exemplo:
                    - Redes sociais
                    - Chats
                    - Streaming
                    - Multiplayer

            2. Estrutura variável 
                Exemplo:
                Cada documento pode ter campos diferentes.
                    </> JSON
                        {
                            "nome": "Davi",
                            "instagram": "@08_markman"
                        }
                Outra:
                    </> JSON
                        {
                            "nome": "Samuel",
                            "github": "samukadev"
                        }
                SQL exigiria schema fixo.
            
            3. Tempo real
                Exemplo:
                    - Firebase
                    - Chats
                    - Dashboards
            
            4. Alto volume de escrita 
                Exemplo:
                    - Logs
                    - Telemetria
                    - Eventos
                    - Tracking
            
            5. ACID vc BASE
                Essa é uma diferença arquitetural importante.

                SQL -> ACID
                    ATOMICIDADE
                        Tudo acontece ou nada acontece.
                    
                    Consistência
                        Banco sempre válido.

                    Isolamento
                        Transações não interferem. 
                    
                    Durabilidade
                        Dados persistem mesmo após falha.

                Exemplo
                    Transferência bancária:
                        - Tira R$100 da conta A
                        - Adiciona R$100 na conta B
                    Não pode falhar no meio.
                    SQL é ideal.

             NoSQL -> BASE
                Basically Available
                    Sistema prioriza disponibilidade.

                Soft State
                    Estado pode mudar temporariamente.

                Eventual Consistency
                    Consistência acontece depois.
                
                Exemplo:
                    Rede social:
                        - Curtida pode demorar 1 segundo para sincronizar 
                        - Aceitável
                    Banco bancário:
                        - Inaceitável

            6. Escalabilidade 
                SQL
                    Escala vertical:
                        - Mais CPU
                        - Mais RAM
                        - Servidor mais forte
                    Limite físico chega rápido.

                NoSQL
                    Escala horizontal:
                        - Múltiplos servidores
                        - Distribuição de dados
                    Muito melhor para: 
                        - Bilhões de registros
                        - Milhões de usuários simultâneos
            
            7. Comparação prática
                Sistema bancário
                    Melhor:
                        - SQL
                    Porque:
                        - Transações
                        - Consistência
                        - Integridade
                
                Rede social
                    Melhor:
                        - NoSQL
                    Porque:
                        - Escala
                        - Feed
                        - Alta escrita
                        - Leitura rápida
                    
                Chat em tempo real
                    Melhor:
                        - NoSQL
                    Exemplo:
                        - Firebase Realtime Database

                ERP empresarial
                    Melhor:
                        - SQL
                
                Analytics massivo
                    Depende.
                    Hoje:
                        - Híbrido é comum
                    SQL + NoSQL juntos.
            
            8. Arquitetura moderna real
                Grandes sistemas usam ambos.
                    Exemplo simplificado:
                        Função                      Tecnologia

                         Financeiro                  PostgreSQL
                         Chat                        Firebase
                         Cache                       Redis
                         Logs                        MongoDB
                         Analytics                   BigQuery
            9. O erro mais comum
                Iniciante escolhe NoSQL porque:
                    - É "moderno"
                    - É "mais rápido"
                Mas depois:
                    - Não consegue fazer queries complexas
                    - Perde integridade
                    - Cria duplicação absurda

Regra prática
    Use SQL se:
        - Existem relações
        - Consistência importa
        - Dados são estruturados
        - Haverá relatórios/queries complexas
    
    Use NoSQL se:
        - Escala é prioridade
        - Dados mudam muito
        - Tempo real importa
        - Estrutura flexível ajuda

Resumo técnico final

Aspecto                             SQL                             NoSQL

 Modelo                              Relacional                      Não relacional
 Estrutura                           Tabelas                         Documentos/JSON
 Schema                              Fixo                            Flexível
 JOIN                                Forte                           Limitado
 Consistência                        Alta                            Eventual
 Escala                              Vertical                        Horizontal
 Tempo real                          Médio                           Excelente
 Queries complexas                   Excelentes                      Limitado
 Flexibilidade                       Menor                           Maior
 Performance destribuída             Média                           Alta