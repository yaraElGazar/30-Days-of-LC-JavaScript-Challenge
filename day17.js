// 2628. JSON Deep Equal

// Given two objects o1 and o2, check if they are deeply equal.

// For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

// You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

// Please solve it without using lodash's _.isEqual() function.

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  let str1;
  let str2;
  if (
    Array.isArray(o1) &&
    Array.isArray(o2) &&
    o1.length > 0 &&
    o2.length > 0 &&
    !Array.isArray(o1[0])
  ) {
    str1 = JSON.stringify(o1);
    str2 = JSON.stringify(o2);
  } else {
    str1 = JSON.stringify(o1).split("").sort().join("");
    str2 = JSON.stringify(o2).split("").sort().join("");
  }

  return str1 === str2;
};
