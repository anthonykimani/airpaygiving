import reviewer from "../assets/svg/reviewer.svg";

const Review = () => {
    return ( 
        <article className="border border-gray-300 rounded-md m-2 min-w-[300px] sm:w-[60%] md:w-[40%] h-[250px] flex flex-col justify-around p-4 ">
            <span className="flex text-[#FFE70D]">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half text-gray-500 ' ></i>
            </span>
            <h4 className="text-gray-700">For added ease of transacting and navigation, donors can register and create a profile to see payment history and manage beneficiaries.</h4>
            <div className="flex items-start">
                <img src={reviewer} alt="" />
                <span className="ml-2">
                    <h3 className="text-primarygreen font-bold">Kamala Harry</h3>
                    <h4 className="text-gray-700">Church goer</h4>
                </span>
            </div>
        </article>
     );
}
 
export default Review;