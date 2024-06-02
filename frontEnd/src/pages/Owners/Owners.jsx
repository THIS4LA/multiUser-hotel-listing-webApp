import OwnerCard from "./../../components/Owners/OwnerCard";
import { owners } from "./../../assets/data/owners";
import Testimonial from "../../components/Testimonial/Testimonial";

const Owners = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a <span className="text-redColor">Place</span></h2>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-red-400 rounded-md flex items-center
        justify-center "
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
             placeholder:text-blueColor"
              placeholder="Search Place"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {owners.map((owner) => (
              <OwnerCard key={owner.id} owner={owner} />
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Hear What our <span className='text-pinkColor'>Visitors Have to Say</span></h2>
          <p className="text__para text-center">
            Explore testimonials from our valued guests. From memorable stays to delightful dining experiences, discover why our community keeps coming back
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* testimonial */}
    </>
  );
};

export default Owners;