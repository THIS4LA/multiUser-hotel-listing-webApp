import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

import aboutImg from '../../assets/images/about-us.png'
const About = () => {
  return (
    <section id='about' data-aos="fade-up">
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
        {/* =======About image======== */}
        <div className='relative w-3/4 lg:w-1/2 xl:w-[650px] z-10 order-2 lg:order-1'>
          <img src={aboutImg} alt='aboutImg' />
        </div>

        {/* =======About content======== */}
        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
          <h2 className='heading'>Connecting You with <span className='text-redColor'>Excellence</span></h2>
          <p className='text__para'>
          Welcome to <span className='text-redColor'>Asgard-Horizon</span>, the ultimate destination for discovering the perfect hotel and restaurant experiences. Our platform is designed to connect travelers, food enthusiasts, and locals with a diverse array of accommodations and dining options, ensuring that everyone can find their ideal stay and meal with ease.
          </p>

          <p className='text__para mt-[30px]'>
          our mission is to bridge the gap between service providers and customers, offering a seamless, user-friendly interface where hotels and restaurants can showcase their offerings. We aim to provide comprehensive and reliable information, helping users make informed decisions that enhance their travel and dining experiences.
          </p>
          <AnchorLink offset='100' href="#services"><button className='btn'>Learn More</button></AnchorLink>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About