import Button from '../shared/Button'

export function Order() {
  return (
    <section className='bg-[#F37A36] mx-auto text-center'>
      <h2 className='pt-[41px] font-sans text-[44px] leading-[96.2%] tracking-[-1px] text-[#fff] font-bold'>
        Your Orders
      </h2>
      <p className='font-sans text-base tracking-[-1%] pt-[3px] text-white '>
        Log in to view your past orders and inventory
      </p>
      <div className='pt-5 pb-8 '>
        <Button
          className='font-sans font-bold !text-[#403E5A]  text-[18px] bg-[#fff] py-5 px-10 justify-center text-center mx-auto  rounded-[999px]'
          text='Log in'
        />
      </div>
    </section>
  )
}
