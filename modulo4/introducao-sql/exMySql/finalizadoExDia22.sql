INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"TOC",
"Tatá Werneck", 
650000,
"1988-05-15",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

SELECT * FROM Actor;

SELECT salary from Actor WHERE name = "Tony Ramos";

select * from Actor;

SELECT name, salary
FROM Actor
WHERE name = "a" OR "j" AND salary < 300.000;

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;




CREATE TABLE Filmes(
id INT PRIMARY KEY,
nome VARCHAR(255) UNIQUE,
sinopse TEXT(25000) NOT NULL,
lancamento DATE NOT NULL,
avaliação INT 
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliação)
VALUES(
"001",
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
"7"
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliação)
VALUES(
"002",
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
"10"
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliação)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
"8"
);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliação)
VALUES(
"004",
"Deus é Brasileiro", 
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003/01/31",
"9"
);



SELECT id, nome, avaliação FROM Filmes
WHERE id = "003";

select * from Filmes
where nome = "Se eu fosse você";

select id, nome, sinopse from Filmes
where avaliação <= 7;

select * from Filmes
where (nome LIKE "%vida%");

select * from Filmes
where nome LIKE "%flor%";


select * from Filmes
where lancamento < "2022/08/23";

