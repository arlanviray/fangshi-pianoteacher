"use client"

import { useEffect, useState } from "react"

export default function DataAbout() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/about.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      {data.map((item, index) => {
        return <p key={index} className="mt-4">{item}</p>
      })}
    </>
  )
}
