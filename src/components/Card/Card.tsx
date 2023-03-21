import React from 'react';

import './cardComponent.scss'

interface Props {
    photo:string,
    title:string,
    type:string,
    beds:Number|null,
    rating:Number,
    superHost:boolean
}

const Card = ({photo, title, type, beds, rating,superHost}:Props)=>{

    return(
        
        <div className='cardComponentContainer'>
            <img className='cardComponentContainer__photo' src={photo} alt={title} />
            

            <div className='cardComponentContainer__secundRow'>

                <div className='cardComponentContainer__informationRow' >
                    {superHost?<button className='cardComponentContainer__superHost'>
                        SUPER HOST
                        </button>
                    :null}

                    <span className='cardComponentContainer__typeAndBeds'>
                        {`${type}`}
                        {beds!==null?` . ${beds} beds`:''}
                    </span>
                </div>

                <span className='cardComponentContainer__ratingRow'>
                    <i className="material-icons cardComponentContainer__star">star</i>
                    
                    <span className='cardComponentContainer__rating'>{` ${rating}`}</span> 
                </span>
            </div>

            <h2 className='cardComponentContainer__title'>{title}</h2>
        </div>

    );
}

export {Card};