import Image from 'next/image'
import Call from '../../../public/assets/call.svg'
import Location from '../../../public/assets/location.svg'
import Twitter from '../../../public/assets/twitter.svg'
import Whatsapp from '../../../public/assets/whatsapp.svg'
import Instagram from '../../../public/assets/instagram.svg'
import Logo from '../../../public/assets/logo.svg'
import Search from '../../../public/assets/search.svg'
import Heart from '../../../public/assets/heart.svg'
import ShoppingCart from '../../../public/assets/shopping-cart.svg'
import Button from '@/app/shared/Button'

export function Navbar() {
  return (
    <header>
      <div className='bg-[#347566] text-[#fff] flex flex-col md:flex-row w-full items-center justify-between px-[20px] gap-4 md:gap-0 py-[14px] font-sans'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex gap-2'>
            <Image src={Call} alt='call icon' />
            <span>(907) 555-0101</span>
          </div>

          <div className='flex gap-2'>
            <Image src={Location} alt='location icon' />
            <span>8502 Preston Rd. Inglewood, Maine 98380</span>
          </div>
        </div>
        <div className='flex gap-3'>
          <Image src={Twitter} alt='twitter icon' />
          <Image src={Whatsapp} alt='whatsapp icon' />
          <Image src={Instagram} alt='instagram icon' />
        </div>
      </div>
      <nav className=' text-[#fff] flex w-full items-center justify-between px-[44px] py-[21px]'>
        <div className='flex items-center gap-[60px]'>
          <Image src={Logo} alt='logo' />
          <ul className='md:flex hidden md:flex-row gap-[45px] text-[#403E5A] font-bold text-base cursor-pointer font-sans '>
            <li className='transform transition-transform hover:scale-110 '>
              About us
            </li>
            <li className='transform transition-transform hover:scale-110 '>
              Services
            </li>
            <li className='transform transition-transform hover:scale-110 '>
              News
            </li>
            <li className='transform transition-transform hover:scale-110 '>
              Contact us
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-[45px]'>
          <div className='flex items-center gap-[40px] cursor-pointer'>
            <Image src={Search} alt='search' />
            <Image src={Heart} alt='heart' />
            <Image src={ShoppingCart} alt='shooping-cart' />
          </div>
          <Button
            text='Register'
            className='bg-[#F36C21] rounded-[25px] px-6 py-3'
          />
        </div>
      </nav>
    </header>
  )
}
