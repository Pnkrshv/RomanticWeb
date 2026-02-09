window.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");
    const fourth = document.querySelector(".fourth");
    const logo = document.querySelector(".logo");
    const message = document.querySelector(".message");

    gsap.set([logo, first, second, third, fourth], { opacity: 0, y: 30 });
    gsap.set(message, { opacity: 1 });

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);

        gsap.to(heart, {
            y: "110vh",
            x: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
            duration: Math.random() * 2 + 3,
            ease: "none",
            onComplete: () => heart.remove(),
        });
    }

    const tl = gsap.timeline();

    tl.to(logo, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        scale: 1.2,
        ease: "back.out(1.7)",
    })
    .to(logo, {
        duration: 1,
        opacity: 0,
        scale: 0.5,
        delay: 1,
        ease: "power2.in",
    })

    .to([first, second, third, fourth], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.6,
        ease: "power3.out",
        onStart: () => {
            setInterval(createHeart, 200); 
        }
    })
    .to(message, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});