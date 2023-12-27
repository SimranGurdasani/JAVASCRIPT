// const elem = document.querySelector('#change')


// 2 methods
// 1st method
// let func = ()=>{
//     console.log("checked!!")
// }
// // never write below func with parenthesis i.e func()
// elem.addEventListener('click',func)


// 2nd method
// elem.addEventListener('click',()=>{
//     // console.log("checked!!")
//     let target = document.querySelector('#target')
//     // 1st method 
//     // target.style.backgroundColor='brown' 

//     // 2nd method:but this will remove the exisiting classes including wrappper
//     // override the existing classes
//     // target.className = 'brown'

//     // 3rd method
//     // this will remove th eclass we want and add the class which we want to replace
//     target.classList.remove('teal')
//     target.classList.add('brown')
// })

// console.log("check")
// const div = document.querySelector('.wrapper')


// bulb on / off
let btn=document.querySelector('#btn')

btn.addEventListener('click',()=>
{
    let targett = document.querySelector('#targett')

    // targett.innerHTML("<img src="bulb offf.jpg" id="targett" alt="">")
    // targett.textContent('<img src="bulb on.avif" alt="">')
    // targett.setAttribute('src','bulb on.avif')
    if(btn.textContent === 'on'){
        targett.setAttribute('src','bulb on.avif')
        btn.textContent='off'
    }
    else{
        targett.setAttribute('src','bulb offf.jpg')
        btn.textContent='on'
    }
   
})
