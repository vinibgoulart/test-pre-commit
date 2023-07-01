import { subtract as _subtract } from "./subtract/subtract";
import { sum as _sum } from "./sum/sum";

export const mathOperations = (x = 5, y = 3) => {
  const sum = _sum(x, y);
  const subtract = _subtract(x, y);

  console.log("sum:", sum);
  console.log("subtract:", subtract);

  return { sum, subtract };
};

mathOperations();
