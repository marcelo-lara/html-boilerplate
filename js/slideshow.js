const slideshow={
    canvas: undefined,
    slides: undefined,
    sidenav: undefined,
    current: 0,
    init: ()=>{
        // bindings
        document.querySelector("#slide-next")?.addEventListener("click", slideshow.next);
        document.querySelector("#slide-prev")?.addEventListener("click", slideshow.prev);
        slideshow.canvas = document.getElementById("slides");

        // map sidenav
        slideshow.sidenav = document.querySelectorAll("#sidenav a");
        for(let aa of slideshow.sidenav){
            if(aa.hasAttribute('href') && aa.hasAttribute('slide') ){
                aa.addEventListener("click", (e)=>{
                    e.preventDefault();
                    slideshow.showbyname(e.target.getAttribute('slide'));
                });
            }
        }

        // hide slides
        slideshow.slides = document.querySelectorAll("#slideshow>div")
        for(let slide of slideshow.slides)
            slide.classList.remove('selected');
        
        // display initial slide
        slideshow.show(slideshow.current);
    },

    _set_select: (sname, block)=>{
        for(let aa of block){
            if(aa.getAttribute('slide')==sname)
                aa.classList.add('selected')
            else
                aa.classList.remove('selected')
        }
    },

    showbyname: (s)=>{
        slideshow._set_select(s, slideshow.slides);
        slideshow._set_select(s, slideshow.sidenav);
        let ix=0;
        for (const slide of slideshow.slides) {
            if(slide.getAttribute('slide')==s)
                slideshow.current=ix; 
            ix++;
        }
    },

    show: (n)=>{
        slideshow.current = n;

        // show slide
        for(let slide of slideshow.slides)
            slide.classList.remove('selected');
        slideshow.slides[n].classList.add('selected');

        // update sidenav
        slideshow._set_select(
            slideshow.slides[n].getAttribute('slide'), 
            slideshow.sidenav);

    },

    // behavior
    next: ()=>{
        slideshow.current++;
        if(slideshow.current>slideshow.slides.length-1) 
            slideshow.current=0;
        slideshow.show(slideshow.current);

    },
    prev: ()=>{
        slideshow.current--;
        if(slideshow.current<0) 
            slideshow.current=slideshow.slides.length-1;
        slideshow.show(slideshow.current);
    },
    

};

// init slideshow
(()=>{slideshow.init()})();