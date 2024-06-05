/* eslint-disable react/prop-types */
import starIcon from '../../assets/images/Star.png';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OwnerCard = ({ owner }) => {
    const {
        name,
        category,
        avgRating,
        totalRating,
        photo,
        address,
    } = owner;

    return (
        <div className='p-3 lg:p-5 flex flex-col justify-between h-full'>
            <div>
                <img
                    src={photo}
                    alt="ownerCardPhoto"
                    className="border-4 border-solid border-redColor w-full drop-shadow-2xl"
                />
            </div>

            <div className='flex-1'>
                <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
                    {name}
                </h2>

                <div className='mt-2 lg:mt-4 flex items-center justify-between'>
                    <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                        {category}
                    </span>

                    <div className='flex items-center gap-[6px]'>
                        <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                            <img src={starIcon} alt='starIcon' />
                            {avgRating}
                        </span>
                        <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                            ({totalRating})
                        </span>
                    </div>
                </div>
            </div>

            <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
                <div>
                    <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>
                        {address}
                    </h3>
                </div>
                <Link 
                    to={`/owners/${owner._id}`}
                    className='w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-solid border-redColor hover:border-blueColor flex items-center justify-center group'>
                    <FaPlay className='group-hover:text-blueColor text-redColor w-5 h-5' />
                </Link>
            </div>
        </div>
    )
}

export default OwnerCard
