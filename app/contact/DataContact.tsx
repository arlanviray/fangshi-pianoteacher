"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function DataContact({ queryParam, initialData }) {
  // const data = fetchDataSWR(queryParam, initialData)
  // const dataItem = data.data.items[0].fields

  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const dataItem = data.items[0].fields

  return (
    <>
      <h3 className="text-center">
        <span className="block text-xl font-semibold">{dataItem.header}</span>
        {dataItem.subcopy}
      </h3>
    </>
  )
}
