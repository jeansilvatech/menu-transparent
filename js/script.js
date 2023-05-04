const nav = document.querySelector('nav')
const backgroundHome = document.querySelector('#background')
const body = document.querySelector('body')

window.addEventListener('scroll', function(){
    nav.classList.toggle('scroll', window.scrollY>0)
})

const date = new Date();
const hours = date.getHours()
const minutes = date.getMinutes()
if(hours<6 || hours>=18){
    backgroundHome.style.backgroundImage = "url('../img/background2.jpg')"
    body.style.backgroundColor = '#0c1220';
    window.addEventListener('scroll', function(){
        nav.classList.toggle('scrolldark', window.scrollY>0)
    })
}