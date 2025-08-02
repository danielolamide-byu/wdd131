



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
  
  
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
         templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska",
         dedicated: "1999, January, 9",
         area: 11937,
         imageUrl: "images/anchorage_alaska_temple_lds.jpeg"
    },
    {
        templeName: "Draper Utah Temple",
        location: "Draper, Utah",
        dedicated: "2009, March,20",
         area: 58300,
         imageUrl: "images/draper_lsd_temple.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "images/bountiful_temple_lds.jpeg"
    }
  
];

/// Filter before 1900
document.getElementById("filterBefore1900").addEventListener("click", function (e) {
  e.preventDefault();
  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.slice(0, 4));
    return year < 1900;
  });
  displayTemples(filtered);
});

// Filter after 2000
document.getElementById("filterAfter2000").addEventListener("click", function (e) {
  e.preventDefault();
  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.slice(0, 4));
    return year > 2000;
  });
  displayTemples(filtered);
});

document.getElementById("filterlarge").addEventListener('click', function (e) {
    e.preventDefault();
    const filter = temples.filter(temple => temple.area > 10000);
    displayTemples(filter);
});

document.getElementById("filtersmall").addEventListener('click', function (e) {
    e.preventDefault();
    const filter = temples.filter(temple => temple.area < 10000)
    displayTemples(filter);
});


// Function to display filtered temples
function displayTemples(filteredTemples) {
  const container = document.getElementById("templeList");
  container.innerHTML = ""; // Clear previous content

  filteredTemples.forEach(temple => {
    const div = document.createElement("div");
    div.classList.add("card"); // Optional: add class for styling
    div.innerHTML = `
      <h3>${temple.templeName}</h3>
      <div class="cards">
        <p class="info"><strong>Location:</strong> ${temple.location}</p>
        <p class="info"><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p class="info"><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"/>
      </div>
    `;
    container.appendChild(div);
  });
}

// 👇 Show all cards by default on page load
displayTemples(temples);




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