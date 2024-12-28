const container = document.querySelector('.container')
let containerWidth = container.offsetWidth

console.log(containerWidth);

function createSquares(numberOfSquares) {
    
    let noOfC = numberOfSquares
    let squareSize = 960/noOfC
    
    for (let i = 0; i < noOfC * noOfC; i++) {
        let span = document.createElement('div')
        span.classList.add('box');
        span.style.height = `${squareSize}px`;
        span.style.width = ` ${squareSize}px`;
        container.appendChild(span)   
        
        span.addEventListener('mouseover',()=>{
            span.style.background = ' blue'
        })

        span.addEventListener('mouseout',()=>{
            span.style.background = ' white'
        })

    }
}


createSquares(16)
// console.log(document.body.offsetWidth);


















