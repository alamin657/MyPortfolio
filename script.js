// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    // sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove menu icon navbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// dark light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', '.title', '.skills', '.skills-content', '.column', '.left ', '.right', '.text', 'bars', 'info', 'line', { origin: 'top' })
ScrollReveal().reveal('.home-img img, .project-box, .contact form', '.title', '.skills', '.skills-content', '.column', '.left ', '.right', '.text', 'bars', 'info', 'line', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', '.title', '.skills', '.skills-content', '.column', '.left ', '.right', '.text', 'bars', 'info', 'line', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', '.title', '.skills', '.skills-content', '.column', '.left ', '.right', '.text', 'bars', 'info', 'line', { origin: 'right' });

// email js
function sendEmail() {
    var params = {
        from_name: document.getElementById('contact-name').value,
        email_id: document.getElementById('contact-email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_90qov27', 'template_dzgsad9', params).then(function (res) {
        alert('success' + res.status)
    })
}

// typed js
var typed = new Typed('.text', {
    strings: ['Web Developer', 'React Developer', 'Mern Weveloper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// const contactForm = document.getElementById('contact-form'),
//     contactName = document.getElementById('contact-name'),
//     contactEmail = document.getElementById('contact-email'),
//     contactProject = document.getElementById('contact-project'),
//     contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//     e.preventDefault()

//     // check if the field has a value
//     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
//         // Add and remove color
//         contactMessage.classList.remove('color-blue')
//         contactMessage.classList.add('color-red')

//         // show message
//         contactMessage.textContent = 'Write all the input fields'
//     }
//     else {
//         // serviceID,templateID - #form - publickey
//         emailjs.sendForm('service_09dz5lf', 'template_dzgsad9', '#contact-form', '2Nzvnm8GTphgLX71P')
//             .then(() => {
//                 // show message and add color
//                 contactMessage.classList.add('color-blue')
//                 contactMessage.textContent = 'Message sent'

//                 // Remove message after five seconds
//                 setTimeout(() => {
//                     contactMessage.textContent = ''
//                 }, 5000)
//             })
//     }

// }
// contactForm.addEventListener('submit', sendEmail)