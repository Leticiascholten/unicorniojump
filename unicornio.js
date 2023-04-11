const uni = document.querySelector('.uni');
const pirulito = document.querySelector('.pirulito')
const jump = () => {
    uni.classList.add('jump');
    setTimeout(() => {

        uni.classList.remove('jump')

    }, 500);
   
}

const loop = setInterval(() =>{

    const pirulitoPosition = pirulito.offsetLeft;
    const uniPosition = +window.getComputedStyle(uni).bottom.replace('px', '');

    if (pirulitoPosition <= 10 && pirulitoPosition > 0 && uniPosition < 50) {
        
        pirulito.style.animation = 'none';
        pirulito.style.left = `${pirulitoPosition}px`;

        uni.style.animation = 'none';
        uni.style.bottom = `${uniPosition}px`;

        uni.src = './assets/gameover1.png';
        uni.style.width = '75px';
        uni.style.marginLeft = '100px';

        clearInterval(loop);

       

    }

}, 10);

document.addEventListener('keydown', jump);

