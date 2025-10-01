// ✅ Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    // يقفل المنيو بعد الضغط على لينك
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// ✅ Toggle Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
 const homeSection = document.getElementById('home');

  // الصور
  const backgrounds = [
    "url('WhatsApp Image 2025-10-01 at 21.32.14_c78d2878.jpg')",
    "url('WhatsApp Image 2025-10-01 at 21.01.53_6f3fe634.jpg')",
    
    
  ];

  let currentBg = 0;

  function changeBackground() {
    homeSection.style.backgroundImage = backgrounds[currentBg];
    homeSection.style.backgroundSize = "cover";
    homeSection.style.backgroundPosition = "center";
    homeSection.style.transition=" 1s ease-in-out";

    
    currentBg = (currentBg + 1) % backgrounds.length;
  }

  // أول صورة
  changeBackground();

  // يتغير كل4.5 ثواني
  setInterval(changeBackground, 4500);