"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function DataHeadings({ queryParam, fontPacifico }) {
  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const { heading, promo, subHeading, subCopy } = data.items[0].fields

  return (
    <>
      <div className="px-5 py-8 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 lg:w-7/12">
        <div className="text-center sm:inline-block">
          {subHeading && (
            <p className="mb-2 text-lg font-bold uppercase sm:inline-block sm:px-2 sm:py-1 sm:backdrop-blur-sm">
              {subHeading}
            </p>
          )}

          <h1
            className={
              fontPacifico.className +
              " text-4xl text-primary drop-shadow xs:text-[2.7em] xs:leading-[1.1] sm:text-6xl lg:text-7xl"
            }
          >
            {heading}
          </h1>

          {subCopy && (
            <p className="mt-4 text-lg sm:mx-auto sm:max-w-xl sm:drop-shadow">
              {subCopy}
            </p>
          )}

          {promo && (
            <p className="mt-4 inline-block bg-secondary px-2 py-1 text-lg text-white">
              {promo}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
