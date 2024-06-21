// 
 let i=10;
//  var z=20;
//  let x=50;
// function myName(){
//     const name="anshuman";
//     console.log(name);
// }
// myName();
// if(!Math.truncn){
//     Math.truncn=function (num){
//         return num>0? Math.ceil(num):Math.floor(num);
//     }
// }
// console.log(Math.truncn(54.34));
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
//   };
//   const json=JSON.stringify(student);
//   const obj=JSON.parse(json)
//   console.log(typeof(obj))  

// let sum = new Function('a', 'b', 'return a * b');

// console.log( sum(1, 2) )
// let user = {
//     firstName: "John",
//     sayhii:function(...args){
//      return args
//     }
//   };
  
//   function func(...args) {
//     console.log(this.sayhii(...args));
//   }
// // func.call(user,"ram","shan","fdsd")  
// const funcbind=func.bind(user);
// funcbind("ram","shan","fdsd")

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName(){
//         return `${this.name} ${this.surname}`;  
//     },
//     set fullName(value){
//      [this.name,this.surname]=value.split(' ');
//     }
// }
// user.fullName = "Alice Cooper";
// console.log(user.fullName)


// let animal = {
//     eats: "animal"
//   };
//   let rabbit = {
//     jumps: "rabibt"
//   };
// rabbit.__proto__=animal;
// console.log(rabbit.eats)  
// let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };
// let mammels={
//     jump:true,
//     __proto__:animal
// }  
// let longEar={
//     earLength:10,
//     __proto__:mammels
// }
// console.log(longEar.eats)


// class Anshuman{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     showData(){
//         console.log(this.name,this.age);
//     }
//     setData(name){
//       this.name=name
//     }
// };
// let user= new Anshuman("mishra",24);
// user.showData();
// user.setData("anshu");
// user.showData();

// let animal={
//     name:"animals",
//     eat(){
//         console.log(`${this.name}`)
//     }
// };
// let rabbit={
//     name:"rabbit",
//     __proto__:animal,
//     eat(){
//         super.eat()
//     }
// };
// let cat={
//     name:"cat",
//     __proto__:rabbit,
//     eat(){
//         super.eat();
//     }
// };
// cat.eat();

// class Animal{
//     constructor(name,category){
//         this.name=name,
//         this.category=category,
//         this.speed=this.speed
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//       }
//       stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//       }

// }
// class Rabbit extends Animal{
//     constructor(name,earlen,category){
//         super(name,category);
//         this.earlen=earlen;
//     }
//     hide() {
//         console.log(`${this.name} ${this.category} hides! ${this.earlen}`);
//       }
//       stop() {
//         super.stop(); // call parent stop
//         this.hide(); // and then hide
//       }
// }
// let rabbit=new Rabbit("rabbit",5,"charpair")
// // rabbit.hide()
// rabbit.stop();

// class CoffeeMachine{
//     #water_amount=0;
//    get showWater(){
//     return this.#water_amount;
//    }
//    set waterAmount(value){
//     this.#water_amount=value;
//    }
// };
// let coffee= new CoffeeMachine();
// coffee.waterAmount=200;
// // console.log(coffee.#water_amount)
// console.log(coffee.showWater)
// const arr=[2,4]
// console.log(arr instanceof Array);
// let json = '{ "age": 30 }';
// try{
//     let user=JSON.parse(json);
//     console.log(user);
// } catch(err){
//     console.log(err.message);
// }
function * generatorFunc(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let generator=generatorFunc()
// for(let value of generator){
//     console.log(value);
// }
let one=generator.next();
console.log(JSON.stringify(one))
let two=generator.next();
console.log(JSON.stringify(two))
let three=generator.next();
console.log(JSON.stringify(three))