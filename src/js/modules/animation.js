export function animation() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if(ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.page',
        smooth: 5.5,
        effects: true,
        })

        if(document.documentElement.clientWidth > 768) {
            gsap.fromTo('.hero-section', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: '1000',
                scrub: true,
                // onLeave: self => { //анимация дошла до конечной точки
                //     console.log('Leave');
                // },
                // onEnterBack: self => { //начинаем прокручивать обратно
                //     console.log('EnterBack');
                // },
                // onLeaveBack: self => { // вернулись в первоначальную точку
                //     console.log('LeaveBack');
                // },
                }
            })
        }

        if(document.documentElement.clientWidth > 1024) {
            let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

            itemsLeft.forEach(item => {
                gsap.fromTo(item, {x: -250, opacity: 0}, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-1000px',
                        end: '-100px',
                        scrub: true,
                    }
                })

            })

            let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

            itemsRight.forEach(item => {
                gsap.fromTo(item, {x: 250, opacity: 0}, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-1000px',
                        end: '-500px',
                        scrub: true,
                    }
                })
    
            })

         }


    }

    

}