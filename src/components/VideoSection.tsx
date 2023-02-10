import videobackground from "../assets/svg/videosection.svg";
import play from "../assets/svg/videoplaybutton.svg";

const VideoSection = () => {
    return ( 
        <section className=" bg-[url('./assets/svg/videosection.svg')] h-[400px] flex justify-around items-center  ">
            
            <button><img src={play} alt="" className="text-red-600 p-3 rounded-full border bg-white bg-center"/></button>
        </section>
     );
}
 
export default VideoSection;