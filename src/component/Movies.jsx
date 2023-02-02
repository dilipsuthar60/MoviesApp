import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Favourites';
const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hovered, sethovered] = useState("")
  const [favourite, setfavourite] = useState([]);
  const nextpage = () => {
    setpage(page + 1);
  }
  const prevpage = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  }
  const showemoji = (id) => {
    sethovered(id);
  }
  const removeemoji = () => {
    sethovered("");
  }
  const addfav = (id) => {
    let newfav = [...favourite, id];
    setfavourite(newfav);
  }
  const removefav = (id) => {
    let newfav = favourite.filter((element) => id !== element);
    setfavourite(newfav);
  }

  useEffect(() => {
    function getdata() {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=d8a12436331dbedb53dd0b0f090fbdef&page=${page}`).then((res) => {
        setmovies(res.data.results);
      });
    }
    getdata();
  }, [page])


  return (
    <div className='movies'>
      <div className='font-bold text-2xl text-center '>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
        {
          movies.length === 0 ? <h1>Loading our data ...</h1> :
            movies.map((element) => {
              return (
                <div onMouseOver={() => showemoji(element.id)}
                  onMouseLeave={() => removeemoji()}
                  key={element.id} className="flex items-end border bg-center 
              bg-cover w-[160px] h-[30vh] md:h-[40vh] 
              md:w-[190px] m-4 rounded-xl hover:scale-110 duration-300 relative" style={{
                    backgroundImage:
                      `url(
                    https://image.tmdb.org/t/p/original/t/p/w500/${element.poster_path})`
                  }}>


                  {
                    favourite.includes(element.id) === false ?
                      <div onClick={() => addfav(element.id)} className='pointer absolute top-2 right-2 bg-gray-900 p-1.5 rounded-xl text-2xl
                    ' style={{ display: (hovered === element.id) ? "block" : "none" }}>
                        😍
                      </div>
                      : <div onClick={() => removefav(element.id)} className='pointer absolute top-2 right-2 bg-gray-900 p-1.5 rounded-xl text-2xl
                    ' style={{ display: (hovered === element.id) ? "block" : "none" }}>
                        ❌
                      </div>

                  }






                  <div className='w-full font-bold text-white
               bg-gray-900 p-2 bg-opacity-60
                text-center rounded-b-xl'>{element.title || element.name}</div>
                </div>
              );

            })
        }
      </div>
      <Pagination page={page} nextpage={nextpage} prevpage={prevpage} />
    </div>
  )
}

export default Movies