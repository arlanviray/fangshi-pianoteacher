/* eslint-disable @next/next/no-img-element */
"use client"

import MetaData from "../components/MetaData"
import { fetchDataSWR } from "../helpers/FetchDataSWR"

export default function DataHeadings({ queryParam, fontPacifico }) {
  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const {
    metaTitle,
    metaDescription,
    subHeading,
    mainTitle,
    subCopy,
    promoBox,
  } = data.items[0].fields

  return (
    <>
      <MetaData title={metaTitle} description={metaDescription} />

      <img
        src={data.includes.Asset[0].fields.file.url}
        alt="FangShi"
        className="w-full object-cover object-bottom md:h-[600px]"
      />

      <div className="p-8 sm:absolute sm:left-1/2 sm:top-1/2 sm:min-w-[600px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg sm:bg-light sm:px-5 sm:drop-shadow-xl">
        <div className="text-center">
          {subHeading && (
            <p className="mb-2 text-lg font-bold uppercase">{subHeading}</p>
          )}

          <h1
            className={
              fontPacifico.className +
              " text-5xl text-primary drop-shadow-md sm:text-6xl lg:text-7xl"
            }
          >
            {mainTitle}
          </h1>

          {subCopy && <p className="mt-4 text-lg">{subCopy}</p>}

          {promoBox && (
            <p className="mt-4 inline-block bg-secondary px-2 py-1 text-lg text-white">
              {promoBox}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
