/*================== toggle icon navbar ======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================== scroll section active link ======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };

    });
    /*================== scroll section active link ======================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
     /*================== remove toggle icon and navbar when click navbar link (scroll) ======================*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};


 /*================== scroll reveal ======================*/
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================== typed js ======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Computer Engineer','Fullstack Developer','',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// const typed = new Typed('.multiple-text'), {

// }


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const text = document.getElementById("text");
const subject = document.getElementById("subject");




function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
     Phone Number: ${phone.value}<br>
      Email Subject: ${text.value} Message: ${subject.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tejaswinikadam1998@gmail.com",
        Password : "C848FE480E2F0D08B85900961D767F137DD0",
        To : 'tejaswinikadam1998@gmail.com',
        From : "tejaswinikadam1998@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
            }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            
        })
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
   // sendEmail();
});