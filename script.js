// Simple portfolio JavaScript

console.log("Portfolio Loaded Successfully!");


// Navbar link click

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked");

    });

});