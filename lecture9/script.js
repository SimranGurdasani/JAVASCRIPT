const input =document.querySelector('#input')
const generate = document.querySelector('#generate')
const primenos = document.querySelector('#primenos')
let count = 0
generate.addEventListener('click',()=>{
    let value = parseInt(input.value);
    console.log(value)
    for(let num=2;count<value;num++){
     let flag=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                flag=false;
            }
        }
        if(flag){
            console.log(num);
            primenos.textContent +=` ${num}`
            count++;
        }
 }
input.focus();
 input.value='';
})
