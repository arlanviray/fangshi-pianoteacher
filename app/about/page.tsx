/* eslint-disable @next/next/no-img-element */
import { fetchData } from "../helpers/FetchData"
import PageTitle from "../components/PageTitle"
import DataAbout from "./DataAbout"

import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "FangShi | About me | Online Mandarin",
  description:
    "Embark on an immersive journey of Mandarin learning, blending linguistic expertise with cultural enrichment. Discover a supportive environment tailored for your language exploration.",
}

const queryParam = "content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW"

export default async function About() {
  const data = await fetchData(queryParam)

  return (
    <>
      <PageTitle title="About me" />

      <section>
        <div className="content max-md:!pt-0">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="max-md:-mx-5 max-md:flex max-md:justify-center md:col-span-4">
              <img
                src="/fangshi_about.jpg"
                alt="FangShi about"
                className="w-full"
              />
            </div>
            <div className="md:col-span-8">
              <DataAbout initialData={data} queryParam={queryParam} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
