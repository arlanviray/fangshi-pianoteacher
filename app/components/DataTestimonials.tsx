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
              <div className="md:flex md:gap-8">
                <div className="md:w-2/12 max-md:flex max-md:justify-center mb-4"><img src={"/"+ item.image} alt="" className="rounded-full max-md:w-32" /></div>
                <div className="md:w-10/12 w-full">
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
