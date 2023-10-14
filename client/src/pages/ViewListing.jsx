import React from 'react'
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from './../firebase';
import { updateUserStart, updateUserSuccess, updateUserFailure, 
  deleteUserFailure, deleteUserStart, deleteUserSuccess, 
  signOutUserStart, 
  signOutUserFailure,
  signOutUserSuccess} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Listing from './../../../api/models/listing.model';

export default function ViewListing() {
    const fileRef = useRef(null);
    const {currentUser, loading, error} = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListing] = useState([]);
    const dispatch = useDispatch();
  
    // firebase storage
    // allow read;
    //     allow write: if
    //     request.resource.size < 2 * 1024 * 1024 &&
    //     request.resource.contentType.matches('image/.*')
  
    useEffect(() => {
      if(file) {
        handleFileUpload(file);
      }
    }, [file]);
    const handleFileUpload = (file) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error)=>{
        setFileUploadError(true);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
        );
    };
  
    const handleChange = (e) =>{
      setFormData({...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e) =>{
     e.preventDefault();
     try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
     } catch (error) {
      dispatch(updateUserFailure(error.message));
     }
    };
  
    const handleDeleteUser = async () => {
      try {
        dispatch(deleteUserStart());
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if(data.success === false){
          dispatch(deleteUserFailure(data.message));
          return;
        }
        dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(error.message))
      }
    };
  
    const handleSignOut = async() => {
       try {
        dispatch(signOutUserStart())
         const res = await fetch('/api/auth/signout');
         const data = await res.json();
         if (data.success === false) {
          dispatch(signOutUserFailure(data.message));
          return;
         }
         dispatch(signOutUserSuccess(data));
       } catch (error) {
        dispatch(signOutUserFailure(error.message));
       }
    }
  
  
  const handleShowListings = async () =>{
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
       if (data.success === false) {
        setShowListingsError(true);
        return;
       }
  
       setUserListing(data); 
    } catch (error) {
      setShowListingsError(true);
    }
  };
  
  const handleListingDelete = async (listingId) =>{
     try {
       const res = await fetch(`/api/listing/delete/${listingId}`,{
          method: 'DELETE',
       });
       const data = await res.json();
       if(data.success === false) {
        console.log(data.message);
        return;
       }
  
       setUserListing((prev) => prev.filter((listing) => listing._id !== listingId));
     } catch (error) {
      console.log(error.message);
     }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
     
         <div className='flex items-center gap-6 mt-5'>
         <Link className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95' to={"/create-listing"}>
            Create Listing
          </Link>

      <button onClick={handleShowListings} className='bg-blue-900 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'>Click to Show Listing</button>
         </div>

      <p className='text-red-700 mt-5'>{showListingsError ? 'Error showing listings' : ''}</p>

      {userListings && userListings.length > 0 && 
       <div className='flex flex-col gap-4'>
        <h1 className='text-center mt-4 text-2xl font-semibold'>Your Listings</h1>
          {userListings.map((listing) => (
              <div key={listing._id} className='border rounded-lg p-3 flex justify-between items-center gap-4'>
                 <Link to={`/listing/${listing._id}/${encodeURIComponent(listing.name)}`}>
                  <img src={listing.imageUrls[0]} alt='listing cover' className='h-16 w-16 object-contain'/>
                 </Link>
                 <Link className='text-slate-700 font-semibold hover:underline truncate flex-1' to={`/listing/${listing._id}/${encodeURIComponent(listing.name)}`}>
                  <p>{listing.name}</p>
                 </Link>
                  <div className='flex flex-col items-center'>
                   <button onClick={()=>handleListingDelete(listing._id)} className='text-red-700 uppercase'>Delete</button>

                    <Link to={`/update-listing/${listing._id}`}>
                    <button className='text-green-700 uppercase'>Edit</button>
                    </Link>
                   

                  </div>
              </div>
            ))
          }
       </div>
      }
    </div>
  );
}
