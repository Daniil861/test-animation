const block = document.querySelector('.block');
// gsap.fromTo(block, { opacity: 1, width: 90 }, { duration: 3, x: 200, y: 100, opacity: 0.3, delay: 2, width: 30 });
// gsap.fromTo(".block", { opacity: 0 }, { opacity: 0.8, duration: 1, ease: "elastic" });
var tl = gsap.timeline({ repeat: 60, repeatDelay: 1 });
tl.to(block, { x: 100, duration: 1 });
tl.to(".block-2", { y: 50, duration: 1 });
tl.to(".block-3", { x: 60, opacity: 0.5, duration: 1 });