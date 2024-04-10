import Image from 'next/image'
import Button from './Button'
import AirConditioner from '../../../public/assets/air-conditioner.png'
import IconWishlist from '../../../public/assets/icon-wishlist.svg'
import ShoppingIcon from '../../../public/assets/shopping-cart-line.svg'
import Star from '../../../public/assets/icon-star.svg'

export function Card({
  image,
  ratings,
  title,
  subtitle,
  subtext,
  price,

  description,
}) {
  return (
    <div className='bg-[#fff] border rounded-[12px] p-4 '>
      <div className='relative bg-[#f6f6f6] rounded-[8px] h-[220px]'>
        <div className=' rounded-[100px] p-2 border border-[#E2E3E6] absolute top-[10px] right-[14px]'>
          <Image
            className='cursor-pointer'
            src={IconWishlist}
            alt='icon-wishlist'
          />
        </div>
        <Image
          src={AirConditioner}
          alt='air condtioner'
          className='pt-3 flex w-full justify-center '
        />
      </div>
      <div className='py-3'>
        <div className='font-montserrat font-medium leading-[30px] text-[18px] tracking-[0.2px] text-[#4B5563]'>
          {title}
        </div>
        <div className='flex items-center justify-between py-[10px]'>
          <p className='font-montserrat font-bold text-[20.8px] leading-[20.8px] tracking-[0.14px] text-[#4B5563] '>
            ${subtitle}{' '}
            <span className='line-through font-bold text-[13.87px] tracking-[0.14px] text-[#6B7280]/30'>
              {subtext}
            </span>
          </p>
          <div className='flex'>
            <p className='font-montserrat font-normal text-[14px]text-[#737373] tracking-[0.2px] leading-5'>
              4.7
            </p>
            <div className='flex'>
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
              <Image src={Star} alt='star' />
            </div>
          </div>
        </div>

        <p className='font-montserrat font-normal text-[14px]text-[#737373] tracking-[0.2px] leading-5'>
          {description}
        </p>
      </div>
      <div className=''>
        <Button
          icon={<Image src={ShoppingIcon} alt='shopping-icon' />}
          className='w-full bg-[#F36C21] hover:bg-[#f36c21]/80 rounded-[25px]  py-[7px] text-[#fff] text-base'
          text='Add to cart'
        />
      </div>
    </div>
  )
}
