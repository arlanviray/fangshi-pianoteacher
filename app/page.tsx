/* eslint-disable @next/next/no-img-element */
import MetaData from "./components/MetaData"
import DataHeadings from "./home/DataHeadings"
import SectionName from "./home/SectionName"
import DataApproaches from "./home/DataApproaches"
import DataTestimonials from "./home/DataTestimonials"
import { fetchData } from "./helpers/FetchData"

// fonts
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

const queryHeadings = "content_type=homeHeadings&order=sys.createdAt"
const queryApproach = "content_type=homeApproaches&order=sys.createdAt"
const queryTestimonials = "content_type=homeTestimonials&order=sys.createdAt"

export default async function Home() {
  // const dataHeadings = await fetchData(queryHeadings)
  // const dataApproach = await fetchData(queryApproach)
  // const dataTestimonials = await fetchData(queryTestimonials)

  return (
    <>
      <section className="relative">
        <DataHeadings
          queryParam={queryHeadings}
          fontPacifico={pacifico.className}
        />
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <SectionName entryId={"5LUAXQQR9WAeEU3WfMpkws"} />

          {/* <DataApproaches initialData={dataApproach} queryParam={queryApproach} /> */}
          <DataApproaches queryParam={queryApproach} />
        </div>
      </section>

      <section>
        <div className="content">
          <SectionName entryId={"6L0S4XKfbEHnVZa3IHEHkK"} />

          <div className="relative">
            {/* <DataTestimonials
              initialData={dataTestimonials}
              queryParam={queryTestimonials}
              fontPacifico={pacifico.className}
            /> */}
            <DataTestimonials
              queryParam={queryTestimonials}
              fontPacifico={pacifico.className}
            />
          </div>
        </div>
      </section>
    </>
  )
}
