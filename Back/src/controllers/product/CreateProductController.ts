import { Response, Request } from "express";
import CreateProductService from "../../services/produtos/AddProdutosServices";

class CreateProductController{
    async handle(req: Request, res: Response ){
        const {name, price, description, category_id} = req.body;   
        let banner = '';
        const createProductService = new CreateProductService();           
        if(req.file){
            throw new Error( 'Foto não encontrada');
        }
        const product = await createProductService.execute({
            name, 
            price,
            description,        
            banner,
            category_id,
        });
        return res.json(product);  
    }
}

export {CreateProductController}

