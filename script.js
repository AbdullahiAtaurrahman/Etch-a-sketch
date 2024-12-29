const container = document.querySelector('.container')
const btn =  document.querySelector('.btn')

function createSquares(noOfC) {
    
    container.innerHTML = '';

    let squareSize = 960/noOfC
    
    for (let i = 0; i < noOfC * noOfC; i++) {
        let span = document.createElement('div')
        span.classList.add('box');
        span.style.height = `${squareSize}px`;
        span.style.width = ` ${squareSize}px`;
        container.appendChild(span)   
        
        span.addEventListener('mouseover',()=>{
            span.style.background = 'grey'
        })

        span.addEventListener('mouseout',()=>{
            span.style.background = 'lightblue';
        })      
    }
}

btn.addEventListener('click', ()=>{
    let newGrid =  parseInt(prompt('Set number of grids: '))
    
    if (newGrid <=99 && newGrid >=1) {
        createSquares(newGrid)        
    } else {
        alert('Enter a number between 1 and 100')   
    }

})

createSquares(16)

// console.log(document.body.offsetWidth);


















