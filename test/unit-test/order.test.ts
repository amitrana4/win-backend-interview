import "jest";
import {
  OrderController
} from "../../src/controllers";

const user = { user: { user_id: 1 } }
describe("Dashboard api's", () => {
  beforeAll(async () => {
  });

  let dashboard_id = 0
  it("create order >> createOrder 💁", async () => {
    it('should create an order', async () => {
      const createOrderDto = {
        dateTime: String(new Date()),
        totalFee: 100.00,
        serviceId: [1],
      };
      const expectedResult = { id: 1 }; 

      const result = await OrderController.createOrder('', createOrderDto, '');

      expect(result).toEqual(expectedResult);
    });
  })

  it("get order by id >> getOrder 🎍", async () => {
    const result = await OrderController.getOrder('', {id: 1}, '');
    expect(result.id).toEqual(1);
  })

  it("update order by id >> updateOrder 👌", async () => {
    const createOrderDto = {
      totalFee: 100.00,
      serviceId: [1],
      id: 1
    };
    const expectedResult = { id: 1 }; // Update with expected result

    const result = await OrderController.updateOrder('', createOrderDto, '');

    expect(result.id).toEqual(expectedResult.id);
  })
});
