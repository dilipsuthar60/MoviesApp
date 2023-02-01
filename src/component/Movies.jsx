import React from 'react'
import axios  from 'axios';
import { useEffect,useState} from 'react';
import Pagination from './Pagination';
const Movies = () => 
{
  const [movies, setmovies] = useState([]);
  const [page,setpage]=useState(1); 
  const nextpage=()=>{
    setpage(page+1);
  }
  const prevpage=()=>{
    if(page>1)
    {
      setpage(page-1);
    }
  }
  useEffect(()=>{
    function getdata()
    {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=d8a12436331dbedb53dd0b0f090fbdef&page=${page}`).then((res)=>{
        setmovies(res.data.results);
      });
    }
    getdata();
  },[page])


  return (
    <div className='movies'>
      <div className='font-bold text-2xl text-center '>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
        {
          movies.length===0?<h1>Loading our data ...</h1>:
          movies.map((element,index)=>{
            return (
              <div key={element.id} className="flex items-end border bg-center 
              bg-cover w-[160px] h-[30vh] md:h-[40vh] 
              md:w-[190px] m-4 rounded-xl hover:scale-110 duration-300" style={{
                backgroundImage:
                    `url(
                    https://image.tmdb.org/t/p/original/t/p/w500/${element.poster_path})`
            }}> 
              <div className=' w-full font-bold text-white
               bg-gray-400 p-2 bg-opacity-60
                text-center rounded-b-xl'>{element.title||element.name}</div>
              </div> 
            );
          
          })
        }
      </div>
      <Pagination page={page} nextpage={nextpage} prevpage={prevpage}/>
    </div>
  )
}

export default Movies