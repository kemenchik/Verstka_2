$(function() {

    /* Fixed header */

    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    let nav = $("nav");
    $(window).on("scroll load resize", function (){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH ) {
            header.addClass("fixed");
        } else
            {
                header.removeClass("fixed");
            }

    })

    /* Scroll */

    $("[data-scroll]").on("click", function (event){
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;
            console.log(blockOffset);
        nav.removeClass("show ")
            $("html, body").animate({
                scrollTop: (blockOffset - 70)
            }, 1000)
    })

     /* NavToggle */



    $("#navToggle").on("click", function(event){

        event.preventDefault();

        nav.toggleClass("show ")
    })

    /* Reviews */

    let slider = $("#reviewsSlider")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false
    });



    $(document).ready(function(){

        //анимация курсора
        const dragStart = function (e) {
            let addDiv2  = document.createElement('div'),
                animationScale = 1,
                animDirection = Math.random() * 360 * 0.0174533,
                xLength = Math.round(300*animationScale*Math.cos(animDirection)),
                yLength = Math.round(300*animationScale*Math.sin(animDirection)),
                cursorXp = e.pageX,
                cursorYp = e.pageY,
                colorR = Math.round(Math.random() * 89999 + 100000 );
                intro = $("#intro");
            if (cursorYp < intro.innerHeight() && cursorXp < intro.innerWidth() ) {
                addDiv2.classList.add('mouseAnim');
                addDiv2.style.left = cursorXp + 'px';
                addDiv2.style.top = cursorYp + 'px';
                addDiv2.innerHTML = '*';
                addDiv2.style.zIndex = '10';
                intro.append(addDiv2);
                addDiv2.style.opacity = '1';
                addDiv2.style.zIndex = '0';
                addDiv2.animate([
                    {},
                    {
                        left: cursorXp + xLength + 'px',
                        top: cursorYp + yLength + 'px',
                        transform: 'rotate(500deg)',
                        
                    }
                ], {
                    duration: 10000 * animationScale,
                    iterations: 1
                });
                setTimeout(() => addDiv2.remove(), 9000 * animationScale);


            let onceSupported1 = true;
            setTimeout(() => document.addEventListener('mousemove', dragStart, onceSupported1
                ? { once: true } : false), 25);
        } else {
            document.addEventListener('mousemove', dragStart, onceSupported ? { once: true } : false);
        }
        };

        //пульсация кнопки
        function addElement(e){
            let addDiv1  = document.createElement('div'),
                mValue      = Math.max(this.clientWidth, this.clientHeight),
                sDiv        = addDiv1.style,
                rect = this.getBoundingClientRect(),
                x = e.pageX /*- rect.left*/ - (mValue/2),
                y = e.pageY /*- rect.top*/ - (mValue/2);
            sDiv.left = x  + 'px';
            console.log(x);
            sDiv.top = y + 'px';
            console.log(y);
            sDiv.width = sDiv.height = mValue + 'px';

            addDiv1.classList.add('pulse');
            this.appendChild(addDiv1);
        }

        let buttons = document.getElementsByClassName('animatedButton');
        let forEach = Array.prototype.forEach;

        forEach.call(buttons, function (b) {
            b.addEventListener('click', addElement)
        });




        let onceSupported = true;
        document.addEventListener('mousemove', dragStart, onceSupported ? { once: true } : false);
    })

});
