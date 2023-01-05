gsap.registerPlugin(ScrollTrigger);
//---------------------Landing Page ScrollTrigger---------------------
function homepageScrollTrigger() {

    gsap.to('body', { // LoadingAnimation---------------------
        opacity: 1, duration: 0,
    }) // /LoadingAnimation---------------------

    let homepageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".homepage",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "50% 0%",
            // markers: "true",
        }
    })
    homepageScrollTrigger
        .from('.homepage #logo', {
            opacity: 0,
             x: "-31%",
              duration: 2.2,
               ease: "sine.in",
        }, 0)

        .from('#container #Navbar', {
            opacity: 0,
             x: "40%",
              duration: 2.2,
               ease: "sine.in",
        }, 0)

        .from('.homepage nav span', {
            opacity: 0, 
            x: "70%", 
            duration: 2.2, 
            stagger: 0.4, 
            ease: "sine.inOut",
        }, 0.2)

        .from('.homepage section h1 span', {
            opacity: 0, 
            x: "-22%", 
            duration: 2.2, 
            ease: "sine.inOut",
        }, 0.4)

        .from('.homepage #h', {
            opacity: 0, 
            x: "22%", 
            duration: 2.2, 
            ease: "sine.inOut",
        }, 0.4)

        .from('.homepage section p span', {
            opacity: 0, 
            x: "-31%", 
            duration: 2.2, 
            stagger: 0.4, 
            ease: "sine",
        }, 0.8)

        .from('.homepage #ScrollDown p', {
            opacity: 0, 
            y: "-61.8%", duration: 2.2, ease: "sine",
        }, 1.6)


    let homepageOnScroll = gsap.timeline({ // homepageOnScroll---------------------
        scrollTrigger: {
            trigger: ".homepage",
            start: "100% 100%",
            end: "100% 0%",
            // markers: "true",
            scrub: 2.2,
        }
    })
    homepageOnScroll
        .to('.homepage', {
            opacity: 0, y: "-31%",
        }) // homepageOnScroll---------------------
}
//---------------------/Landing Page ScrollTrigger---------------------

//---------------------Slider ScrollTrigger---------------------
function SliderScrollTrigger() {

    let Slide1 = gsap.timeline({ // Slide1---------------------
        scrollTrigger: {
            trigger: ".slide1",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide1",
        }
    })

    Slide1
        .from('.slide1 #slide h1', {
            opacity: 0, 
            x: "-22%",
        })

        .from('.slide1 #slide p', {
            opacity: 0, 
            y: "22%",
        })

        .from('.slide1 #ImageContainer', {
            opacity: 0, 
            y: "22%",
        }) // Slide1---------------------

    let Slide2 = gsap.timeline({ // Slide2---------------------
        scrollTrigger: {
            trigger: ".slide2",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide2",
        }
    })
    Slide2
        .from('.slide2 #slide h1', {
            opacity: 0,
             x: "-22%",
        })

        .from('.slide2 #slide p', {
            opacity: 0, 
            y: "22%",
        })

        .from('.slide2 #ImageContainer', {
            opacity: 0, 
            y: "22%",
        }) // Slide2---------------------

    let Slide3 = gsap.timeline({ // Slide3---------------------
        scrollTrigger: {
            trigger: ".slide3",
            start: "100% 100%",
            end: "300% 0%",
            // markers: "true",
            scrub: 2.2,
            pin: ".slide3",
        }
    })
    Slide3
        .from('.slide3 #slide h1', {
            opacity: 0,
             x: "-22%",
        })
        .from('.slide3 #slide p', {
            opacity: 0, 
            y: "22%",
        })
        .from('.slide3 #ImageContainer', {
            opacity: 0, y: "22%",
        }) // Slide3---------------------

    let Harshit= gsap.timeline({
        scrollTrigger: {
            trigger: "#codeby",
            toggleActions: "restart restart restart restart",
            start: "48.618% 100%",
            end: "100% 0%",
            // markers: "true",
        }
    })
    Harshit

        .from('#codeby a', {
            opacity: 0, 
            y: "130%", 
            duration: 2.2, 
            ease: "sine",
        }) // Harshit
        
}
//---------------------/Slider ScrollTrigger---------------------

/*-------------Navbar (max-width: 400px)------------- */
function Navbar() {
    gsap.from('#container#Navbar', {
        opacity: 0, 
        x: "40%", 
        duration: 2.2, 
        ease: "sine.in",
    })

    var naigation= gsap.timeline();
    naigation
    .from('#containernav', {
        opacity: 0,
         y: "13%", 
         duration: 0.5, 
         ease: "sine",
    })
        .reverse();
    $("#container#Navbar").click(function () {
        $("#containernav").toggleClass("DisplayNone");
        naigation
    .reversed(!naigation
        .reversed());
    });
}
/*-------------/Navbar (max-width: 400px)------------- */

window.onload = () => {
    homepageScrollTrigger()
    SliderScrollTrigger()
    if (window.matchMedia("(max-width: 400px)").matches) {
        Navbar()
    } else {
    }
}