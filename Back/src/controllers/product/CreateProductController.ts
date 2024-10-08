import { Response, Request } from "express";
import CreateProductService from "../../services/produtos/AddProdutosServices";

class CreateProductController{
    async handle(req: Request, res: Response ){
        const {name, price, description, category_id} = req.body;   
        
        const createProductService = new CreateProductService();           
        if(req.file){
            const {originalname, filename: banner} = req.file;  
        
            const product = await createProductService.execute({
                name, 
                price,
                description,        
                banner,
                category_id,
            });
            return res.json(product);  
        } else {
            throw new Error('Foto não encontrada');
        }
  }
}

export {CreateProductController}

