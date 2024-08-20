import { Request, Response } from "express";
import { CompletedOrderService } from "../../services/order/completedOrderService";

class CompletedOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body;  
      const completedOrderService = new CompletedOrderService();     
      
      const order = await completedOrderService.execute(
        {
            order_id
        }
      );
      return res.json(order); 
    }

}

export { CompletedOrderController }