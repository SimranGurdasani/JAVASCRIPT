// if true toh x varnaa o
let turnX = true

// maintaining no of turns to determine if draw
let count = 0;

let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]

let boxes = document.querySelectorAll('.layout button')
boxes.forEach((value)=>{
    value.addEventListener('click',()=>{
        // console.log("clicked");
        if(turnX){
            value.textContent="X"
            turnX=false
            // value.disabled=true
        }
        else{
            value.textContent="O"
            turnX=true
            // value.disabled=true
        }
       
        value.disabled=true
        count++;

        // check draw before winning bcuz person can win on last move
        checkDraw();
        checkWinner();
    })
})

function checkDraw(){
    if(count===9){
        let msg = document.querySelector('#msg')
        msg.textContent = `Draw!!!`
        let msgcontainer = document.querySelector('.msg-container')
        msgcontainer.classList.remove('d-none') 
    }

    newGame();
}

function checkWinner(){
    winningPatterns.forEach((pattern)=>{
        // console.log(pattern)
        // console.log(boxes[pattern[0]],pattern[0])
        // console.log(boxes[pattern[1]],pattern[1])
        // console.log(boxes[pattern[2]],pattern[2])

        let fvalue = boxes[pattern[0]].textContent;
        let svalue = boxes[pattern[1]].textContent;
        let tvalue = boxes[pattern[2]].textContent; 

        if(fvalue !=='' && fvalue===svalue && svalue===tvalue){
            displayWinner(fvalue)
        }

        // else if((fvalue!='' && svalue!='' && tvalue!='') &&( fvalue==svalue && svalue!=tvalue || fvalue!=svalue && svalue==tvalue )){
        //     // displayWinner(fvalue)
        //     console.log('draw')
        // }
    })
}

function displayWinner(fvalue){
    console.log("Winner is "+fvalue)
    
    let msg = document.querySelector('#msg')
    msg.textContent = `Winner is ${fvalue}`
    let msgcontainer = document.querySelector('.msg-container')
    msgcontainer.classList.remove('d-none')
    disableBoxes()

    newGame();
}

function disableBoxes(){
    boxes.forEach((value)=>{
        value.disabled = true;
    })
}

function newGame(){
    let newGamebtn = document.querySelector('#new-btn')
    newGamebtn.addEventListener('click',()=>{
        // let msg = document.querySelector('#msg')
        let msgcontainer = document.querySelector('.msg-container')
        msgcontainer.textContent=''

        count=0;

        boxes.forEach((value)=>{
            value.textContent=''
            value.disabled=false;
        })

    })
}