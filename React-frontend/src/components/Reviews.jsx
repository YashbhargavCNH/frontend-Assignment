function Reviews() {

    const reviews = [
        {
            name: "Sarah Williams",
            role: "Head of Product",
            company: "Nova",
            image: "/img/person9.jpg",
            stars: "★★★★★",
            text:
                "Stride brought structure to a project that had been difficult to manage. Their research and design process helped our team make better decisions."
        },

        {
            name: "Michael Chen",
            role: "CEO",
            company: "Vertex Labs",
            image: "/img/person3.jpg",
            stars: "★★★★★",
            text:
                "The biggest improvement was how much easier our product became to use. Stride understood our users and translated their needs into a much clearer interface.",
            featured: true
        },

        {
            name: "Daniel Carter",
            role: "Marketing Director",
            company: "Forma",
            image: "/img/person8.jpg",
            stars: "★★★★★",
            text:
                "They were reliable, easy to communicate with and very focused on the details. The final website was faster, clearer and much easier for our customers to use."
        },

        {
            name: "Emma Johnson",
            role: "Operations Lead",
            company: "Atlas",
            image: "/img/person14.jpg",
            stars: "★★★★☆",
            text:
                "Stride helped us redesign our customer journey from the ground up. We now have a much clearer understanding of what our users need at every stage."
        },

        {
            name: "Alex Morgan",
            role: "Founder",
            company: "Brightline",
            image: "/img/person13.jpg",
            stars: "★★★★★",
            text:
                "The team understood our business quickly and translated our goals into a website that feels professional, modern and easy to navigate."
        },

        {
            name: "Olivia Smith",
            role: "Digital Manager",
            company: "Northpoint",
            image: "/img/person18.jpg",
            stars: "★★★★★",
            text:
                "What stood out most was their attention to the user experience. They did not just make the product look better; they made it work better."
        }
    ];

    return (
        <section className="reviews">

            <div className="reviews-heading">

                <p className="section-label">
                    CLIENT REVIEWS
                </p>

                <h2>
                    Trusted by teams
                    around the world
                </h2>

                <p>
                    Here's what some of the teams we've worked
                    with have to say about their experience.
                </p>

            </div>


            <div className="review-grid">

                {reviews.map((review) => (

                    <div
                        className={`review-card ${
                            review.featured ? "featured" : ""
                        }`}
                        key={review.name}
                    >

                        <div className="stars">
                            {review.stars}
                        </div>

                        <p>
                            "{review.text}"
                        </p>

                        <div className="review-user">

                            <img
                                src={review.image}
                                alt={review.name}
                            />

                            <div>

                                <h4>
                                    {review.name}
                                </h4>

                                <span>
                                    {review.role}, {review.company}
                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Reviews;