import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Home/HighlightText";
import Button from "../components/core/Home/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/Home/CodeBlocks";
import TimelineSection from "../components/core/Home/TimelineSection";
import LearningLanguageSection from "../components/core/Home/LearningLanguageSection";
import InstructorSection from "../components/core/Home/InstructorSection";
import Footer from "../components/common/Footer";

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
            className='shadow-[20px_20px_rgba(255,255,255)] '
            muted
            loop
            autoPlay>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your
                <span className='text-gradient'> coding potential </span> with
                our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n  <a href="/one">One</a>\n  <a href="/two">Two</a>\n  <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-10'></div>
            }
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\n  return (\n    <div>Home</div>\n  );\n};\n\nexport default Home;`}
            backgroundGradient={
              <div className='absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-10'></div>
            }
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[320px]'>
          {/* Explore Full Catagory Section */}
          <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8'>
            <div className='lg:h-[150px]'></div>
            <div className='flex flex-row gap-7 text-white lg:mt-8'>
              <Button active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2'>
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </Button>
              <Button active={false} linkto={"/login"}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 '>
          {/* Job that is in Demand - Section 1 */}
          <div className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
            <div className='text-4xl font-semibold lg:w-[45%] '>
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className='flex flex-col items-start gap-10 lg:w-[40%]'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <Button active={true} linkto={"/signup"}>
                <div className=''>Learn More</div>
              </Button>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className='text-center text-4xl font-semibold mt-8'>
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
