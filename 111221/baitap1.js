/**
 * Bai 1
 * Voi array students trong old-lesson.js
 * Thuc hien not cac yeu cau sau:
 * cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
 * Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
 * Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map)
 */
// let student = [
//   {
//     name: "Duong",
//     age: 11,
//     hobbies: ["video game", "sleep", "learn"],
//   },
//   {
//     name: "Dong",
//     age: 12,
//     hobbies: ["video game", "sick", "study"],
//   },
//   {
//     name: "Minh",
//     age: 13,
//     hobbies: ["video game", "sick", "learn"],
//   },
//   {
//     name: "Thanh",
//     age: 9,
//     hobbies: ["play game", "sleep", "learn"],
//   },
//   {
//     name: "Hung",
//     age: 11,
//     hobbies: ["play game", "sick", "study"],
//   },
// ];
// function loctuoi(age) {
//   let answer = [];
//   let filteredStudents = students.filter((student, index) => {
//     if (student.age === age) {
//       return true;
//     }
//   });
//   filteredStudents = filteredStudents.map((value) => ({ name2: value.name }));
//   console.log(filteredStudents);
// }
function cclock() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "am";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "pm";
   }

//    hh = (hh < 10) ? "0" + hh : hh;
//    mm = (mm < 10) ? "0" + mm : mm;
//    ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
clock();

