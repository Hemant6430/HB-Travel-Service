```javascript
// ============================
// HB Travel Service
// ============================

// Bus Search Form
const searchForm = document.querySelector(".search form");

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const from = searchForm.querySelector('[name="from"]');
        const to = searchForm.querySelector('[name="to"]');
        const date = searchForm.querySelector('[name="date"]');
        const passengers = searchForm.querySelector('[name="passengers"]');

        // Run bus search only when these fields exist
        if (from && to && date && passengers) {
            if (from.value === to.value) {
                alert("Departure and destination must be different.");
                return;
            }

            const params = new URLSearchParams({
                from: from.value,
                to: to.value,
                date: date.value,
                passengers: passengers.value
            });

            window.location.href = "booking.html?" + params.toString();
        } else {
            alert("Searching Available Tickets...");
        }
    });
}


// Booking Form
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Booking Successful!\n\nYour ticket has been reserved.");

        window.location.href = "payment.html";
    });
}


// Payment Form
const paymentForm = document.querySelector("#paymentForm");

if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Payment Successful!\n\nThank you for choosing HB Travel Service.");

        window.location.href = "index.html";
    });
}


// Contact Form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you!\n\nYour message has been sent successfully.");

        contactForm.reset();
    });
}


// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0px)";
    });
});


// Navigation Active
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "red";
    }
});
```