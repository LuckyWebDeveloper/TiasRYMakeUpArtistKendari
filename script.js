// Toggle hamburger menu
document.getElementById('hamburger').addEventListener('click', function () {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
});

// Tutup menu saat klik link (mobile)
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', function () {
    const navList = document.querySelector('.nav-list');
    navList.classList.remove('show');

    // Scroll ke target dengan offset (hindari tertutup header)
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});







// HOME
// Efek tambahan: tambahkan kelas saat scroll (opsional, tapi bagus untuk UX)
document.addEventListener('DOMContentLoaded', function () {
  const homeSection = document.querySelector('.home-section');
  if (homeSection) {
    // Smooth scroll untuk anchor (opsional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  }
});

























