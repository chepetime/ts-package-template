import { sub } from "@/sub/sub";
import { number } from "minifaker";
import { describe, expect, it } from "vitest";

describe("sub", () => {
	it("should return the subtraction of two numbers [5 - 2 = 3]", () => {
		const result = sub(5, 2);
		expect(result).toBe(3);
	});

	it("should handle negative numbers correctly [-5 - 10 = -15]", () => {
		const result = sub(-5, 10);
		expect(result).toBe(-15);
	});

	it("should handle zero correctly [10 + 0 = 10]", () => {
		const result = sub(10, 0);
		expect(result).toBe(10);
	});

	it("should handle random numbers correctly [randomNumber - 1]", () => {
		const randomNumber = number();
		const result = sub(randomNumber, 1);
		expect(result).toEqual(randomNumber - 1);
	});
});
