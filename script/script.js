const vPupill = document.querySelector('#v-pupill');
const hPupill = document.querySelector('#h-pupill');
const vOga = document.querySelector('#v-oga');
const hOga = document.querySelector('#h-oga');

const sol = {
    targets: '#sol',
    translateX: '960px',
    translateY: '960px',

    duration: 18000,
    easing: 'linear',

    autoplay: false,

};

const solColor = {
    targets: '#sol',
    duration: 8000,
    easing: 'linear',
    backgroundImage: 'radial-gradient(rgb(255, 60, 44), rgb(255, 25, 109))',
    autoplay: false,
};

const body = {
    targets: 'body',
    backgroundColor: 'hsl(300, 78%, 9%)',
    duration: 13000,

    delay: 5000,
    autoplay: false,
    easing: 'linear',
};


const hav = {
    targets: '#hav',
    backgroundColor: 'hsl(289, 100%, 9%)',
    easing: 'linear',
    autoplay: false,
    duration: 13000,
    delay: 5000,
};



const strand = {
    targets: '#strand',

    backgroundColor: 'hsl(300, 100%, 69%)',
    autoplay: false,
    loop: true,
    duration: 200,
    easing: 'linear',
};



const reflectionUp = {
    targets: '#reflection-up',
    translateY: '-61px',
    translateX: '95px',
    duration: 3300,
    delay: 5300,
    easing: 'linear',

    backgroundColor: 'hsla(356, 100%, 70%, 1.0)',
    scale: 0,
    autoplay: false,
};


const reflectionMid = {
    targets: '#reflection-mid',
    translateY: '-80px',
    translateX: '100px',
    duration: 3300,
    delay: 5300,
    easing: 'linear',

    backgroundColor: 'hsla(356, 100%, 70%, 1.0)',
    scale: 0,
    autoplay: false,
};

const reflectionDown = {
    targets: '#reflection-down',
    translateY: '-88px',
    translateX: '97px',
    duration: 3300,
    delay: 5300,
    easing: 'linear',

    backgroundColor: 'hsla(356, 100%, 70%, 1.0)',
    scale: 0,
    autoplay: false,
};



const huvud = {
    targets: '#huvud',

    easing: 'linear',
    duration: 200,

    loop: true,
    autoplay: false,
    backgroundColor: 'hsl(120, 100%, 69%)',
};

const ben = {
    targets: '#v-ben, #h-ben',
    easing: 'linear',
    duration: 200,

    loop: true,
    autoplay: false,
    backgroundColor: 'hsl(120, 100%, 69%)',
}
const benMove = {
    targets: '#v-ben, #h-ben',
    easing: 'linear',
    duration: 1000,
    delay: 1000,
    loop: true,
    translateX: '70px',
    direction: 'alternate',
    autoplay: false,
}

const mun = {
    targets: '#mun',

    easing: 'linear',
    duration: 1000,
    direction: 'alternate',
    loop: true,
    height: '30px',
    translateX: '-80px',
    delay: 1000,
    direction: 'alternate',
    autoplay: false,
};

const pupiller = {
    targets: '#v-pupill, #h-pupill',
    keyframes: [{
        translateX: '-30px'
    }, {
        translateY: '-7px'
    }, {
        translateX: '1px'
    }, { translateY: '3px' }],
    duration: 900,

    direction: 'alternate',
    loop: true,
    easing: 'linear',
    autoplay: false,
};

const ogon = {
    easing: 'linear',
    targets: '#v-oga, #h-oga',
    translateX: '-80px',
    duration: 1000,
    delay: 1000,
    direction: 'alternate',
    loop: true,
    autoplay: false,
};

const clickSolColor = anime(solColor);
const clickSol = anime(sol);
const clickHav = anime(hav);
const clickBody = anime(body);
const clickStrand = anime(strand);
const clickReflectionUp = anime(reflectionUp);
const clickReflectionMid = anime(reflectionMid);
const clickReflectionDown = anime(reflectionDown);
const clickOgon = anime(ogon);
const clickMun = anime(mun);
const clickPupiller = anime(pupiller);
const clickBen = anime(ben);
const clickBenMove = anime(benMove);
const clickHuvud = anime(huvud);

const playBTN = document.querySelector('#play');
const pauseBTN = document.querySelector('#pause');
const stopBTN = document.querySelector('#stop');

playBTN.addEventListener('click', function () {
    clickSol.play();
    clickHav.play();
    clickBody.play();
    clickStrand.play();
    clickReflectionUp.play();
    clickReflectionMid.play();
    clickReflectionDown.play();
    clickOgon.play();
    clickMun.play();
    clickPupiller.play();
    clickSolColor.play();
    clickHuvud.play();
    vPupill.style.border = "black solid 10px";
    vPupill.style.transition = "border 2s";
    hPupill.style.border = "black solid 10px";
    hPupill.style.transition = "border 2s";
    vOga.style.borderRadius = "50%";
    vOga.style.transition = "border-radius 5s";
    vOga.style.height = "70px";
    vOga.style.width = "70px";
    vOga.style.transition = "height 5s";
    vOga.style.transition = "width 5s";
    hOga.style.borderRadius = "50%";
    hOga.style.transition = "border-radius 5s";
    hOga.style.height = "70px";
    hOga.style.width = "70px";
    hOga.style.transition = "height 5s";
    hOga.style.transition = "width 5s";
    clickBen.play();
    clickBenMove.play();
});
pauseBTN.addEventListener('click', function () {
    clickSol.pause();
    clickHav.pause();
    clickBody.pause();
    clickStrand.pause();
    clickReflectionUp.pause();
    clickReflectionMid.pause();
    clickReflectionDown.pause();
    clickOgon.pause();
    clickMun.pause();
    clickPupiller.pause();
    clickSolColor.pause();
    clickHuvud.pause();
    clickBen.pause();
    clickBenMove.pause();
});
stopBTN.addEventListener('click', function () {
    clickHuvud.restart();
    clickHuvud.pause();
    clickSol.restart();
    clickSol.pause();
    clickHav.restart();
    clickHav.pause();
    clickBody.restart();
    clickBody.pause();
    clickStrand.restart();
    clickStrand.pause();
    clickReflectionUp.restart();
    clickReflectionUp.pause();
    clickReflectionMid.restart();
    clickReflectionMid.pause();
    clickReflectionDown.restart();
    clickReflectionDown.pause();
    clickOgon.restart();
    clickOgon.pause();
    clickMun.restart();
    clickMun.pause();
    clickPupiller.restart();
    clickPupiller.pause();
    clickSolColor.restart();
    clickSolColor.pause();
    clickBen.restart();
    clickBen.pause();
    clickBenMove.restart();
    clickBenMove.pause();

    vPupill.style.border = "black solid 5px";
    hPupill.style.border = "black solid 5px";
    vPupill.style.transition = '';
    hPupill.style.transition = '';
    vOga.style.borderRadius = '';
    vOga.style.height = '';
    vOga.style.width = '';
    vOga.style.transition = '';
    hOga.style.borderRadius = '';
    hOga.style.height = '';
    hOga.style.width = '';
    hOga.style.transition = '';
});

