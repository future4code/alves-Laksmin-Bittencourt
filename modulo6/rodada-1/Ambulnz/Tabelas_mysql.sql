CREATE TABLE IF NOT EXISTS TESTE_CASE (
name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS Amb_Order_Item;
DROP TABLE IF EXISTS Amb_Orders;
DROP TABLE IF EXISTS Amb_Pizzas_Ingredientes;
DROP TABLE IF EXISTS Amb_Ingredientes;
DROP TABLE IF EXISTS Amb_Pizzas;

CREATE TABLE IF NOT EXISTS Amb_Pizzas (
name VARCHAR(255) PRIMARY KEY,
price DECIMAL(3, 2) NOT NULL 
);

CREATE TABLE IF NOT EXISTS Amb_Ingredientes (
name VARCHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Amb_Pizzas_Ingredientes (
pizza_name VARCHAR(255) NOT NULL,
ingrediente_name VARCHAR(255) NOT NULL,
FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
FOREIGN KEY (ingrediente_name) REFERENCES Amb_Ingredientes (name)
);

CREATE TABLE IF NOT EXISTS Amb_Orders (
id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Amb_Order_Item (
id VARCHAR(255) PRIMARY KEY,
pizza_name VARCHAR(255) NOT NULL,
quantity TINYINT,
order_id VARCHAR(255) NOT NULL,
FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name)
);

INSERT INTO Amb_Pizzas VALUES (
"Bufala",
6
);

INSERT INTO Amb_Pizzas VALUES (
"Margherita",
5
);

INSERT INTO Amb_Pizzas VALUES (
"Romana",
5
);

INSERT INTO Amb_Pizzas VALUES (
"Diavola",
7.5
);

INSERT INTO Amb_Pizzas VALUES (
"Pizza Bianca",
5
);


INSERT INTO Amb_Ingredientes VALUES (
"mozzarella de búfala"
);

INSERT INTO Amb_Ingredientes VALUES (
"tomato"
);

INSERT INTO Amb_Ingredientes VALUES (
"mozzarella"
);

INSERT INTO Amb_Ingredientes VALUES (
"anchovies"
);

INSERT INTO Amb_Ingredientes VALUES (
"oregano"
);

INSERT INTO Amb_Ingredientes VALUES (
"oil"
);

INSERT INTO Amb_Ingredientes VALUES (
"spicy salami"
);



INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Bufala",
"tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Bufala",
"mozzarella de búfala"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Margherita",
"Tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Margherita",
"Mozzarella"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Romana",
"Tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Romana",
"Mozzarella"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Romana",
"Anchovies"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Romana",
"Oregano"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Romana",
"Oil"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Diavola",
"Tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Diavola",
"Mozzarella"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Diavola",
"Spicy salami"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Pizza Bianca",
"Mozzarella"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Pizza Bianca",
"Oregano"
);





INSERT INTO Amb_Orders VALUES(
"mesa-1"
);

INSERT INTO Amb_Order_Item VALUES (
"pedido-1",
"Margherita",
2,
"mesa-1"
);

INSERT INTO Amb_Order_Item VALUES (
"pedido-2",
"Bufala",
1,
"mesa-1"
);

SELECT * FROM Amb_Orders
JOIN Amb_Order_Item ON Amb_Order_Item.order_id = Amb_Orders.id
JOIN Amb_Pizzas ON Amb_Order_Item.pizza_name = Amb_Pizzas.name
WHERE Amb_Orders.id = "mesa-1";

SELECT * FROM Amb_Pizzas;
