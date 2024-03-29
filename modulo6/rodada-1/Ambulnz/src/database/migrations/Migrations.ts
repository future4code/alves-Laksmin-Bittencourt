import { BaseDatabase } from "../BaseDatabase"
import { PizzaDatabase } from "../PizzaDatabase"
// import { UserDatabase } from "../UserDatabase"
// import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
            DROP TABLE IF EXISTS Amb_Order_Item;
            DROP TABLE IF EXISTS Amb_Orders;
            DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS_INGREDIENTES};
            DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_INGREDIENTES};
            DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS};

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
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name)
            );

        `)  
            
    }

    insertData = async () => {
        // await BaseDatabase
        //     .connection(UserDatabase.TABLE_USERS)
        //     .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()