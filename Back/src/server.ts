import express, {request, Response, NextFunction, Router} from 'express';
import 'express-async-errors'
import { router } from './routes'; 
import cors from 'cors';   
import { Path } from 'typescript';
import path from 'path';    

const app = express();
app.use(express.json());
app.use(cors());     
app.use(router);

app.use('/file',
    express.static(path.resolve(__dirname, "..", "assets"))
)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({ 
            error: err.message
        });
    }
    return res.status(500).json({
        status: "error",  
        message: "Internal Server Error"        
    });

});  
app.listen(3333, () => console.log('Server is running!'));

