// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * arr['0'] = arr[0] = 1;
 * arr['1'] = 2;
 * ...
 */

// /**
//  * 1. filter
//  */

// // lọc ra một số phần tử trong array thỏa mãn 1 điều kiện nhât định
// const result = arr.filter((value) => {
//   if (value % 2 === 0) {
//     return true;
//   }
// });

// console.log(result);

// /**
//  * 2. map
//  */

// // từ 1 mảng ban đầu sẽ biến đổi thành một mảng khác với số phần từ bằng mảng cũ, và các phần tử đc biến dổi theo cùng 1 điều kiện
// // map nhận vào tham số là một hàm khác (callback), hàm này sẽ được gọi trên từng phần tử của mảng, sau đó biến đổi phần tử đố thành giá trị mới, trả về cho mảng mới
// const result_map  = arr.map((value, index) => {
//     let newValue = value * 3;
//     return newValue;
// })  // callback
// console.log(result_map);

/**
 * 3. Object.assign
 */

// hàm asign của lớp Object sẽ tạo ra một object mới từ các object ban đầu,
// nếu các thuộc tính của các object nguồn mà trùng nhau thì thằng nào vào sau sẽ ghi đè thằng trước

var obj_source_1 = [1], // obj_source_1['0'] = 1
  obj_source_2 = [2]; // obj_source_2['0'] = 2

var target = [];

// nhận tham số đầu là object mục tiêu mà mình muốn copy, các tham số tiếp theo là các obj nguồn
Object.assign(target, obj_source_1, obj_source_2);

/**
 * {
 *  x:2, y: 1
 * }
 */

/**
 * 4. Spread operator  ...
 */

const ovj_3 = {
    x: 2,
    y: 2,
  },
  obj_4 = {
    x: 3,
    m: 1,
  };

target = [...obj_source_1, ...obj_source_2];
var target_2 = {
  ...ovj_3,
  ...obj_4,
}; // => {x: 3, y: 2, m: 1}

// console.log(target); // target = [1]
// console.log(target_2);

/**
 * BAI TAP
 */

// Bai 1
// copy array bang 2 cach
var arr1 = [1, 2, 3, 5];
var result;
// cach 1
result = [...arr1];
// cach 2
result = arr1.map((value) => {
  return value;
});
// cach 3
result = arr1.filter((value) => {
  return true;
});

// cach 4
Object.assign(result, arr1);

/**
 * Bai 2
 */

var arr1 = [1, 2],
  arr2 = [3, 4];
var result_2;

// result_2 có toàn bộ các phần tử của arr1, arr2
// cach 1
result_2 = arr1.concat(arr2);
// cach 2
result_2 = [...arr1, ...arr2];
// cach 3
for (let i = 0; i < arr1.length; i++) {
  result_2.push(arr1[1]); // push phần tử tại i vào result_2
}
// i = 2;
for (let i = 0; i < arr2.length; i++) {
  result_2.push(arr2[1]); // push phần tử tại i vào result-2
}

/**
 * Bai 4
 */

let arr = [1, 2, 3, 4, 5, 6, 7];
// viết 1 hàm filterRange(array, a, b), sau do tìm các phần tử nằm giữa a,b trong mảng array, 0<= a < b <array.length
// cach 1
function filterRange(arr, a, b) {
  let res = arr.filter((value, index) => {
    if (index > a && index < b) {
      return true;
    }
  });
  console.log(res);
  // let result = []
  // dung vong for
  //   for(let i=a+1; i<b; i++){
  //     result.push(arr[i])
  //   }
}

filterRange(arr, 3, 0); // []
filterRange(arr, 0, 3); // [2,3]
