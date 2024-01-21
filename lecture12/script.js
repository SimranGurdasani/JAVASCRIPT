const hit = document.querySelector('#hit')
const dropdown = document.querySelector('#dropdown')

hit.addEventListener('click',()=>{
fetch('https://api.publicapis.org/categories')
        .then((response)=>response.json())
        .then((value)=>{
            
            console.log(value)
            let data=value.categories
            data.forEach((element) => {
                console.log(element)
                // option tag create kiya aur usko element ke sath concatenate kiya aur += matalab append kiya ek ek element ko
                // dropdown.innerHTML += '<option >'+element+'</option>'
                // ye below dusra way
                dropdown.innerHTML += `<option value='${element}'>${element}</option>`
            });
            dropdown.addEventListener('change',()=>{
                console.log(dropdown.value)
                fetch(`https://api.publicapis.org/entries?category=${dropdown.value}`)
                    .then((response)=>response.json())
                    .then((value)=>{
                        let entries = value.entries
                        entries.forEach((desc) => {
                            console.log(desc.Description)
                        });
                        // console.log(desc)
                        // const data = document.querySelector('#data')
                        // data.textContent=
                    })
            })
            const submit = document.querySelector('#submit')
            const ip = document.querySelector('#ip')
            submit.addEventListener('click',()=>{
                console.log(ip.value)
                fetch(`https://api.publicapis.org/entries?title=${ip.value}&category=${dropdown.value}`)
                    .then((response)=>response.json())
                    .then((value)=>{
                        console.log(value)
                    })
            })

        })
    })

    // https://api.publicapis.org/entries?title=cat&category=Animals
// const submit = document.querySelector('#submit')
// const ip = document.querySelector('#ip')
// submit.addEventListener('click',()=>{
//     console.log(ip.value)
//     fetch(`https://api.publicapis.org/entries?title=${ip.value}&category=${dropdown.value}`)
//         .then((response)=>response.json())
//         .then((value)=>{
//             console.log(value)
//         })
// })