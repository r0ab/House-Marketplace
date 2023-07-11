import React from "react";
import { connectAuthEmulator, getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, link, useNavigate } from "react-router-dom";
import { updateDoc,doc } from "firebase/firestore";
import { db } from "../firebase.config";
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
import { Link } from "react-router-dom";


function Profile() {
  const [user, setUser] = useState(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const onChange= (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
}
  const { email, name } = formData;
  const onLogut = () => {
    auth.signOut();
    navigate("/");
  };
  const onSubmit = () => {
    try {
      if(auth.currentUser.displayName!=name){
        //update display name in fb
       updateProfile(auth.currentUser,{
          displayName:name})
      }

      // update name in firebase data store
      const userRef=doc(db,'users',auth.currentUser.uid)
      updateDoc(userRef,{
        name
      })
    } catch (error) {
      toast.error("could't fetch details")
    }
    
    
  };
  // useEffect(() => {
  //   setUser(auth.currentUser);
  //   console.log(user);
  // }, []);
  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button type="button" onClick={onLogut} className="logOut">
            Logout
          </button>
        </header>
        <main>
          <div className="profileDetailsHeader">
            <p className="personalDetailsText"> Personal Details </p>
            <p
              className="changePersonalDetails"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? "done" : "change"}
            </p>
          </div>
          <div className="profileCard">
            <form>
              <input
                type="text"
                id="name"
                className={changeDetails ? "profileNameActive" : "profileName"}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
              <input
                type="text"
                id="email"
                className={changeDetails ? "profileEmailActive" : "profileEmail"}
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
              />
            </form>
          </div>
          <Link to='/create-listing'className='createListing'>
            <img src={homeIcon} alt="home" />
            <p>Sell of rent your home</p>
            <img src={arrowRight} alt="arrow-right" />
          </Link>
        </main>
        <ToastContainer/>
      </div>
    </>
  );
}

export default Profile;
