import prismaClient from "../../prisma";

interface ProdutoRequest { 
    name: string;
    price : number; 
    description: string;    
    banner: string; 
    category_id: string; 
} 


class CreateProductService{
    async execute({name, price, description, banner, category_id}: ProdutoRequest){
        
          return{ok: true}        
    
    }   
}

export default CreateProductService;