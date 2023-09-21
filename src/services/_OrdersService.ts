import { Prisma } from "@prisma/client";
import { prismaWrite, prismaRead } from "./prisma_client";

export class _OrdersService {
  async findUnique(query: any) {
    return prismaRead.order.findUnique(query);
  }
  async findMany(query: any) {
    return prismaRead.order.findMany(query);
  }
  async findFirst(query: any) {
    return prismaRead.order.findFirst(query);
  }
  async createOne(query: any) {
    return prismaWrite.order.create(query);
  }
  async createMany(query: any) {
    return prismaWrite.order.createMany(query);
  }
  async updateOne(query: any) {
    return prismaWrite.order.update(query);
  }
  async updateMany(query: any) {
    return prismaWrite.order.updateMany(query);
  }
  async deleteOne(query: any) {
    return prismaWrite.order.delete(query);
  }
  async deleteMany(query: any) {
    return prismaWrite.order.deleteMany(query);
  }
}
