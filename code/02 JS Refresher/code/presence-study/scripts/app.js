// import { apiKey } from "./util.js";

//  import dKey, { apiKey, apiKey2} from "./util.js";
//  console.log(apiKey+" "+apiKey2+" "+dKey);

//  import * as util from "./util.js"
// console.log(util.apiKey+" "+util.apiKey2+" "+util.default);

// function greetUser(userName, message="Hello"){
//   console.log(userName);
//   console.log(message);
// }
// greetUser("Max");
// greetUser("Manuel"," Hello, What's up");

// function createGreeting(userName, message = "Hello!") {
// // console.log(userName);
// // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

//   export default (userName, message) => {
//     console.log('hello');
//     return userName + message;
//   }


// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// 아래는 빈도수 높지 않지만 해본다

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === 'Sports';
// });
// 위 코드를 줄여쓰면
// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);
// // 각 요소 값을 업데이트 해서 새로운 배열을 생성한다 
// // const editedHobbies = hobbies.map((item) => item+"!");
// // 아래와 같이 객체로도 가능 
// const editedHobbies = hobbies.map((item) => ({text:item}) );
// console.log(editedHobbies);
// //exercise
// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects
//   return numberArray.map((num) => ({val : num}));
// }
// const result = transformToObjects(["joy","peace","love"]);
// console.log(result);

//const userNameData = ["Max", "Schwarzmuller"];

// const firstName = userNameData[0];
// const secondName = userNameData[1];

// 구조 분해 할당
// const [firstName, lastName] = ["Max", "Schwarzmuller"];

// console.log(firstName);
// console.log(lastName);

// const user = {
//   name : "흥민",
//   age : 33
// }
// const name = user.name;
// const age = user.age;

// const { name , age } = {
//   name : "흥민",
//   age : 33
// }

// console.log(name +" "+ age);

// 함수 매개변수 목록에서 디스트럭쳐링 
// console.log(localStorage.getItem('id'));
// console.log(localStorage.getItem('currency'));
// function storeOrder(order){
//   localStorage.setItem('id',order.id);
//   localStorage.setItem('currency',order.currency);
// }
//  storeOrder({id : 'javaking', currency : '300'});


// function storeOrder({id,currency}){
//   localStorage.setItem('id',id);
//   localStorage.setItem('currency',currency);
// }
// storeOrder({id : 'javaking', currency : '300'});
// console.log(localStorage.getItem('id'));
// console.log(localStorage.getItem('currency'));


// 스프레드 연산자 
// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies,...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }
// console.log(extendedUser);


// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const 를 let 보다 권장 
// const hobbies = ["Sports", "Cooking"];
// // for 와 ( 는 띄워주는 것이 바람직 
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout(){
//   console.log("Timed out!");
// }
// setTimeout(handleTimeout,2000);

// const handleTimeout2 = () => {
//   console.log("Time out ... again!");
// }

// setTimeout(handleTimeout2,3000);
// setTimeout(() => {
//   console.log("More timing out...");
// },4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }
//   greet();
// }

// init();

// value 는 변경될 수 없다 
// const message = “Hello”;

// 배열 요소는 변경 가능하다 
// const 라도 배열 주소가 변경되는 것이 아니므로
const hobbies = ["Sports", "Cooking"];
// hobbies = [];
hobbies.push("Working");
console.log(hobbies);











