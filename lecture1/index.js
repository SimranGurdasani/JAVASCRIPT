// semicolon put kiya nhi toh b chlega
console.log("hi",);
console.warn("hello")
console.log("hello","hi",1,'test')
// datatypes
// there is one datatype-number
// it is dynamically typed language
// undefined is no value and anything that does not return anything
// null is empty object jo jisko b point nhi kr rha

// undefined datatype
let x
console.log(typeof x)

// typeof vo variable ka datatype btata h
let y=null
console.log(typeof y)

// number datatype
let bar=1.5
console.log(typeof bar)

// variable are boxes that hold ur data
// snakecase -beech m / aata h and 

// arrays idar sab datatypes lete h
let a=[1,2,3,"foo"]


// key can be string or symbol or number whereas value can take any datatype such as nested object,array,anything
let obj ={
    name: "John Doe",
    "email":"test@gamil.com",
    address:{
        "buildingname" : "XYZ",
        "streetName":"",
        "city":"Mumbai",
        "pincode":"421004"
    },
    1:true
}
// number ko access krna h toh [] ye dena padega
// and string ko access krna h toh . dho
console.log(obj[1])
console.log(obj.address.pincode)

for(let i=0;i<a.length;i++){
    console.log(a[i])
}

let num='1.5'
let numInt= parseFloat(num)

//let numInt = Number(num)

// let numInt = +num
console.log(typeof numInt,numInt)

// truthy and falsy values read krna 
// java m if(flag==0) likhte h toh hi print hota h but idar print hoga without ==0 se b print hoga sirf truthy value
let flag='test'
if(flag){
    console.log("hi")
}


let str1=1
let str2='1'

// ismei sirf vo value 1 same same h irrespective of dattatype and will return o/p as true
console.log(str1==str2)
// triple = will not only check value but also checks datatype ...it is known as strict typed checking
console.log(str1===str2)

