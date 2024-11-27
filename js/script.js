import globeImage from '@assets/globe.png';


document.addEventListener("DOMContentLoaded", function() {
    
  const textScrollingContainers = document.querySelectorAll('.text_scrolling_container');
  
    // Loop through each text scrolling container
    textScrollingContainers.forEach(container => {
      const numParts = 12; // Number of parts you want to create
  
      // Create text scrolling parts dynamically
      for (let i = 0; i < numParts; i++) {
        const part = document.createElement('div');
        part.classList.add('text_scrolling_part');
        part.textContent = 'WIMHH'; // Or any text you want
  
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('text_scrolling_image');
        const image = document.createElement('img');
        image.src = globeImage;
        imageContainer.appendChild(image);
  
        part.appendChild(imageContainer);
        container.appendChild(part);
      }
  
      // Apply GSAP animation to text scrolling parts within this container
      let tween = gsap.to(container.querySelectorAll(".text_scrolling_part"), {
        x: "-100%",
        repeat: -1,
        duration: 5,
        ease: Power0.easeNone,
      }).totalProgress(0.5);
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
  // Définir la date de fin (par exemple, 1er janvier 2024)
  var dateFin = new Date("Apr 6, 2024 14:00:00").getTime();
  
  // Mettre à jour le compte à rebours toutes les secondes
  var x = setInterval(function() {
  
    // Obtenir la date et l'heure actuelles
    var maintenant = new Date().getTime();
    
    // Trouver la distance entre maintenant et la date de fin
    var distance = dateFin - maintenant;
    
    // Calculs de temps pour jours, heures, minutes et secondes
    var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afficher le résultat dans l'élément avec l'id="compteARebours"
    document.getElementById("counter").innerHTML = jours + "j " + heures + "h "
    + minutes + "m " + secondes + "s ";
    
    // Si le compte à rebours est terminé, écrire un texte
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter").innerHTML = "EXPIRÉ";
    }
  }, 1000);
  });
  

  function toggleMobileMenu() {
    const menuHamburger = document.querySelector(".hamburger__menu");
    const navLinks = document.querySelector(".header__menu");
  
    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });

    // Select all navigation links
    const navItems = document.querySelectorAll('.nav_item');

    // Loop through each navigation link and add click event listener
    navItems.forEach(function(link) {
        link.addEventListener('click', function() {
            // Hide the menu when a link is clicked
            navLinks.classList.remove('mobile-menu');
        });
    });
}
  
toggleMobileMenu();


function hideCookieConsent() {
  var consentElement = document.getElementById('cookieConsent');
  consentElement.style.display = 'none';
}

hideCookieConsent();

alert('Hello, Vite!');
c