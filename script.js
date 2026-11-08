const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navLinks.classList.toggle("active");

    const isMenuOpen = navLinks.classList.contains("active");

    menuButton.innerHTML = isMenuOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
}

function closeMenu() {
    navLinks.classList.remove("active");

    menuButton.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
}

navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active-link");
        }
    });
});

const scrollButton =
    document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

scrollButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const revealElements =
    document.querySelectorAll(
        ".about, .skills, .projects, .contact"
    );

function revealSection() {

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSection);

window.addEventListener("load", revealSection);

// Initialize EmailJS

emailjs.init("v_a-9g2KawKutrfum");

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", sendEmail);

function sendEmail(event) {

    event.preventDefault();

    const templateParams = {
        from_name:
            document.getElementById("name").value,

        from_email:
            document.getElementById("email").value,

        message:
            document.getElementById("message").value
    };

    emailjs
        .send(
            "service_bx11s2f",
            "template_m1qpide",
            templateParams
        )
        .then(() => {

            alert(
                "✅ Message sent successfully!"
            );

            contactForm.reset();

        })
        .catch((error) => {

            alert(
                "❌ Failed to send message."
            );

            console.error(error);

        });

}