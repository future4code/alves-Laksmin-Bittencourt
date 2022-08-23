SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor 
SET name = "Luana Piovani"
WHERE id = "003";

UPDATE Actor 
SET birth_date = "1895/05/15"
WHERE id = "003";

SELECT UPPER(name)
FROM Actor
WHERE name = "Juliana Paes";

UPDATE Actor
SET id = "0101" AND name = "Bruno Gagliaço" AND salary = "150.850.00" AND birth_date = "1988/08/13" AND gender = "female"
WHERE id = "005";

UPDATE Actor
SET name = "Marcos Castro"
WHERE id = "300";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE (gender = "male" and salary >= "100000000");

SELECT MAX(salary)
FROM Actor;

SELECT MIN(salary)
FROM Actor
WHERE gender = "female";

SELECT COUNT(*)
FROM Actor
WHERE gender = "female";

SELECT SUM(salary)
FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id AND name 
FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary ASC;

SELECT MAX(salary) 
FROM Actor
ORDER BY salary ASC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Actor
ADD playing_limit_date DATE;

ALTER TABLE Actor
DROP COLUMN playing_limit_date;

ALTER TABLE Filmes
ADD playing_limit_date DATE;

ALTER TABLE Filmes 
ADD rating FLOAT;

UPDATE Filmes
SET lancamento = "2022/05/01"
WHERE id = "002";

UPDATE Filmes
SET lancamento = "2022/09/15"
WHERE id = "001";

DELETE FROM Filmes
WHERE id = "003";

UPDATE Filmes
SET snopse = "era uma vez..."
WHERE id = "003";

