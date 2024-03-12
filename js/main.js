document.addEventListener("DOMContentLoaded", function() {
    // انیمیشن برای لود قسمت article
    var articleSection = document.querySelector('.master');
    articleSection.classList.add('active');
});

document.addEventListener("DOMContentLoaded", function() {
    // انیمیشن برای لود قسمت article
    var articleSection = document.getElementById('mainContent');
    articleSection.classList.add('active');
});

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

link1.addEventListener('click', () => {
    scrollToElement('.about');
});

link2.addEventListener('click', () => {
    scrollToElement('.project', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.footer-contact');
});
