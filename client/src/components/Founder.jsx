import React from 'react'
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import nasir from '../assets/nasir.jpg';
import bashir from '../assets/bashir.jpg';

const Founder = () => {
  return (
    <div className='bg-color'>
       <div className="p-10 max-w-screen-lg mx-auto">
      <div className="text-center mb-4">
       
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-slate-900">
        Meet Our<span className="text-success"> Founders</span>
        </h3>
      </div>
      <div className="sm:grid grid-cols-2 gap-6 my-10">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
           <img src={nasir} alt="mockup" className='h-[420px] sm:h-[250px] w-full sm:w-[200px] object-cover
           hover:scale-105 transition-scale duration-300'/>
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
            <div className="">
              <a href="#" className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Md Nasir Uddin
              </a>
              <p className="text-sm text-gray-600">
                Founder
              </p>
              <p className="text-gray-500 text-base mt-4">
               My mission is simple: to make you feel at home. I'm all about providing cozy and stylish spaces that match what you're looking for. Your comfort is my priority! 🏠✨
              </p>
              <p className='text-md font-semibold text-gray-600'>Contact: 01746-771680</p>
              <div className="my-4 flex">
                
              
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src={bashir} alt="mockup" className='h-[420px] sm:h-[250px] w-full sm:w-[200px] object-cover
           hover:scale-105 transition-scale duration-300'/>
          
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
            <div className="">
              <a href="#"
                className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Bashir Ahmed</a>
              <p className="text-sm text-gray-600">
              Mern Stack developer
              </p>
              <p className="text-gray-500 text-base mt-4">I specialize in using a set of technologies—MongoDB, Express.js, React, and Node.js—to build this awesome websites and apps.
              </p>
              <p className='text-md font-semibold text-gray-600'>Contact: 01679-317443</p>
              <div className="flex my-2 gap-2">
              <Link to={'https://github.com/BashirAhmed-cse'} target="_blank">
              <AiFillGithub className="h-5 w-5 text-gray-700"/>
              </Link>
              <Link to={'https://www.linkedin.com/in/bashir-ahmed-52799aa6/'} target="_blank">
              <AiFillLinkedin className="h-5 w-5 text-gray-700"/>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Founder