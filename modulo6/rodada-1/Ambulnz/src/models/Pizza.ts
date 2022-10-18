export interface IPizzaDB {
    name: string,
    price: number

}

export interface IIngredientesDB {
    name: string

}

export interface IPizzasIngredientesDB {
    pizza_name: string,
    ingrediente_name: string

}

export class Pizza {
    constructor(
        private name: string,
        private price: number,
        private ingredientes: string[]
    ) {}

    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    public getIngredientes = () => {
        return this.ingredientes
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setIngredientes = (newIngredientes: string[]) => {
        this.ingredientes = newIngredientes
    }

    public addIngredientes = (newIngrediente: string) => {
        this.ingredientes.push(newIngrediente)
    }

    public removeIngrediente = (ingredienteToRemove: string) => {
        return this.ingredientes.filter(ingredientes => ingredientes !== ingredienteToRemove)
    }
}

export interface IGetPizzasOutputDTO {
    message: string,
    pizzas: {
        name: string,
        price: number,
        ingredientes: string[]
    }[]
}

