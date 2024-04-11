import Badge from '../../../public/assets/badge.svg'
import Star from '../../../public/assets/star.svg'
import TimeCheck from '../../../public/assets/time-check.svg'
import Percentage from '../../../public/assets/percentage.svg'
import Image from 'next/image'
export function Features() {
  return (
    <section className='flex px-[72px] pt-[33px] '>
      <div className='flex flex-col md:flex-row gap-[30px] md:gap-[115px]'>
        <div className='flex items-center gap-5'>
          <Image src={Badge} alt='badge' />
          <span>Quality Perfect Guarantee</span>
        </div>
        <div className='flex items-center gap-5'>
          <Image src={Star} alt='star' />
          <span>4.9 Rating</span>
        </div>
        <div className='flex items-center gap-5'>
          <Image src={TimeCheck} alt='time-check' />
          <span>24/7 Delivery Support</span>
        </div>
        <div className='flex items-center gap-5'>
          <Image src={Percentage} alt='percentage' />
          <span>25% Off store-wide</span>
        </div>
      </div>
    </section>
  )
}
