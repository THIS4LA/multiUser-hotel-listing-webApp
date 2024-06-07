import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../config";
import ScaleLoader from "react-spinners/ScaleLoader";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    //use our api
    try {
      if (!email || ! msg || ! subject) {
        setLoading(false);
        return toast.error("Rating & Review Fields are required");
      }

      const res = await fetch(`${BASE_URL}/contacts`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          subject,
          msg
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">
          <span className="text-redColor">Contact</span> Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us Know
        </p>
        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              type="text"
              id="message"
              name="msg"
              onChange={(e) => setMsg(e.target.value)}
              rows="3"
              placeholder="Leave a message..."
              className="form__input mt-1"
            />
          </div>
          <button onClick={handleSubmitContact} type="submit" className="btn rounded-md sm:w-fit">
          {loading ? <ScaleLoader size={25} color="#fff" /> : "Submit Feedback"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
