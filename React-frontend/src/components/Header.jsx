import { useEffect, useState } from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sections = document.querySelectorAll(
            "#home, #about, #gallery, #services, #contact"
        );

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }

                });

            },
            {
                threshold: 0.3
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });

        return function () {
            observer.disconnect();
        };

    }, []);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header>

            <div className="logo">
                Stride
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className={menuOpen ? "active" : ""}>

                <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                    onClick={closeMenu}
                >
                    Home
                </a>

                <a
                    href="#services"
                    className={activeSection === "services" ? "active" : ""}
                    onClick={closeMenu}
                >
                    Services
                </a>

                <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                    onClick={closeMenu}
                >
                    About Us
                </a>

                <a
                    href="#gallery"
                    className={activeSection === "gallery" ? "active" : ""}
                    onClick={closeMenu}
                >
                    Gallery
                </a>

                <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                    onClick={closeMenu}
                >
                    Contact
                </a>

            </nav>

        </header>
    );
}

export default Header;