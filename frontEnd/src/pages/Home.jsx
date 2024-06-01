import React from 'react'
import BgPhoto from "../assets/images/bg-photo.jpg"
import { ReactTyped } from "react-typed";
import { NavLink, Link } from "react-router-dom";
import ScrollDownArrow from "../components/ScrollDownArrow/ScrollDownArrow"

const Home = () => {
  return (
    <>
    <>
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <img src={BgPhoto} className='bg-photo' />
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-center'>
          {/* ======hero content==== */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='styledFont letterSpace text-[46px] pt-[150px] leading-[46px] text-redColor font-[800] md:text-[60px] md:leading-[70px] center'>
              Discover a World <br></br> of
              <ReactTyped
                className="pl-6 letterSpace md:text-[60px] sm:text-6xl text-[36px] font-bold md:py-6 text-blueColor"
                strings={["Comfort.", "Safety.", "Luxury."]}
                typeSpeed={160}
                backSpeed={180}
                loop
              ></ReactTyped>
              </h1>
              <p className='text-[20px]  center'>
              <br></br>Your Ultimate Guide to Unforgettable Stays.</p>
              <Link to='/owners'><ScrollDownArrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    </>
  )
}

export default Home