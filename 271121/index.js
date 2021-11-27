/**
 * 1. Split, Reduce, Slice, Splice
 */

// let str = "abc-xyz-mno";
// const resultSplit = str.split('-');
// console.log(resultSplit);

// let fullname = "Nguyen Van An";
// console.log(fullname.split(" ")[1]);

// let arr = [1, 2, 3, 4, 5, 6];
// let initVal = 0;
// let result = arr.reduce((pre, curr) => {
//   pre += curr; // pre = pre +curr
//   return pre;
// }, 7);

// console.log(result); // 7 +1+2+3+4+5+6

// let resultSlice = arr.slice(0, 4); // 0<= va <4
// let resultSplice = arr.splice(0, 4, [10, 11, 12]);
// console.log("arr:", arr); // [[10,11,12],5,6]
// console.log("resultSplice:", resultSplice); // [1,2,3,4]

// Cho 1 array, nhung co 1 phan tu bi lap => dua ra index cua phan tu bi lap
// let arr = [1, 5, 10, 7, 6, 1]; // => 5
// n phan tu, co 1 phan tu duy nhat bi lap ===> dua ra index cua phan tu bi lap do

// cach 1: co 1 mang tempArr de chua cac phan tu khac nhau cua mang, neu 1 phan tu chua co trong mang tempArr => push vao tempArr
// neu da co trong mang tempArr => phan tu do la phan tu bi lap

// let tempArr = []; // mang tam
// // loop qua toan bo cac phan tu
// for (let i = 0; i < arr.length; i++) {
//   // neu ma phan tu do da ton tai trong mang tempArr thi minh se in ra ket qua va dung vong lap
//   if (tempArr.indexOf(arr[i]) >= 0) {
//     console.log(i);
//     break;
//   }
//   // neu phan tu do chua co trong tempArr thi minh se push vao tempArr
//   else {
//     tempArr.push(arr[i]);
//   }
// }

/**
 * 2. TInh truu tuong (Abstract)
 */

// OOP la mot huong lap trinh, huong doi tuong
// 2 khai niem: lop (class) va the hien (instance)

// ES5
// function Human(){
//     let head = 1;
//     let chest = 1;
//     let numOfFinger = 2;
//     let numOfLegs = 2;
// }

// ES6
class Human {
  head = 1;
  numOfLegs = 2;
  numOfFinger = 10; // properties cua class Human
  walk = function () {
    // cac methods cua lop Human
    console.log("xxx");
  };
}
// reusable code
/**
 * Class duoc sinh ra nham toi uu code va tan dung lai phan code da co, giam thoi gian compile cho browser
 */

let student1 = new Human(); // instance la mot object, class k phai la mot object
let student2 = new Human();
student2.numOfFinger = 9.5;
student2.walk = () => {
  console.log("yyy");
};
// console.log(student2, student1);
student2.walk();
// console.log(Human);

// cung 1 hanh dong walk thi cac the hien (instance) cua lop Human se bieu hien khac nhau ===> Tinh da hinh

// Tinh ke thua
class GiangHoMom extends Human {
  phongLon = true; // public
  #noDiaChi = true; // private
  #privateProp = 10;
}

let khaBanh = new GiangHoMom();
console.log(khaBanh);

// TInh truu tuong ==> Chi show ra nhung method, prop can thiet, ẩn đi cac method hay prop k muon show ra
/**
 * NOTE: Ve Abstraction va Encapsulation, a se noi ky o buoi sau nhe !!
 */
class Thing {
  talk;
  #private_prop;
  #private_method = () => {};
}

class Human extends Thing {
  talk = () => {
    console.log("talk");
  };
}

class Animal extends Thing {
  talk = () => {
    console.log("xxx");
  };
}

let ani = new Animal();
ani.#private_prop; // => cannot access private

/**
 * 3. Tinh ke thua (Enheritance)
 */

/**
 * Tan dung lai phan code cua mot lop khac da co, su dung tu khoa extends
 * Khi class A extends class B, tat ca cac thuoc tinh public cua class B se ton tai trong class A
 */

/**
 * 4. Tinh Da hinh (Polimorphism)
 */

/**
 * 5. TInh dong goi (Encapsulation)
 */
