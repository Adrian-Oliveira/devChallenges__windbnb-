import React, { useState,FC } from 'react';

import './headerComponent.scss'


/* 
interface Props {
    label?:string,
    className?:string,
    placeHolder?:string,
    error?:boolean,
    disabled?: boolean,
    helperText?:string,
    startIcon?:string,
    endIcon?:string,
    value?:string,
    fullWidth?:boolean,
    rows?:number,
    size?:"sm"|"md"|"lg",
} */

type StayType = {
    city:string, 
    country:string,
    superHost:boolean,
    title:string ,
    rating: number,
    maxGuests: number,
    type: string,
    beds: number|null,
    photo:string
}

interface HeaderProps {
    stays: StayType[];
    setStays: (stays: StayType[]) => void;
  }

const Header: FC<HeaderProps>  = ({stays, setStays}) => {

    const [city,setCity] = useState<string>('');
    const [adults,setAdults] = useState<number>(0);
    const [children,setChildren] = useState<number>(0);
    const [inputLocationFocused, setInputLocationFocused] = useState<boolean>(false);
    const [inputGuestsFocused, setInputGuestsFocused] = useState<boolean>(false);


    const changeCity = (cityName:string):void=>{
        setCity(cityName);
    }

    const filterStays = ()=>{
        const filteredStays = stays.filter((stay)=>{
            if(city===''){
                return stay.beds!==null && stay.beds>=(adults+children);
            }
            return stay.city ===city && stay.beds!==null && stay.beds>=(adults+children);
        });
        setStays(filteredStays);
        setInputGuestsFocused(false);
        setInputLocationFocused(false);
    }



    return(
        
        <header className='headerComponent'>
            <span className='headerComponent__logo' >
                windbnb
            </span>
            
            <div className='headerComponent__inputs'> 
                <div 
                className='headerComponent__location'
                onFocus={()=>{setInputLocationFocused(true);setInputGuestsFocused(false)}}>

                    <input 
                    type="text" 
                    readOnly 
                    
                    value={!!city?`${city}, Finland`:''}/>
                    
                    {inputLocationFocused && 
                    <>
                    <button onClick={()=>changeCity('Helsinki')}>Helsinki, Finland</button>
                    <button onClick={()=>changeCity('Turku')}>Turku, Finland</button>
                    <button onClick={()=>changeCity('Oulu')}>Oulu, Finland</button>
                    <button onClick={()=>changeCity('Vaasa')}>Vaasa, Finland</button>
                    </>
                    }

                </div>

                <div className="headerComponent__guests">
                    <input
                        readOnly
                        value={`${adults+children}`}
                        onFocus={()=>{setInputGuestsFocused(true);setInputLocationFocused(false)}}
                    />

                    {inputGuestsFocused && 
                    <>
                    <div>
                        <button onClick={()=>{adults>0?setAdults((prev)=>prev-1):null}}>-</button>
                        <span>{`${adults} adults`}</span>
                        <button onClick={()=>{setAdults((prev)=>prev+1)}}>+</button>
                    </div>

                    <div>
                        <button onClick={()=>{children>0?setChildren((prev)=>prev-1):null}}>-</button>
                        <span>{`${children} children`}</span>
                        <button onClick={()=>{setChildren((prev)=>prev+1)}}>+</button>
                    </div>
                    </>}
                </div>

                <button onClick={filterStays}>SEARCH</button>
            </div>
        </header>

    );
}

export {Header};