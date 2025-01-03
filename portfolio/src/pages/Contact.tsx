import { useRef } from "react"
import { fields } from "../data"

const Contact = () => {
    const modal = useRef<HTMLDivElement | null>(null)

    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className="contact grid justify-center">
            <h1>Contact</h1>
            <form className="flex column align-center" data-netlify="true" method="POST" onSubmit={handleSubmission}>
                {
                    fields.map(field => {
                        return (
                            <div key={field.name} className="flex column align-center">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input id={field.name} placeholder={field.placeholder} />
                            </div>
                        )
                    })
                }
                <label htmlFor="msg">Your Message</label>
                <textarea name="msg" rows={6} id="msg" placeholder="Type your message"></textarea>
                <button type="button">Submit</button>
            </form>
            <div className="submission-indication" ref={modal}></div>
        </section>
    )
}

export default Contact;