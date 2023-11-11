"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function DataAbout({ queryParam, initialData }) {
  const data = fetchDataSWR(queryParam, initialData)

  const dataItem = data.data.items[0].fields

  return (
    <>
      <h3 className="text-4xl font-bold">{dataItem.header}</h3>
      <div className="multiparagraphs mt-4">
        {documentToReactComponents(dataItem.description)}
      </div>
    </>
  )
}
