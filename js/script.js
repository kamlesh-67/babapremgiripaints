//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on")
    } else {
        nav.classList.remove("scroll-on")
    }
}


//nav Hide
let navBar = document.querySelectorAll('.nav-link')
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");


    })
})

//counter design
document.addEventListener("DOMContentLoaded", () => {
    const counter = (id, start, end, duration) => {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 999, 3000);
    counter("count2", 100, 250, 2500);
    counter("count3", 0, 20, 3000);
    counter("count4", 0, 10, 3000);
})