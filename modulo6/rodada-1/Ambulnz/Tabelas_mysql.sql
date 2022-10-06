CREATE TABLE IF NOT EXISTS TESTE_CASE (
name VARCHAR(255) NOT NULL
);

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

DROP TABLE IF EXISTS Amb_Order_Item;


CREATE TABLE IF NOT EXISTS Amb_Orders (
id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Amb_Order_Item (
id VARCHAR(255) PRIMARY KEY,
pizza_name VARCHAR(255) NOT NULL,
quantity TINYINT,
FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name)
);

CREATE TABLE IF NOT EXISTS Amb_Orders_Order_Item (
order_id VARCHAR(255) NOT NULL,
item_id VARCHAR(255) NOT NULL,
FOREIGN KEY (order_id) REFERENCES Amb_Orders (id)
);

INSERT INTO Amb_Orders_Order_Item VALUES (
"p1",
"order-item-1"
);

INSERT INTO Amb_Orders_Order_Item VALUES (
"p1",
"order-item-2"
);

SELECT * FROM Amb_Orders
JOIN Amb_Orders_Order_Item ON Amb_Orders.id = Amb_Orders_Order_Item.order_id
JOIN Amb_Order_Item ON Amb_Order_Item.id = Amb_Orders_Order_Item.item_id
JOIN Amb_Pizzas ON Amb_Order_Item.pizza_name = Amb_Pizzas.name
WHERE Amb_Orders.id = "p1";

INSERT INTO Amb_Pizzas VALUES (
"Bufala",
6
);

INSERT INTO Amb_Ingredientes VALUES (
"mozzarella de búfala"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Bufala",
"tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Bufala",
"mozzarella de búfala"
);

INSERT INTO Amb_Orders VALUES(
"p1"
);

INSERT INTO Amb_Order_Item VALUES (
"order-item-2",
"Bufala",
1
);

SELECT * FROM Amb_Pizzas
JOIN Amb_Pizzas_Ingredientes ON Amb_Pizzas_Ingredientes.pizza_name = Amb_Pizzas.name
WHERE name = "Bufala";

SELECT * FROM Amb_Pizzas;

 