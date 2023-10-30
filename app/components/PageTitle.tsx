// fonts
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

export default function PageTitle({ title }) {
  return (
    <>
      <section className="bg-tertiary">
        <div className="content">
          <h2
            className={pacifico.className + " text-center text-6xl text-white"}
          >
            {title}
          </h2>
        </div>
      </section>
    </>
  )
}
