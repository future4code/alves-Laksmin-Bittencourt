import express, { Request, Response } from "express";
import cors from "cors";
import { type } from "os";
import { getAllJSDocTagsOfKind } from "typescript";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong!")
    console.log("entrei aqui")
})

type Afazeres = {
    userId: number, 
    id: number, 
    tittle: string, 
    completed: boolean
}


const arrAfazeres: Afazeres[] = [
    {
        userId: 2022,
        id: 2202,
        tittle: "Lavar Roupa",
        completed: false
    },
    {
        userId: 2525,
        id: 3215,
        tittle: " alongar",
        completed: true
    },
    {
        userId: 3020,
        id: 5555,
        tittle: "Estudar",
        completed: true
    }
] 


app.get("/todasAsTarefas/:value", (req: Request, res: Response) => {
    let  valorBoolean: boolean | string = req.params.value

    if (valorBoolean === "true") {
        valorBoolean = true
    } else if (valorBoolean === "false") {
        valorBoolean = false
    } 
    
    const tasks = arrAfazeres.filter((task) => {
        return task.completed === valorBoolean
    })
    
    res.status(200).send(tasks)

})

app.post("/criarTarefa", (req: Request, res: Response) => {
    arrAfazeres.push({
        userId: req.body.userId,
        id: Date.now(),
        tittle: req.body.tittle, 
        completed: req.body.completed
    })
    res.status(201).send(arrAfazeres)
})

