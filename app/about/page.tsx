/* eslint-disable @next/next/no-img-element */
import { fetchData } from "../helpers/FetchData"
import PageTitle from "../components/PageTitle"
import DataAbout from "./DataAbout"

const queryParam = "content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW"

export default async function About() {
  const data = await fetchData(queryParam)

  return (
    <>
      <PageTitle title="About me" />

      <section>
        <div className="content max-md:!pt-0">
          <div className="grid gap-8 md:grid-cols-12">
            <DataAbout initialData={data} queryParam={queryParam} />
          </div>
        </div>
      </section>
    </>
  )
}
