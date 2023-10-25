/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import PageTitle from "../components/PageTitle"
import ContactForm from "../components/ContactForm"

export const metadata: Metadata = {
  title: "FangShi | Contact | Online Mandarin",
  description: "Reach out to me at Online Mandarin Teacher for expert guidance and personalized assistance in your Mandarin language learning journey. Contact me now to embark on your path to learning Mandarin.",
}

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact" />

      <section>
        <div className="content">
          <h3 className="text-center">
            <span className="block text-xl font-semibold">Got a question?</span>
            If you need to know something else or can't find the answer to something, then ask me anything.
          </h3>
          <div className="max-w-lg pt-8 mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
