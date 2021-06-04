function uniqueNumbers(numbers) {
  // your code here..
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      temp.push(numbers[i]);
    }
  }

  let output = temp;
  for (let j = 0; j < temp.length; j++) {
    for (let k = j + 1; k < temp.length; k++) {
      if (output[j] > output[k]) {
        let num = output[j];
        output[j] = output[k];
        output[k] = num;
      }
    }
  }
  return output;
}

console.log(uniqueNumbers([1, 1, 2, 4, 4, 5, 5, 6])); // [1, 2, 4, 5, 6]
console.log(uniqueNumbers([2, 2, 1, 3, 99, 99])); // [1, 2, 3, 99]
