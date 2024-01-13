const input =document.querySelector('#input')
const generate = document.querySelector('#generate')
const primenos = document.querySelector('#primenos')
// let count = 0
// generate.addEventListener('click',()=>{
//     let value = parseInt(input.value);
//     console.log(value)
//     for(let num=2;count<value;num++){
//      let flag=true;
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 flag=false;
//             }
//         }
//         if(flag){
//             console.log(num);
//             primenos.textContent +=` ${num}`
//             count++;
//         }
//  }
// input.focus();
//  input.value='';
// })




// HW TO SEND ON GIT TO MAM
// TAKE INPUT AND O/P SHOULD PRINT SORTED ARRAY
// 2ND CASE USER EKSATH NOS DALEGA AND O/P M SORTED ARRAY PRINT HO

// 1ST CASE:-
const array = document.querySelector('.array')
let count = 0
// let ip = parseInt(input.value)
let given_array = []
let n = given_array.length
generate.addEventListener('click',()=>{
    console.log(input.value)
    array.textContent="SORTED ARRAY IS: "
    if(input.value!=''){
        // array.textContent += input.value+' '
        given_array.push(+(input.value))
        // n=given_array.length
        // console.log(n)
        // console.log(given_array)
        // Bubble_sort(given_array,n)
        // console.log(given_array)
        // array.textContent ='SORTED ARRAY: '+given_array

        
    // 2nd method-custom sorting

    // ye sort function strings m array leta h so dho values pass krenge
    // +ve - swap krna h
    // -ve - swap nhi krna h
    // 0 return jab dhono equal h 
    given_array.sort((a,b)=>a-b)
    console.log(given_array)
    array.textContent += given_array
    }


    input.focus();
    input.value='';
})

function Bubble_sort(given_array,n){
    // console.log(given_array.length)
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
    if(given_array[j]>given_array[j+1]) {
       let temp=given_array[j];
       given_array[j]=given_array[j+1];
       given_array[j+1]=temp
}
    }
}
}

// 2ND CASE:-
const input2 =document.querySelector('#input2')
const generate2 = document.querySelector('#generate2')
const sortedArray = document.querySelector('.sorted-array')

generate2.addEventListener('click',()=>{
    console.log(input2.value)
    const resultArray = input2.value.split(",")
    resultArray.sort((a,b)=>Number(a)-Number(b))
    console.log(resultArray)
    sortedArray.textContent = 'SORTED ARRAY IS '+ resultArray

    input2.focus();
    input2.value='';
})

