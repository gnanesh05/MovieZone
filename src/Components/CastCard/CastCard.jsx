import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { fetchCredits } from '../../fetchData';
import { img_300, noPicture } from '../../config';
import './CastCard.css';


const CastCard = ({mediaType, id}) =>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetchCredits(id, mediaType);
            setData([...response]);
        }
        fetchData();
    },[])

    const items = data.map((item,i)=>(
        <div key={i} className="carouselItem">
            <img className='carouselItemImg'
            src={item.profile_path? `${img_300}/${item.profile_path}` : noPicture} 
            alt={item.name} />
            <p className='carouselItemName'>{item.name}</p>
            <p className='carouselItemCharacter'>{item.character}</p>
        </div>
    ));

    const responsive = {
        0:{
            items:0,
        },
        512:{
            items:5,
        },
        1024:{
            items:7,
        },
    };

    return(
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
    );
} 

export default CastCard