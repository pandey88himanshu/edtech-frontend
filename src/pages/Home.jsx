import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Home/HighlightText";
import Button from "../components/core/Home/Button";
import Banner from "../assets/Images/banner.mp4";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className=' mx-auto relative flex flex-col w-11/12 items-center justify-between text-white '>
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become An Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        {/* Heading */}
        <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
          Empower Your Future With <HighlightText text={"Coding Skills"} />
        </div>
        {/* sub Heading */}
        <div className=' mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        {/*Buttons */}
        <div className='flex flex-row gap-7 mt-8'>
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>
          <Button active={false} linkto={"/login"}>
            Book a Demo
          </Button>
        </div>
        {/* Video */}
        <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] w-[70%] shadow-blue-200'>
          <video
            className='shadow-[20px_20px_rgba(255,255,255)] outline-none'
            muted
            loop
            autoPlay>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
