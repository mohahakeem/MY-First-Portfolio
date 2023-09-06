window.addEventListener('scroll', () => {
document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY > 100)
})

   
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if( icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
        } else {
            icon.className = " fa-solid fa-plus";
        }
    })
})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";


}

closeBtn.addEventListener('click', closeNav)