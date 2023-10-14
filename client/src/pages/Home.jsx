import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingItem from './../components/ListingItem';
import Button from "./../components/Button";
import Button2 from "./../components/Button2";
import Hero from './../assets/1.png';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  SwiperCore.use([Navigation]);
console.log(saleListings);
  useEffect(()=>{
       const fetchOfferListings = async () => {
         try {
          const res = await fetch('/api/listing/get?offer=true&limit=4');
          const data = await res.json();
          setOfferListings(data);
          fetchRentListing();
         } catch (error) {
          console.log(error);
         }
       }

        const fetchRentListing = async () => {
          try {
            const res = await fetch('/api/listing/get?type=rent&limit=8');
          const data = await res.json();
          setRentListings(data);
          fetchSaleListing();
          } catch (error) {
            console.log(error);
          }
        }
       const fetchSaleListing = async () =>{
        try {
          const res = await fetch('/api/listing/get?type=sell&limit=4');
        const data = await res.json();
        setSaleListings(data);
        } catch (error) {
          console.log(error);
        }
       }
       fetchOfferListings();
  },[]);
  return (
    <div>
      {/* top */}
      <div className='sm:h-screen flex gap-4 border-b border-green-400'>
        <div className='flex flex-col gap-6 p-28 py-15 px-3 max-w-6xl mx-auto'>
            <h1 className='text-slate-700 font-bold text-4xl lg:text-6xl'>
            Find your <span className='text-slate-500'>favorite</span> 
              <br/>
              properties sale or rent
            </h1>
            <div className='text-gray-400 text-sm sm:text-lg'>
            বাসা ভাড়ার সহজ মাধ্যম - বাসাভাড়াবিডি.কম 
            </div>
            <div className='flex gap-4'>
            <Button url="/create-listing" text="Add Property"/>
            <Button2 url="/search" text="Find Property"/>
            </div>
        </div>
        <div className='p-15 px-3 max-w-6xl mx-auto hidden lg:mt-0 lg:col-span-5 lg:flex'>
        <img  className="img h-[400px] w-auto"
                src={Hero}
                alt="বাসাভাড়াবিডি.কম" />
        </div>
      </div>
      {/* swiper */}
       {/* <Swiper navigation>
       {
        offerListings && offerListings.length > 0 && 
        offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: 'cover'}} className='h-[500px]'>

            </div>
          </SwiperSlide>
        ))
       }
       </Swiper> */}
     

      {/* listing result for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-4'>
      {offerListings && offerListings.length > 0 && (
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent Offer</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {offerListings.map((listing) => (
              <ListingItem listing={listing} key={listing._id} />
            ))}
          </div>
        </div>
      )}

      {rentListings && rentListings.length > 0 && (
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {rentListings.map((listing) => (
              <ListingItem listing={listing} key={listing._id} />
            ))}
          </div>
        </div>
      )}

      {saleListings && saleListings.length > 0 && (
        <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more places for sale</Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {saleListings.map((listing) => (
              <ListingItem listing={listing} key={listing._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  );
  }