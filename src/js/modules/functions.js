export function isWebp() {
    function testWebp(callback) {
        let webp = new Image();
        webp.onload = webp.onerror  = function() {
            callback(webp.height == 2);
        };
        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebp(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

export function MSIE() {
    const ua = window.navigator.userAgent;
    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    function isIE() {
        //ua = navigator.userAgent;
        const is_ie = ua.indexOf("MSIE ") > 1 || ua.indexOf("Trident/") > 1;
        return is_ie;
    }
    if(isIE()) {
        document.querySelector('html').classList.add('ie');
    }
    if(isMobile.any()) {
        document.querySelector('html').classList.add('_touch');
    }
}

export function burger() {
    const burger = document.querySelector('.icon-menu'),
          menu = document.querySelector('.menu__body'),
          body = document.body;

    function openMenu() {
        menu.classList.toggle('_active');
        burger.classList.toggle('_active');
        body.classList.toggle('disable_scroll');
    }
    burger.addEventListener('click', openMenu);

   /*  menu.addEventListener("click",function(e) {
        if((e.target) && (e.target.nodeName == "LI" || e.target.nodeName == "A" || 
        e.target.classList.contains('promo__overlay') || e.target.classList.contains('promo__closeBtn'))){
            menu.classList.remove('active');
            body.classList.remove('disable_scroll');
        }
      }); */
}