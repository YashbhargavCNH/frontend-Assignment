function Features() {

    const features = [
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

    return (
        <section className="features">

            <div className="feature-grid">

                {features.map(function (feature) {

                    return (
                        <div className="feature" key={feature.title}>

                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.description}
                            </p>

                        </div>
                    );

                })}

            </div>

        </section>
    );
}

export default Features;