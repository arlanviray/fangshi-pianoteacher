/* eslint-disable @next/next/no-img-element */
// fonts
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

// components
import DataApproach from "./components/DataApproach"
import DataTestimonials from "./components/DataTestimonials"

export default function Home() {
  return (
    <>
      <section className="relative">
        <img
          src="/fangshi_hero.jpg"
          alt="FangShi hero"
          className="w-full object-cover object-left-top md:h-[600px]"
        />
        <div className="px-5 py-8 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 lg:w-7/12">
          <div className="text-center sm:inline-block">
            <p className="mb-2 text-lg font-bold uppercase sm:inline-block sm:px-2 sm:py-1 sm:backdrop-blur-sm">
              Empower Your Fluency
            </p>
            <h1
              className={
                pacifico.className +
                " text-4xl text-primary drop-shadow xs:text-[2.7em] xs:leading-[1.1] sm:text-6xl lg:text-7xl"
              }
            >
              <span className="block whitespace-nowrap">Online Mandarin</span>
              Teacher
            </h1>
            <p className="mt-4 text-lg sm:mx-auto sm:max-w-xl sm:drop-shadow">
              Unveil the beauty of Mandarin with personalized online lessons,
              transforming language learning into a cultural odyssey.
            </p>
            <p className="mt-4 inline-block bg-secondary px-2 py-1 text-lg text-white">
              FREE 30 minutes trial
            </p>
          </div>
        </div>
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <div className="mb-8 text-center">
            <h2>THE APPROACH</h2>
            <p>SPECIALLY DESIGNED FOR YOU</p>
          </div>
          <DataApproach />
        </div>
      </section>

      <section>
        <div className="content">
          <div className="mb-8 text-center">
            <h2>TESTIMONIALS</h2>
          </div>
          <div className="relative">
            <DataTestimonials fontPacifico={pacifico.className} />
          </div>
        </div>
      </section>
    </>
  )
}
