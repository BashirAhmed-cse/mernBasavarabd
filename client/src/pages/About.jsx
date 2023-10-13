import { Link } from "react-router-dom";
import t1picture from '../assets/t-1.jpg';
import t2picture from '../assets/t-2.jpg';
import t3picture from '../assets/t-3.jpg';
import Button from "./../components/Button";
import Button2 from "./../components/Button2";
import Founder from "./../components/Founder";

export default function About() {
  return (
    <div className='py-18 pb-4 px-4 max-w-6xl mx-auto'>
        <div className="mx-2 max-w-6xl sm:px-6 lg:px-8">
    <div className='mt-6 overflow-hidden'>
    <div className="-mx-4 flex flex-wrap items-center justify-between">
      <div className="w-full px-4 lg:w-6/12">
        <div className="-mx-3 flex items-center sm:mt-5">
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="py-3 sm:py-4">
            <img src={t1picture} alt="mockup" width={500} height={200} className='w-full rounded-2xl'/>
              
            </div>
            <div className="py-3 sm:py-4">
            <img src={t2picture} alt="mockup" width={500} height={200} className='w-full rounded-2xl'/>
            </div>
          </div>
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="relative z-10 my-4">
            <img src={t3picture} alt="mockup" width={500} height={200} className='w-full rounded-2xl'/>
             
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="mt-10 lg:mt-0">
          <span className="text-slate-700 mb-2 block text-lg font-semibold">
            About Us
          </span>
          <h2 className="text-slate-900 mb-8 text-3xl font-bold sm:text-4xl">
          Discover Your Dream Living Space with Us.
          </h2>
          <p className="text-body-color mb-8 text-base">
          Welcome to our  rental website, where  finding your ideal living space is both simple and convenient. 
          Our platform is designed to simplify the way people discover homes, apartments and rentals, 
          and provide a simple solution for those looking to sell their properties. At our company, 
          we understand that finding a  home can be a daunting task. That's why it's our mission to 
          
          </p>
          <p className="text-body-color mb-12 text-base">
          provide a user-friendly experience that makes it easy for everyone, regardless of skill level or experience, 
          to find the perfect living space. Whether you are a tenant looking for a comfortable apartment, 
          a family looking for the perfect home or an individual in need of a comfortable room, our website has 
          everything you need. . We offer a wide variety of property listings to suit a variety of interests and 
          requirements. For property owners and sellers, our platform provides an easy way to showcase your property 
          and connect with potential buyers,  while ensuring a transparent and efficient process. Join us today and 
          experience the simplicity of finding and listing properties with our platform. Your dream living space or 
          successful real estate sale is just a few clicks away.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div className=''>
   <Founder/>
  </div>
    </div>
  )
}
