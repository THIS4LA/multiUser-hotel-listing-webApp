import { useState } from "react";
import avatar from "../../assets/images/user.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedBackForm from "./FeedBackForm";

const OwnerFeedBack = ({ reviews, totalRating }) => {
  const [showFeedBackForm, setShowOwnerFeedBackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  className="w-full"
                  src={review?.user?.photo || avatar}
                  alt="avatar"
                />
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review?.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 font-medium text-[15px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedBackForm && (
        <div className="text-center">
          <button
            className="btn bg-redColor rounded-[5px]"
            onClick={() => setShowOwnerFeedBackForm(true)}
          >
            Give Feedback
          </button>
        </div>
      )}

      {showFeedBackForm && <FeedBackForm />}
    </div>
  );
};

export default OwnerFeedBack;
