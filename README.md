README do Banco de Dados "ChinaDB"
Tabelas
1. Olimpíadas (olimpiadas)
Armazena informações sobre as diferentes edições das Olimpíadas, incluindo a cidade sede, o ano e a temporada (Verão ou Inverno).

id_olimpiada: INT, Identificador único.
cidade: VARCHAR, Nome da cidade sede.
ano: INT, Ano de realização.
temporada: VARCHAR, Temporada das Olimpíadas (Verão/Inverno).
2. Eventos (eventos)
Contém detalhes sobre cada evento esportivo ocorrido nas Olimpíadas, categorizado por esporte.

id_evento: INT, Identificador único.
evento: VARCHAR, Nome do evento.
esporte: VARCHAR, Tipo de esporte.
3. Modalidades (modalidades)
Associa os eventos esportivos às edições das Olimpíadas em que ocorreram.

id_evento: INT, Identificador do evento.
id_olimpiada: INT, Identificador da Olimpíada.
4. Participações (participacoes)
Registra as participações de atletas nos eventos, incluindo resultados como medalhas.

id_atleta: INT, Identificador do atleta.
id_olimpiada: INT, Identificador da Olimpíada.
id_evento: INT, Identificador do evento.
medalha: VARCHAR, Tipo de medalha recebida (se houver).
Relações
As tabelas estão interligadas através de chaves estrangeiras que garantem a integridade e a relação lógica entre os registros.

