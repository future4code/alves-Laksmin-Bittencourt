import express, {Request, Response} from "express";
import cors from "cors";
import { BancoDeDados } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/test", (req: Request, res: Response) => {
    res.send("Esta funcionando!")
})

app.post("/criarProduto", (req: Request, res: Response) => {
    const {name, price} = req.body
    BancoDeDados.push({
        id: Date.now().toString(),
        name: name, 
        price: price
    })
    res.send(BancoDeDados)
})

app.get("/todosOsProdutos", (req: Request, res: Response) => {
    res.send(BancoDeDados)
})

// app.put("/editarPreco/:id", (req: Request, res: Response) => {
//     try{
//         const produtoId = req.params.id
//         const {price} = req.body
        // const produto = 
//     }

// })