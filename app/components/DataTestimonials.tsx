"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
// libraries
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function DataTestimonials({ fontPacifico }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data)
      })
  }, [])

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
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid gap-4 md:gap-8 md:grid-cols-12">
                <div className="md:col-span-2 max-md:flex max-md:justify-center">
                  <img src={"/"+ item.image} alt="" className="rounded-full max-md:w-32" />
                </div>
                <div className="md:col-span-10">
                  <p>{item.testimonial}</p>
                  <p className={fontPacifico +" text-primary text-3xl mt-3"}>- {item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
