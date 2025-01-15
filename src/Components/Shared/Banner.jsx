import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/Banner/banner-1.jpg'
import banner2 from '../../assets/Banner/banner-2.avif'
import banner3 from '../../assets/Banner/cover-3.png'
import banner4 from '../../assets/Banner/cover-4.jpg'
import banner5 from '../../assets/Banner/cover-5.jpg'
import banner6 from '../../assets/Banner/cover-6.avif'
import banner7 from '../../assets/Banner/cover-7.webp'
import banner8 from '../../assets/Banner/cover-8.webp'

const Banner = () => {
  return (
    <div className='bg-cover my-10'>
      <Carousel className='h-full bg-cover'>
                <div className='h-[200px] '>
                    <img src={banner1} className='w-full bg-cover'/>      
                </div>
                <div>
                    <img src={banner8} />      
                </div>
                <div>
                    <img src={banner2} />      
                </div>
                <div>
                    <img src={banner7} />      
                </div>
                <div>
                    <img src={banner3} />      
                </div>
                <div>
                    <img src={banner4} />      
                </div>
                <div>
                    <img src={banner5} />      
                </div>

                <div>
                    <img src={banner6} />      
                </div>
            </Carousel>
    </div>
  )
}

export default Banner