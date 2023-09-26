// import User from "./database";

import axios from "axios";

// question 1
export const lengthString = (str: string) => str.length;

// question 2

export const isOrNotPalindrome = (str: string) => {
  const stringToCheck = str.trim().toLowerCase();
  const isPalindrome = stringToCheck.split("").reverse().join("");
  return stringToCheck === isPalindrome;
};

// question 3
export const numbersInOrder = (array: number[]) => array.sort();

// question 4

export const SquareRoot = (SquareNumber: number) => {
  if (SquareNumber <= 0) throw new Error("the number must by bigger the 0");
  return Math.sqrt(SquareNumber);
};

// question 5
export const sumOfArray = (array: number[]) => {
  let sum: number = 0;
  for (let index = 0; index < array.length; index++) sum += array[index];
  return sum;
};

// question 6
export const fetchUserData = async (ID: number) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${ID}`
    );

    if (!user.email) {
      const message = `An error has occurred`;
      throw new Error(message);
    }

    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// question 7
export const nextFibonacciNumber = (arrFibonacci: number[]) => {
  let ifFibonacciSeries = true;
  for (let i = 0, j = 1; j < arrFibonacci.length - 1; i++, j++) {
    if (arrFibonacci[j + 1] !== arrFibonacci[i] + arrFibonacci[j]) {
      ifFibonacciSeries = false;
    }
  }
  if (ifFibonacciSeries === false)
    throw new Error("this array is not Fibonacci series!");
  return (
    arrFibonacci[arrFibonacci.length - 1] +
    arrFibonacci[arrFibonacci.length - 2]
  );
};

// export const fibonacciSequence = (numbersToReturn: number): number[] => {
//   const array: number[] = [];
//   for (let index = 0; index <= numbersToReturn; index++) {
//     if (index === 0 || index === 1) {
//       array.push(index);
//       continue;
//     }
//     const lastNumber = array[array.length - 1];
//     const theNumberBeforeTheLast = array[array.length - 2];
//     array.push(lastNumber + theNumberBeforeTheLast);
//   }
//   return array;
// };
