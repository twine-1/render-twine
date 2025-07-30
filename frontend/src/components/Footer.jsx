import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.twine_logo} className='mb-5 w-20' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Twine is a modern clothing brand dedicated to providing high-quality, stylish, and affordable apparel for men, women, children, or all. Founded in 14 November 2021, our company blends fashion-forward designs with comfort and durability, making us a go-to choice for everyday wear and special occasions.            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+8801860064313</li>
                <li>twinefashionbd@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Created by 2025@ twineBD.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
