"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function DataApproach({ queryParam, initialData }) {
  // const data = fetchDataSWR(queryParam, initialData)
  // const dataItems = data.data.items

  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const dataItems = data.items

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dataItems.map((item: any) => (
          <div key={item.sys.id} className="bg-white p-4">
            <p className="mb-2 font-semibold uppercase text-primary">
              {item.fields.title}
            </p>
            <div>{item.fields.info}</div>
          </div>
        ))}
      </div>
    </>
  )
}
