    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});
        document.getElementById("mobile-menu").classList.add("hidden");
      });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", () => { mobileMenu.classList.toggle("hidden"); });

    // Background slider
    const homeSection = document.getElementById('home');
    const backgrounds = [
      "url('WhatsApp Image 2025-10-01 at 21.32.13_01b02230.jpg')",
      "url('WhatsApp Image 2025-10-11 at 19.37.23_6f112b9a.jpg')"
    ];
    let currentBg = 0;
    function changeBackground() {
      homeSection.style.backgroundImage = backgrounds[currentBg];
      homeSection.style.backgroundSize = "cover";
      homeSection.style.backgroundPosition = "center";
      currentBg = (currentBg + 1) % backgrounds.length;
    }
    changeBackground();
    setInterval(changeBackground, 4500);

    // Countdown
    document.addEventListener("DOMContentLoaded", function() {
      const countdownEl = document.getElementById("countdown");
      const weddingDate = new Date("October 30, 2025 20:00:00").getTime();

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
          countdownEl.innerHTML = "🎉 Here we go! 🎉";
          clearInterval(interval);
          return;
        }

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((distance % (1000*60)) / 1000);

        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
    });

