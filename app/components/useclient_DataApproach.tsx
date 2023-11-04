"use client"

import { useEffect, useState } from "react"

export default function DataApproach() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/approach.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-white p-4">
              <p className="mb-2 font-semibold uppercase text-primary">
                {item.title}
              </p>
              <p>{item.copy}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
