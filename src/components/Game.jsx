import Ractangle from "../assest/Rectangle 5.png";

function Game() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <a
        className="rounded-[9px] bg-[#333333]    p-5  w-60 h-[32rem] group"
        href="/"
      >
        <img
          src={Ractangle}
          className=" shadow w-full h-60  content-center pt-[0.1rem] px-[0.1rem] rounded-[9px] "
          alt=""
        />

        <h1 className="  mt-5  text-3xl text-center text-white  font-serif">
          Faraland
        </h1>

        <p className=" font-light mt-2 text-xs text-white">
          {" "}
          Launched on BSC, Faraland is a strategic turn-based fantasy role
          playing game with crypto rewards.
        </p>

        <p className="pt-2 text-white ">Genre: Virtual-Pet</p>

        <p className="pt-1 text-white ">Platform : Ethereum</p>
        <hr className="  mt-4  w-[12rem] h-0 border border-solid border-[rgb(131,131,131)]" />
        <button
          className="   mx-10  mt-3  w-[115px] h-[42px] rounded-[21px]  bg-violet-700 
        text-white   "
        >
          <span className="pb-6 text-center text-xl align-middle ">
            See More
          </span>
        </button>
      </a>
    </div>
  );
}

export default Game;
