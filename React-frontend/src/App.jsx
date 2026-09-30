import Header from "./components/Header";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Numbers from "./components/Numbers";
import FloatingGallery from "./components/FloatingGallery";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Header />

            <main>

                {/* HOME */}
                <section id="home" className="hero">
                    <div className="hero-content">

                        <p className="small-heading">
                            DESIGNING BETTER EXPERIENCES
                        </p>

                        <h1>
                            Creating digital
                            experiences that
                            move people forward.
                        </h1>

                        <p>
                            We combine strategy, design and technology
                            to create meaningful digital experiences
                            for modern businesses.
                        </p>

                        <a href="#contact" className="hero-btn">
                            Get started
                        </a>

                    </div>

                    <div className="hero-image">
                        <img
                            src="/img/interior11.jpg"
                            alt="Modern interior"
                        />
                    </div>
                </section>


                {/* ABOUT */}
                <section className="intro" id="about">

                    <div className="intro-left">

                        <p className="section-label">
                            WHO WE ARE
                        </p>

                        <h2>
                            We help ambitious teams
                            turn ideas into experiences.
                        </h2>

                    </div>

                    <div className="intro-right">

                        <p>
                            Stride is a digital design and development
                            studio focused on creating simple, useful
                            and engaging experiences.
                        </p>

                        <p>
                            From early research and product strategy
                            to interface design and development,
                            we work with teams to build products
                            that people enjoy using.
                        </p>

                    </div>

                </section>


                <Features />

                <Gallery />

                <Numbers />

                <FloatingGallery />

                <Testimonial />

                <Cta />

                <Reviews />

                <Services />

                <Newsletter />

                <Footer />

            </main>
        </>
    );
}

export default App;