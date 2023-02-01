import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Circles} from  'react-loader-spinner'
const Banner = () => {

   const [banner, setbanner] = useState("");
  useEffect(() => {
    function getdata() {
      axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=d8a12436331dbedb53dd0b0f090fbdef&page=5").then((res) => 
      {
        setbanner(res.data.results[0]);
       });
    }
    getdata();
  }, [])

  return (
    <>
    {
      (banner==="")?
      <div className='flex justify-center align-middle m-8'><Circles
      height="80"
      width="80"
      color="gray"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /> </div>
    :

      <div className='bg-banner h-[60vh] md:h-[100vh] bg-center bg-cover flex items-end' 
      style={{
        backgroundImage:
            `url(
                https://image.tmdb.org/t/p/original/t/p/original/${banner.backdrop_path})`
    }}>
        <div className='md:text-2xl w-full text-xl
         text-white bg-gray-400 p-4
          bg-opacity-60 text-center'>M3GAN</div>
      </div> 
    }
    </>
  )
}

export default Banner