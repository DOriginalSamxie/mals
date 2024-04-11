'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import Left from '../../../public/assets/left-arrow-white.svg'
import Right from '../../../public/assets/right-arrow-white.svg'
import { TestimonialCard } from '../shared/TestimonialCard'

SwiperCore.use([Navigation])

export function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      title: 'Best on the market',

      description:
        'Nunc elit metus, ultrices eu eleifend interdum, sodales eget risus. Integer hendrerit, libero nec dapibus elementum, mi nunc posuere enim, non hendrerit eros arcu eget augue. Suspendisse faucibus ante leo, at porta lectus ornare eu. Mauris a libero eu massa aliquet bibendum. ',
      footertext: 'Worldtraveler',
    },
    {
      id: 2,
      title: 'Best on the market',

      description:
        'Nunc elit metus, ultrices eu eleifend interdum, sodales eget risus. Integer hendrerit, libero nec dapibus elementum, mi nunc posuere enim, non hendrerit eros arcu eget augue. Suspendisse faucibus ante leo, at porta lectus ornare eu. Mauris a libero eu massa aliquet bibendum. ',
      footertext: 'Worldtraveler',
    },
    {
      id: 3,
      title: 'Best on the market',

      description:
        'Nunc elit metus, ultrices eu eleifend interdum, sodales eget risus. Integer hendrerit, libero nec dapibus elementum, mi nunc posuere enim, non hendrerit eros arcu eget augue. Suspendisse faucibus ante leo, at porta lectus ornare eu. Mauris a libero eu massa aliquet bibendum.  ',
      footertext: 'Worldtraveler',
    },
    {
      id: 4,
      title: 'Best on the market',

      description:
        'Nunc elit metus, ultrices eu eleifend interdum, sodales eget risus. Integer hendrerit, libero nec dapibus elementum, mi nunc posuere enim, non hendrerit eros arcu eget augue. Suspendisse faucibus ante leo, at porta lectus ornare eu. Mauris a libero eu massa aliquet bibendum. ',
      footertext: 'Worldtraveler',
    },
  ]

  return (
    <section className='mt-[104.45px] bg-[#669688]'>
      <div className=''>
        <div className='flex flex-col md:flex-row items-center justify-between overflow-hidden'>
          <div className='md:w-[30%] py-[148.5px] space-y-8 px-[44px]'>
            <h2 className='font-sans font-bold text-[44px] leading-[96.2%] tracking-[-1px] text-[#fff]'>
              What Our Customers are Saying
            </h2>
            <p className='font-sans font-medium text-base tracking-[-1%] text-[#fff]'>
              Twimva Auto Lakkent experts step in when things come up.
            </p>
            <div className='flex items-center space-x-4'>
              <button onClick={goPrev}>
                <Image src={Left} alt='left' />
              </button>
              <button onClick={goNext}>
                <Image
                  className='filter: grayscale(100)'
                  src={Right}
                  alt='right'
                />
              </button>
            </div>
          </div>

          <div className=' md:w-[70%] mt-8 md:mt-0'>
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={150}
              slidesPerView={3}
              navigation
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={testimonial.id}
                  style={{
                    // Adjust height as needed
                    overflow:
                      index === testimonials.length - 1 ? 'hidden' : 'visible',
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
