import Button from '@/app/shared/Button'
import Image from 'next/image'
import AirConditioner from '../../../public/assets/air-conditioner.png'
export function Hero() {
  return (
    <section className='bg-[#EFE9DF] mx-[44px] rounded-[16px]'>
      <div className='pt-[82px] px-[79px] flex'>
        <div className='flex-1'>
          <h3 className='font-sans text-[12px] pb-2'>
            Ends on Monday 29th of May 2024, 12:00 PM BST
          </h3>
          <span className='font-sans bg-[#B2B2B2]/20 p-1 rounded-[5.33px] mr-1'>
            2 DAYS{' '}
          </span>{' '}
          :{' '}
          <span className='font-sans bg-[#B2B2B2]/20 p-1 rounded-[5.33px] mr-1'>
            23 HOURS{' '}
          </span>{' '}
          :{' '}
          <span className='font-sans bg-[#B2B2B2]/20 p-1 rounded-[5.33px] mr-1'>
            05 MIN{' '}
          </span>{' '}
          <div className='relative pt-[80px] -z-[-2]'>
            <p className='font-poppins font-bold bg-[#FEDC32] absolute transform -skew-y-6 top-12 rounded-md px-2 py-2 -z-[1]'>
              UP TO 90% OFF ON PTAC’s
            </p>
            <h2 className='text-[77px] font-bold leading-[96.2%] tracking-[-1.3px] text-[#4b5563]'>
              PTAC Sale Now!
            </h2>
            <p className='font-montserrat font-medium text-[24px] leading-[37px] tracking-[-1%] text-[#4B5563]'>
              Upgrade your cooling and save big on select PTAC units
            </p>
          </div>
          <Button
            text='Shop Now'
            className='bg-[#F36C21] rounded-[25px] px-6 py-3 text-[#fff]'
          />
          <div>
            {/* Rating component */}
            <p>
              “We ordered PRAC AC to which turned out amazing! The quality was
              fantastic”
            </p>
            <span>Mohamad Alkabbani</span>
          </div>
        </div>
        {/* <div>
          <Image src={AirConditioner} alt='airconditioner' />
        </div> */}
      </div>
    </section>
  )
}
