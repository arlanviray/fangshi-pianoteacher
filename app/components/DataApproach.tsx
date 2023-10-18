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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-white p-4">
              <p className="font-semibold uppercase mb-2">{item.title}</p>
              <p>{item.copy}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
