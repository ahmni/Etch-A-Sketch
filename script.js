const grid = document.querySelector('#container');
var square = "";

for (let i = 0; i < 4096; i++) {
    square += '<div id="box"></div>';
}

grid.innerHTML = square;

const squares = document.querySelectorAll('#box');
const btn = document.querySelector('.btn');

btn.addEventListener('click', reSizeBox);

function reSizeBox() {
    squares.forEach((div) => {
        div.classList.remove('red');
    }
    );
    let size = prompt('Enter size of grid below')
    gridsize = 576/size
    let dimensions = size * size;
    var square = '';
    grid.innerHTML = square;
    for (let i = 0; i < dimensions; i++) {
        var boxes = document.createElement('div');
        boxes.setAttribute('id','yeet');
        grid.appendChild(boxes);
        boxes.style.width = gridsize + 'px';
        boxes.style.height = gridsize + 'px';
    }
    const newSquare = document.querySelectorAll('#yeet');
    newSquare.forEach((div) => {
        div.addEventListener('mouseover', () => {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            let rgbColor = "rgb(" + x +  ',' + y + ',' + z + ')';
            console.log(rgbColor); 
            div.style.backgroundColor = rgbColor;
            div.style.filter += "brightness(70%)";
        });
    });
};




squares.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('red');
    });
});

