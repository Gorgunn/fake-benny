const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");


const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);


const textAnim = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({// TExt that หายไป
    duration: 1200,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;// เวลาหยุด scroll มันจะยังไหลอยู่
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 41.6);// framerate 1000 / 30 = 33.3
