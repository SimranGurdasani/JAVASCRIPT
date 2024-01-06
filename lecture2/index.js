// let arr=[1,2,3,4,5]

// // traditional for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// // for-of loop
// for(let elem of arr){
//     console.log(elem)
// }

// let obj={
//     name:"Foo",
//     email:"test@gamil.com",
//     number:"12345"
// }

// // for-in loop:obj ko loop lagaana ho toh
// for(let key in obj){
//     // console.log(key)
//     console.log(key,"-",obj[key])
// }

// while loop
// let arr=[1,2,3,45]
// let i=0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }


// alert("hello world")
// let value=prompt("enter value")
// let count =0
// let a=[value]
// console.log(value)
// let a=[value]
// let count=0
// if(value==1){
//     console.log("not prime")
// }
// else{
// for(let i=2;i<=value-1;i++){
//     if(a[i]%i!=0)
//     {
//         count++
//         console.log(count)
//     }
// }
// }

// prime no 
    for(let num=2;count<value;num++){
        flag=true;
        for(let i=2;i<num/2;i++){
            if(num%i==0){
                flag=false;
            }
        }
        if(flag){
            console.log(num);
            count++;
        }

 }


//  declaration function
function addTwoNumbers(x,y){
    console.log(x,y)
    return x+y;
}

console.log(addTwoNumbers(5,6))

