import prismaClient from "../../prisma";


class ListCategoryService{
    async execute(){
        const categories = await prismaClient.catogory.findMany();
        return categories;
    }
}   


export {ListCategoryService}    