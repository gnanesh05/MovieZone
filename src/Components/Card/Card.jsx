import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { img_300 } from '../../config';
import './Card.css'

function Card({name,poster,media_type,vote_average, release_date}) {
  return (
    <div className='card'>
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