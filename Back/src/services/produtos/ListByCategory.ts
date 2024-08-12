import prismaClient from "../../prisma";

interface Iproduct {
   categoryId: string;    
}

class ListByCategory{
   async execute({categoryId}: Iproduct){
    const findByCateogry =  await prismaClient.product.findMany({
        where:{
            categoryId
        }
    })
    return findByCateogry; 
   }
}

export { ListByCategory }