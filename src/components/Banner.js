import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import axios from '../api/axios';
import requests from '../api/Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  },[]);

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + '...' : string
  };

  return (
    <header 
      className='banner'
      style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition:'center center',
      }}
    >
      <div className='banner__content'>
        <h1 className='banner__title'>{
          movie?.title || movie?.name || movie?.original_name
        }</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {
            truncate(movie?.overview,150)
          }
        </h1>
      </div>

      <div className='banner__fadeBottom'/>
    </header>
  )
}

export default Banner
