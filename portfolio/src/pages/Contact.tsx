const Contact = () => {

    type Field = {
        name: string,
        label: string
        placeholder: string
    }

    const fields: Field[] = [
        {
            name: 'fullname',
            label: 'Full Name',
            placeholder: 'Full Name'
        },
        {
            name: 'email',
            label: 'Email',
            placeholder: 'Email'
        },
        {
            name: 'phone',
            label: 'Phone (Optional)',
            placeholder: 'Phone'
        },
    ]

    return (
        <section className="contact">
            <h1>Contact</h1>
            <form className="flex column align-center" data-netlify="true">
                {
                    fields.map(field => {
                        return (
                            <>
                                <label htmlFor={field.name}>{field.label}</label>
                                <input id={field.name} placeholder={field.placeholder} />
                            </>
                        )
                    })
                }
                <label htmlFor="msg">Your Message</label>
                <textarea name="msg" id="msg" placeholder="Type your message"></textarea>
                <button type="button">Submit</button>
            </form>
        </section>
    )
}

export default Contact;