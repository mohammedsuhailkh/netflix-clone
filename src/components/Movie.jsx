import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import video from "../vedios/videoplayback.mp4";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import YouTube from 'react-youtube'


const Movie = ({item}) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false);
    const [isHovered, setisHovered] = useState(false);



  return (
    


    <div
    onMouseEnter={()=> setisHovered(true)}
    onMouseLeave={()=> setisHovered(false)}
    className='w-[160px] sm:w-[280px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      
      
    <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
   
    <div>
    {/* <p className='white-space-normal text-xs md:text-sm font-bold  '>{item?.title}</p> */}
    <video className='w-full h-auto block' src={video} autoPlay loop controls muted 
     />
   {/* <YouTube videoId="2g811Eo7K8U" className='w-full h-auto block' />; */}

    </div>
    
    <p>{like ? <FaHeart onClick={console.log('haii')} className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
    
    </div>
    </div>
  )
}

export default Movie
