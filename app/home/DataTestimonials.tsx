"use client"

import { fetchDataSWR } from "../helpers/FetchDataSWR"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

type Props = {
  queryParam: string
  initialData?: any
  fontPacifico: any
}

export default function DataTestimonials({
  queryParam,
  initialData,
  fontPacifico,
}: Props) {
  // const data = fetchDataSWR(queryParam, initialData)
  // const dataItems = data.data.items

  const { data, error, isLoading } = fetchDataSWR(queryParam)
  if (!data) return

  const dataItems = data.items

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoHeight={true}
      >
        {dataItems.map((item: any) => (
          <SwiperSlide key={item.sys.id}>
            <div className="mx-auto max-w-3xl">
              <div className="quoteparagraph">
                {documentToReactComponents(item.fields.description)}
              </div>
              <p className={fontPacifico + " mt-3 text-3xl text-primary"}>
                - {item.fields.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
