const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    // request hit krega fetch aur promise return krega
    const promise = fetch('https://cat-fact.herokuapp.com/facts')
    console.log(promise)
    // loadend k simillar h
    // jab promise ka staus pending se fulfilled ho jyega tab then() function execute hoega
    promise.then(()=>{
        console.log('done!!!')
    })

    console.log('hello')
})

