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
        <>
            <div className='cardComponentContainer'>
                <img className='cardComponentContainer__photo' src={photo} alt={title} />
                {superHost?<button>Super host</button>:null}
    
                <span>
                    {`${type}`}
                    {beds!==null?` . ${beds}`:''}</span>
                <span>{` X ${rating}`}</span>
                <h2>{title}</h2>
            </div>
        </>

    );
}

export {Card};