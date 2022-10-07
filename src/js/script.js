function escopo () {
    const main = document.querySelector('.main');
    const botao = document.querySelector('#botao');
    
    botao.addEventListener('click', function () {
        const intro = main.querySelector('.intro');
        const introBt = main.querySelector('.intro-bt');
        const videoConteiner = main.querySelector('.conteiner-video');
        const pequeno = main.querySelector('.pequeno');
        const video = main.querySelector('#video')


        intro.style.animationName = 'intro';
        introBt.style.animationName = 'intro';
        videoConteiner.style.animationName = 'apresentacao';
        pequeno.style.animationName = 'pequeno';

        video.play();
    })

}

escopo();