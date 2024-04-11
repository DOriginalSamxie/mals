import Image from 'next/image'
import StarGroup from '../../../public/assets/star-group.svg'
export function TestimonialCard({ testimonial }) {
  const { title, description, footertext } = testimonial

  return (
    <div className='max-w-[380px] md:w-[320px] max-h-[380px] bg-white rounded-[20px] shadow-md p-6'>
      <div className='flex justify-between'>
        <Image src={StarGroup} alt='star' />
        <p className='font-sans font-normal text-[12px] leading-[26px] text-[#403E5A]'>
          2 days ago
        </p>
      </div>
      <p className='font-sans font-bold text-base tracking-[-0.5px] text-[#403E5A] py-3'>
        {title}
      </p>
      <p className='font-sans font-normal text-base tracking-[-1%] text-[#403E5A] text-left'>
        {description}
      </p>
      <hr className='my-3' />
      <p className='font-sans font-semibold text-[14px] leading-[22px] text-[#403E5A]'>
        {footertext}
      </p>
    </div>
  )
}
