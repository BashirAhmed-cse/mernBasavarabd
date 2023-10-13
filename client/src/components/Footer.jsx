import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className='bg-color border-y-2 py-1 border-green-400'>
         <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://basavarabd.com/" className="hover:underline">বাসাভাড়াবিডি.কম</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
          <Link to="/about" className="link link-underline link-underline-black mr-4 md:mr-6">
          About
          </Link>
          </li>
          <li>
          <Link to="/contact" className="link link-underline link-underline-black mr-4 md:mr-6">
          Contact
          </Link>
          </li>
          <li>
          <Link to="/privacy" className="link link-underline link-underline-black mr-4 md:mr-6">
            Privacy Policy
          </Link>
          </li>
        
      </ul>
      </div>
      </div>
    )
  }
  
  export default Footer