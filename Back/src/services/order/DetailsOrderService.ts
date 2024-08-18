import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;   
}


class DetailOrderService{
    async execute({order_id}: OrderRequest){
        const orders = await prismaClient.order.findUnique({
            where:{
                id: order_id
            }
            
        })

        return orders;  
    }
}


export { DetailOrderService }  