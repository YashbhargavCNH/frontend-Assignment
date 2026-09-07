/* =========================================================
   MOBILE MENU
========================================================= */

let menuBtn = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


/* =========================================================
   CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
========================================================= */

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


/* =========================================================
   ACTIVE NAVBAR LINK
========================================================= */

let sections = document.querySelectorAll(
    "#home, #about, #gallery, #services, #contact"
);

let observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

            });

            let activeLink = document.querySelector(
                'nav a[href="#' + entry.target.id + '"]'
            );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}, {
    threshold: 0.3
});


sections.forEach(function (section) {

    observer.observe(section);

});


/* =========================================================
   FEATURES DATA
========================================================= */

let features = [

    {
        icon: "✦",
        title: "Human-centered",
        description:
            "We put real users at the center of every decision to create experiences that are useful, accessible and easy to understand."
    },

    {
        icon: "◈",
        title: "Purposeful design",
        description:
            "Every visual and interaction has a reason. We focus on simple solutions that help users achieve their goals."
    },

    {
        icon: "↗",
        title: "Built to grow",
        description:
            "We create flexible digital experiences that can evolve as your business, products and customers grow."
    }

];


/* =========================================================
   DISPLAY FEATURES
========================================================= */

function displayFeatures() {

    let featureGrid = document.querySelector(".feature-grid");

    featureGrid.innerHTML = "";

    features.forEach(function (feature) {

        featureGrid.innerHTML += `

            <div class="feature">

                <div class="feature-icon">
                    ${feature.icon}
                </div>

                <h3>
                    ${feature.title}
                </h3>

                <p>
                    ${feature.description}
                </p>

            </div>

        `;

    });

}

displayFeatures();


/* =========================================================
   SERVICES DATA
========================================================= */

let services = [

    {
        title: "🎯 Product Strategy",

        description:
            "We help teams define their product goals, understand their users and prioritize the features that create the most value."
    },

    {
        title: "✦ UI/UX Design",

        description:
            "We design clear and accessible interfaces for websites, dashboards and digital products, from early wireframes to polished final designs."
    },

    {
        title: "💻 Web Development",

        description:
            "We build responsive websites and digital experiences that perform well across desktops, tablets and mobile devices."
    }

];


/* =========================================================
   DISPLAY SERVICES
========================================================= */

function displayServices() {

    let servicesSection = document.querySelector(".services");

    servicesSection.innerHTML = "";

    services.forEach(function (service) {

        servicesSection.innerHTML += `

            <div class="service">

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

            </div>

        `;

    });

}

displayServices();


/* =========================================================
   MAIN GALLERY DATA
========================================================= */

let galleryImages = [

    {
        image: "img/people15.jpg",
        className: "img-wide",
        alt: "People working together"
    },

    {
        image: "img/interior42.jpg",
        className: "img-square",
        alt: "Modern interior"
    },

    {
        image: "img/people4.jpg",
        className: "img-tall",
        alt: "Team collaboration"
    }

];


/* =========================================================
   DISPLAY MAIN GALLERY
========================================================= */

function displayGallery() {

    let galleryImagesContainer =
        document.querySelector(".gallery-images");

    galleryImagesContainer.innerHTML = "";

    galleryImages.forEach(function (item) {

        galleryImagesContainer.innerHTML += `

            <div class="gallery-item ${item.className}">

                <img
                    src="${item.image}"
                    alt="${item.alt}"
                >

            </div>

        `;

    });

}

displayGallery();


/* =========================================================
   FLOATING GALLERY DATA
========================================================= */

let floatingImages = [

    {
        image: "img/interior37.jpg",
        alt: "Interior design"
    },

    {
        image: "img/people1.jpg",
        alt: "People working"
    },

    {
        image: "img/people2.jpg",
        alt: "Creative team"
    },

    {
        image: "img/interior29.jpg",
        alt: "Modern workspace"
    }

];


/* =========================================================
   DISPLAY FLOATING GALLERY
========================================================= */

function displayFloatingGallery() {

    let floatingGallery =
        document.querySelector(".floating-gallery");

    floatingGallery.innerHTML = "";

    floatingImages.forEach(function (item) {

        floatingGallery.innerHTML += `

            <div class="floating-gallery-item">

                <img
                    src="${item.image}"
                    alt="${item.alt}"
                >

            </div>

        `;

    });

}

displayFloatingGallery();


/* =========================================================
   REVIEWS DATA
========================================================= */

let reviews = [

    {
        name: "Sarah Williams",

        role: "Head of Product",

        company: "Nova",

        image: "img/person9.jpg",

        stars: "★★★★★",

        text:
            "Stride brought structure to a project that had been difficult to manage. Their research and design process helped our team make better decisions."
    },

    {
        name: "Michael Chen",

        role: "CEO",

        company: "Vertex Labs",

        image: "img/person3.jpg",

        stars: "★★★★★",

        text:
            "The biggest improvement was how much easier our product became to use. Stride understood our users and translated their needs into a much clearer interface.",

        featured: true
    },

    {
        name: "Daniel Carter",

        role: "Marketing Director",

        company: "Forma",

        image: "img/person8.jpg",

        stars: "★★★★★",

        text:
            "They were reliable, easy to communicate with and very focused on the details. The final website was faster, clearer and much easier for our customers to use."
    },

    {
        name: "Emma Johnson",

        role: "Operations Lead",

        company: "Atlas",

        image: "img/person14.jpg",

        stars: "★★★★☆",

        text:
            "Stride helped us redesign our customer journey from the ground up. We now have a much clearer understanding of what our users need at every stage."
    },

    {
        name: "Alex Morgan",

        role: "Founder",

        company: "Brightline",

        image: "img/person13.jpg",

        stars: "★★★★★",

        text:
            "The team understood our business quickly and translated our goals into a website that feels professional, modern and easy to navigate."
    },

    {
        name: "Olivia Smith",

        role: "Digital Manager",

        company: "Northpoint",

        image: "img/person18.jpg",

        stars: "★★★★★",

        text:
            "What stood out most was their attention to the user experience. They did not just make the product look better; they made it work better."
    }

];


/* =========================================================
   DISPLAY REVIEWS
========================================================= */

function displayReviews() {

    let reviewGrid = document.querySelector(".review-grid");

    reviewGrid.innerHTML = "";

    reviews.forEach(function (review) {

        reviewGrid.innerHTML += `

            <div class="review-card ${review.featured ? "featured" : ""}">

                <div class="stars">
                    ${review.stars}
                </div>

                <p>
                    "${review.text}"
                </p>

                <div class="review-user">

                    <img
                        src="${review.image}"
                        alt="${review.name}"
                    >

                    <div>

                        <h4>
                            ${review.name}
                        </h4>

                        <span>
                            ${review.role}, ${review.company}
                        </span>

                    </div>

                </div>

            </div>

        `;

    });

}

displayReviews();


/* =========================================================
   FOOTER COMPANY LINKS
========================================================= */

let companyLinks = [

    {
        name: "About Us",
        link: "#about"
    },

    {
        name: "Our Work",
        link: "#gallery"
    },

    {
        name: "Contact",
        link: "#contact"
    }

];


/* =========================================================
   DISPLAY COMPANY LINKS
========================================================= */

function displayCompanyLinks() {

    let companyLinksContainer =
        document.querySelector(".company-links");

    companyLinksContainer.innerHTML = "";

    companyLinks.forEach(function (item) {

        companyLinksContainer.innerHTML += `

            <a href="${item.link}">
                ${item.name}
            </a>

        `;

    });

}

displayCompanyLinks();


/* =========================================================
   FOOTER SERVICE LINKS
========================================================= */

function displayFooterServices() {

    let footerServices =
        document.querySelector(".footer-service-links");

    footerServices.innerHTML = "";

    services.forEach(function (service) {

        footerServices.innerHTML += `

            <a href="#services">
                ${service.title.replace("🎯 ", "").replace("✦ ", "").replace("💻 ", "")}
            </a>

        `;

    });

}

displayFooterServices();


/* =========================================================
   FOOTER RESOURCE LINKS
========================================================= */

let resourceLinks = [

    {
        name: "Insights",
        link: "#"
    },

    {
        name: "Case Studies",
        link: "#gallery"
    },

    {
        name: "Privacy",
        link: "#"
    }

];


/* =========================================================
   DISPLAY RESOURCE LINKS
========================================================= */

function displayResourceLinks() {

    let resourceLinksContainer =
        document.querySelector(".resource-links");

    resourceLinksContainer.innerHTML = "";

    resourceLinks.forEach(function (item) {

        resourceLinksContainer.innerHTML += `

            <a href="${item.link}">
                ${item.name}
            </a>

        `;

    });

}

displayResourceLinks();


/* =========================================================
   NEWSLETTER FORM
========================================================= */

let newsletterForm =
    document.querySelector(".newsletter-form");

let newsletterMessage =
    document.querySelector(".newsletter-message");


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let emailInput =
        document.querySelector(".newsletter-form input");

    let email = emailInput.value.trim();


    if (email === "") {

        newsletterMessage.textContent =
            "Please enter your email address.";

        return;

    }


    newsletterMessage.textContent =
        "Thanks for subscribing!";

    emailInput.value = "";

});