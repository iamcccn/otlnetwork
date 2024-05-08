const { getDefaultHighWaterMark } = require("nodemailer/lib/xoauth2");

let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('nav--ul__one a')
window.onscroll=()=>{ 
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('nav--ul__one a[href*='+id+']').classList.add('active')
            })
        }
    })

}








const closeBtn = document.getElementById('close');
const box = document.getElementById('alertBox');
const formSend = document.getElementById('form');
const confirmBtn = document.getElementById('confirm');
const input = document.querySelectorAll('.inputField');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    box.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    box.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
    box.style.display = 'none';
    Array.from(input).forEach(function (item) {
        item.classList.add('disabled');
    });
});

