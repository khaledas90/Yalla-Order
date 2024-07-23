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
import { useTranslation } from 'react-i18next';

function ProfileMenuRestaurant() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t} = useTranslation()
  const handleLogOut = async () => {
    console.log("logout");
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate('/login');
    }
  }

  return (
    <ul className='profMenu'>
      <li><Link to="/MyAccount"><ModeEditOutlineOutlinedIcon />{t("Edit Profile")}</Link></li>
      <li><Link to="/MyOrder"><ShoppingBagOutlinedIcon />{t("My Orders")}</Link></li>
      <li><Link to="/MyAddress"><MapOutlinedIcon />{t("Saved Address")}</Link></li>
      <li onClick={handleLogOut}><LoginOutlinedIcon /> {t("Log Out")}</li>
      <Toaster position="top-center" reverseOrder={false} />
    </ul>
  )
}

export default ProfileMenuRestaurant;
