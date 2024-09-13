import { Router } from "express";
import multer from "multer";
import { CreateUserController } from './controllers/user/createUserController';  
import { AuthUserController } from './controllers/user/AuthUserController';   
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"; 
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { RemoveOrderController } from "./controllers/order/deleteOrderController";
import { AddItemController } from "./controllers/order/addItemOrderController";
import { RemoveItemController } from "./controllers/order/removeItemController";
import { SendOrderController } from "./controllers/order/sendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/detailOrderController";
import { CompletedOrderController } from "./controllers/order/completedOrderController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";



const router = Router();
const upload = multer(uploadConfig.upload("./assets"));

/* Rotas de Users */
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

// Rota protegida, precisa de autenticação
router.get('/me', ensureAuthenticated, new DetailUserController().handle);

// Rotas de categorias (protegidas por autenticação)
router.post('/category', ensureAuthenticated, new CreateCategoryController().handle);
router.get('/listCategory', ensureAuthenticated, new ListCategoryController().handle);

// Lista de produtos (protegida)
router.post('/product', ensureAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', ensureAuthenticated, new ListCategoryController().handle);

// Rotas de pedidos (protegidas)
router.post('/order', ensureAuthenticated, new CreateUserController().handle);
router.delete('/delete', ensureAuthenticated, new RemoveOrderController().handle);

// Rotas de adicionar/remover itens ao pedido (protegidas)
router.post('/order/add', ensureAuthenticated, new AddItemController().handle);
router.delete('/order/remove', ensureAuthenticated, new RemoveItemController().handle);

// Enviar pedido (protegida)
router.put('/order/send', ensureAuthenticated, new SendOrderController().handle);

// Lista de pedidos (protegida)
router.get('/ListOrder', ensureAuthenticated, new ListOrderController().handle);

// Detalhes do pedido (protegida)
router.get('/order/detail', ensureAuthenticated, new DetailOrderController().handle);

// Finalizar pedido (protegida)
router.put('/order/completed', ensureAuthenticated, new CompletedOrderController().handle);

export { router };
