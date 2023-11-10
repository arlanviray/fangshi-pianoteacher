"use client"

import useSWR from "swr"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function DataTestimonials({ fontPacifico }) {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=homeTestimonials&order=sys.createdAt`,
    fetcher,
  )
  if (error) return <div className="text-center">Failed to load</div>
  if (!data) return <div className="text-center">Loading...</div>

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
        {data.items.map((item: any) => (
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
