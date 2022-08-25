let bigness = 16;

function divMaker(bigness) {
    for (let i = 0; i < bigness ** 2; i++){
        let block = document.createElement('div');
        document.getElementById('container').appendChild(block);
        block.addEventListener('mouseover',() => block.style.background = 'black');
    }
}


divMaker(bigness);
let container = document.getElementById('container')
let button = document.getElementById('button').addEventListener('click', function howBig (){
    bigness = prompt('How big?', '16, max 100');
    if (bigness > 100 || isNaN(bigness)) howBig();
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    container.style.gridTemplateColumns = `repeat(${bigness}, 1fr)`
    container.style.gridTemplateRows = `repeat(${bigness}, 1fr)`
    divMaker(bigness);
}
)