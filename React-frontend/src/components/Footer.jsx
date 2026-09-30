function Footer() {

    const companyLinks = [
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

    const services = [
        "Product Strategy",
        "UI/UX Design",
        "Web Development"
    ];

    const resourceLinks = [
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

    return (
        <>
            <footer>

                <div className="footer-brand">

                    <h3>
                        Stride
                    </h3>

                    <p>
                        We create thoughtful digital experiences
                        that help businesses grow.
                    </p>

                </div>


                <div className="footer-column">

                    <h4>
                        Company
                    </h4>

                    {companyLinks.map((item) => (
                        <a
                            href={item.link}
                            key={item.name}
                        >
                            {item.name}
                        </a>
                    ))}

                </div>


                <div className="footer-column">

                    <h4>
                        Services
                    </h4>

                    {services.map((service) => (
                        <a
                            href="#services"
                            key={service}
                        >
                            {service}
                        </a>
                    ))}

                </div>


                <div className="footer-column">

                    <h4>
                        Resources
                    </h4>

                    {resourceLinks.map((item) => (
                        <a
                            href={item.link}
                            key={item.name}
                        >
                            {item.name}
                        </a>
                    ))}

                </div>

            </footer>


            <div className="copyright">

                <p>
                    © 2026 Stride. All rights reserved.
                </p>

            </div>
        </>
    );
}

export default Footer;