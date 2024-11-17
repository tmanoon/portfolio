const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact</h1>
            <form className="flex column align-center">
                <label htmlFor="fullname">Full Name</label>
                <input id="fullname" placeholder="Full Name" />
                <label htmlFor="fullname">Email</label>
                <input id="email" placeholder="Email" />
                <label htmlFor="phone">Phone (Optional)</label>
                <input id="phone" placeholder="Phone" />
                <label htmlFor="msg">Your Message</label>
                <textarea name="msg" id="msg" placeholder="Type your message"></textarea>
                <button type="button">Submit</button>
            </form>
        </section>
    )
}

export default Contact;