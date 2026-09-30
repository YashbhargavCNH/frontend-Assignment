function Gallery() {

   const galleryImages = [
    {
        image: "/img/people15.jpg",
        className: "img-wide",
        alt: "People working together"
    },
    {
        image: "/img/interior42.jpg",
        className: "img-square",
        alt: "Modern interior"
    },
    {
        image: "/img/people4.jpg",
        className: "img-tall",
        alt: "Team collaboration"
    }
];

    return (
        <section className="gallery" id="gallery">

            <div className="gallery-images">

                {galleryImages.map((item, index) => (
                    <div
                        className={`gallery-item ${item.className}`}
                        key={index}
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                        />
                    </div>
                ))}

            </div>

            <div className="gallery-content">

                <p className="section-label">
                    OUR WORK
                </p>

                <h2>
                    Designing spaces,
                    products and experiences
                    that feel effortless.
                </h2>

                <p>
                    We believe good design should feel natural.
                    Every detail has a purpose, from the first
                    interaction to the final experience.
                </p>

                <a href="#contact" className="text-link">
                    Explore our work
                    <span>→</span>
                </a>

            </div>

        </section>
    );
}

export default Gallery;