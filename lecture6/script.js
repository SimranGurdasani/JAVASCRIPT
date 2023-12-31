let products = [
    
    {
      "name" : "baked beans",
      "price" : 0.40,
      "image" : "beans.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "hot dogs",
      "price" : 1.99,
      "image" : "hotdogs.jpg",
      "type" : "meat"
    },
    {
      "name" : "spam",
      "price" : 2.85,
      "image" : "spam.jpg",
      "type" : "meat"
    },
    {
      "name" : "refried beans",
      "price" : 0.99,
      "image" : "refried.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "kidney beans",
      "price" : 0.58,
      "image" : "kidney.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "garden peas",
      "price" : 0.52,
      "image" : "gardenpeas.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "mushy peas",
      "price" : 0.58,
      "image" : "mushypeas.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "corned beef",
      "price" : 2.39,
      "image" : "cornedbeef.jpg",
      "type" : "meat"
    },
    {
      "name" : "tomato soup",
      "price" : 1.40,
      "image" : "tomatosoup.jpg",
      "type" : "soup"
    },
    {
      "name" : "chopped tomatoes",
      "price" : 0.45,
      "image" : "tomato.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "chicken noodle soup",
      "price" : 1.89,
      "image" : "chickennoodle.jpg",
      "type" : "soup"
    },
    {
      "name" : "carrot and coriander soup",
      "price" : 1.49,
      "image" : "carrotcoriander.jpg",
      "type" : "soup"
    }
  ]
// console.log(products)
//   let dynamicELem = document.querySelector('#name')
//   dynamicELem.innerHTML( <p></p>)

// let p= document.createElement('p')
// forEach is array of objs
// products.forEach((value)=>{
//     console.log(value.name)
//     console.log(value.price)
//     console.log(value.image)
//     console.log(value.type)


//     let para1= document.createElement('p')
//     para1.textContent += value.name

//     let para2= document.createElement('p')
//     para1.textContent += value.price

//     let para3= document.createElement('p')
//     para1.textContent += value.image

//     let para4= document.createElement('p')
//     para1.textContent += value.type

//     let hr = document.createElement('hr')
//     document.body.append(para1,para2,para3,para4,hr)
// })

renderData(products)
function renderData(data){
        data.forEach((value)=>{
    //         console.log(value.name)
    // console.log(value.price)
    // console.log(value.image)
    // console.log(value.type)


    let para1= document.createElement('p')
    para1.textContent += value.name

    let para2= document.createElement('p')
    para2.textContent += value.price

    let para3= document.createElement('p')
    para3.textContent += value.image

    let para4= document.createElement('p')
    para4.textContent += value.type

    let hr = document.createElement('hr')
    document.body.append(para1,para2,para3,para4,hr)
    })
}

    let ip=document.querySelector('.input-element')
    console.log(ip)
    ip.addEventListener('change',()=>{
        console.log(ip.value,products)
        let filteredData = products.filter((value)=>value.name.includes(ip.value))
        console.log(filteredData)
        renderData(filteredData)
    })

