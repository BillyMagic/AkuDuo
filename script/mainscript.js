// gsap.from("#header", {duration: 2, opacity: 0, y: -80});

// gsap.from("#header a", {duration: 1, opacity: 0, y: -30});

document.addEventListener("DOMContentLoaded", function(event) {

    window.addEventListener("load", function(e) {

        document.body.style.display = "block";

        gsap.from(".wrapper", {duration: 1, opacity: 0.3, ease: "power1.out"});
        gsap.from("#header", {duration: 1, opacity: 0, y: -80});
        gsap.from("#header a", {duration: 1, opacity: 0, y: -30});
        gsap.from(".logo div", {duration: 1, delay: 0.8, opacity: 0, y: 40, ease: Power2.easeOut, stagger: 0.2});

    }, false);

});


