
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon
    if (navLinks.classList.contains('active')) {
      hamburger.innerHTML = '&times;'; // "X" icon
    } else {
      hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
  });

  const getYear = new Date();
const currentYear = getYear.getFullYear();

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;




