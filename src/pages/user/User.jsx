import React from 'react';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material';

import './user.css';

const SingleUser = () => {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="/images/profile.jpg" alt="" className="userShowImg" />

            <div className="userShowTopTitle">
              <span className="userShowUsername">John Doe</span>
              <span className="userShowTitle">Full-stack Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">encarta</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+233 24 211 9972</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">anyarsencarta@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className='userShowIcon' />
              <span className="userShowInfoTitle">Kumasi | Ghana</span>
            </div>
          </div>
        </div>

        <div className="userUpdate"></div>
      </div>
    </div>
  )
}

export default SingleUser