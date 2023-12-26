// let random = parseInt(Math.random()*10)
// console.log(random)

// let res = document.querySelector('.result')
// if(random<5){
//     res.textContent="you lose"+random
// }
// else{
//     res.textContent="you win"+random
// }


// // template strings - backticks
// console.log(`Random is ${random}`)

function check(){
    // p ko create kiya purposely taki uss khali jagah par hamara text print hoe
    let ans=document.querySelector('#answer')
    let element = document.querySelector('#ip')
    // agar input se kuch print karwana ho toh element.value likhte h
    // console.log(element.value)
    if(isNaN(parseInt(element.value))){
        ans.textContent = "enter a valid no!!"
    element.focus()

        return
    }
    // ham aese likh skte, let value = element.value 
    // for(let num=2;num<element.value;num++){
               let flag=true;
                for(let i=2;i<element.value;i++){
                    if(element.value%i==0){
                        flag=false;
                        break;
                    }
                }
                
                if(flag){
                    // console.log("is prime");
                    ans.textContent = `${element.value} is prime`
                }
                else{
                    ans.textContent = `${element.value} is not prime`
                }
                element.focus();
                element.value='';
         }
        





