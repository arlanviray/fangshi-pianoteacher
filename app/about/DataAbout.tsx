/* eslint-disable @next/next/no-img-element */
"use client"

import MetaData from "../components/MetaData"
import { fetchDataSWR } from "../helpers/FetchDataSWR"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function DataAbout({ queryParam, initialData }) {
  // const data = fetchDataSWR(queryParam, initialData)
  // const dataItem = data.data.items[0].fields

  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const { metaTitle, metaDescription, header, description } =
    data.items[0].fields

  return (
    <>
      <MetaData title={metaTitle} description={metaDescription} />

      <div className="max-md:-mx-5 max-md:flex max-md:justify-center md:col-span-4">
        <img
          src={data.includes.Asset[0].fields.file.url}
          alt="FangShi about"
          className="w-full"
        />
      </div>
      <div className="md:col-span-8">
        <h3 className="text-4xl font-bold">{header}</h3>
        <div className="multiparagraphs mt-4">
          {documentToReactComponents(description)}
        </div>
      </div>
    </>
  )
}
