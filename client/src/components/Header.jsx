import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Logo from '../assets/logo2.png';
import Button from "./Button";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
     e.preventDefault();
     const urlParams = new URLSearchParams(window.location.search);
     urlParams.set('searchTerm', searchTerm);
     const searchQuery = urlParams.toString();
     navigate(`/search?${searchQuery}`);
  };
  
 useEffect(() => {
   const urlParams = new URLSearchParams(location.search);
   const searchTermFromUrl = urlParams.get('searchTerm');
   if(searchTermFromUrl) {
    setSearchTerm(searchTermFromUrl);
   }
 },[location.search]);


  return (
    <header className="bg-color shadow-md border-y-2 border-green-400">
      <div className="flex justify-between items-center container mx-auto px-4 p-3 gap-2">
        <Link to="">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <img  className="h-7 sm:h-10 w-auto"
                src={Logo}
                alt="বাসাভাড়াবিডি.কম" />
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-slate-200 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
              <FaSearch className="text-slate-600" />
          </button>
          
        </form>

        <ul className="flex gap-2 sm:gap-6 items-center">
          <Link to="/">
            <li className="hidden sm:inline link link-underline link-underline-black text-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline link link-underline link-underline-black text-lg">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <div className="flex gap-4">
                <Button url="/create-listing" text="Add Property" className='hidden sm:inline'/>
              <img
                className="rounded-full h-9 w-9 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
              </div>
            ) : (
              <li className="w-full rounded px-3 py-2 bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
