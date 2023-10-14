import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import ViewListing from "./pages/ViewListing";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/listing/:listingId/:listingName" element={<Listing/>}/>
        <Route element={<PrivateRoute/>}>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/viewListing" element={<ViewListing/>}/>
         <Route path="/create-listing" element={<CreateListing/>}/>
         <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  )
}
