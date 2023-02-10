const Subscribe = () => {
    return ( 
        <section className="bg-[url('./assets/svg/subscribe.svg')] h-[300px]  flex justify-around items-center ">
            <article className="flex flex-col md:flex-row justify-around items-center w-[95%] rounded-md bg-white p-2 md:p-10">
            <span className="">
                <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                <h5 className="text-sm">We will send you latest update of the product.</h5>
            </span>
            <form className="flex flex-col">
                <input type="email" placeholder="Enter your Email" className="border border-gray-400 w-[200px] xsm:w-[300px] md:w-[400px] p-2" />
                <input type="submit" value="Subscribe now" className="bg-primarygreen text-white p-2 mt-1" />
            </form>
            </article>
        </section>
     );
}
 
export default Subscribe;