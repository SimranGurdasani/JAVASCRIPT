
// typescript is superset basically a wrapper
// typescript internally converts into javascript
// do not prefer js for building websites instead go for typescript
let x = "Test"
let str = x.toLowerCase()
console.log(str)

// x();
// it will result into error in runtime,but not compile time
// npm is node package manager
// npm --version

// typescript kyu?iska answer below
// function foo(x){
//     x.flip()
// }

// const obj = {
//     // flip: ()=>console.log("flipped")
//     name:"test"
// }
// foo(obj)
// ans: if flip would not exist,it would give error on runtime

const user = {
    name:"Daniel",
    age:26,
};
console.log(user.location)
// it will give error that location does not exist on user pr js error nhi de rha

function flipCoin(){
    return Math.random < 0.5
}
// o/p :false aa rha, math.random m parenthesis missing h so error dena chahiye
// i.e function and no is not comparable - aana chahiye pr aaega nhi error,it will result false
console.log(flipCoin())


const value = Math.random() < 0.5? "a" : "b";
if(value !== "a"){
    console.log("a")
}else if(value === "b"){
    console.log("b")
    // oops,unreachable
}

// js wont give error but typescript would give an error bcuz it is logically incorrect i.e second block is never reachable