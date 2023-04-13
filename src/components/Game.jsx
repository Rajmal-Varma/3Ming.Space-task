import Ractangle from "../assest/Rectangle 5.png";

function Game() {
  return (
    <div className="absolute md:items-center md:justify-center  w-[313px] h-[544px] ml-[100px] mt-[42px] rounded-[9px] bg-[#333333]">
      <div>
        <img
          src={Ractangle}
          alt=""
          className="w-80 h-60 content-center pt-[1.2rem] px-[1.2rem] rounded-[9px]"
        ></img>
      </div>
      <div className="mt-2">
        <h1 className=" text-5xl text-center text-white  font-serif ">
          {" "}
          Faraland{" "}
        </h1>
      </div>

      <div className="mt-2  absolute w-[280px] h-[58px] not-italic font-normal text-lg leading-[126.2%] tracking-[0.015em] text-white font-[ Times New Roman] ">
        <p className="  pl-5  justify-start text-sm">
          {" "}
          Launched on BSC, Faraland is a strategic turn-based fantasy role
          playing game with crypto rewards.{" "}
        </p>
        <p className="pl-4 pt-3">Genre: Virtual-Pet</p>
        <p className="pl-4 pt-3">Platform : Ethereum</p>
      </div>

      <hr className="ml-4  mt-40  w-[281px] h-0 border border-solid border-[rgba(255,255,255,0.22)]" />

      {/* button added */}
      <button
        className="   ml-24  mt-5   absolute w-[115px] h-[42px] rounded-[21px]  bg-violet-700 
        text-white   "
      >
        <span className="pb-6 text-center text-xl align-middle ">See More</span>
      </button>
    </div>
  );
}

export default Game;
