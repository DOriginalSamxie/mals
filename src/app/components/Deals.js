'use client'
import { useState } from 'react'
// import { Card } from '@/shared/Card'
import { Card } from '@/app/shared/Card'
import Image from 'next/image'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Left from '../../../public/assets/left.svg'
import Right from '../../../public/assets/right.svg'
// import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

export function Deals() {
  // Using useClient hook to mark this component as a client component
  const [swiper, setSwiper] = useState(null)

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <section className='pt-[80px] px-4 lg:px-[64px] bg-[#FBF7F0] pb-[70.45px]'>
      <div>
        <div className='flex items-center justify-between pb-[48px]'>
          <h1 className='font-sans text-[#4B5563] font-bold text-[44px] leading-[96.2%] tracking-[-1px]'>
            Best Deals
          </h1>
          <div className='flex gap-3'>
            <button onClick={goPrev}>
              <Image src={Left} alt='arrow left' />
            </button>
            <button onClick={goNext}>
              <Image src={Right} alt='arrow right' />
            </button>
          </div>
        </div>
        <div className='overflow-hidden'>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Card
                title='Amana Ptac'
                subtitle='950'
                subtext='1200'
                description='Packaged Terminal Air Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title='Amana Ptac'
                subtitle='950'
                subtext='1200'
                description='Packaged Terminal Air Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title='Amana Ptac'
                subtitle='950'
                subtext='1200'
                description='Packaged Terminal Air Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title='Amana Ptac'
                subtitle='950'
                subtext='1200'
                description='Packaged Terminal Air Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title='Amana Ptac'
                subtitle='950'
                subtext='1200'
                description='Packaged Terminal Air Conditioner 9000 / 9000 BTU/h nominal capacity EER = 11.8 /'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
