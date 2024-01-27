const hit = document.querySelector('#hit')
hit.addEventListener('click',()=>{

    // fetch('https://cat-fact.herokuapp.com/facts')
    // .then((response)=>response.json())
    // .then((value)=>console.log(value))

    hitUrl()
    // idar independent cheeze likhte h jo ham udar then() ke baad likhte the
    console.log("hit sent!!")
})

async function hitUrl(){
    // idar dependent cheeze likhte
    // fetch ka wait kr ha aur fir dusre line pe jayega and fir await k andar hi then fucntion h aur us then pe response.json chal rha
    const response = await fetch('https://api.publicapis.org/entries')
    const value = await response.json()
    console.log(value)

}

// asynchronous is when data laane hoti h backend se so vo wait krta h data ka so 
// tabtak page unresponsive ho jta h so to solve this,async js came into picture

