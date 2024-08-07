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
    const product = await prismaClient.product.create({
      data:{
        name: name, 
        price: price,   
        description: description,  
        banner: banner,
        categoryId: category_id,
      }  
    })
        

     return{ok: true}        
    
  }   
}

export default CreateProductService;