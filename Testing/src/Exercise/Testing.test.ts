// question 1
import { describe, expect, it, test } from "vitest";
import {
  lengthString,
  isOrNotPalindrome,
  numbersInOrder,
  SquareRoot,
  sumOfArray,
  fetchUserData,
  nextFibonacciNumber,
} from "./questions";

test("length of string", () => {
  expect(lengthString("shmueli")).toBe(7);
});

// question 2

test("is the string is Palindrome or not", () => {
  expect(isOrNotPalindrome("אבא")).toBe(true);
});

// question 3
test("numbers in the array are sorted", () => {
  expect(numbersInOrder([1, 3, 2, -4])).toStrictEqual([-4, 1, 2, 3]);
});

// question 4
describe("sqrt", () => {
  it("should return 4 for sqrt(16)", () => {
    expect(SquareRoot(16)).toBe(4);
  });
  it("should throw an error for sqrt(-16)", () => {
    expect(() => SquareRoot(-16)).toThrowError();
  });
});

// question 5
describe("sumArray", () => {
  it("should return the sum of the array", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it("should return sum that is greater then 9", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBeGreaterThan(9);
  });
});

// question 6
describe.concurrent(
  "fetchUserData tasting fetching Users From JsonPlaceHolder",
  () => {
    test("fetching User that exist", async () => {
      const userExpected = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      };
      const result = await fetchUserData(1);
      expect(result).toEqual(userExpected);
    });

    test("fetching User that not exist", async () => {
      await expect(fetchUserData(2000)).rejects.toThrowError();
    });
  }
);

// question 7
describe("get the next Fibonacci number", () => {
  it("test to get the next number in Fibonacci series", () => {
    expect(nextFibonacciNumber([1, 1, 2, 3, 5])).toEqual(8);
  });
  it("test if is Fibonacci series", () => {
    expect(() => nextFibonacciNumber([1, 1, 2, 4, 5])).toThrowError();
  });
});

// describe("fibonacciSequence array of the fibonacci Sequence", () => {
//   it("array of the fibonacci Sequence", () => {
//     expect(fibonacciSequence(10)).toBe([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//   });

//   it("the array is not a fibonacci Sequence", () => {
//     expect(() => fibonacciSequence(10)).toThrowError();
//   });
// });
