import Image from 'next/image'
import Logo from '../../../public/assets/logo.svg'
import Facebook from '../../../public/assets/facebook.svg'
import Twitter from '../../../public/assets/twitter-bird.svg'
import Youtube from '../../../public/assets/youtube.svg'
import Amex from '../../../public/assets/amex.svg'
import ApplePay from '../../../public/assets/apple-pay.svg'
import MasterCard from '../../../public/assets/master-card.svg'
import MasterCardTwo from '../../../public/assets/master-card-two.svg'
import Paypal from '../../../public/assets/paypal.svg'
import Visa from '../../../public/assets/visa.svg'

export function Footer() {
  return (
    <footer className='bg-[#FBF7F0] '>
      <div className='px-[20px]'>
        <div className='bg-white px-[40px] pt-[40px] pb-[60px] rounded-[12px]'>
          <div className='flex flex-col md:flex-row justify-between '>
            <div className='flex flex-col justify-between gap-[97px]'>
              <Image src={Logo} alt='logo' />
              <p className='text-[12px] font-sans font-normal leading-[160%] text-[#403E5A]'>
                © 2024 CGS, Inc.
              </p>
            </div>

            <div className='flex flex-col md:flex-row md:gap-[143px]'>
              <div>
                <h3 className='font-sans font-semibold text-[12px] text-[#403E5A] pb-[20px]'>
                  INFO
                </h3>
                <ul className='space-y-[20px]'>
                  <li className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    Home
                  </li>
                  <li className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    About Us
                  </li>
                  <li className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    Contact Us
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-sans font-semibold text-[12px] text-[#403E5A] pb-[20px]'>
                  PRODUCTS
                </h3>
                <ul>
                  <li className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    Amana Ptac
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='font-sans font-semibold text-[12px] text-[#403E5A] pb-[20px]'>
                  CONTACT US
                </h3>

                <div className='flex flex-col space-y-[20px]'>
                  <p className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    14222 Reed Hartman Highway,
                    <br /> Cincinnati, Ohio 2532
                  </p>
                  <p className='font-sans text-[12px] font-medium text-[#403E5A]'>
                    (252) 745-9019
                  </p>
                  <div className='flex gap-2'>
                    <Image
                      className='bg-[#F1EFEC] border rounded-[18px] p-1 w-[24px] '
                      src={Facebook}
                      alt='facebook'
                    />
                    <Image
                      className='bg-[#F1EFEC] border rounded-[18px] p-1 w-[24px] '
                      src={Twitter}
                      alt='twitter'
                    />
                    <Image
                      className='bg-[#F1EFEC] border rounded-[18px] p-1 w-[24px] '
                      src={Youtube}
                      alt='youtube'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white mt-2 rounded-[12px]'>
          <div className='flex justify-between py-6 px-4'>
            <p className='font-sans text-[12px] leading-[160%]'>© CGS</p>
            <div className='flex gap-[2px]'>
              <Image src={Amex} alt='amex' />
              <Image src={ApplePay} alt='apple-pay' />
              <Image src={MasterCard} alt='master-card' />
              <Image src={MasterCardTwo} alt='master-card-two' />
              <Image src={Paypal} alt='paypal' />
              <Image src={Visa} alt='visa' />
            </div>
            <p className='font-sans text-[12px] font-normal leading-[160%] text-[#403E5A]'>
              Lorem Ipsum Donec
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
