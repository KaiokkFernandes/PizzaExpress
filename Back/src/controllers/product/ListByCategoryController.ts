import { Request, Response } from "express";
import { ListByCategory } from "../../services/produtos/ListByCategory";

class ListByCategoryController{
    async handle(req: Request, res: Response){
       const categoryId = req.query.categoryId as string;

       const listByCategory = new ListByCategory(); 

       const products = await listByCategory.execute({
         categoryId,
       });
       return res.json(products);
    }   
}

export { ListByCategoryController } 