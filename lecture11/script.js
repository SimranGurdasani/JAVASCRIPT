const hit = document.querySelector('#hit')
hit.addEventListener('click',()=>{
    // promise ek object h
    // const promise = fetch('https://cat-fact.herokuapp.com/facts')
    // console.log(promise)
    // promise.then((response)=>{
    //     // resposnse m bht saari cheeze hoti h i.e metadata usmei se ek json function aur status
    //     // returning you a promise aur jaha promise return hoega udar .then call hoega hi
    //     // agar hamko data ko json mei convert krna h  toh -json ek function h response ka i.e answer ko json m convert krta h
    //     const promise2 = response.json()
    //     console.log(promise2)
    //     console.log(response.status)
        
    //     // the answer you r going to receive eventually is passed in then handler
    //     promise2.then((value)=>{
    //         console.log(value)
    //     })


    // promise chaining

    // fetch('https://cat-fact.herokuapp.com/facts')
    //     .then((response)=>{
    //     response.json()
    //         .then((value)=>{
    //             console.log(value)
    //         })
    //     })

        // fetch('https://cat-fact.herokuapp.com/facts')
        // .then((response)=>{
        //     return response.json()
        // }).then((value)=>{
        //         console.log(value)
        // })


    // flow aesa h ki fetch ek promise return krta h fir vo promise par then fn m response pass kiya 
    // taki response.json krenge toh ek promise return krta h fir taki uss promise par then lagaege
        fetch('https://api.publicapis.org/categories')
        .then((response)=>response.json())
        .then((value)=>{
        console.log(value)
        let data=value.categories
        data.forEach((element) => {
            console.log(element)
            const dropdown = document.querySelector('#dropdown')
            // option tag create kiya aur usko element ke sath concatenate kiya aur += matalab append kiya ek ek element ko
            dropdown.innerHTML += '<option >'+element+'</option>'
            // ye below dusra way
            // dropdown.innerHTML += `<option value='${element}'>${element}</option>`
        });
        })
    })
    console.log('hello')

// pehele dogs ka data fir cats ka by use of promise chaining
const hit2 = document.querySelector('#hit2')
hit2.addEventListener('click',()=>{
    fetch('https://dog-api.kinduff.com/api/facts')
    .then((response)=>response.json())
    .then((value)=>{
        console.log(value)

        // ye return isliye krwaya taki .then ka chain bane fir niche wala .then ye wale .then par depend h kyuki uske paas fetch return hua h
        return fetch('https://cat-fact.herokuapp.com/facts')
    }) 
    .then((response)=>{
        return response.json()
    })
    .then((value)=>console.log(value))
})

// https://api.publicapis.org/entries?category=Development
