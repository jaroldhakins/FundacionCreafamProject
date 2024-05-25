import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
// import required modules
import { EffectFade, Autoplay } from 'swiper';
//images
import Img1 from '../assets/img/heroSlider/1.jpeg';
import Img2 from '../assets/img/heroSlider/2.jpeg';
import Img3 from '../assets/img/heroSlider/3.jpeg';

const slides = [
  {
    title: 'Centros recreativos creafam',
    bg: Img1,
    btnText: 'Mira Nuestras Cabañas'
  },
  {
    title: 'Centros recreativos creafam',
    bg: Img2,
    btnText: 'Mira Nuestras Cabañas'
  },
  {
    title: 'Centros recreativos creafam',
    bg: Img3,
    btnText: 'Mira Nuestras Cabañas'
  }
]

const HeroSlider = () => {
  return (
    <Swiper 
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        //deestructure slide
        const {title, bg, btnText} = slide;
        return (
          <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
            <div className='z-20 text-white text-center'>
              <div className='uppercase tracking-[6px] mb-5'>Solo Relajate Y Disfruta</div>
              <h1 className='text-[32px] uppercase tracking-[2px]
              max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                {title}
              </h1>
              <button className='btn btn-lg btn-primary mx-auto bg-green-400'>{btnText}</button>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt=''/>
            </div>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50'></div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default HeroSlider;
