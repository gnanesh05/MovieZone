import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
import { img_300 } from '../../config';
import './Card.css'

function Card({id,name,poster,media_type,vote_average, release_date}) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = ()=>{
    navigate(`${location.pathname!=='/' ? location.pathname : media_type==='tv'?'tvshows':'movies'}/${id}`);
  }
  
  return (
    <div className='card' onClick={handleClick}>
        <img className='poster' src={`${img_300}/${poster}`} alt="Image not available" />
        <b className='title'>{name}</b>
        <span className='sub-title'>
            <p className='mediatype'>{media_type === 'tv'?'TV':'Movie'}</p>
            <p className='date'>{release_date}</p>
            <p className="rating"> {vote_average} <GradeIcon/> </p>
        </span>
    </div>
  )
}

export default Card