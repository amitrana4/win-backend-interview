import dotenv from "dotenv";
dotenv.config();
import { ApolloError } from "apollo-server-core";
import { OrdersService } from "../services";
import { responseMessage } from "../constants/constant";

export class _OrderController {
  async createOrder(_: any, args: any, context: any) {
    const method = "[createOrder]";
    try {
      const order: any = await OrdersService.createOne(args);
      return order;
    } catch (err: any) {
      console.log(`Error : ${method} - `, err);
      throw new ApolloError(err);
    }
  }

  async getAllOrders(_: any, args: any, context: any) {
    const method = "[getAllOrders]";
    try {
      const order: any = await OrdersService.findMany({
        where: {},
      });
      return order;
    } catch (err: any) {
      console.log(`Error : ${method} - `, err);
      throw new ApolloError(err);
    }
  }

  async getOrder(_: any, args: any, context: any) {
    const method = "[getOrder]";
    try {
      let { id } = args;
      const order: any = await OrdersService.findMany({
        where: { id },
      });
      return order;
    } catch (err: any) {
      console.log(`Error : ${method} - `, err);
      throw new ApolloError(err);
    }
  }

  async updateOrder(_: any, args: any, context: any) {
    const method = "[updateOrder]";
    try {
      const { id, totalfee, services } = args;
      const order: any = await OrdersService.findFirst({
        where: { id },
      });
      const new_date = new Date().getTime() - 3 * 60 * 60 * 1000;
      if (order.datetime < new_date) {
        const order = await OrdersService.updateOne({
          where: {
            id,
          },
          data: {
            totalfee,
            services,
          },
        });
        return order;
      } else {
        throw new ApolloError(responseMessage.ALREADY_EXIST);
      }
    } catch (err: any) {
      console.log(`Error : ${method} - `, err);
      throw new ApolloError(err);
    }
  }

  async removeOrder(_: any, args: any, context: any) {
    const method = "[removeOrder]";
    try {
      let { id } = args;
      const order = await OrdersService.deleteOne({
        where: { id },
      });
      return order;
    } catch (err: any) {
      console.log(`Error : ${method} - `, err);
      throw new ApolloError(err);
    }
  }
}
