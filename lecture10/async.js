
const xhr2 = document.querySelector('#click')

xhr2.addEventListener('click',()=>{
    let xhr2Request  = new XMLHttpRequest();

    xhr2Request.addEventListener('loadend',()=>{
        console.log(xhr2Request.response)
        // console.log('ended 1st api')

        let xhr3Request = new XMLHttpRequest()
        xhr3Request.addEventListener('loadend',()=>{
            console.log(xhr3Request.response)
        })
        xhr3Request.open('GET','https://cat-fact.herokuapp.com/facts')
        xhr3Request.send()

    })

    xhr2Request.open('GET','https://dog-api.kinduff.com/api/facts')

    xhr2Request.send()


    console.log('started')
})


function doStep1(init,callback){
    const result = init +1;
    callback(result)
}

function doStep2(init,callback){
    const result = init +2;
    callback(result)
}

function doStep3(init,callback){
    const result = init +3;
    callback(result)
}

function doOperation(){
    doStep1(0,(result1)=>{
        doStep2(result1,(result2)=>{
            doStep3(result2,(result3)=>{
                console.log(`result: ${result3}`);
            })
        })
    })
}
doOperation()