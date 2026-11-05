import "./Contact.css";

function Contact() {
    return (
        <section id="Contact_us" className="contact">

            <div className="contact-heading">
                <p className="contact-subtitle">
                    WE'D LOVE TO HEAR FROM YOU
                </p>

                <h2>Let's Stay in Touch</h2>

                <p>
                    Have a question about our collection?
                    Send us a message.
                </p>
            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <p className="info-label">GET IN TOUCH</p>

                    <h3>
                        A little conversation
                        <br />
                        goes a long way.
                    </h3>

                    <p className="info-description">
                        We're here to help you discover your
                        perfect style and answer your questions.
                    </p>

                    <div className="contact-item">
                        <span>Email</span>
                        <p>hello@lumora.example</p>
                    </div>

                    <div className="contact-item">
                        <span>Working Hours</span>
                        <p>Monday – Saturday, 10 AM – 6 PM</p>
                    </div>

                </div>

                <form className="contact-form">

                    <label htmlFor="name">Your Name</label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="email">Email Address</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="message">Your Message</label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows="5"
                        required
                    />

                    <button type="submit" className="contact-btn">
                        Send Message 
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;