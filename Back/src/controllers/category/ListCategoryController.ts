import { Request, Response } from "express";

class ListCategoryController {
    async handle(req: Request, res: Response){
        return res.json({message: "List Category"})
    }
}   


export { ListCategoryController}


