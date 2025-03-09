import './modules/ibg.js';
import './modules/isWebp.js';
//import './modules/burger.js';
//import './modules/functions.js';
//import './modules/spollers.js';
//import './modules/sliders.js';
//import './modules/dynamic-adapt.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // смуфер
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.page',
		smooth: 1.5,
		effects: true
	})

    // растворение первой секции
	gsap.fromTo('.mainscreen__body', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.mainscreen',
			start: 'center',
			end: '800',
			scrub: true
		},
	})

    gsap.fromTo('.mainscreen__img', { 
        opacity: 1,
        x: 0,
        rotation: 0,
    }, {
		opacity: 0,
        x: 500,
        rotation: 45,
		scrollTrigger: {
			trigger: '.mainscreen',
			start: 'top top',
			end: '=+700',
			scrub: true,
            //markers: true,
		},
        immediateRender: false,
	})

    //секция about
    gsap.fromTo('.about__content', 
        { 
            opacity: 0,
            y: -300, 

        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 300px',
                end: '=+300',
                scrub: true,
                markers: true,
            },
        })


    // движение блоков секции скилов
    const moveBlocks = () => {
        const image = document.querySelector(".skills__right img");
        const imageWrapper = document.querySelector(".skills__right");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "top top",
                pin: true, 
                end: "+=1500",
                scrub: true,
                //markers: true,
            }
        });
    
        tl
        .to(
            imageWrapper, 
            { xPercent: 40, duration: 20}, 0
        )
        .to(
            image, 
            { xPercent: -25, duration: 20 }, 0
        )
        .to(
            ".skills__box_1",
            { yPercent: 100, duration: 10 }, 20
        )
        .to(
            ".skills__box_2",
            { xPercent: -100, duration: 10 }, 30
        )
    
        return tl;
    };

    
    if (window.innerWidth > 767.98) {
        moveBlocks();
    }
    
    // const master = gsap.timeline();
    // master.add(moveBlocks(".skills__right"));

    // фон-космос
    const bg = document.querySelector('#bg');

    for (let i=0; i<99; i++) {
        const d = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        gsap.set(d, {
            attr:{class:'dot dot'+i, cx:2.5, cy:2.5, r:2.5},
            x:gsap.utils.random(0, innerWidth, 1),
            y:gsap.utils.random(0, innerHeight, 1),
            scale:gsap.utils.random(0.2, 1)
        })
        bg.appendChild(d)
    }

    const dots = document.querySelectorAll('.dot')

    Observer.create({
        target: window,
        type: 'wheel,touch,scroll,pointer',
        onUp: () => {
            if (window.scrollY > 0) up(); 
        },
        onDown: () => {
            if (window.innerHeight + window.scrollY < document.body.scrollHeight) down(); 
        }
    });

    function up(){
        dots.forEach((d) => {
          if ( gsap.getProperty(d, 'y') > innerHeight ) gsap.set(d, {y:gsap.utils.random(-1, -99)})
          else gsap.to(d, {y:'+='+100*gsap.getProperty(d, 'scale')})
        })
      }
      
    function down(){
        dots.forEach((d) => {
          if ( gsap.getProperty(d, 'y') < 0 ) gsap.set(d, {y:gsap.utils.random(innerHeight, innerHeight+99)})
          else gsap.to(d, {y:'-='+100*gsap.getProperty(d, 'scale')})
        })
    }
      

    // блок портфолио
    const cardsContainer = document.querySelector(".portfolio__items");

    gsap.to(cardsContainer, {
        x: () => -(cardsContainer.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
            trigger: ".portfolio",
            start: "top top",
            end: () => `+=${cardsContainer.scrollWidth - window.innerWidth + 100}`,
            pin: true,
            scrub: 1.5, 
            //markers: true,
            invalidateOnRefresh: true,
        }
    });
