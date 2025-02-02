"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function SectionName({ entryId }) {
  const { data, error, isLoading } = fetchDataSWR(
    `content_type=homeSectionName&sys.id=${entryId}`,
  )
  if (!data) return

  const { name, subCopy } = data.items[0].fields

  return (
    <div className="mb-8 text-center">
      <h2 className="uppercase">{name}</h2>
      {subCopy && <p className="uppercase">{subCopy}</p>}
    </div>
  )
}
