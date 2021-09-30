let img
let imgs = []
let counter = 0
const numImages = 10
function preload(){
    img = loadImage('Spiderman.png')
}

function setup(){
    createCanvas(1000, 1000)
    frameRate(5)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 15 + 15, 10, 40, 60)
    }
}

function draw(){
    image(imgs[counter% numImages], 0, 0, 500, 700)
    counter ++
}
