import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/deleteOrderService.";


class RemoveOrderController{
    async handle(req: Request, res: Response ){
        const order_id= req.query.order_id as string;  
        
        const removeOrder = new RemoveOrderService(); 
        // Sempre que chamar o execute tem que usar o await
        const order =  await removeOrder.execute({
            order_id
        });
      return res.json(order);
    }
}


export { RemoveOrderController }    