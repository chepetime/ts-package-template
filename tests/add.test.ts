import { describe, it, expect } from "vitest";
import { number } from "minifaker";

import { add } from "@/add";

describe("add", () => {
  it("should return the sum of two numbers [2 + 3 = 5]", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("should handle negative numbers correctly [-5 + 10 = 5]", () => {
    const result = add(-5, 10);
    expect(result).toBe(5);
  });

  it("should handle zero correctly [10 + 0 = 10]", () => {
    const result = add(10, 0);
    expect(result).toBe(10);
  });

  it("should handle random numbers correctly [randomNumber + 1]", () => {
    const randomNumber = number();
    const result = add(randomNumber, 1);
    expect(result).toEqual(1 + randomNumber);
  });
});
