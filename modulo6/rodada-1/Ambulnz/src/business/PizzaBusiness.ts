import { PizzaDatabase } from "../database/PizzaDatabase"
import { IGetPizzasOutputDTO, Pizza } from "../models/Pizza"
import { IdGenerator } from "../services/IdGenerator"

export class PizzaBusiness {
    constructor(
        private pizzaDatabase: PizzaDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getPizzas = async (): Promise<IGetPizzasOutputDTO> => {
  
        const pizzasDB = await this.pizzaDatabase.getPizzas()

        const pizzas: Pizza[] = []

        for (let pizzaDB of pizzasDB) {
            const pizza = new Pizza(
                pizzaDB.name,
                pizzaDB.price,
                []
            )

            const ingredientes = await 
                this.pizzaDatabase.getIngredientes(pizzaDB.name)

            pizza.setIngredientes(ingredientes)

            pizzas.push(pizza)

        }

        const response: IGetPizzasOutputDTO = {
            message: "Pizzas retornadas com sucesso",
            pizzas: pizzas.map((pizza) => ({
                name: pizza.getName(),
                price: pizza.getPrice(),
                ingredientes: pizza.getIngredientes()
            }))
        }

        return response
    }

    public getPizzasV2 = async () => {
  
        const rawPizzasFormatted = await this.pizzaDatabase.getPizzasFormatted()

        const pizzas: any = []

        for(let rawPizza of rawPizzasFormatted) {
            const pizzaAlreadyOnArray = pizzas
            .find((pizza: any) => pizza.name === rawPizza.name)

            if (pizzaAlreadyOnArray) {
                pizzaAlreadyOnArray.ingredientes.push(rawPizza.ingrediente_name)

            } else {
                const pizza = {
                    name: rawPizza.name,
                    price: rawPizza.price,
                    ingrediente: [rawPizza.ingrediente_name]
                }

                pizzas.push(pizza)
            }

        }

        return {
            pizzas
        }
    }
    
}