import React from 'react'
import BannerImg from '../../assets/image.png'
const Banner = () => {
  return (
    <div className='select-none'>
      <div className='w-full relative'>
        <img className='w-full h-[16rem]' src={BannerImg} alt="" />
      </div>
      <div className='absolute left-0 right-0 top-30 text-center'>
        <h1 className='text-4xl font-bold'>Crypto Tracker</h1>
        <p className='text-sm'>Get all info regarding cryptocurrencies</p>
      </div>
    </div>
  )
}

export default Banner