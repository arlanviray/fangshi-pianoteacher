"use client"

/* eslint-disable @next/next/no-img-element */
// import { useEffect, useState } from "react"
// libraries
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function DataTestimonials({ fontPacifico }) {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("/data/testimonials.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setData(data)
  //     })
  // }, [])

  const data = [
    {
      include: true,
      name: "Li Juan",
      image: "testimonial2.jpg",
      testimonial:
        "I am thrilled with the progress my child has made in Mandarin with Lifang. The program's child-friendly approach, including colorful visuals, interactive lessons, and engaging activities, has made learning Mandarin an enjoyable experience for my child. Lifang's dedication to creating a positive and encouraging learning environment has played a crucial role in my child's language development. I highly recommend Lifang to any parent looking for a well-structured and engaging Mandarin learning program for their children.",
    },
    {
      include: true,
      name: "Vee",
      image: "testimonial1.jpg",
      testimonial:
        "Lifang has made learning Mandarin a truly enriching experience. The innovative teaching methods and the use of multimedia resources have made the lessons engaging and interactive. Lifang's dedication to ensuring my understanding and progress has been commendable. Thanks to Lifang, I now feel confident in my ability to communicate in Mandarin, and I look forward to further expanding my language skills with their guidance.",
    },
    {
      include: false,
      name: "Ja Ming",
      image: "testimonial3.jpg",
      testimonial:
        "Lifang has been instrumental in fostering my child's love for Mandarin. The carefully designed curriculum and the use of interactive games and activities have kept my child engaged and excited about learning the language. Lifang's patience and encouragement have created a supportive atmosphere that has boosted my child's confidence in speaking and understanding Mandarin. I am impressed with the progress my child has made and am grateful for the nurturing environment provided by Lifang.",
    },
  ]

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
        {data.map(
          (
            item: { include: boolean; testimonial: string; name: string },
            index: number,
          ) => {
            if (item.include) {
              return (
                <SwiperSlide key={index}>
                  {/* <div className="grid gap-4 md:gap-8 md:grid-cols-12">
                  <div className="md:col-span-2 max-md:flex max-md:justify-center">
                    <img src={"/"+ item.image} alt="" className="rounded-full max-md:w-32" />
                  </div>
                  <div className="md:col-span-10">
                    <p>&quot;{item.testimonial}&quot;</p>
                    <p className={fontPacifico +" text-primary text-3xl mt-3"}>- {item.name}</p>
                  </div>
                </div> */}
                  <div className="mx-auto max-w-3xl">
                    <p>&quot;{item.testimonial}&quot;</p>
                    <p className={fontPacifico + " mt-3 text-3xl text-primary"}>
                      - {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              )
            }
          },
        )}
      </Swiper>
    </>
  )
}
