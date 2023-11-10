"use client"

import useSWR from "swr"

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function DataContact() {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&sys.id=7LQb1Ost5p8iyXyJFoK6km`,
    fetcher,
  )
  if (error) return <div className="text-center">Failed to load</div>
  if (!data) return <div className="text-center">Loading...</div>

  const datafield = data.items[0].fields

  return (
    <>
      <h3 className="text-center">
        <span className="block text-xl font-semibold">{datafield.header}</span>
        {datafield.subcopy}
      </h3>
    </>
  )
}
