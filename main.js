const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];


const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')];
//Interfejs
let time = 3000;
let active = 0;


const strzalki = (e) => {

    let key = e.keyCode;

    if (key == 37) {
        clearInterval(intervalIndex)
        active--;

        if (active < 0) {
            active = slideList.length - 1;

        }
        const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
        dots[activeDot].classList.remove('active');
        dots[active].classList.add('active')
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();

        intervalIndex = setInterval(changeSlide, time);


    } else if (key == 39) {
        clearInterval(intervalIndex)
        active++;

        if (active == slideList.length) {
            active = 0;

        }
        const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
        dots[activeDot].classList.remove('active');
        dots[active].classList.add('active')
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();

        intervalIndex = setInterval(changeSlide, time);
    }



}
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active')


}

const changeSlide = () => {
    active++
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();





}
let intervalIndex = setInterval(changeSlide, time);

window.addEventListener('keydown', strzalki);