import {
  OrderController,
} from "../../controllers";
export const resolvers = {
  Query: {
    getAllOrders: OrderController.getAllOrders,  
    getOrder: OrderController.getOrder,  
  },
  Mutation: {
    createOrder: OrderController.createOrder,
    updateOrder: OrderController.updateOrder,
    removeOrder: OrderController.removeOrder,
  },
};
