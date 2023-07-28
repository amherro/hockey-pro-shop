import { useEffect, useState } from "react"

const ContactForm = () => {
    const [message, setMessage] = useState({
        name: '',
        subject: '',
        text: ''
    })

    const writeName = (e) => {
        setMessage({
            ...message,
            name: e.target.value
        })
    }
    const writeSubject = (e) => {
        setMessage({
            ...message,
            subject: e.target.value
        })
    }
    const writeText = (e) => {
        setMessage({
            ...message,
            text: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(message)
        setMessage({
            name: '',
            subject: '',
            text: ''
        })

    }

    return (
        <form className="flex w-full justify-center pb-10" onSubmit={submitForm}>
            <div className="flex flex-col items-center border border-black">
                <div className="flex flex-col items-start mx-4 my-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="w-[320px] bg-white border border-black" value={message.name} onChange={writeName} />
                </div>
                <div className="flex flex-col items-start mx-4 my-2">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" className="w-[320px] bg-white border border-black" value={message.subject} onChange={writeSubject} />
                </div>
                <div className="flex flex-col items-start mx-4 my-2">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="message" className="textarea w-[1000px] max-w-xs resize bg-white border border-black" onChange={writeText} value={message.text}/>
                </div>
                <input type="submit" value="Send Message" className="btn bg-blue-700 text-white my-4 w-[320px]" />
            </div>
        </form>
    )
}

export default ContactForm