function Services() {

    const services = [
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

    return (
        <section className="services" id="services">

            {services.map(function (service) {

                return (
                    <div className="service" key={service.title}>

                        <h3>
                            {service.title}
                        </h3>

                        <p>
                            {service.description}
                        </p>

                    </div>
                );

            })}

        </section>
    );
}

export default Services;