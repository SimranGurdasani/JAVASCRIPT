// let products = [
    
//         {
//           "name" : "baked beans",
//           "price" : 0.40,
//           "image" : "beans.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "hot dogs",
//           "price" : 1.99,
//           "image" : "hotdogs.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "spam",
//           "price" : 2.85,
//           "image" : "spam.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "refried beans",
//           "price" : 0.99,
//           "image" : "refried.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "kidney beans",
//           "price" : 0.58,
//           "image" : "kidney.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "garden peas",
//           "price" : 0.52,
//           "image" : "gardenpeas.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "mushy peas",
//           "price" : 0.58,
//           "image" : "mushypeas.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "corned beef",
//           "price" : 2.39,
//           "image" : "cornedbeef.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "tomato soup",
//           "price" : 1.40,
//           "image" : "tomatosoup.jpg",
//           "type" : "soup"
//         },
//         {
//           "name" : "chopped tomatoes",
//           "price" : 0.45,
//           "image" : "tomato.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "chicken noodle soup",
//           "price" : 1.89,
//           "image" : "chickennoodle.jpg",
//           "type" : "soup"
//         },
//         {
//           "name" : "carrot and coriander soup",
//           "price" : 1.49,
//           "image" : "carrotcoriander.jpg",
//           "type" : "soup"
//         }
      
      
// ]

// implementing search feature
// type-bak
// display all products whose "name" includes "bak"
// includes => str.includes("bak") => return true if exists else return false

// let searchString = prompt("Enter product to be searched")
// products.forEach((value)=>{
//     if(value.name.includes(searchString)){
//     console.log(value.name)
//     }
// }
// )

// filtered function se saerch ye filter function return true or false krta h
// let filteredProducts = products.filter((value) => value.name.includes(searchString))
// console.log(filteredProducts)

// const header = document.getElementById('header')
// console.log(header)

// const para = document.getElementsByClassName('para')
// console.log(para)

const headerByQuery = document.querySelector('#header')
console.log(headerByQuery)

// agar meko div ke andar wala p select krna ho toh querySelector use hota h
const para = document.querySelector('.para')
console.log(para)

setTimeout(()=>{
  // headerByQuery.className = 'red'
  // para.id='p1'

  // new way of writing className and id by writing setAttribute(jo class h, aur jo krna h)
  headerByQuery.setAttribute('class','red')
  para.setAttribute('id','p1')
},3000)

let content = para.textContent
console.log(content)

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


// ye fir 1st index ka pura obj print krega product ka
console.log(products[content])

let dynamicELem = document.querySelector('.dynamic')
console.log(dynamicELem)
// works same
dynamicELem.textContent = "hello"
dynamicELem.innerHTML = "hello"

// h1 as it is print krega
// dynamicELem.textContent = "<h1>hello</h1>"
// parse it and render
// dynamicELem.innerHTML = "<h1>hello</h1>"
// innerHTML is insecure kyuki kuch b user html m likhke screen par laa skta h
let v = prompt("enter")
console.log(v)
dynamicELem.textContent = v



