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


// --- XỬ LÝ NÚT XEM THÊM PROJET ---
const loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3; // Số lượng dự án hiện có ban đầu

loadMoreBtn.onclick = () => {
    // Lấy tất cả các thẻ project đang có
    let projects = document.querySelectorAll('.project-card');
    
    // Kiểm tra xem nút đang ở trạng thái nào (Xem thêm hay Thu gọn)
    if (loadMoreBtn.innerText === "Voir plus de projets") {
        // --- CHỨC NĂNG HIỆN RA ---
        
        // Hiện toàn bộ các project đang bị ẩn
        projects.forEach(project => {
            project.classList.remove('hidden');
        });

        // Đổi tên nút thành "Thu gọn"
        loadMoreBtn.innerText = "Voir moins";
        
    } else {
        // --- CHỨC NĂNG THU GỌN ---
        
        // Duyệt qua tất cả dự án, bắt đầu từ cái thứ 4 (index 3) trở đi thì ẩn lại
        for (let i = 3; i < projects.length; i++) {
            projects[i].classList.add('hidden');
        }

        // Cuộn trang nhẹ về lại đầu danh sách dự án (để người xem không bị hụt hẫng)
        document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });

        // Đổi tên nút về lại ban đầu
        loadMoreBtn.innerText = "Voir plus de projets";
    }
}
