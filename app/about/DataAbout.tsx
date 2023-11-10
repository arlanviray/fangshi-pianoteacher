"use client"

import useSWR from "swr"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function DataAbout() {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&sys.id=5gqeuG7ZitiSN7RjWIWrQW`,
    fetcher,
  )
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const datafield = data.items[0].fields

  return (
    <>
      <h3 className="text-4xl font-bold">{datafield.header}</h3>
      <div className="multiparagraphs mt-4">
        {documentToReactComponents(datafield.description)}
      </div>
    </>
  )
}
