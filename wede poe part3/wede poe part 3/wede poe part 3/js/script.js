document.addEventListener("DOMContentLoaded", function () {

    // ===== HAMBURGER MENU =====
    function toggleMenu() {
        document.getElementById("navMenu").classList.toggle("active");
    }

    // make it accessible globally for onclick
    window.toggleMenu = toggleMenu;


    // ===== CONTACT FORM VALIDATION =====
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            let phone = document.getElementById("phone").value;

            if (phone.length < 10) {
                alert("Please enter a valid phone number.");
                e.preventDefault();
            }

        });

    }


    // ===== SEARCH FUNCTION =====
    const searchBox = document.getElementById("searchBox");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            let filter = this.value.toLowerCase();

            let cards = document.querySelectorAll(".service-card");

            cards.forEach(card => {

                let text = card.textContent.toLowerCase();

                if (text.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});
const searchBox = document.getElementById("searchBox");

if(searchBox){

    searchBox.addEventListener("keyup", function(){

        let filter = this.value.toLowerCase();

        let cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            let text = card.textContent.toLowerCase();

            let keywords = card.dataset.keywords.toLowerCase();

            if(text.includes(filter) || keywords.includes(filter)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}