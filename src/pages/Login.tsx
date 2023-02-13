const Login = () => {
  return (
    <section className="bg-[#F7F7F7] flex justify-around items-center h-[500px] md:h-screen font-kumbh">
      <article className="bg-white rounded shadow-md flex flex-col justify-around items-start p-3 sm:p-10 w-[95%] md:w-[50%] h-[500px] md:h-[80%]">
        <div>
          <h1 className="text-primarygreen font-bold text-2xl">
            Login to your account
          </h1>
          <h3 className="text-gray-500 text-xs font-semibold">
            Welcome bank! Please enter your details
          </h3>
        </div>
        <form className="flex flex-col justify-around items-start w-[95%]">
          <label htmlFor="name" className="text-primarygreen font-bold text-lg">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded mb-2"
            placeholder="Enter Your name"
          />
          <label
            htmlFor="email"
            className="text-primarygreen font-bold text-lg"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="w-full p-2 border border-gray-400 rounded mb-2"
            placeholder="james@gmail.com"
          />
          <label
            htmlFor="password"
            className="text-primarygreen font-bold text-lg"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="w-full p-2 border border-gray-400 rounded mb-2"
            placeholder="********"
          />
          <input
            type="submit"
            value="Login"
            className="w-full p-2 border bg-primarygreen text-white font-bold rounded mt-4 mb-2"
          />
          <button className="w-full p-2 border border-primarygreen text-primarygreen font-bold rounded mb-2 flex items-center justify-center">
            <i className="bx bxl-google bx-sm"></i>Login with Google
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;
