const ContactForm = () => {
  return (
    <form className="flex flex-col items-center border border-black mx-96 py-10">
        <div className="flex flex-col items-start">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="w-[320px] bg-white border border-black" />
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="name">Subject</label>
            <input type="text" name="name" id="name" className="w-[320px] bg-white border border-black" />
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="name">Message</label>
            <textarea type="text" name="name" id="name" className="textarea w-[1000px] max-w-xs resize bg-white border border-black" />
        </div>

    </form>
  )
}

export default ContactForm