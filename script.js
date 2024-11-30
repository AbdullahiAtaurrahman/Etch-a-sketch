
// const container = document.createElement('div');

// container.classList.add('container');
// console.log(container);
// for (let i = 0; i < 17; i++) {
//     let div = document.createElement('div')
//     div.classList.add('grid-square')
//     div.innerHTML = 'YO!'
//     // console.log(div.innerText);
//     container.appendChild(div)
// }

// var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
// var body = dom.createElement("body");
// dom.documentElement.appendChild(body);

// set timeout is needed because document.body is created after the current continuation finishes
// setTimeout(function() {    
//   document.body.appendChild(container)
// },0)

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')


// for (let i = 0; i <= 16; i++) {
//     let div = document.createElement('div')
//     div.classList.add('square-grid')
//     container.appendChild(div)

//     div.addEventListener('mouseover', ()=>{
//         // div.classList.add('redBG')
//         div.style.backgroundColor = 'red'
//     })
//     div.addEventListener('mouseout',()=>{
//         div.style.background = 'black'
//     })
// }

function createDivs() {
    for (let i = 0; i <= 16; i++) {
        let div = document.createElement('div')
        div.classList.add('square-grid')
        container.appendChild(div)
    
        div.addEventListener('mouseover', ()=>{
            // div.classList.add('redBG')
            div.style.backgroundColor = 'red'
        })
        div.addEventListener('mouseout',()=>{
            div.style.background = 'black'
        })
    }
}

document.addEventListener('DOMContentLoaded', createDivs)

btn.addEventListener('click', ()=> {
    let newSize = prompt('Squares size? ')
    console.log(newSize);
    container.innerHTML = ''
    let newSquareGrid = HTMLAllCollection.createElement('span')
    newSquareGrid.classList.add('newSquareDrid')
    container.appendChild(newSquareGrid)
})




















