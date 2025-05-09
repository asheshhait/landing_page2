
gsap.from('.loader h1', 10, {
    x: 800
}, 'start')
gsap.from('.loader h2', 10, {
    x: -800
}, 'start')
gsap.from('#logo span', 1, {
    delay: 6,
    scale: 0,
    ease: ' ease.out'
})
gsap.from("#element h4", 1, {
    delay: 6,
    y: -250,
    ease: Expo.easeOut,
    stagger: .4
})
gsap.from('.h1 h1', 1.4, {
    delay: 8,
    y: 250,
    skewY: 20,
    stagger: .8
})
let tl = gsap.timeline();

tl.from('.content p', {
  delay: 8.5,
  y: -30,
  opacity: 0,
  duration: 1,
  ease: "expo.out"
})
tl.to('.explore', {
  x: 10,
  opacity: 1,
  duration: 1.2,
  ease: "expo.out"
}, "-=0.4"); // Overlap slightly for smoother flow


gsap.from('.anchor',1, {
    ease: Expo.easeOut,
    delay: 9.6,
    y: 250,
    opacity: 0,
    stagger: 0.5
})
gsap.from('.one', 1, {
    delay: 11,
    x: innerWidth * 1,
})
gsap.from('.two', 1, {
    delay: 11.5,
    y: -100,
    opacity: 0
})
gsap.from('.three', 1, {
    delay: 11.9,
    y: 100,
    opacity: 0
})
gsap.to('.one .bg', 1, {
    ease: Expo.easeOut,
    delay: 13,
    height: '0%'
})
gsap.from('.one img', 1, {
    delay: 13.2,
    scale: 1.5
})
gsap.to('.two .bg2', 1, {
    ease: Expo.easeOut,
    delay: 13,
    height: '0%'
})
gsap.from('.two img', 1, {
    delay: 13.2,
    scale: 1.5
})
gsap.to('.three .bg3', 1, {
    ease: Expo.easeOut,
    delay: 13,
    height: '0%'
})
gsap.from('.three img', 1, {
    delay: 13.2,
    scale: 1.5
})