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
        
        <div className='headerContainer'>
            <header className={`headerComponent 
                            ${inputLocationFocused||inputGuestsFocused?
                                'headerComponent--focused':''
                            }`
                    }
            >

                {!(inputLocationFocused||inputGuestsFocused) &&
                    <span className={`headerComponent__logo`}>
                        Windbnb
                    </span>
                }
                
                
                <div className={`headerComponent__inputs 
                                ${inputLocationFocused||inputGuestsFocused?
                                    'headerComponent__inputs--focused':''
                                }
                                    `}> 
                    <div 
                    className='headerComponent__location'
                    onFocus={()=>{setInputLocationFocused(true);setInputGuestsFocused(false)}}>

                        <input 
                        type="text" 
                        readOnly 
                        
                        value={!!city?`${city}, Finland`:'Add location'}/>

                    </div>

                    <div className="headerComponent__guests">
                        <input
                            readOnly
                            value={(adults+children)===0?'':`${adults+children} guests`}
                            onFocus={()=>{setInputGuestsFocused(true);setInputLocationFocused(false)}}
                            placeholder='Add guests'
                        />
                    </div>

                    <button onClick={filterStays} className='headerComponent__searchButton'>
                        <i className="material-symbols-outlined material-icons md-18">
                            search
                        </i>
                    </button>
                </div>

            </header>
            
            {(inputLocationFocused||inputGuestsFocused) &&
                <div className='headerOpacity'
                    onClick={()=>{setInputGuestsFocused(false);setInputLocationFocused(false)}}>

                </div>
            }
        </div>

);
}

export {Header};
             

{/*        
                    {inputLocationFocused && 
                    <>
                    <button onClick={()=>changeCity('Helsinki')}>Helsinki, Finland</button>
                    <button onClick={()=>changeCity('Turku')}>Turku, Finland</button>
                    <button onClick={()=>changeCity('Oulu')}>Oulu, Finland</button>
                    <button onClick={()=>changeCity('Vaasa')}>Vaasa, Finland</button>
                    </>
                    } */}


{/*
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
    </>} */}