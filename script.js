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

    const userName = document.getElementById('user_name').value.trim();
    const userEmail =document.getElementById('user_email').value;

    const usernamePattern = /[^a-zA-Z]/; 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (usernamePattern.test(userName)){
        displayMessage("Username should only contain letters")
        return ;
    }
    
    if (!emailPattern.test(userEmail)){
        displayMessage('Valid email is required');
        return;
    }


    emailjs.sendForm('service_f22cq74','template_1tom8fc','#contact-form','3atsjQueLM6XuZ4hZ').then(()=>{

        displayMessage('Message send Successfully !!',false);

        contactForm.reset();
    },()=>{
        displayMessage('Message not send (service error) !!',true);

        contactForm.reset();
    })


}

contactForm.addEventListener('submit',sendEmail);

const displayMessage = (message, isError = true) => {
    contactMessage.textContent = message;
    contactMessage.style.color = isError ? 'red' : 'green'; 
    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);
}


const scrollUp = () =>{
    const scrollUp  =document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollUp.classList.add('show-scroll') :
                         scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

const sections =document.querySelectorAll('section[id]')

const scrollActive =()=>{
    const scrollY =window.pageYOffset

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


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__data,.home__social,.contact__container`)
sr.reveal(`.home__image,.footer__container`,{origin:'bottom'})


sr.reveal(`.about_data,.skill__data`,{origin:'left'})
sr.reveal(`.about_image,.skills_content`,{origin:'right'})

sr.reveal(`.services__card,.projects__card`,{interval:100})