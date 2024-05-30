document.addEventListener('DOMContentLoaded', () => {

    animation();

    // mob menu
    const mobMenu = document.querySelector('.header');
    const burger = document.querySelector('.hamburger');
    const mobLinks = document.querySelectorAll('.menu__link');
    let mobMenuActive = false;

    burger.addEventListener('click', (e) => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger__icon-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        } else {
            burger.classList.add('hamburger__icon-active');
            mobMenu.style.left = 0;
            mobMenuActive = true;
            document.body.style.overflow = 'hidden';
        }
    });

    mobLinks.forEach(el => el.addEventListener('click', () => {
        if (mobMenuActive) {
            burger.classList.remove('hamburger__icon-active');
            mobMenu.style.left = "-100%";
            mobMenuActive = false;
            document.body.style.overflow = '';
        }
    }));


    // faq 
    let title = document.querySelectorAll(".faq__list-item-title");
    

    title.forEach(title => {
        title.addEventListener("click", event => {
            const active = document.querySelector(".faq__list-item-title.active");
            const listItemActive = document.querySelector(".faq__list-item.active");
            if (active && active !== title) {
                active.classList.toggle("active");
                listItemActive.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            title.classList.toggle("active");
            title.parentElement.classList.toggle("active");
            const content = title.nextElementSibling;
            if (title.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });

});

function animation() {
    const animatedItems = document.querySelectorAll('[data-js="animated-item"]');
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('animation_done');
            }
        });
    }

    let options = { threshold: [0.2] };
    let observer = new IntersectionObserver(onEntry, options);

    animatedItems.forEach(el => {
        observer.observe(el);
    });
}

