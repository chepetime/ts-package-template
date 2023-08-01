import { add } from "@/add/add";
import { number } from "minifaker";
import { describe, expect, it } from "vitest";

describe("add_function", () => {
	// Tests that the add function correctly adds two positive integers
	it("adds two positive integers", () => {
		expect(add(2, 3)).toBe(5);
	});

	// Tests that adding two negative integers returns the correct result
	it("returns the correct result", () => {
		expect(add(-5, -3)).toBe(-8);
	});

	// Tests that adding a positive and a negative integer returns the correct result
	it("returns the correct result", () => {
		expect(add(5, -3)).toBe(2);
		expect(add(-5, 3)).toBe(-2);
		expect(add(0, -3)).toBe(-3);
		expect(add(0, 3)).toBe(3);
	});

	// Tests that adding zero to a positive integer returns the same integer
	it("adds zero to a positive integer", () => {
		expect(add(5, 0)).toBe(5);
	});

	// Tests that adding zero to a negative integer returns the same negative integer
	it("adding zero to a negative integer should return the same negative integer", () => {
		expect(add(-5, 0)).toBe(-5);
		expect(add(-100, 0)).toBe(-100);
		expect(add(-0.5, 0)).toBe(-0.5);
	});

	// Tests that adding two zeros returns 0
	it("adding two zeros", () => {
		expect(add(0, 0)).toBe(0);
	});

	it("should handle random numbers correctly [randomNumber + 1]", () => {
		const randomNumber = number();
		const result = add(randomNumber, 1);
		expect(result).toEqual(1 + randomNumber);
	});

	// Tests that the add function correctly adds two decimal numbers together
	it("adds two decimal numbers correctly", () => {
		expect(add(0.1, 0.2)).toBeCloseTo(0.3);
	});

	// Tests that adding two numbers in scientific notation returns the correct result
	it("test behaviour with scientific notation", () => {
		const result = add(1.23e5, 4.56e6);
		expect(result).toBe(4.683e6);
	});

	// Tests that adding two numbers with different number of decimal places returns the correct result
	it("should return the correct result", () => {
		const result = add(1.23, 4.567);
		expect(result).toBeCloseTo(5.797);
	});

	// Tests that adding two numbers with leading/trailing zeros returns the correct result
	it("leading/trailing zeros test", () => {
		expect(add(0.01, 0.02)).toBeCloseTo(0.03);
	});
});
