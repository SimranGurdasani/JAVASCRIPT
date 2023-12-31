
1
/*
2
// get random number 
3
// take ip from user
4
// check the value
5   
//      
6   
        if equal:
7
            append in last guess 
8
            wrong hai k jagah pe congratulations! you won
9
            ek new button will come which will reset
10
            input is disabled (reset)
11
        if less:
12
            append in last guess
13
            Wrong hai
14
            Too low
15
​
16
        if greater:
17
            append in last guess
18
            wrong hai
19
            Too high
20
// if guesscount becomes 10, then game over and reset button dena hai
21

22
// reset 
23
    - enable
24
    - random number will regenrate
25
    - all p will be empty
26
*/

// let randomNumber = parseInt(Math.random()*100)

// const submitButton = document.querySelector('#check')
// const lastGuesses = document.querySelector('#guesses')
// const answer = document.querySelector('#answer')
// const highLow = document.querySelector('#high-low')
// const ip = document.querySelector('#ip')
// const GUESS_COUNT = 10

// let count = 0;
// submitButton.addEventListener('click',checkGuess)

// console.log(randomNumber)
// function checkGuess(){
//     console.log(count)
//     if(count == GUESS_COUNT){
//         answer.textContent = 'GAME OVER!!'
//         gameOver()
//         return
//     }
//     // doubt + kyu aur appendchild b
//     let guessedNo=+ip.value 
//     if(lastGuesses.textContent === ''){
//         lastGuesses.textContent = "Last Guessess:"
//     }
//     lastGuesses.textContent+= ` ${guessedNo}`

//     if(guessedNo === randomNumber){
//         answer.textContent = 'CONGRATULATIONS! You won'
//         answer.style.backgroundColor = 'green'
//         answer.style.color = 'white'
//         gameOver()
//     }
//     else {
//         answer.textContent="Wrong!Try again!"
//         answer.style.backgroundColor='red';
//         answer.style.color='white'
        
//         if(guessedNo<randomNumber){
//             highLow.textContent="too low!"
//         }
    
//         else{
//             highLow.textContent="too high!"
//         }

//     }
//     count++;
//     ip.value=''
//     ip.focus()
//     // console.log(guessedNo)

//     // let guesses = document.querySelector('#guessess')
//     // guesses.textContent="guessedNo"

//     // if(guessedNo.textContent === ''){
//     //     lastGuesses.textContent='last guesses:'
//     }

// function gameOver() {
//     const resetButton = document.createElement('button')

//     resetButton.textContent = 'Reset'
//     document.body.appendChild(resetButton)
//     resetButton.id = 'reset'
//     resetButton.addEventListener('click',resetButtonCall)

//     ip.disabled=true
//     submitButton.disabled=true
//     highLow.textContent=''
// }

// function resetButtonCall(){
//     // enabled
//     ip.disabled = false 
//     submitButton.disabled=false

//     lastGuesses.textContent = ''
//     answer.textContent = ''
//     highLow.textContent=''

//     // randomno laege aur count firse initialise
//     randomNumber = getRandom()
//     count = 0

//     const resetBtn = document.querySelector('#reset')
//     document.body.removeChild(resetBtn)
// }

// function getRandom(){
//     return parseInt(Math.random()*100)
// }

let randomNumber = parseInt(Math.random()*100)
const ip = document.querySelector('#ip')
const lastGuesses = document.querySelector('#guesses')
const answer = document.querySelector('#answer')
const highLow = document.querySelector('#high-low')
const submitButton= document.querySelector('#check')
const GUESS_COUNT = 10

submitButton.addEventListener('click',checkGuess)
let count=0
// let guessedNo =+ip.value
console.log(randomNumber)

function checkGuess(){
    if(GUESS_COUNT==count){
        answer.textContent='GAME OVER!!'
        // highLow.textContent='Game Over!!'
        gameOver()
        return
    }

    //  + idar parseInt ka kaam kr rha 
    let guessedNo =+ip.value
    if(lastGuesses.textContent ===''){
        lastGuesses.textContent='Last Guesses:'
    }
    lastGuesses.textContent += ` ${guessedNo}`

    if(guessedNo===randomNumber){
        answer.textContent='Congratulations!! you won'
        highLow.textContent='GAME OVER!!'
        answer.style.color='white'
        answer.style.backgroundColor='green'
        gameOver()
    }
    else{
        answer.textContent='Wrong'
        answer.style.color='white'
        answer.style.backgroundColor='red'
        if(guessedNo<randomNumber){
            highLow.textContent='too low'
        }
        else{
            highLow.textContent='too high'
        }
    }

    count++
    ip.value=''
    ip.focus()
}

function gameOver(){
    // create kiya
    const resetBtn = document.createElement('button')


    resetBtn.textContent='Reset'
    // body m dala
    document.body.appendChild(resetBtn)
    resetBtn.id='reset'

    resetBtn.addEventListener('click',resetButtonCall)

    ip.disabled=true
    submitButton.disabled=true

}

function resetButtonCall(){
    ip.disabled=false
    submitButton.disabled=false

    lastGuesses.textContent=''
    answer.textContent=''
    highLow.textContent=''

    count=0
    randomNumber=getrandomNumber()
    ip.focus()

    const reset = document.querySelector('#reset')
    document.body.removeChild(reset)
}

function getrandomNumber(){
    return parseInt(Math.random()*100)
}
