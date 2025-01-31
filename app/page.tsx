/* eslint-disable @next/next/no-img-element */
import { fetchData } from "./helpers/FetchData"
import DataApproach from "./home/DataApproach"
import DataHeadings from "./home/DataHeadings"
import DataTestimonials from "./home/DataTestimonials"

// fonts
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

const queryHeadings = "content_type=homeHeadings&order=sys.createdAt"
const queryApproach = "content_type=homeTheApproach&order=sys.createdAt"
const queryTestimonials = "content_type=homeTestimonials&order=sys.createdAt"

export default async function Home() {
  const dataApproach = await fetchData(queryApproach)
  const dataTestimonials = await fetchData(queryTestimonials)

  return (
    <>
      <section className="relative">
        <img
          src="/fangshi_hero.jpg"
          alt="FangShi hero"
          className="w-full object-cover object-left-top md:h-[600px]"
        />
        <DataHeadings
          queryParam={queryHeadings}
          fontPacifico={pacifico.className}
        />
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <div className="mb-8 text-center">
            <h2>THE APPROACH</h2>
            <p>SPECIALLY DESIGNED FOR YOU</p>
          </div>
          <DataApproach initialData={dataApproach} queryParam={queryApproach} />
        </div>
      </section>

      <section>
        <div className="content">
          <div className="mb-8 text-center">
            <h2>TESTIMONIALS</h2>
          </div>
          <div className="relative">
            <DataTestimonials
              initialData={dataTestimonials}
              queryParam={queryTestimonials}
              fontPacifico={pacifico.className}
            />
          </div>
        </div>
      </section>
    </>
  )
}
