// declaration function
function multiply(x,y){
    return x*y;
}
console.log(multiply(1,2))

// expression function
// let foo=function(){
//     console.log("inside foo")
// }
// foo();

// arrow function:this is imp
// syntax is ()=> a+b ...do not write return a+b;
let add=(a,b)=> a+b
let result=add(4,5);
console.log(result);

// var args
function sum(...args){
    let sum=0;
    for(let elem of args){
        sum+=elem;
    }
    console.log(sum);
}
sum(1,2);
sum(1,2,3);

// can also write let sumArrow = (...args)=>{
sum=(...args)=>{
    let sum=0;
    for(let elem of args){
        sum+=elem;
    }
    console.log(sum);
}
sum(1,2);
sum(1,2,3);

// let and const are block scoped mtlab {} curly braces ke ander tak chlte and const does not change i.e if k andar likha toh if k andar hi
function test(){
    let flag=true;
    let foo="";
    if(flag){
        const elem ="test"
        foo="Hi"
        console.log("hi");
    }
    console.log(foo);
    for(let i=0; i<5;i++){
        console.log(i);
    }
    // create new global variable ideally it should have given error but elem was block scoped
    elem="update"
    // console.log("Again"+i)
}
test();
const obj ={
    fname:"test",
    lname:"bar"
}
// reference is not changed - will allow
obj.fname="updated"

// reference is changed - wont allow
// obj = {
    email:"test@gmail.com"
// }
console.log(obj)

// var is function scoped i.e pure function k andar chalega
// var is variable hoisting i.e it takes ur DECLARATION to top not initialisng
function foo(){
    // console.log(a)
    // console.log("test")
    // var a=5;

    // variable hoisting
    var a
    console.log(a)
    console.log("test")
    a=5
    // ye o/p m undefined aur test dega cuz initialise toh last m kiya h n
}
foo();

const square = (x)=>x*x
// const divide =(x)=>x/2

// callback is function passed as parameter
// const cube = function(x,callback){
//     return x * callback(x)
// }
// callback is asynchronous

let ans = square(5)
console.log(ans);

// ham square aese koi b function ko pass kr skte fir callback as a reference act krega
// let ans2= cube(5, square)
// console.log(ans2);

// as arrow function aur anonymous function likhke dekha
const cube = (x,callback)=> x*callback(x)
// ye call kiya aur store kiya ans2 m
let ans2= cube(5, (x)=>x*x);
console.log(ans2)

setTimeout(()=>{
    console.log("after 3 seconds - hi")
},3000)

setInterval(()=>{
    console.log("heeeeelooo")
},2000)

let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(let elem of arr){
    console.log(elem)
}
for(let ind in arr){
    console.log(arr[ind])
}
// new form of loop joki callback function paas krenge forEach m joki ye parameters leta h:value,index,arrayname
arr.forEach((value,index,a) => {
    console.log(value,index,a)
})
arr.forEach((value) => console.log(value))
 sum=0;
arr.forEach((value)=>{
    sum+=value;
})
console.log(sum);

// o/p: ye chahiye arr=[1,4,9,16,25]
// let b=[1,2,3,4,5];
// arr.forEach((value)=>{
//     console.log(value*value)
// } )

let squares = []
arr.forEach((value)=>{
    squares.push(value*value);
})
console.log(squares)

let newArr = arr.map((value,index,arr)=>{
    return value*value
})
console.log(newArr)

// let flag=0;
// let newArray = arr.map((value)=>{
//     if(value%2==0){
//         flag=1;
//     }
//     else
//     flag=0;
// })
// if(flag==1){
//     console.log(newArray)
// }

let even=[]
squares.forEach((value)=>{
    if(value%2==0)
    {
        even.push(value)
    }
})
console.log(even)

// filtered function m array ki same length nhi hogi and new array return krega 
// map m new array return toh hoga lekin same length ke elements rhega 
let filtered = squares.filter((value)=>value%2 == 0)
console.log(filtered)

let product=1
let prod= arr.forEach((value)=>{
    product=product*value
   
})
console.log(product)

// 1,2,,3,4,5
// reduce function above five elements ko 1 value krke dega
// here accumlator(acc) is till now accumlated value
let prodans=arr.reduce((acc,curr)=>{
    return acc*curr;
})
console.log(prodans)