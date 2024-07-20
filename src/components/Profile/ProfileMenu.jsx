import React from 'react'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import "./profile.css";
import { Link } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/thunk/logoutThunk';

function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    console.log("logout");
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate('/login');
    }
  }

  return (
    <ul className='profMenu'>
      <li><Link to="/MyAccount"><ModeEditOutlineOutlinedIcon /> Edit Profile</Link></li>
      <li><Link to="/MyOrder"><ShoppingBagOutlinedIcon /> My Orders</Link></li>
      <li><Link to="/MyAddress"><MapOutlinedIcon /> Saved Address</Link></li>
      <li onClick={handleLogOut}><LoginOutlinedIcon /> Log Out</li>
      <Toaster position="top-center" reverseOrder={false} />
    </ul>
  )
}

export default ProfileMenu;
