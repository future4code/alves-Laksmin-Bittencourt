import { IIngredientesDB, IPizzaDB, IPizzasIngredientesDB } from "../../models/Pizza";

export const pizzasSeed: IPizzaDB[] = [
  {
    "name": "Margherita",
    "price": 5
  },
  {
    "name": "Bufala",
    "price": 6
  },
  {
    "name": "Romana",
    "price": 5
  },
  {
    "name": "Diavola",
    "price": 7.5
  },
  {
    "name": "Pizza Bianca",
    "price": 5
  }
]

export const ingredientesSeed: IIngredientesDB[] = [
  {
    name: "tomato"
  },
  {
    name: "mozzarella"
  },
  {
    name: "mozzarella di bufala"
  },
  {
    name: "anchovies"
  },
  {
    name: "oregano"
  },
  {
    name: "oil"
  },
  {
    name: "spicy salami"
  }
]

export const pizzasIngredientesSeed: IPizzasIngredientesDB[] = [
  {
    pizza_name: "Margherita",
    ingrediente_name: "Tomato"
  },
  {
    pizza_name: "Margherita",
    ingrediente_name: "Mozzarella"
  },
  {
    pizza_name: "Bufala",
    ingrediente_name: "Tomato"
  },
  {
    pizza_name: "Bufala",
    ingrediente_name: "Mozzarella di bufala"
  },
  {
    pizza_name: "Romana",
    ingrediente_name: "Tomato"
  },
  {
    pizza_name: "Romana",
    ingrediente_name: "Mozzarella"
  },
  {
    pizza_name: "Romana",
    ingrediente_name: "Anchovies"
  },
  {
    pizza_name: "Romana",
    ingrediente_name: "Oregano"
  },
  {
    pizza_name: "Romana",
    ingrediente_name: "Oil"
  },
  {
    pizza_name: "Diavola",
    ingrediente_name: "Tomato"
  },
  {
    pizza_name: "Diavola",
    ingrediente_name: "Mozzarela"
  },
  {
    pizza_name: "Diavola",
    ingrediente_name: "Spicy salami"
  },
  {
    pizza_name: "Pizza Bianca",
    ingrediente_name: "Mozzarela"
  },
  {
    pizza_name: "Pizza Bianca",
    ingrediente_name: "Oregano"
  }
]