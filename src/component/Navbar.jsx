import React from 'react'
import image from '../download.png'
import { Link} from 'react-router-dom' 
const Navbar = () => {
  return (
    <div className='flex border items-center py-4 pl-5 space-x-10'>
        <img src={image} alt=""/>
        <div className='font-bold text-2xl text-blue-500 pointer'>
        Movies
          </div>
        <div className='font-bold text-2xl text-blue-500 pointer'>Favourites</div>
    </div>
  )
}

export default Navbar