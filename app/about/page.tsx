/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import PageTitle from "../components/PageTitle"
import DataAbout from "../components/DataAbout"

export const metadata: Metadata = {
  title: "FangShi | About me",
  description: "",
}

export default function About() {
  return (
    <>
      <PageTitle title="About me" />

      <section>
        <div className="content max-md:!pt-0">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4 max-md:flex max-md:justify-center max-md:-mx-5">
              <img src="/fangshi_about.jpg" alt="FangShi about" className="w-full" />
            </div>
            <div className="md:col-span-8">
              <h3 className="text-4xl font-bold">- Lifang's story:</h3>
              <DataAbout />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
