import React, { useEffect, useRef, useState } from 'react';
import image1 from "../images/b1.webp";
import image2 from "../images/b2.webp";
import image3 from "../images/b3.webp";
import image4 from "../images/b4.webp";
import image5 from "../images/b5.webp";
import logo from "../images/logoB.png";
import logo2 from "../images/logo2.webp";
import logo3 from "../images/logo3.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { FaArrowTurnUp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import para2 from '../images/p2.png'
import p3 from "../images/p3.webp";
import p4 from "../images/p4.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import BackToTop from './BackToTop';

const images = [
  { image: image1, title: "Rice" },
  { image: image2, title: "Flour" },
  { image: image3, title: "Maida" },
  { image: image4, title: "White Flour" },
  { image: image5, title: "Jaggery" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home'); // State to track active menu
  const slideInterval = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopSlideShow = () => {
    clearInterval(slideInterval.current);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Update the active menu when an option is clicked
  };
  const data = [
    {
      title: "Bluetick's Sales call Evaluator",
      para: "In the fast-paced world of sales, every conversation is a potential turning point. Sales executives spend hours analyzing sales calls, extracting insights, and summarizing their content to improve their strategies...."
    },
    {
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance in In-House LLM Deployments",
      para: "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media..."
    },
    {
      title: "The LLM Face-Off: GPT 3.5 Turbo, Llama 2 7B, and Falcon 7B",
      para: "Generative AI has been (and still is) doing a great job keeping its top spot on nearly everybody's tongues for the past few months. No wonder, considering Gen-AI-related news and updates are flowing nearly weekly, keeping the public warm and wondering what comes next...."
    },
    {
      title: "Falcon LLM in Action: A Step-by-Step Tutorial",
      para: "he world of artificial intelligence has been evolvingrapidly since the introduction of Generative Pre-trainedTransformers (GPT) by OpenAI. The emergence of Generative AI has paved the way for numerous breakthroughs..."
    },
    {
      title: "Exploring Llama 2: From Installation to Interaction",
      para: "The race to create robust Generative Large Language Models (LLMs) has been heating up with the release of GPT from OpenAI. Companies are now competing to develop their own LLMs, which can be a cumbersome process involving thorough..."
    },
    {
      title: "AutoGPT, the new disruptive kid on the AI block!",
      para: "Welcome to the world of AutoGPT, the new disruptive kid on the AI block! This revolutionary tool, driven by OpenAI's GPT-4 or GPT-3.5 APIs, is an experimental open-source application that showcases the capabilities of the GPT-4..."
    },
    {
      title: "BluetickEBOOKS",
      para: "In today's digital era, eBooks have gained immense popularity as a convenient way to access a vast library of literature. However, merely reading eBooks is no longer the only option available to us. With advancements in natural language processing..."
    },
    {
      title: "The Ultimate PDF Analyzer Showdown: Humata vs ChatPDF vs BluetickPDF",
      para: "Today, we delve into the intriguing realm of PDF analyzers, where meticulous analysis meets cutting-edge technology. Whether you're a diligent scholar, a seasoned professional, or simply an avid literature aficionado, chances are you've encountered the need to analyze..."
    },
    {
      title: "PDF Analysis and Querying with Generative AI",
      para: "In today's digital age, information is abundant, and the ability to efficiently extract knowledge from vast amounts of text has become increasingly valuable. Traditional methods of manual extraction and analysis can be time-consuming and labor..."
    },
    {
      title: "Advanced Techniques in Text Summarization: Leveraging Generative AI and Prompt Engineering",
      para: "In today's information-rich world, extracting key information from vast amounts of textual data is a time-consuming task. Generative AI and Language Models like OpenAI's GPT-3.5 have emerged as powerful tools for text summarization. In this blog, we will explore advanced techniques in text summarization, specifically..."
    },
    {
      title: "Enhancing Chatbot Capabilities with Generative AI",
      para: "As chatbots continue to become an integral part of modern communication, it is essential to ensure that they provide personalized and engaging experiences for users. However, the capabilities of chatbots can be limited by their programming, resulting..."
    }


  ]

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} alt="logo" className='h-12' />

          </a>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  onClick={() => handleMenuClick('Home')}
                  className={`block py-4 px-3 text-black rounded md:bg-transparent md:p-3 dark:text-white 
                    ${activeMenu === 'Home' ? 'bg-blue-700 md:text-blue-400 border-blue-400 border-b-2 ' : 'hover:text-blue-700'}`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  onClick={() => handleMenuClick('Product')}
                  className={`block py-2 px-3 text-black rounded md:bg-transparent md:p-3 dark:text-white 
                    ${activeMenu === 'Product' ? 'bg-blue-700 md:text-blue-500 border-blue-400 border-b-2' : 'hover:text-blue-700'}`}
                >
                  PRODUCTS
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  onClick={() => handleMenuClick('Blog')}
                  className={`block py-2 px-3 text-black rounded md:bg-transparent md:p-3 dark:text-white 
                    ${activeMenu === 'Blog' ? 'bg-blue-700 md:text-blue-500 border-blue-400 border-b-2' : 'hover:text-blue-700'}`}
                >
                  BLOGS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleMenuClick('Contact')}
                  className={`block py-2 px-3 text-black rounded md:bg-transparent md:p-3 dark:text-white 
                    ${activeMenu === 'Contact' ? 'bg-blue-700 md:text-blue-500 border-blue-400 border-b-2' : 'hover:text-blue-700'}`}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BackToTop/>
      <div className="w-full flex flex-col items-center z-1" id='home'>
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 z-1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={image.image} alt={`Slide ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center bottom-[30px] md:bottom-52 lg:bottom-10">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-10 h-1 mx-1 cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='md:w-[85%] bg-white block md:flex'>
          <div className='w-[100%] md:w-[40%] p-5'>
            <h1 className='text-3xl md:text-5xl font-bold'>InterviewGPT</h1>
            <p className='text-gray-400 text-bold text-5xl mt-10'>Empowering Recruiters with AI-Driven Interviews</p>
            <p className='mt-10 text-2xl'>Revolutionize Your Hiring Process with InterviewGPT</p>
            <p className='mt-5 text-2xl'>AI-Powered Question Generation for Accurate Candidate Assessment</p>
            <span className='flex mt-6'><span className='text-xl mt-1'>Get instance Access</span><FaArrowRightLong size={40} className="ml-2" /></span>
          </div>
          <div className='w-[100%] md:w-[60%] h-[500px] p-3'>
            <iframe className='h-full w-full' src="https://www.youtube.com/embed/pKkeRDJ--IM?si=t0bmXe8x_pt6Hmud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='bg-white block md:flex md:w-[85%]'>
          <div className='w-[100%] md:w-[53%] p-5'>
            <h1 className='text-3xl md:text-5xl font-bold mt-16'>Transforming Enterprises</h1>
            <p className='text-gray-400 text-bold text-5xl mt-10'>with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
            <p className='mt-16 text-4xl'>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.</p>
            <button className='bg-blue-600 p-2 h-20 rounded px-2 text-3xl mt-16'>Contact us</button>
          </div>
          <div className='w-[100%] md:w-[47%]  bg-white'>
            <img src={para2} alt="para2" className='h-[300px] md:h-[800px] ml-auto' />
          </div>
        </div>
      </div>
      <div>
        <div class="container mx-auto px-4 py-10 z-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">

            <div class="bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 py-6 px-5">
              <div className='w-full flex justify-center h-20 mt-5'>
                <FaBuilding size={50} className="mt-3" />
              </div>
              <div class="text-center">
                <h2 class="text-3xl font-semibold mb-2">Explore AI Opportunities for Your Enterprise</h2>
                <p class="text-xl mt-5">Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 py-6 px-5">
              <div className='w-full flex justify-center h-20  mt-5'>
                <FaHandshakeSimple size={50} className="mt-3" />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-3xl font-semibold mb-2 mt-5">Design AI Trust Layer</h2>
                <p class="text-xl mt-5">Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 py-6 px-5">
              <div className='w-full flex justify-center h-20 mt-5'>
                <MdOutlineEngineering size={50} className="mt-3" />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-3xl font-semibold mb-2 mt-5">Scalability-Focused Solutions</h2>
                <p class="text-xl mt-5">Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 py-6 px-5">
              <div className='w-full flex justify-center h-20 mt-5'>
                <FaArrowTurnUp size={50} className="mt-3" />
              </div>
              <div class="text-center mt-5">
                <h2 class="text-3xl font-semibold mb-2 mt-5">End to end Workflow automation</h2>
                <p class="mt-5 text-xl">Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center' id='product'>
        <div className='md:w-[85%] bg-white block md:flex'>
          <div className='w-[100%] md:w-[30%] p-10'>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-700'>Talk to Code</h1>
            <p className='text-bold text-3xl mt-10'>Your AI-Powered Code Assistant</p>
            <p className='mt-10 text-2xl'>Elevate Your Coding with AI-Assisted Insights</p>
            <p className='mt-5 text-2xl'>Speak Directly to Your Code - Optimize, Debug, and Learn on the Go</p>
            <span className='flex mt-6'><span className='text-xl mt-1 text-blue-400'>Try Now</span><FaArrowRightLong size={40} className="ml-2" /></span>
          </div>
          <div className='w-[100%] md:w-[70%] h-[500px] p-3'>
            <img src={p3} alt="" />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='md:w-[85%] bg-white block md:flex'>
          <div className='w-[100%] md:w-[30%] p-10'>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-600'>PrivacyDoc</h1>
            <p className='text-bold text-4xl mt-10'>Talk to your Business Documents in the most secure way</p>
            <p className='mt-10 text-2xl'>Its ensures that your sensitive data never leaves your server, guaranteeing the highest level of security.</p>
            <p className='mt-5 text-2xl'>This can process a wide range of file types, including text, doc, pdf, ebook, and csv, making it a versatile solution for your document needs</p>
            <span className='flex mt-6'><span className='text-xl mt-1 text-blue-400'>Try Now</span><FaArrowRightLong size={40} className="ml-2" /></span>
          </div>
          <div className='w-[100%] md:w-[70%] h-[500px] p-3'>
            <iframe className='w-full' src="https://www.youtube.com/embed/CUpm1zho4Gs" title="PrivacyDoc Demo | Revolutionize Your Workflow | Automated PDF Analysis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='md:w-[85%] bg-white block md:flex'>
          <div className='w-[100%] md:w-[30%] p-6'>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-700'>Sales Call Evaluator</h1>
            <p className='text-bold text-3xl mt-10'>Unlock Comprehensive Insights from Your Sales Calls</p>
            <p className='mt-10 text-2xl'>Optimize Your Sales Performance with Sales Call Evaluator Transforming Sales Calls into Actionable Insights for Success</p>
            <p className='mt-5 text-2xl'>Save Time with Concise Call Overviews and Summaries, Providing Quick and Actionable Insights.</p>
            <span className='flex mt-6'><span className='text-xl mt-1 text-blue-400'>Try Now</span><FaArrowRightLong size={40} className="ml-2" /></span>
          </div>
          <div className='w-[100%] md:w-[70%] h-[500px] p-3'>
            <img src={p4} alt="" />
          </div>
        </div>
      </div>
      <div className='flex justify-center' id='blogs'>
        <div className="flex flex-wrap justify-center justify-between gap-1 p-4 md:w-[85%]">
          {data.map((item, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg p-4  shadow-md w-full sm:w-1/2 lg:w-[500px]  hover:shadow-xl mt-5">
              <h3 className="font-bold text-2xl mb-2 py-4">{item.title}</h3>
              <p className="text-xl py-3 flex-grow">{item.para}</p>
              <div className='mt-auto'>
                <span className='flex text-blue-600 '>Read more<FaArrowRightLong size={20} color="blue" className='mt-1 ml-2' /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center' id='contact'>
        <div className='w-[85%]'>
          <div className='w-28 h-1 bg-blue-500 mt-5'></div>
          <h1 className='font-bold text-5xl text-blue-500 py-2'>Let's Connect</h1>
          <p className='text-gray-500 font-bold text-3xl py-5'>Contact our support team or make an appointment with our experts.</p>
          <div className='w-full'>
            <div className='md:flex justify-between w-full py-5'>
              <div className='w-[250px] md:w-[500px] p-1'>
                <label htmlFor="" className='text-2xl '>Full Name*</label>
                <input type="text" placeholder='Full Name' className='h-11 w-full border border-black rounded' /></div>
              <div className='w-[250px] md:w-[500px] p-1'>
                <label htmlFor="" className='text-2xl '>Email*</label>
                <input type="text" placeholder='Email' className='h-11 w-full border border-black rounded' />
              </div>
              <div className='w-[250px] md:w-[500px] p-1'>
                <label htmlFor="" className='text-2xl '>Contact Number*</label>
                <input type="text" placeholder='Contact Number' className='h-11 w-full border border-black rounded' />
              </div>
            </div>
            <div className='w-full py-5'>
              <label htmlFor="">Subject*</label>
              <input type="text" className='w-full rounded border border-black h-11' />
            </div>
            <div className='w-full py-5'>
              <label htmlFor="">Message*</label>
              <input type="text" className='w-full rounded border border-black h-24' />
            </div>
            <button className='bg-blue-700 rounded px-2 py-1 text-2xl mt-2'>Submit form</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[85%] border-t-[2px] p-5 mt-10'>
          <div className='md:flex justify-between '>
            <div className='w-[270px]'>
              <img src={logo} alt="" className='w-full mb-10' />
              <span className='text-lg md:text-xl'>contact@bluetickconsultants.com</span>
            </div>
            <div className=''>
              <h1 className='text-4xl font-semibold'>Resourses</h1>
              <span className='text-lg flex'><IoIosArrowDroprightCircle size={30} className="mt-1 py-1" />Blogs</span>
            </div>

            <div className=''>
              <h1 className='text-4xl font-semibold'>PRODUCTUS</h1>
              <span className='text-lg flex'><IoIosArrowDroprightCircle size={30} className="mt-1 py-1" />Talk To Code</span>
            </div>
            <div className=''>

              <span className='text-lg flex'><IoIosArrowDroprightCircle size={30} className="mt-1 py-1" />InterviewGPT</span>
            </div>
            <div className=''>
              <span className='text-lg flex'><IoIosArrowDroprightCircle size={30} className="mt-1 py-1" />PravacyDoc</span>
            </div>
            <div className=''>
              <span className='text-lg flex'><IoIosArrowDroprightCircle size={30} className="mt-1 py-1" />Sales Call Evaluator</span>
            </div>
          </div>
          <div className='md:flex mt-8 border-t-[2px] p-5'>
            <div className='w-[150px]'>
              <img src={logo2} alt="" />
            </div>
            <div className='w-[150px]'>
              <img src={logo3} alt="" />
            </div>
            <div className='flex justify-between gap-1 mt-5 md:ml-4'>
              <div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <TiSocialFacebook className=' mt-2' size={25}/>
              </div>
              <div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <FaTwitter className=' mt-2' size={25}/>
              </div>
              <div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <FaInstagram className=' mt-2' size={25}/>
              </div><div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <FaThreads className=' mt-2' size={25}/>
              </div>
              <div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <FaLinkedinIn className=' mt-2' size={25}/>
              </div>
              <div className='h-11 w-11 rounded-full bg-white shadow-md p-1 flex justify-center'>
                <FaQuora className=' mt-2' size={25}/>
              </div>
            </div>
            <div className='ml-auto'>
              <span className='text-lg'>2024 © All rights reserved by Bluetick Consultants LLP</span>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Home;