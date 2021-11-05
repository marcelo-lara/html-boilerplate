const slideshow={
    canvas: undefined,
    slides: undefined,
    current: 0,
    init: ()=>{
        // bindings
        document.querySelector("#slide-next")?.addEventListener("click", slideshow.next);
        document.querySelector("#slide-prev")?.addEventListener("click", slideshow.prev);
        slideshow.canvas = document.getElementById("slides");

        // map sidenav
        for(let aa of document.querySelectorAll("#sidenav a")){
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
            slide.style.display='none';
        
        // display initial slide
        slideshow.show(slideshow.current);
    },

    showbyname: (s)=>{
        console.log(s);
    },

    show: (n)=>{
        slideshow.current = n;

        // show slide
        for(let slide of slideshow.slides)
            slide.style.display='none';
        slideshow.slides[n].style.display='inline-block';

        // update sidenav
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