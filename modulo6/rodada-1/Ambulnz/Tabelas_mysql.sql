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

INSERT INTO Amb_Ingredientes VALUES (
"mozzarella de búfala"
);

INSERT INTO Amb_Ingredientes VALUES (
"tomato"
);

INSERT INTO Amb_Ingredientes VALUES (
"mozzarella"
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
"tomato"
);

INSERT INTO Amb_Pizzas_Ingredientes VALUES (
"Margherita",
"mozzarella"
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

 