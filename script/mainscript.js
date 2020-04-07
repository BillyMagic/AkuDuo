// gsap.from("#header", {duration: 2, opacity: 0, y: -80});

// gsap.from("#header a", {duration: 1, opacity: 0, y: -30});

var tl = new TimelineMax();
tl.from("#header", {duration: 1, opacity: 0, y: -80});

tl.from("#header a", {duration: 1, opacity: 0, y: -30}, "-2");
tl.from(".logo div", {duration: 1, opacity: 0, y: 40, ease: Power2.easeOut, stagger: 0.2});

