const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')


const linkAction =()=>{
    const navMenu =  document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
 
}

navLink.forEach(items=>items.addEventListener('click',linkAction))


const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ?header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader)


const contactForm = document.getElementById('contact-form'),
      contactMessage =document.getElementById('contact-message');

const sendEmail  =(e) =>{
    e.preventDefault()

    emailjs.sendForm('service_f22cq74','template_1tom8fc','#contact-form','3atsjQueLM6XuZ4hZ').then(()=>{
        contactMessage.textContent="Message send Successfully !!";

        setTimeout(()=>{
            contactMessage.textContent =''
        },5000)

        contactForm.reset();
    },()=>{
        contactMessage.textContent="Message not send (service error) !!";

        setTimeout(()=>{
            contactMessage.textContent =''
        },5000)
        contactForm.reset();
    })
}

contactForm.addEventListener('submit',sendEmail);


const scrollUp = () =>{
    const scrollUp  =document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollUp.classList.add('show-scroll') :
                         scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

const sections =document.querySelectorAll('section[id]')

const scrollActive =()=>{
    const scrollY =window.pageYOffset

    console.log("scrollY",scrollY)
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop =current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+ sectionId + ']')
        if (scrollY >sectionTop && scrollY <=sectionTop +sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)