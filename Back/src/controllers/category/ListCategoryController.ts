import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(req: Request, res: Response){
        const  listCategoryService = new ListCategoryService(); 

        const cateogry = await listCategoryService.execute();  
        
        return res.json(cateogry);
    }
}   


export { ListCategoryController}


