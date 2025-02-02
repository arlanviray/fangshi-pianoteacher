"use client"

import MetaData from "../components/MetaData"
import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function DataContact({ queryParam, initialData }) {
  // const data = fetchDataSWR(queryParam, initialData)
  // const dataItem = data.data.items[0].fields

  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const { metaTitle, metaDescription, header, subCopy } = data.items[0].fields

  return (
    <>
      <MetaData title={metaTitle} description={metaDescription} />

      <h3 className="text-center">
        <span className="block text-xl font-semibold">{header}</span>
        {subCopy}
      </h3>
    </>
  )
}
