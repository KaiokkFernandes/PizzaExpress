import prismaClient from "../../prisma";
interface CategoryRequest{
    name: string;
}
class CreateCategoryService{
    async execute({name}: CategoryRequest){
          
        if(name === ""){
            throw new  Error("Nome incorreto")
        }
        const category = await prismaClient.catogory.create({ 
            data:{
                name: name
            },
            select:{
                id: true,
                name: true
            }
        })
       }
}   

export {CreateCategoryService}      