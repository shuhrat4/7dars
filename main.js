// 1
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "logistik company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+123456789",
//     username: "shuhrat"
// };

// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }

// 2

// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "volleyball",
//     interest: "sleep"
// };

// const mergedPerson = Object.assign({}, person1, person2);
// console.log(mergedPerson);

// 3

// let numbers = [1, 2, 3, 4, 5];
// let value = numbers[numbers.length - 1];
// let value2 = value + 1;
// numbers.push(value2);
// console.log(numbers);

// 4

// function sum(numbers) {
//        let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     if (numbers[0] % 2 === 0) {
//             numbers.unshift(sum);
//     } else {
//           numbers.push(sum);
//     }
//     return numbers;
// }
// let numbers = [1, 2, 3, 4, 5];
// let num = sum(numbers);
// console.log(num);

// 5

// function num(numbers) {
//     if (numbers.length < 2) {
//         return numbers; 
//     }
//     let temp = numbers[0];
//     numbers[0] = numbers[numbers.length - 1];
//     numbers[numbers.length - 1] = temp;

//     return numbers;
// }
// let numbers = [1, 2, 3, 4, 5];
// let sum = num(numbers);
// console.log(sum); 

// 6

// function sum(count, words = []) {
//     if (count === 0) {
//         return words;
//     }
//         let word = prompt("Please enter a word:");
//     words.push(word);
//         return sum(count - 1, words);
// }
// let word = sum(6);
// console.log(word);

// 7
// function arr(array = [], maxItems = 3) {
//     if (array.length >= maxItems) {
//         return array;
//     }
//     let question = prompt(`Please enter question ${array.length + 1}:`);
//     array.push(question);
//     return arr(array, maxItems);
// }
// function arr2(array, responses = [], index = 0) {
//     if (index >= array.length) {
//         return responses;
//     }
//     let answer = prompt(array[index]);
//     responses.push(answer);
//     return arr2(array, responses, index + 1);
// }
// let sum = arr();nm
// let num = arr2(sum);
// console.log("Responses:");
// num.forEach((response, index) => {
//     console.log(`Response to question ${index + 1}: ${response}`);
// });

//  ------ 2-rasm ------

// 1

// function num() {
//       let array = [];
//     let sum = prompt("Please enter a string:");
//     array.push(sum);
//     return array;
// }
// let array = num();
// console.log(array);

// 2

// function sum(array1, array2) {
//     const num = array1.filter(value => array2.includes(value));
//     array1.unshift(...num);
//     array2.unshift(...num);

//     return [array1, array2];
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// let [updatedArray1, updatedArray2] = sum(array1, array2);
// console.log(updatedArray1); 
// console.log(updatedArray2); 

// 3

// let obj = {
//     name: "jonh",
//     age: 30,
//     job: "mehanik",
//     study: "none",
//     travel: "us"
// };
// let sum = Object.keys(obj);
// let num = sum.length;

// console.log(sum); 
// console.log(num); 


// 4

// function num(numbers = [], count = 4) {
//     if (numbers.length === count) {
//         return numbers.reduce((acc, curr) => acc + curr, 0);
//     }
//     let sum = prompt(`Please enter number ${numbers.length + 1}:`);
//     let number = parseInt(sum);
//     numbers.push(number);
//     return num(numbers, count);
// }
// let sum = num();
// console.log(`The sum of the numbers is: ${sum}`);

// 5

// let obj1 = {
//     name: "Abdulloh"
// };

// let obj2 = {
//     age: 19
// };
// let obj = { ...obj1, ...obj2 };
// console.log(obj); 
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }
