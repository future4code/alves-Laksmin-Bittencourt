import { IPizzaDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDER_ITEM = "Amb_Order_Item"
    public static TABLE_ORDERS = "Amb_Orders"



    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }
    }
}