import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { selecUser } from '../features/userSlice';
import { auth } from '../firebase';
import '../styles/ProfileScreen.css'

function ProfileScreen() {
  const user = useSelector(selecUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <h4>date: 29/03/2021</h4>
              <div className="profileScreen__optionPlans">
                <div className="profileScreen__optionPlan">
                  <h4>Netflix Standard</h4>
                  <h5></h5>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
