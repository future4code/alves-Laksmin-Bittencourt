import { IPizzaDB, IPizzasIngredientesDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTES = "Amb_Ingredientes"
    public static TABLE_PIZZAS_INGREDIENTES = "Amb_Pizzas_Ingredientes"



    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }
    }

    public getPizzas = async (): Promise<IPizzaDB[]> => {
        const result: IPizzaDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select()

        return result
    }

    public getIngredientes = async (pizzaName: string): Promise<string[]> => {
        const result: IPizzasIngredientesDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTES)
            .select("ingredientes_name")
            .where({ pizza_name: pizzaName})

        return result.map(item => item.ingrediente_name)
    }


//     public createUser = async (user: User): Promise<void> => {
//         const userDB = this.toUserDBModel(user)

//         await BaseDatabase
//             .connection(UserDatabase.TABLE_USERS)
//             .insert(userDB)
//     }
}