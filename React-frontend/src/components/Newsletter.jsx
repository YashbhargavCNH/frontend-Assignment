import { useState } from "react";

function Newsletter() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (email.trim() === "") {
            setMessage("Please enter your email address.");
            return;
        }

        setMessage("Thanks for subscribing!");
        setEmail("");
    }

    return (
        <section className="newsletter">

            <div className="newsletter-content">

                <p className="section-label">
                    STAY IN THE LOOP
                </p>

                <h2>
                    Get design insights
                    in your inbox.
                </h2>

                <p>
                    Subscribe to receive occasional updates,
                    ideas and useful design resources.
                </p>

            </div>


            <form
                className="newsletter-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <button type="submit">
                    Subscribe
                </button>

            </form>


            <p className="newsletter-message">
                {message}
            </p>

        </section>
    );
}

export default Newsletter;