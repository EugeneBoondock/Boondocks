// script.js
window.addEventListener('load', () => {
    const logoContainer = document.querySelector('.logo-container');
    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');
  
    logoContainer.addEventListener('mouseenter', () => {
      logo1.style.display = 'none';
      logo2.style.display = 'inline';
    });
  
    logoContainer.addEventListener('mouseleave', () => {
      logo1.style.display = 'inline';
      logo2.style.display = 'none';
    });
  });
  