"use client"

import useSWR from "swr"

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function DataApproach() {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=homeTheApproach&order=sys.createdAt`,
    fetcher,
  )
  if (error) return <div className="text-center">Failed to load</div>
  if (!data) return <div className="text-center">Loading...</div>

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item: any) => (
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
