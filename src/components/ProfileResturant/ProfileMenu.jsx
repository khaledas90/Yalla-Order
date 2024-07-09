import React from 'react'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "./profile.css";
import { Link } from 'react-router-dom';
function ProfileMenu() {
  return (
    <ul className='profMenu'>
      <li><Link to="/MyAccount"><ModeEditOutlineOutlinedIcon/> Edit Profile</Link></li>
      <li><Link to="/MyOrder"><ShoppingBagOutlinedIcon/> My Orders</Link></li>
      <li><Link to="/MyAddress"><MapOutlinedIcon/> Saved Address</Link></li>
      <li><Link><LoginOutlinedIcon/> Log Out</Link></li>
    </ul>
  )
}

export default ProfileMenu
