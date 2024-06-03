import React, { useState } from "react";
import signupImg from "../assets/images/signUp.png";
import avatar from "../assets/images/user.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: selectedFile,
    role: "user",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // If you need to preview the image
    const preview = URL.createObjectURL(file);
    setPreviewURL(preview);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear any previous errors
    setError("");

    // Proceed with form submission
    console.log(formData);

    try {
      // Your API call here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* =======img box======= */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt="signupimg"
                className="w-full rounded-l-lg pt-[90px]"
              />
            </figure>
          </div>

          {/* =======Signup form======= */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3
              className="text-headingColor text-[35px] leading-9 font-bold
          mb-10"
            >
              Create an <span className="text-redColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-redColor
              focus:outline-none focus:border-b-blueColor text-[16px] leading-7
              text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-redColor
              focus:outline-none focus:border-b-blueColor text-[16px] leading-7
              text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-redColor
              focus:outline-none focus:border-b-blueColor text-[16px] leading-7
              text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Re Enter Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-redColor
              focus:outline-none focus:border-b-blueColor text-[16px] leading-7
              text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              {error && (
                <div className="mb-5 text-red-500 text-[14px]">
                  {error}
                </div>
              )}

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[18px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[17px] leading-7 px-4 
              py-3 focus:outline-none"
                  >
                    <option value="user">Guest</option>
                    <option value="owner">Partner</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid 
            border-redColor flex items-center justify-center"
                >
                  <img
                    src={previewURL || avatar}
                    alt="avatar"
                    className="w-full rounded-full"
                  />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex
                  items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                  bg-pinkColor text-primaryColor font-semibold rounded-lg cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-redColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Register
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 font-medium ml-1 hover:text-irisBlueColor"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
