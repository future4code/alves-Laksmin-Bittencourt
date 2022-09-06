import express, {Express, Response, Request} from 'express'
import cors from 'cors'
import { connection } from './connection';

export const app: Express = express();

app.use(express.json());
app.use(cors());

export const getAllUsers = async(req: Request,res: Response): Promise<void> => {
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
}