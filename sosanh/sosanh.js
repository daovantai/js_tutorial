// console.log("sosanh");

// let a = {};
// console.log(a);

// let b;
// console.log(b);

// let d = 5;
// console.log(d);
// console.log(typeof d);
// d = [];
// console.log(typeof d);

// for (let index = 0; index < 10; index++) {
//   console.log("check", index);
// }

// let a = ["MU", "Ars", "Real", "Alnas", "PSG"];

// let i = 0;
// while (i < a.length) {
//   console.log("top:", i + 1, a[i]);
//   i++;
// }
// do {
//   console.log("ok");
// } while (i < 0);

// while (i < a.length) {
//   if (a[i] === "Real") {
//     console.log("top:", i + 1, a[i]);
//     i++;
//     continue;
//   }
//   // console.log("top:", i + 1, a[i]);
//   console.log("check i", i);
//   i++;
// }

// if (i > 8) {
//   console.log("lon");
// } else if ((i = 8)) {
//   console.log("bang");
// } else {
//   console.log("nho vkl");
// }

// let user = {
//   name: "tb",
//   age: 21,
//   sc: "ptit",
// };

// let sum = () => {
//   console.log("vkl luon");
//   return console.log("vkl cakk");
// };
// sum();

// let sum = (a, b, callback, vkl) => {
//   let tong = a + b;
//   let nhan = a * b;
//   let i = 0;
//   let timer = setInterval(() => {
//     vkl(nhan);
//     i++;
//     if (i === 5) {
//       clearInterval(timer);
//     }
//   }, 1000);
//   console.log(i);

//   callback(tong);
//   vkl(nhan);
// };

// let printsSum = (message) => {
//   console.log("check sum :", message);
// };

// let printsNhan = (message) => {
//   console.log("check nhan :", message);
// };

// sum(6, 9, printsSum, printsNhan);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr = [
  { name: "tb", age: 21 },
  { name: "cakk", age: 31 },
  { name: "lol", age: 41 },
  { name: "tda", age: 31 },
];

let filter = arr.filter((item, x) => {
  // console.log("check : item", item, "index :", index);
  return item && item.age === 31;
});

console.log(filter);
