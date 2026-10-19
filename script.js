```javascript
// ============================
// HB Travel Service
// ============================

// Bus Search Form
const searchForm = document.querySelector(".search form");

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        const from = searchForm.querySelector('[name="from"]');
        const to = searchForm.querySelector('[name="to"]');
        const date = searchForm.querySelector('[name="date"]');
        const passengers = searchForm.querySelector('[name="passengers"]');

        // Only handle the bus search form
        if (from && to && date && passengers) {
            e.preventDefault();

            if (from.value === to.value) {
                alert("Departure and destination must be different.");
                return;
            }

            if (!date.value) {
                alert("Please select your travel date.");
                return;
            }

            const params = new URLSearchParams({
                from: from.value,
                to: to.value,
                date: date.value,
                passengers: passengers.value
            });

            window.location.href = "booking.html?" + params.toString();
        }
    });
}


// Booking Form
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Booking Successful!\n\nYour demo booking has been recorded.");

        window.location.href = "payment.html";
    });
}


// Payment Form
const paymentForm = document.querySelector("#paymentForm");

if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Demo Payment Successful!\n\nNo real payment was processed.");

        window.location.href = "index.html";
    });
}


// Contact Form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you!\n\nYour demo message has been submitted.");

        contactForm.reset();
    });
}


// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});


// Active Navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    const linkURL = new URL(link.href, window.location.href);

    if (linkURL.pathname === window.location.pathname) {
        link.style.color = "red";
    }
});
```