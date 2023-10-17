"use client"

/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src="/fangshi_hero.jpg" alt="FangShi hero" className="object-cover object-left-top w-full md:h-[600px]" />
        <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-0 lg:w-6/12 md:w-7/12 text-center px-5 py-8">
          <p className="text-lg font-semibold mb-2">THINK TOMORROW, ACT NOW</p>
          <h1 className={pacifico.className +" text-primary drop-shadow text-4xl xs:text-5xl sm:text-6xl lg:text-7xl"}>Online Chinese<br />Teacher</h1>
          <p className="inline-block bg-secondary text-lg text-white px-2 py-1 mt-4">FREE 30 minutes trial</p>
        </div>
      </section>

      <section className="bg-tertiary">
        <div className="content">
          <div className="text-center mb-8">
            <h2>THE APPROACH</h2>
            <p>SPECIALLY DESIGNED FOR YOUR CHILD</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4">
              <p className="font-semibold mb-2">MINDFUL TUTORING</p>
              <p>Taking into consideration how each student learns, adapting to each child's unique needs and progress</p>
            </div>
            <div className="bg-white p-4">
              <p className="font-semibold mb-2">FOCUSED ON RESULTS</p>
              <p>Consulting with parents and teachers to set personalized goals prior to tutoring</p>
            </div>
            <div className="bg-white p-4">
              <p className="font-semibold mb-2">LEARNING STRATEGIES</p>
              <p>Giving students the tools to help them learn and retain material in a relatable way</p>
            </div>
            <div className="bg-white p-4">
              <p className="font-semibold mb-2">CONTINUAL REINFORCEMENT</p>
              <p>Refresh and deepen knowledge of learned skills and standards</p>
            </div>
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
              <SwiperSlide>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tristique dolor. Quisque at lacus eu arcu maximus mattis. Integer in quam sollicitudin ante condimentum lacinia vel sit amet nulla. Maecenas facilisis luctus est. Phasellus varius nunc ut nisl tempor, a vestibulum magna posuere. Aliquam lectus augue, dignissim ut arcu in, condimentum dapibus enim. Cras fermentum massa sed tortor eleifend, vitae varius arcu tristique. Sed eu nunc commodo, tincidunt diam in, ultrices erat. Nullam elementum odio in placerat aliquam. Etiam fermentum orci ligula, id consectetur odio tincidunt sit amet.</SwiperSlide>
              <SwiperSlide>In ornare, velit eu eleifend porttitor, sem diam sollicitudin nibh, vehicula fringilla nibh nulla quis risus. Vivamus pellentesque lectus enim, rutrum dapibus quam consectetur in. Duis ultricies egestas finibus. Pellentesque ac libero ut dolor sagittis tempus. Mauris vestibulum purus lectus, id lobortis velit condimentum eu. Quisque consectetur luctus pellentesque. Suspendisse eget blandit odio, non tempor ante. Nullam eget lacus varius, laoreet nisi eget, rhoncus eros. Vivamus aliquet pharetra massa. Cras eu venenatis lacus. Suspendisse consectetur nec nulla ac malesuada. Morbi tristique lobortis fermentum. Suspendisse hendrerit vitae leo id iaculis. Duis dictum fringilla ex quis malesuada. Integer turpis quam, rhoncus nec pellentesque vitae, pulvinar ac lacus.</SwiperSlide>
              <SwiperSlide>Aliquam eros lacus, ornare eget tristique eget, consequat in enim. Morbi consectetur tincidunt velit laoreet fringilla. Sed vel pellentesque nulla, eu rutrum nisi. Donec a tortor urna. Vestibulum leo lacus, tincidunt et euismod in, dignissim vitae sem. Morbi nec tempus metus. Curabitur non tincidunt eros. Etiam sed lectus quis nulla consectetur mollis. Cras finibus luctus augue, eu bibendum nisi ornare eu. Suspendisse sed eleifend arcu. Etiam et purus a magna porttitor bibendum at eu metus. Sed metus lorem, porttitor ac metus at, ullamcorper congue diam.</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
