const firstip = document.querySelector('#first-ip')
const secondip = document.querySelector('#second-ip')
const ans = document.querySelector('#ans')

const add = document.querySelector('#add')
const subtract = document.querySelector('#sub')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

const options = document.querySelector('#options')

// options.addEventListener('click',selectOptions)
// function selectOptions(){
//     if(options.value===add.value){
//         let addans = firstipvalue+secondipvalue
//         // ans.textContent='addans'
//     }
// }


const generate = document.querySelector('#generate')
generate.addEventListener('click',generateAns)
function generateAns(){
    let firstipvalue=firstip.value
    let secondipvalue=secondip.value
    let optionsvalue= options.value

    console.log(firstipvalue,secondipvalue,optionsvalue)

// switch case b use kr skte
    if(optionsvalue === '+'){
        // agar parseInt nhi likhna h toh firstip.value ko +firstip.value likho
         let addans = parseInt(firstipvalue)+parseInt(secondipvalue)
        //  let addans = `${firstipvalue}+${secondipvalue}`
        //  console.log(firstipvalue)
        //  console.log(secondipvalue)
         console.log(addans)
         ans.textContent=addans
     }

     if(optionsvalue === '-'){
        let addans = parseInt(firstipvalue)-parseInt(secondipvalue)
       //  let addans = `${firstipvalue}+${secondipvalue}`
        console.log(firstipvalue)
        console.log(secondipvalue)
        console.log(addans)
        ans.textContent=addans
    }

    if(optionsvalue === '*'){
        let addans = parseInt(firstipvalue)*parseInt(secondipvalue)
       //  let addans = `${firstipvalue}+${secondipvalue}`
        console.log(firstipvalue)
        console.log(secondipvalue)
        console.log(addans)
        ans.textContent=addans
    }

    if(optionsvalue === '/'){
        let addans = parseInt(firstipvalue)/parseInt(secondipvalue)
       //  let addans = `${firstipvalue}+${secondipvalue}`
        console.log(firstipvalue)
        console.log(secondipvalue)
        console.log(addans)
        ans.textContent=addans
    }

    // 2nd method:eval function se
    // let answer = eval(firstipvalue+optionsvalue+secondipvalue)
    // ans.textContent=answer

//     let answer = 0
//     // 3rd method:switch
// switch(optionsvalue){
//     case '+':
//         answer = parseInt(firstipvalue)+parseInt(secondipvalue);
//         break;
//      case '-':
//          answer =  parseInt(firstipvalue)-parseInt(secondipvalue);
//          break;
//     case '*':
//          answer =  parseInt(firstipvalue)*parseInt(secondipvalue);
//         break;
//     case '/':
//         answer =  parseInt(firstipvalue)/parseInt(secondipvalue);
//          break;    
// }
//     ans.textContent=`Answer is ${answer}`
}
