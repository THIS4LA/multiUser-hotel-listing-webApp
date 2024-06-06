/* eslint-disable react/prop-types */
import starIcon from '../../assets/images/Star.png';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OwnerCard = ({ owner }) => {
    const {
        name,
        photo,
        address,
        isApproved,
    } = owner;

    return (
        <Link to={`/owners/${owner._id}`}>
        <div className='p-3 border rounded-[20px] drop-shadow-2xl flex items-start'>
            <div className='w-[100px]'>
                <img
                    src={photo}
                    alt="ownerCardPhoto"
                    className="border-4 border-solid border-redColor w-full"
                />
            </div>

            <div className='flex-1 ml-3'>
                <h2 className='text-[16px] leading-[24px] lg:text-[20px] lg:leading-6 text-headingColor font-[700] mt-1'>
                    {name}
                </h2>

                <div className='mt-1 flex items-center justify-between'>
                    <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-1 lg:px-4 text-[12px] leading-4 lg:text-[14px] lg:leading-5 font-semibold rounded'>
                        
                    </span>

                    <div className='flex items-center gap-[4px]'>
                        <span className='flex items-center gap-[4px] text-[20px] leading-4 lg:text-[14px] lg:leading-5 font-semibold text-headingColor uppercase'>
                            {isApproved}
                        </span>
                    </div>
                </div>

                <div className='mt-2'>
                    <h3 className='text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold text-headingColor'>
                        {address}
                    </h3>
                </div>
            </div>

            
            
        </div>
        </Link>)
}

export default OwnerCard;
