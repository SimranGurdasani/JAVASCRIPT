const btnElem = document.querySelector('#btn')
// btnElem.addEventListener('click',()=>{
//     console.log('clicked')
// })
// console.log('hello world')

// setTimeout(()=>{
//         console.log('clicked')
// },2000)
// console.log('hello world')


/**
 1. create
 2 add event
 3 open connection 
 4 send/hit
 */
const xhr = document.querySelector('#xhr')
xhr.addEventListener('click',()=>{

    let xhrRequest = new XMLHttpRequest();

    // asynchronously run krega
    xhrRequest.addEventListener('loadend',()=>{
        // IDAR DEPENDENT CHEEZ LIKHNI H(I.E IN CALLBACK FUNCTN) JO WAIT KR RHI DATA AANE KA
        console.log("ended with request!!!")
    })

    // craete the connection with external url
    xhrRequest.open('GET','https://api.publicapis.org/categories')

    // hit the request
    xhrRequest.send();
    // INDEPENDENT CHEEZE IDAR LIKHNI H(BAHAR)
    console.log('started with request')
})

// HW TO SEND ON GIT TO MAM
// TAKE INPUT AND O/P SHOULD PRINT SORTED ARRAY
// 2ND CASE USER EKSATH NOS DALEGA AND O/P M SORTED ARRAY PRINT HO