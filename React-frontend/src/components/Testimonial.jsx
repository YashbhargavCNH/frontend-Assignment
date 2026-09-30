function Testimonial() {

    return (
        <section className="testimonial-section">

            <div className="testimonial-image">

                <img
                    src="/img/person11.jpg"
                    alt="Client testimonial"
                />

            </div>

            <div className="testimonial-content">

                <p className="section-label">
                    CLIENT STORY
                </p>

                <blockquote>
                    "Stride helped us turn a complicated
                    idea into something our customers
                    could understand immediately."
                </blockquote>

                <p className="testimonial-name">
                    David Miller
                </p>

                <p className="testimonial-role">
                    Founder, Northline
                </p>

            </div>

        </section>
    );
}

export default Testimonial;