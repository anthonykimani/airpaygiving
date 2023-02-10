import Review from "./Review";

const ReviewSection = () => {
  return (
    <section className="flex flex-col items-center justify-around overflow-hidden mt-3">
      <h3 className="text-primarygreen bg-primarygreen bg-opacity-20 w-[100px] text-center p-1 rounded-full font-bold ">
        Features
      </h3>
      <h1 className=" text-2xl text-center md:text-4xl  font-bold text-opacity-10 my-3 ">
        Many Features available on the platform
      </h1>
      <div className="flex overflow-x-auto ml-[30px] md:ml-[300px] w-screen scrollbar-hide">
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      </div>
    </section>
  );
};

export default ReviewSection;
