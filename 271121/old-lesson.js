/**
 * 0. Kiem tra kien thuc
 */

/**
 * Map, filter, Object.assign, spread operator (...)
 */

/**
 * Bai 5
 */

// function filterRange(arr, a, b) {
//   //   let result = arr.filter((value) => {
//   //     if (value > a && value < b) {
//   //       return true;
//   //     }
//   //   });
//   //   console.log(result);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a && arr[i] < b) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }

// const arr = [1, 2, 3, 4, 5];
// filterRange(arr, 2, 5);

let student = [
  {
    name: "Duong",
    age: 11,
    hobbies: ["video game", "sleep", "learn"],
  },
  {
    name: "Dong",
    age: 12,
    hobbies: ["video game", "sick", "study"],
  },
  {
    name: "Minh",
    age: 13,
    hobbies: ["video game", "sick", "learn"],
  },
  {
    name: "Thanh",
    age: 9,
    hobbies: ["play game", "sleep", "learn"],
  },
  {
    name: "Hung",
    age: 11,
    hobbies: ["play game", "sick", "study"],
  },
];

function filterByAge(age) {
  let answer = [];
  // cach 1 dung for loop, forEach, while,...
  // cach 2
  let filteredStudents = students.filter((student, index) => {
    if (student.age === age) {
      return true;
    }
  });
  filteredStudents = filteredStudents.map((value) => ({ name2: value.name }));
  console.log(filteredStudents);
}

// filterByAge(6);
