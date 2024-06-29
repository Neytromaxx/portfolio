// var infull = document.querySelector('.degree-in-full') 
// console.log(infull)  
// infull.forEach((element, index)=>{
//     setTimeout(() => {
//         element.style.width = '295px'
//     }, index * 700)
// })

function bajar(){
    setTimeout(r, 550)
}
bajar()
function r(){
    let b = document.querySelector('#full')
    b.style.width = '295px'
    console.log(b)

    let d = document.querySelector('#full2')
    d.style.width = '295px'

    let c = document.querySelector('#in')
    c.style.width = '221px'

    let a = document.querySelector('#half')
    a.style.width = '148px'

    let e = document.querySelector('#half2')
    e.style.width = '148px'

    let f = document.querySelector('.degree-in-quarter')
    f.style.width = '74px'
}