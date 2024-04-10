'use client'
import { useState } from 'react'
import Open from '../../../public/assets/open-accordion.svg'
import Close from '../../../public/assets/close-accordion.svg'
import Image from 'next/image'

export function FAQ() {
  return (
    <section className='bg-[#FBF7F0]'>
      <div className='pt-[120px]'>
        <h1 className='font-sans text-[#403E5A]  text-center font-bold text-[44px] leading-[96.2%] tracking-[-1px]'>
          Frequently Asked Questions
        </h1>
      </div>

      <div className='pt-[65px] pb-[120px] px-[325px]  mx-auto'>
        <Accordion
          title='How do i install AC?'
          content='Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.'
        />
        <Accordion
          title='Lorem ipsum dolor sit amet consectetur. Nisi orci luctus quis congue.
        Auctor lorem convallis sit quam justo proin quis nunc. Eu morbi
        pulvinar.'
          content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio vero doloribus blanditiis nemo labore impedit repudiandae atque earum illum!'
        />

        <Accordion
          title='What is Lorem Ipsum?'
          content='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <Accordion
          title='Why do we use it?'
          content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        />
      </div>

      {/* Add more Accordion components as needed */}
    </section>
  )
}

export default FAQ
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`border rounded-[16px] mb-4 ${isOpen ? 'bg-[#fff]' : ''}`}>
      <div
        className='flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ease-in-out '
        onClick={toggleAccordion}
      >
        <h2 className='font-sans font-bold text-base tracking-[-0.5px] text-[#4B5563]'>
          {title}
        </h2>

        {isOpen ? (
          <Image src={Close} alt='Close Icon' className='' />
        ) : (
          <Image src={Open} alt='Open Icon' className='' />
        )}
      </div>
      <hr className='max-w-[542px]  flex justify-center items-center mx-auto' />
      {isOpen && (
        <div className='p-4 bg-[#fff] rounded-[16px]'>
          <p className='font-sans font-medium text-base tracking-[-1%] text-[#4B5563]'>
            {content}
          </p>
        </div>
      )}
    </div>
  )
}
