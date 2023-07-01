import { mathOperations } from "../index";

it("should subtract two numbers", async () => {
  expect(mathOperations(7, 3)).toStrictEqual({ sum: 10, subtract: 4 });
});
