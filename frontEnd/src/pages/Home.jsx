import React from 'react'
import BgPhoto from "../assets/images/bg-photo.jpg"
import icon01 from "../assets/images/urban-hotel-primary.png";
import icon02 from "../assets/images/beach-blue.png";
import icon03 from "../assets/images/returant-red.png";
import icon04 from "../assets/images/resort-green.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleRight } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import { NavLink, Link } from "react-router-dom";
import ScrollDownArrow from "../components/ScrollDownArrow/ScrollDownArrow"

import About from "../components/About/About.jsx";

const Home = () => {
  return (
    <>
    <>
    <section className='hero__section pt-[60px] 2xl:h-[800px] md:mb-[400px] mb-[500px] lg:mb-[120px]'>
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
              <AnchorLink offset='100' href="#category"><ScrollDownArrow /></AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </section>
 {/* end hero section */}
    <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center" id='category'>
                Exploring Diverse Hotel<span className='pl-2 pr-2 text-redColor'>Categories</span> 
              </h2>
              <p className="text__para text-center">
              Explore urban hotels, beachside retreats, resorts, and hotels with top-rated restaurants, each offering unique experiences for every traveler.</p>
            </div>
            {/* ===========Links============*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg-gap-[30px] mt-[30px] lg:mt-[55px]">

              {/* =========first========= */}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="icon01" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Urban Hotels
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Centrally located in cities, offering convenience and access to business and cultural attractions.
                  </p>
                  <Link
                    to="/owners"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white"
                  >
                  <FaAngleRight size={30}/>
                  </Link>
                </div>
              </div>
                {/* =========second========= */}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="icon02" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                     Beach Side Hotels
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Positioned near beaches, providing direct access to the sea and water-related activities.
                  </p>
                  <Link
                    to="/owners"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white"
                  >
                  <FaAngleRight size={30}/>
                  </Link>
                </div>
              </div>
              {/* =========third========= */}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="icon03" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Resturants
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Known for their exceptional dining experiences, often featuring award-winning or Michelin-starred restaurants.
                  </p>
                  <Link
                    to="/owners"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white"
                  >
                  <FaAngleRight size={30}/>
                  </Link>
                </div>
              </div>
              {/* 4th */}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon04} alt="icon03" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Resorts
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  All-inclusive properties offering extensive amenities and recreational activities in various scenic locations.
                  </p>
                  <Link
                    to="/owners"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white"
                  >
                  <FaAngleRight size={30}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
    </>
    </>
  )
}

export default Home