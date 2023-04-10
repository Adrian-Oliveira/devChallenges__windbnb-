import React, { useState,FC } from 'react';

import './headerComponent.scss'


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
                        className={`headerComponent__location 
                                ${inputLocationFocused||inputGuestsFocused?
                                    'headerComponent__location--focused':''
                                }
                                ${inputLocationFocused?
                                    'headerComponent__location--choosingLocation':''
                                }
                                    `}
                        onFocus={()=>{setInputLocationFocused(true);setInputGuestsFocused(false)}}>
                        
                        {(inputLocationFocused||inputGuestsFocused) &&
                                    <span className='headerComponent__location__helpText'>
                                        location
                                    </span>
                        }

                        <input 
                        type="text" 
                        readOnly 
                        className='headerComponent__location__input'
                        value={!!city?`${city}, Finland`:''}
                        placeholder='Add location'/>

                    </div>

                    <div className={`headerComponent__guests 
                                    ${inputLocationFocused||inputGuestsFocused?
                                        'headerComponent__guests--focused':''
                                    }
                                    ${inputGuestsFocused?
                                        'headerComponent__guests--choosingGuests':''
                                    }
                        `}>
                        
                        {(inputLocationFocused||inputGuestsFocused) &&
                                    <span className='headerComponent__guests__helpText'>Guests</span>
                        }
                        
                        <input
                            className='headerComponent__guests__input' 
                            readOnly
                            value={(adults+children)===0?'':`${adults+children} guests`}
                            onFocus={()=>{setInputGuestsFocused(true);setInputLocationFocused(false)}}
                            placeholder='Add guests'
                        />
                    </div>

                    <button 
                        onClick={filterStays} 
                        className={`headerComponent__searchButton 
                                    ${inputLocationFocused||inputGuestsFocused?
                                        'headerComponent__searchButton--focused':''
                                    }
                        `}>
                        <i 
                            className={`material-icons md-18 headerComponent__searchButton__icon
                            ${inputLocationFocused||inputGuestsFocused?
                                ' headerComponent__searchButton__icon--focused':''
                            }
                            `}
                        >
                            search
                        </i>

                        {(inputLocationFocused||inputGuestsFocused) &&
                                    <span className='headerComponent__searchButton__text'>
                                        Search      
                                    </span>
                        }
                    </button>
                </div>
                

                {(inputLocationFocused||inputGuestsFocused) &&
                                    
                <div className='headerComponent__options'>
                    <div className='headerComponent__options__location'>
                        {inputLocationFocused && 
                        <>
                        <button onClick={()=>changeCity('Helsinki')}>
                            <span className="material-icons">
                            location_on
                            </span>Helsinki, Finland
                        </button>
                        <button onClick={()=>changeCity('Turku')}>
                            <span className="material-icons">
                                location_on
                            </span>
                            Turku, Finland
                        </button>
                        <button onClick={()=>changeCity('Oulu')}>
                            <span className="material-icons">
                                location_on
                            </span>
                            Oulu, Finland
                        </button>
                        <button onClick={()=>changeCity('Vaasa')}>
                            <span className="material-icons">
                                location_on
                            </span>
                            Vaasa, Finland
                        </button>
                        </>
                        } 
                    </div>

                    <div className='headerComponent__options__guests'>
                        {inputGuestsFocused && 
                            <>
                            <div>
                                <div className='headerComponent__options__guests__label'>Adults</div>
                                <div className='headerComponent__options__guests__helpText'>Ages 13 or above</div>
                                <button onClick={()=>{adults>0?setAdults((prev)=>prev-1):null}}>-</button>
                                <span className='headerComponent__options__guests__number'>{`${adults}`}</span>
                                <button onClick={()=>{setAdults((prev)=>prev+1)}}>+</button>
                            </div>


                            <div>
                                <div className='headerComponent__options__guests__label'>Children</div>
                                <div className='headerComponent__options__guests__helpText'>Ages 2-12</div>
                                <button onClick={()=>{children>0?setChildren((prev)=>prev-1):null}}>-</button>
                                <span className='headerComponent__options__guests__number'>{`${children}`}</span>
                                <button onClick={()=>{setChildren((prev)=>prev+1)}}>+</button>
                            </div>
                            </>
                        }
                    </div>
                </div>
                }   

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
             
