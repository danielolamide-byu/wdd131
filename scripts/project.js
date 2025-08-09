

const products = [

    {
        name: "Cosmic Charm Weekly Undated Planner Bundle",
        price: 50.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/cosmic-charm-bundle-hover-date_stickers.avif",
    },

    {
        name: "Midnight Meadow Weekly Undated Planner Bundle",
        price: 429.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/midnight-meadow-weekly-undated-planner-back-no-sleeve.avif",
    },

    {
        name: "Elite Black Weekly Undated Planner Bundle",
        price: 505.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/elite-black-undated-weekly-bundle-hover-date_stickers.avif",
    },

    {
        name: "Dreamy Lilac Daily Undated Planner Bundle",
        price: 28.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/dreamy-lilac-weekly-undated-back-no-sleeve.webp",
    },

    {
        name: "Year of the Snake Ruby Daily Updated Planner Bundle",
        price: 405.50,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/year-of-the-snake-ruby-undated-bundle-hover-sticker-pack.avif",
    },

    {
        name: "Weekly Undated Planner - Midnight Meadow",
        price: 450.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/midnight-meadow-weekly-undated-planner-back-no-sleeve.avif",
    },

    {
        name: "Weekly Undated Planner - Cosmic Charm",
        price: 560.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/Cosmic-Charm-weekly-undated-planner-back.avif",
    },

    {
        name: "Weekly Undated Planner - Dreamy Lilac",
        price: 550.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/dreamy-lilac-weekly-undated-back-no-sleeve.webp",
    },

    {
        name: "Daily Planner - Undated - Year of the Snake Ruby",
        price: 580.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/Year-of-the-snake-ruby-daily-undated-back-no-sleeve.webp",
    },

    {
        name: "Daily Planner - Undated - Dreamy Lilac",
        price: 399.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/dreamy-lilac-daily-undated-back-no-sleeve.webp",
    },

    {
        name: "Daily Planner Bundle - Undated - Cozy Nature",
        price: 499.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/cozy-nature-bundle-daily-undated-planner.avif",
    },

    {
        name: "Passion Journal - Twilight Teal",
        price: 390.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/twilight-teal-passion-journal-back.avif",
    },
    
    {
        name: "Passion Journal - Espresso Brown",
        price: 190.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/espresso-brown-passion-journal-back.avif",
    },
    
    {
        name: "Passion Journal - Vanilla Cream",
        price: 74.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/vanilla-cream-passion-journal-back.webp",
    },
    
    {
        name: "Passion Journal - Calm Green",
        price: 380.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/calm-green-passion-journal-back.webp",
    },
    
    {
        name: "Book Lovers Sticker Book",
        price: 299.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/book-lovers-sticker-book-all-pages.avif",
    },
    
    {
        name: "Digital Book Lovers Sticker Book",
        price: 184.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/digital-book-lovers-sticker-book-front.webp",
    },

    {
        name: "Project Planner Notepad Set - Cover and Insert",
        price: 350.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/project-planner-notepad-insert-front-filled.avif",
    },
    
    {
        name: "Daily Schedule Notepad Set - Cover and Insert",
        price: 250.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/daily-schedule-notepad-insert-front-filled.avif",
    },
    
    {
        name: "Notepad Cover - Onyx Kintsugi",
        price: 150.99,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/onyx-kintsugi-notepad-back.avif",
    },
    
    {
        name: "Notepad Insert - Daily Schedule",
        price: 220.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/Cosmic-Charm-weekly-undated-planner-back.avif",
    },
    
    {
        name: "Notepad Insert - Project Planner",
        price: 210.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/project-planner-notepad-insert-front-filled.avif",
    },
    
    {
        name: "Elite Black 2025-2026 Weekly Mid-Year Planner Bundle",
        price: 50.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/elite-black-midyear-bundle-hover.avif",
    },
    
    {
        name: "Twilight Teal 2025-2026 Weekly Mid-Year Planner Bundle",
        price: 120.00,
        delieveryDate: "2 August, 2025",
        rating: 5,
        image: "images/twilight-teal-midyear-bundle-hover.avif",
    }
];

document.querySelector(".pri").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price < 100)
    displayProducts(price);
});

document.getElementById("under200").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price > 100 && product.price < 200)
    displayProducts(price);
});

document.getElementById("under300").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price > 200 && product.price < 300)
    displayProducts(price);
});

document.getElementById("under400").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price > 300 && product.price < 400)
    displayProducts(price);
});

document.getElementById("under500").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price > 400 && product.price < 500)
    displayProducts(price);
});

document.getElementById("under600").addEventListener('click', function (e) {
    e.preventDefault();
    const price = products.filter(product => product.price > 500 && product.price < 600)
    displayProducts(price);
});


function displayProducts(filteredProducts){
    const container = document.getElementById("products")
    container.innerHTML = "";

    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("cards");
        div.innerHTML = `
        <div class="info">
        <img src="${product.image}" alt="${product.name}" width="282" height="188" loading="lazy"/>
        <br>
        <h2>${product.name}</h2>
        <p class="information">Price: $${product.price}</p>
        <p class="information">Delievery Date: ${product.delieveryDate}</p>
        <p class="information">Rating: ${product.rating}/5</p>
        <button class="aim">Add To Cart</button>
        </div>
        </div>
        `;
        container.appendChild(div);
    });
}

displayProducts(products);

const getYear = new Date();
const currentYear = getYear.getFullYear();

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;

let cartItem = 0;
document.getElementById("products").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("aim")) {
    // You can access product info from the DOM if needed
    const productCard = e.target.closest(".info");
    cartItem += 1;
    document.getElementById("carts").textContent = cartItem;

    // You can implement your cart logic here
  }
});

