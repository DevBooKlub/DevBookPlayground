import React from 'react'
import "./Posts.scss"
import userOneImg from "../../assets/img/userImg.jpg"
import userTwoImg from "../../assets/img/contactImg.jpg"
import Post from './Post/Post'

function Posts({theme}) {

  const posts = [
    {
      id:1,
      name:"Denis McArdle",
      userId:1,
      profilePic:[userOneImg],

      desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    
    {
      id:2,
      name:"Nigel Nix",
      userId:2,
      profilePic:[userTwoImg],
      postPic:"https://www.bls.gov/careeroutlook/2016/images/space_careers_10.jpg",
      desc: "Lorem quietly emerged earlier this year and has become one of Spotify’s most unique new playlists. Lorem’s curator tells us how (and why) it works."
    },

    {
      id:3,
      name:"Denis McArdle",
      userId:1,
      profilePic:[userOneImg],
      postPic:"https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-768x512.jpg",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },

   
  ]



  return (
    <div className='post-container'>
      {posts.map(post =>(
        <Post theme={theme} post={post} key={post.id}/>

      ))
      }


    </div>
  )
}

export default Posts