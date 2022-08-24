

function divMaker() {
    for (let i = 0; i < 16*16; i++){
        let block = document.createElement('div');
        document.getElementById('container').appendChild(block);
        block.addEventListener('mouseover',() => block.style.background = 'black');
    }
}

divMaker();