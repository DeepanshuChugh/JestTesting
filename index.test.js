const sum = require("./index");

describe("Testing Sum", () => {
  test("Add 2 Numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("Add 2 negative Numbera", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test("Add 2 float Number", () => {
    expect(sum(1.3, 2.3)).toBe(3.6);
  });

  test("Add 2 floating Number,where Output in integer", () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });

  test("Add 2 Number as a string", () => {
    expect(sum("2", "3")).toBe(5);
  });

  test("call sum with no arguments", () => {
    expect(sum()).toBe("sum invoked without arguments");
  });

  test("call sum with one arguments", () => {
    expect(sum(1)).toBe("sum needs atleast 2 arguments");
  });

  test("Add 3 Numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
