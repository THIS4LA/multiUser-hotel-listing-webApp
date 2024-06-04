import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <ScaleLoader color="#C70039" />
    </div>
  );
};

export default Loader;