import { Router, Request, Response } from "express";
import multer from "multer";
import {CreateUserController} from './controllers/user/createUserController';  
import {AuthUserController} from './controllers/user/AuthUserController';   
import {DetailUserController} from './controllers/user/DetailUserController';
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"; 
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { RemoveOrderController } from "./controllers/order/deleteOrderController";
import { AddItemController } from "./controllers/order/addItemOrderController";


const router = Router();

const upload = multer(uploadConfig.upload("./assets"));

/* Rotas de Users*/
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me',new DetailUserController().handle)

router.post('/category', new CreateCategoryController().handle)
router.get('/listCategory', new ListCategoryController().handle) 


//Lista de produtos
router.post('/product', upload.single('file'), new CreateProductController().handle)   
router.get('/category/product', new ListCategoryController().handle)   

//rotas de order
router.post('/order', new CreateUserController().handle)
router.delete('/delete', new RemoveOrderController().handle)

//rota de adicionar item ao pedido  
router.post('/addItem', new AddItemController().handle)
export {router};

