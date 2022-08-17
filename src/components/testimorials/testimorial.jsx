import React from 'react';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg'
import './testimorials.css';

  // core version + navigation, pagination modules:
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // import Swiper and modules styles

  import 'swiper/css/pagination';

  // init Swiper:
 

function Testimorial() {
  return (
    <section id='testimonials'>
      <h5>What They Say About Us</h5>
      <h2>testimonials</h2>
      <Swiper className='container testimonials_container'

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar3} alt='' />
          </div>
          <h5 className='client_name'>Jame Desiny</h5>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, corrupti, enim minima pariatur officia quibusdam ratione omnis eum deleniti voluptatem fugiat esse sequi rerum dolore. Iure dicta repudiandae nulla fugit?</small>
          

        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar2} alt='' />
          </div>
          <h5 className='client_name'>Comford Lazy</h5>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, corrupti, enim minima pariatur officia quibusdam ratione omnis eum deleniti voluptatem fugiat esse sequi rerum dolore. Iure dicta repudiandae nulla fugit?</small>
          

        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar3} alt='' />
          </div>
          <h5 className='client_name'>Jake mono</h5>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, corrupti, enim minima pariatur officia quibusdam ratione omnis eum deleniti voluptatem fugiat esse sequi rerum dolore. Iure dicta repudiandae nulla fugit?</small>
          
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimorial
