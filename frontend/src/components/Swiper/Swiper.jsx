import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import leftArrow from "../../assets/img/leftArrow.png"
import rightArrow from "../../assets/img/rightArrow.png"
import leftArrowBlack from "../../assets/img/arrowLeftBlack.png"
import rightArrowBlack from "../../assets/img/arrowRightBlack.png"
import 'swiper/css';
import "./Swiper.scss"
import 'swiper/css/navigation';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


export default function SwiperComponent ({theme})  {
  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/profile/id')
  }

    const {state} = useContext(AuthContext);


  return (
    <div className='swiper-container '>

    <img className="swiper-button image-swiper-button-prev" src={theme === "dark" ? leftArrow : leftArrowBlack} alt="" />
    <img className="swiper-button image-swiper-button-next" src={theme === "dark" ? rightArrow : rightArrowBlack} alt="" />
    <Swiper
    className='swiper-'
    modules={[Navigation]}
    spaceBetween={15}
    slidesPerView={8}
    navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled"
      }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >

        <SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide>
        <SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide>
        <SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide><SwiperSlide ><img onClick={handleClick} className="user-img-swiper borderImg" src={state.currentUser.userPic}  alt="" /> <p className='text'>{state.currentUser.username}</p></SwiperSlide>
   
    </Swiper>
    
    </div>
  )
}

