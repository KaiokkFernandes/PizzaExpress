import { Router, Request, Response } from "express";
import {CreateUserController} from './controllers/user/createUserController';  

const router = Router();

/* Rotas de Users*/
router.post('/users', new CreateUserController().handle)

export {router};

