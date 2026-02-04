const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Thêm class 'active' cho cả menu (để trượt ra) và nút (để xoay thành X)
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Khi bấm vào một link bất kỳ, tự động đóng menu lại
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));