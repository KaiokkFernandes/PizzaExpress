import prismaClient from "../../prisma";

class ListOrderService{
    async execute(){
        const ListOrder = await prismaClient.order.findMany({
            where:{
                draft: false,
                status: false,
            },
            orderBy:{
                createdAt: 'desc'   
            }
        })

        return ListOrder;
    }

}

export { ListOrderService } 