//  1. Creati un loop care sa numere de la 0 pina la 10 folosint for, wihle si do while.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ---------------------------

let j = -1;

while (j < 10) {
  j++;
  console.log(j);
}

// ---------------------------

let n = -1;

do {
  n++;
  console.log(n);
} while (n < 10);

// 2. Creati un loop fara conditie care sa indeplineasca doar de 5 ori folosind for.

for (let k = 5; k--; ) {
  console.log(k);
}

// 3. Creati un loop care sa afiseze in consola fiecare element dintr-un array.

let arr = ["ford", "vw", "tesla", "volvo", "toyota"];

for (let l = 0; l < arr.length; l++) {
  console.log(arr[l]);
}

// 4. Creati un for loop care sa afiseze pe rand fiecare litera dintr-un string.

let str = "StringLoop";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 5. Sa folositi metodele:

// map,
const arr2 = [1, 2, 3, 4, 5];
const arrMap = arr2.map((i) => i * 2);
console.log(arrMap);

// filter,
const filter = arr.filter((car) => car.length < 3);
console.log(filter);

// indexOf,
console.log(arr.indexOf("volvo"));

// findIndex,
const find = (car) => car.length < 3;
console.log(arr.findIndex(find));

// every,
const isBiggerThanTwo = (num) => num > 2;
console.log(arr2.every(isBiggerThanTwo)); //false

// some,
const even = (num) => num % 2 === 0;
console.log(arr2.some(even)); //true

// flat,
const arr3 = [[1, 2], 3, 4, [5, [6, 7], [[8]]]];
const flatArr = arr3.flat(3);
console.log(flatArr);

// forEach,
arr.forEach((car) => console.log(car));

// find,
console.log(arr.find(find)); //vw

// concat(folositi si spread operator),
arrConcat = arr.concat(arr2);
arrConcat2 = [...arr, ...arr2];
console.log(arrConcat);
console.log(arrConcat2);

// includes.
console.log(arr.includes("tesla")); //true
