/* eslint-disable @next/next/no-img-element */
// fonts
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
})

// components
import DataApproach from "./components/DataApproach"
import DataTestimonials from "./components/DataTestimonials"

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src="/fangshi_hero.jpg" alt="FangShi hero" className="object-cover object-left-top w-full md:h-[600px]" />
        <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-0 md:w-8/12 lg:w-7/12 px-5 py-8 sm:text-right">
          <div className="sm:inline-block md:pr-5 lg:pr-10 text-center">
            <p className="text-lg font-semibold mb-2">THINK TOMORROW, ACT NOW</p>
            <h1 className={pacifico.className +" text-primary drop-shadow text-4xl xs:text-[2.7em] xs:leading-[1.1] sm:text-6xl lg:text-7xl"}>
              <span className="block whitespace-nowrap">Online Mandarin</span>Teacher
            </h1>
            <p className="inline-block bg-secondary text-lg text-white px-2 py-1 mt-4">FREE 30 minutes trial</p>
          </div>
        </div>
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <div className="text-center mb-8">
            <h2>THE APPROACH</h2>
            <p>SPECIALLY DESIGNED FOR YOUR CHILD</p>
          </div>
          <DataApproach />
        </div>
      </section>

      <section>
        <div className="content">
          <div className="text-center mb-8">
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
