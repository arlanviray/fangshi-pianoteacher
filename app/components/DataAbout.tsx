// helpers
import { DOMAIN_NAME } from "../helpers/Utils"

async function getData() {
  const res = await fetch(`${DOMAIN_NAME}/data/about.json`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function DataAbout() {
  const data = await getData()

  return (
    <>
      {data.map((item: string, index: number) => {
        return (
          <p key={index} className="mt-4">
            {item}
          </p>
        )
      })}
    </>
  )
}
