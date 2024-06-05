import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const Profile = ({ ownerData }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        about: "",
        category: "",
        photo: null,
      });

      useEffect(() => {
        setFormData({
          name: ownerData?.name|| "N/A",
          email: ownerData?.email|| "N/A",
          phone: ownerData?.phone|| "N/A",
          address: ownerData?.address|| "N/A",
          category: ownerData?.category|| "N/A",
          rankings: ownerData?.rankings,
          about: ownerData?.about|| "N/A",
          photo: ownerData?.photo,
        });
      }, [ownerData]);

      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);
    
        setFormData({ ...formData, photo: data?.url });
      };

      const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch(`${BASE_URL}/owners/${ownerData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
  
        const result = await res.json();
  
        if (!res.ok) {
          throw Error(result.message);
        }
        toast.success(result.message);
      } catch (err) {
        toast.error(err.message);
      }
    };
  
    // reuseable function for adding items
    const addItem = (key, item) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: [...prevFormData[key], item],
      }));
    };
  
    //reuseable input change function
    const handleReusableInputChangeFunc = (key, index, event) => {
      const { name, value } = event.target;
  
      setFormData((prevFormData) => {
        const updateItems = [...prevFormData[key]];
  
        updateItems[index][name] = value;
  
        return {
          ...prevFormData,
          [key]: updateItems,
        };
      });
    };
  
    //reusable function for deleting item
    const deleteItem = (key, index) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: prevFormData[key].filter((_, i) => i != index),
      }));
    };
  
    const addRanking = (e) => {
      e.preventDefault();
  
      addItem("rankings", {
        startingDate: "",
        endingDate: "",
        ranking:"",
        place:"",
      });
    };
  
    const handleRankingChange = (event, index) => {
      handleReusableInputChangeFunc("rankings", index, event);
    };
  
    const deleteRanking = (e, index) => {
      e.preventDefault();
      deleteItem("rankings", index);
    };
  
    
  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            disabled="true"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Address*</p>
          <textarea
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="form__input"
            rows={2}
            maxLength={50}
          />
        </div>
        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            type="text"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder="About"
            className="form__input"
            rows={4}
            maxLength={100}
          />
        </div>

        {/* 3grids */}
        <div className="mb-5">
          <div className="grid grid-cols-1 gap-5 mb-[30px]">
              <p className="form__label">Category*</p>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">select</option>
                <option value="UrbanHotel">Urban Hotel</option>
                <option value="BeachHotel">Beach Hotel</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Resort">Resort</option>
              </select>
          </div>
        </div>

        {/* rankings dates */}
        <div className=" mb-5 ">
          <p className="form__label">Rankings*</p>
          {formData.rankings?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleRankingChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleRankingChange(e, index)}
                    />
                  </div>
                </div>
                {/* ranking and place */}
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Ranking</p>
                    <input
                      type="text"
                      name="ranking"
                      value={item.ranking}
                      className="form__input"
                      placeholder="Across all companies"
                      onChange={(e) => handleRankingChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Place</p>
                    <input
                      type="text"
                      name="place"
                      value={item.place}
                      className="form__input"
                      placeholder="1st Place"
                      onChange={(e) => handleRankingChange(e, index)}
                    />
                  </div>
                </div>
                {/* delete btn */}
                <button
                    onClick={(e) => deleteRanking(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]
                cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button 
          onClick={addRanking}
          className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Rankings
          </button>
        </div>
          {/* pic upload */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure
              className="w-[60px] h-[60px] rounded-full border-2 border-solid 
            border-primaryColor flex items-center justify-center overflow-hidden"
            >
              <img
                src={formData.photo}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png, .jpg,"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex
                  items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                  bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer"
            >
              Update Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-redColor text-primaryColor text-[18px] leading-[30px]
            w-full py-3 px-4 rounded-lg "
          >
            Update Profile
          </button>
        </div>

      </form>
    </div>
  );
};

export default Profile;