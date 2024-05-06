import express, {request, Response, NextFunction, Router} from 'express';

const app = express();  

app.use(Router);

app.listen(3333, () => console.log('Server is running!'));

