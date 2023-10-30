"use client"

import { useState } from "react"
// libraries
import axios from "axios"

export default function ContactForm() {
  const [errName, setErrName] = useState("")
  const [errEmail, setErrEmail] = useState("")
  const [errMessage, setErrMessage] = useState("")
  const [success, setSuccess] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const submittedData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    if (submittedData.name.toString().trim().length === 0) {
      setErrName("Name field is required.")
      return false
    } else {
      setErrName("")
    }

    if (submittedData.email.toString().trim().length === 0) {
      setErrEmail("Email field is required.")
      return false
    } else {
      setErrEmail("")
    }

    if (submittedData.message.toString().trim().length === 0) {
      setErrMessage("Message field is required.")
      return false
    } else {
      setErrMessage("")
    }

    setSubmitting(true)

    try {
      const postUrl =
        location.hostname === "localhost"
          ? "https://lifang.creativewiz.net/ContactEnquiry.php"
          : "/ContactEnquiry.php"
      const response = await axios.post(postUrl, submittedData)
      setSuccess(response.data.message)
      // return response.data
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <>
      {(() => {
        if (success.length === 0) {
          return (
            <form className="contactform" onSubmit={handleSubmit}>
              <div className="pb-3">
                <input type="text" name="name" id="name" placeholder="NAME" />
                <p className="errfield">{errName}</p>
              </div>
              <div className="pb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                />
                <p className="errfield">{errEmail}</p>
              </div>
              <div className="pb-3">
                <textarea
                  name="message"
                  id="message"
                  placeholder="MESSAGE"
                ></textarea>
                <p className="errfield">{errMessage}</p>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="rounded-xl border-2 border-secondary bg-tertiary px-4 py-2 text-xl font-bold"
                >
                  {submitting ? "Submitting..." : "SUBMIT"}
                </button>
              </div>
            </form>
          )
        } else {
          return (
            <p
              className="text-center text-xl font-semibold text-secondary"
              dangerouslySetInnerHTML={{ __html: success }}
            ></p>
          )
        }
      })()}
    </>
  )
}
