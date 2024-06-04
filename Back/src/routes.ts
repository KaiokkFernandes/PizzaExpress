import { Router, Request, Response } from "express";
import {CreateUserController} from './controllers/user/createUserController';  
import {AuthUserController} from './controllers/user/AuthUserController';   
import {DetailUserController} from './controllers/user/DetailUserController';
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"; 
const router = Router();

/* Rotas de Users*/
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me',new DetailUserController().handle)

router.post('/category', new CreateCategoryController().handle)

export {router};

