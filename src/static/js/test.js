let i = 0;
const body = document.body;
const header = document.getElementsByTagName('header')[0];
let lastScroll = 0;

document.getElementById('testButton').addEventListener('click', (e) => {
    ++i;
    if (i % 2) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return ;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scrolled'))
        header.classList.add('scrolled');
    else if (currentScroll < lastScroll && header.classList.contains('scrolled'))
        header.classList.remove('scrolled');
    lastScroll = currentScroll;
});