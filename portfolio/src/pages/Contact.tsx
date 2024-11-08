const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact</h1>
            <form className="flex column">
                <label htmlFor="fullname">Full Name</label>
                <input id="fullname" placeholder="Full Name" />
                <label htmlFor="fullname">Email</label>
                <input id="email" placeholder="Email" />
                <label htmlFor="msg"></label>
                <textarea name="msg" id="msg"></textarea>
                <button type="button">Submit</button>
            </form>
        </section>
    )
}

export default Contact;