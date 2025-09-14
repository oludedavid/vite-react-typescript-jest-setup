import { add, capitalize, isEven, formatName, generateId } from "./myHelper";

describe("myHelper utilities", () => {
  describe("add", () => {
    test("should add two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("should handle negative numbers", () => {
      expect(add(-1, 1)).toBe(0);
      expect(add(-5, -3)).toBe(-8);
    });

    test("should handle zero", () => {
      expect(add(0, 5)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe("capitalize", () => {
    test("should capitalize first letter and lowercase the rest", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("WORLD")).toBe("World");
    });

    test("should handle single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    test("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });

    test("should handle mixed case", () => {
      expect(capitalize("hELLo")).toBe("Hello");
    });
  });

  describe("isEven", () => {
    test("should return true for even numbers", () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    test("should return false for odd numbers", () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    test("should handle negative numbers", () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe("formatName", () => {
    test("should format name correctly", () => {
      expect(formatName("john", "doe")).toBe("John Doe");
      expect(formatName("JANE", "SMITH")).toBe("Jane Smith");
    });

    test("should handle mixed case names", () => {
      expect(formatName("jOhN", "dOe")).toBe("John Doe");
    });
  });

  describe("generateId", () => {
    test("should generate a string", () => {
      const id = generateId();
      expect(typeof id).toBe("string");
    });

    test("should generate different ids", () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    test("should generate id with expected length", () => {
      const id = generateId();
      expect(id.length).toBe(9);
    });
  });
});
