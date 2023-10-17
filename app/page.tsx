"use client"

/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
// library
import _ from "lodash"
// fonts
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const dataApproach = [
    {
      title: "Mindful Tutoring", 
      copy: "Taking into consideration how each student learns, adapting to each child's unique needs and progress",
    },
    {
      title: "Focused on Results", 
      copy: "Consulting with parents and teachers to set personalized goals prior to tutoring",
    },
    {
      title: "Learning Strategies", 
      copy: "Giving students the tools to help them learn and retain material in a relatable way",
    },
    {
      title: "Continual Reinforcement", 
      copy: "Refresh and deepen knowledge of learned skills and standards",
    },
  ]
  
  const dataTestimonials = [
    {
      name: "Stefy",
      image: "testimonial1.jpg", 
      testimonial: "Two of my three children were fortunate enough to have Mrs Lifang Viray as their fourth grade teacher. Her knowledge and teaching style was beyond what we had expected. She is able to create an environment where students enjoy learning without even knowing they're learning. Lifang incorporates humor and fun in her daily teaching routine, and is very knowledgable in all subjects. Because of her, my children were well prepared for middle school and excel in all subjects. I truly believe that Erin is dedicated to her job and the success of children. She will remain one of my kids' favorite teachers of all time!",
    },
    {
      name: "Li Juan",
      image: "testimonial2.jpg", 
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tristique dolor. Quisque at lacus eu arcu maximus mattis. Integer in quam sollicitudin ante condimentum lacinia vel sit amet nulla. Maecenas facilisis luctus est. Phasellus varius nunc ut nisl tempor, a vestibulum magna posuere. Aliquam lectus augue, dignissim ut arcu in, condimentum dapibus enim. Cras fermentum massa sed tortor eleifend, vitae varius arcu tristique. Sed eu nunc commodo, tincidunt diam in, ultrices erat. Nullam elementum odio in placerat aliquam. Etiam fermentum orci ligula, id consectetur odio tincidunt sit amet.",
    },
    {
      name: "Ja Ming Yu",
      image: "testimonial3.jpg", 
      testimonial: "In ornare, velit eu eleifend porttitor, sem diam sollicitudin nibh, vehicula fringilla nibh nulla quis risus. Vivamus pellentesque lectus enim, rutrum dapibus quam consectetur in. Duis ultricies egestas finibus. Pellentesque ac libero ut dolor sagittis tempus. Mauris vestibulum purus lectus, id lobortis velit condimentum eu. Quisque consectetur luctus pellentesque. Suspendisse eget blandit odio, non tempor ante. Nullam eget lacus varius, laoreet nisi eget, rhoncus eros. Vivamus aliquet pharetra massa. Cras eu venenatis lacus. Suspendisse consectetur nec nulla ac malesuada. Morbi tristique lobortis fermentum. Suspendisse hendrerit vitae leo id iaculis. Duis dictum fringilla ex quis malesuada. Integer turpis quam, rhoncus nec pellentesque vitae, pulvinar ac lacus.",
    },
  ]

  return (
    <>
      <section className="relative">
        <img src="/fangshi_hero.jpg" alt="FangShi hero" className="object-cover object-left-top w-full md:h-[600px]" />
        <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-0 md:w-8/12 lg:w-7/12 px-5 py-8 sm:text-right">
          <div className="sm:inline-block md:pr-5 lg:pr-10 text-center">
            <p className="text-lg font-semibold mb-2">THINK TOMORROW, ACT NOW</p>
            <h1 className={pacifico.className +" text-primary drop-shadow text-4xl sm:text-6xl lg:text-7xl"}>
              <span className="block whitespace-nowrap">Online Mandarin</span>Teacher
            </h1>
            <p className="inline-block bg-secondary text-lg text-white px-2 py-1 mt-4">FREE 30 minutes trial</p>
          </div>
        </div>
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <div className="text-center mb-8">
            <h2>THE APPROACH</h2>
            <p>SPECIALLY DESIGNED FOR YOUR CHILD</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {_.map(dataApproach, (data, index) => {
              return (
                <div key={index} className="bg-white p-4">
                  <p className="font-semibold uppercase mb-2">{data.title}</p>
                  <p>{data.copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="content">
          <div className="text-center mb-8">
            <h2>TESTIMONIALS</h2>
          </div>
          <div className="relative">
            <Swiper
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoHeight={true}
            >
              {_.map(dataTestimonials, (data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="md:flex md:gap-8">
                      <div className="md:w-2/12 max-md:flex max-md:justify-center mb-4"><img src={"/"+ data.image} alt="" className="rounded-full max-md:w-32" /></div>
                      <div className="md:w-10/12 w-full">
                        <p>{data.testimonial}</p>
                        <p className={pacifico.className +" text-primary text-3xl mt-3"}>- {data.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
