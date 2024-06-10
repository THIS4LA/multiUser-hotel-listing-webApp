import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import { useParams } from "react-router-dom";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    checkingDate: "",
    checkingTime: "",
    checkOutDate: "",
    checkOutTime: "",
    phone: "",
    requirement: "",
    nog: "",
    minBudget: "",
    maxBudget: "",
  });

  const { id } = useParams();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/owners/${id}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container pb-10">
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Availability Checking Form
      </h2>
      <form onSubmit={submitFormHandler}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="form__label">Check-in Date*</p>
            <input
              type="date"
              name="checkingDate"
              className="form__input"
              value={formData.checkingDate}
              onChange={handleInputChange}
              required
            />
            <p className="form__label">Check-in Time*</p>
            <input
              type="time"
              name="checkingTime"
              value={formData.checkingTime}
              className="form__input"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <p className="form__label">Check-out Date*</p>
            <input
              type="date"
              name="checkOutDate"
              className="form__input"
              value={formData.checkOutDate}
              onChange={handleInputChange}
              required
            />
            <p className="form__label">Check-out Time</p>
            <input
              type="time"
              name="checkOutTime"
              value={formData.checkOutTime}
              className="form__input"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <p className="form__label">Your Phone number*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
            required
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Your Requirement*</p>
          <textarea
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleInputChange}
            placeholder="Be More Specific About Your Requirement"
            className="form__input"
            maxLength={100}
            required
          />
        </div>
        <div className="mb-5">
          <div className="">
            <div>
              <p className="form__label">Number of Guests*</p>
              <input
                type="number"
                name="nog"
                value={formData.nog}
                onChange={handleInputChange}
                placeholder="Guests"
                className="form__input"
                required
              />
            </div>
            <div>
              <p className="form__label">Budget*</p>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Min Budget</p>
                  <input
                    type="number"
                    placeholder="100"
                    name="minBudget"
                    value={formData.minBudget}
                    onChange={handleInputChange}
                    className="form__input"
                    required
                  />
                </div>
                <div>
                  <p className="form__label">Max Budget</p>
                  <input
                    type="number"
                    placeholder="10 000"
                    name="maxBudget"
                    value={formData.maxBudget}
                    onChange={handleInputChange}
                    className="form__input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <button
            type="submit"
            className="bg-redColor text-white text-[18px] leading-[30px]
            w-full py-3 px-4 rounded-lg"
          >
            Send Requirement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
