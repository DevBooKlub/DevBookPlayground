import React, { useContext, useEffect, useState } from 'react'
import "./Posts.scss"
import userOneImg from "../../assets/img/userImg.jpg"
import userTwoImg from "../../assets/img/contactImg.jpg"
import Post from './Post/Post'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'

function Posts({theme}) {

  const {state, dispatch} = useContext(AuthContext)

  useEffect(()=> {
    const fetchPost = async () =>{
      const result= await axios.get(
        `/api/posts/`
      );
     dispatch({type:"LOADPOSTS", payload: result.data})
    }

    if(!state.posts.length)
      fetchPost();

  },[]);




  return (
    <div className='post-container'>
      {state.posts.reverse().slice(0,8).map(post =>(
        <Post theme={theme} post={post} key={post._id}/>

      ))
      }
{/* .reverse().slice(0,8) */}

    </div>
  )
}

export default Posts