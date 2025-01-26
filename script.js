// JavaScript สำหรับเปลี่ยน active menu เมื่อ scroll
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav li a");

    let currentSection = "";

    // หา section ที่อยู่บนสุดใน viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    // เปลี่ยน active class ในเมนู
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
const navLinks = document.querySelectorAll(".nav li a");

