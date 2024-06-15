
README - Banco de Dados de Atletas Chineses

Tabelas
china_atletas
Armazena informações sobre os atletas, incluindo:

nome: Nome do atleta.
sexo: Sexo do atleta.
idade: Idade do atleta.
altura: Altura do atleta.
peso: Peso do atleta.
modalidade: Esporte em que o atleta compete.
olimpiadas
Contém informações sobre as diferentes edições das Olimpíadas:

cidade: Cidade onde a Olimpíada foi realizada.
ano: Ano de realização da Olimpíada.
temporada: Temporada da Olimpíada (Verão ou Inverno).
eventos
Armazena detalhes dos eventos olímpicos:

evento: Nome do evento.
esporte: Esporte associado ao evento.
modalidades
Tabela de relação muitos-para-muitos entre Olimpíadas e Eventos:

id_olimpiada: Identificador da Olimpíada.
id_evento: Identificador do evento.
participacoes
Tabela de relação muitos-para-muitos que também inclui o resultado dos atletas:

id_atleta: Identificador do atleta.
id_olimpiada: Identificador da Olimpíada.
id_evento: Identificador do evento.
medalha: Medalha recebida pelo atleta (Ouro, Prata, Bronze ou Nenhuma).
