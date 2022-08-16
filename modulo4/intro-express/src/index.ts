import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send("Primeiro Endpoint")
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

type endpointex2 = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// const arrayUsuarios: string[] = [
//     const usuario: {name: string, age: number, phone: number} = {
//         name: "joana", 
//         age: 25, 
//         phone: 48999656598
//     }
    
// ] 