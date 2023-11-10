import PageTitle from "../components/PageTitle"
import DataContact from "./DataContact"
import FormContact from "./FormContact"

import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "FangShi | Contact | Online Mandarin",
  description:
    "Reach out to me at Online Mandarin Teacher for expert guidance and personalized assistance in your Mandarin language learning journey. Contact me now to embark on your path to learning Mandarin.",
}

export default async function Contact() {
  return (
    <>
      <PageTitle title="Contact" />

      <section>
        <div className="content">
          <DataContact />
          <div className="mx-auto max-w-lg pt-8">
            <FormContact />
          </div>
        </div>
      </section>
    </>
  )
}
