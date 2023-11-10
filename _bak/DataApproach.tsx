// helpers
import { DOMAIN_NAME } from "../helpers/Utils"

async function getData() {
  const res = await fetch(`${DOMAIN_NAME}/data/approach.json`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function DataApproach() {
  const data = await getData()

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item: { title: string; copy: string }, index: number) => {
          return (
            <div key={index} className="bg-white p-4">
              <p className="mb-2 font-semibold uppercase text-primary">
                {item.title}
              </p>
              <p>{item.copy}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
