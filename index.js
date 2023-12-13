// foretch

// function printArr(arr) {
//     let sum = 0;
//    arr.forEach(element => {
//     if (element > 0) {
// sum = sum + element;
// }}); 

//    return sum;
// }

// console.log(printArr(arr));
// filter
// let arr1 = arr.filter((valeu) => {
//     return valeu % 2 ==0
// });

// console.log(arr1);

// let arr = [1, 2, 3, 4, 5, 6,15]
// let arr1 = arr.filter((valeu) => {
//     return valeu%3==0 && valeu%5==0;
// })
// console.log(arr1);

// let arr1 = arr.map((valeu) => {
    
// })

// let user ={
// name: "thomas",
// surname: "shelbiy",
// age: 25,
// abut(){
//     console.log(user);
// }
// }


// user.abut();
// // for (const key in user) {
// //     console.log(user[key]);
// // }


// let user = [
//     {
//         name: 'kira',
//         age: 45
//     },

//     {
//         name: 'jhon',
//         age: 55
//     },

//     {
//         name: 'alex',
//         age: 
//         88
//     },
// ]
// let sum =0;
// for (const item of user) {
//     sum += item.age
// }
// console.log(sum);

// function User(name,  surname, age, phone){
//     this. name = name;
//     this. surname = surname;
//     this. age = age;
//     this. phone = phone;

// }
// let jhon = new()

// let arr = [
//     {
//         name: "thomas",
//         age: 34,
//     },

//     {
//         name: "Adam",
//         age: 15,
//     },

//     {
//         name: "Doe",
//         age: 21,
//     },

//     {
//         name: "Alex",
//         age: 76,
//     },


// ];

// 1-masala
// function mass(arr){
//     let sum =1;
// for (const item of arr) {
//     sum *= item.age
// }
// return sum
// }
// console.log(mass(arr));

// 2-masala

// function mass(arr){
//     let newMass = [];
//     for (const item of arr) {
//         if(item.age > 25){
//             newMass.push(item)
//         }
//     }
//     return newMass
// }

// console.log(mass(arr));

// 3-masala
// function mass (arr){
//     let newMass = 0;
    
//     for (const item of arr) {
//         newMass += item.age
//     }
//     let o =Math.trunc( newMass/4)
//     return o
// }

// console.log(mass(arr));


// 4-masala
// function mass (arr){
//    let max = arr[0
// ].age

//    if(max > arr[1].age){
//     max = arr[1].age
//    }else{
//     max = arr[0].age
//    }
//    if(max > arr[2].age){
//     max = arr[2].age
//    }else{
//     max = arr[0].age
//    }
//    if(max > arr[3].age){
//     max = arr[3].age
//    }else{
//     max = arr[0].age
//    }
//    return max
// }
// console.log(max);