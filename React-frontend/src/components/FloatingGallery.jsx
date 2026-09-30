function FloatingGallery() {

    const floatingImages = [
        {
            image: "/img/interior37.jpg",
            alt: "Interior design"
        },
        {
            image: "/img/people1.jpg",
            alt: "People working"
        },
        {
            image: "/img/people2.jpg",
            alt: "Creative team"
        },
        {
            image: "/img/interior29.jpg",
            alt: "Modern workspace"
        }
    ];

    return (
        <section className="floating-gallery">

            {floatingImages.map((item, index) => (

                <div
                    className="floating-gallery-item"
                    key={index}
                >
                    <img
                        src={item.image}
                        alt={item.alt}
                    />
                </div>

            ))}

        </section>
    );
}

export default FloatingGallery;