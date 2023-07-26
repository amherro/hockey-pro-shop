import ContactForm from "../components/ContactForm"
import Header from "../components/Header"

const Contact = () => {
  return (
    <>
      <Header />
      <section className="text-center pb-10">
        <h2 className="font-bold text-3xl mt-10 pb-10">Contact</h2>
        <h3 className="text-2xl">Have Questions for Us?</h3>
        <h4 className="text-xl">Give us a call or send us a message!</h4>
      </section>
      <ContactForm />
    </>
  )
}

export default Contact