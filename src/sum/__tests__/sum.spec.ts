import { sum } from "../sum";

it("should sum two numbers", async () => {
  expect(sum(1, 2)).toBe(3);
});
