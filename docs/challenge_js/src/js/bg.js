const body = document.querySelector('body');
const imgNum = 5;

function handleImages(){
    console.log('finished loading')
}

function paintImage(number) {
    const images = new Image();
    images.src = `src/img/bg${number + 1}.jpeg`;
    images.classList.add('body_bg');
    body.prepend(images);
    images.addEventListener('loadend',handleImages);
}

function getRandom(){
    const number = Math.floor(Math.random() * imgNum);
    return number;
}

function init(){
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();