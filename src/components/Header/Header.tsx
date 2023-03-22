import React, { useState } from 'react';

import './headerComponent.scss'


const Header = ()=>{

    const [city,setCity] = useState<string>('');
    const [adults,setAdults] = useState<number>(0);
    const [children,setChildren] = useState<number>(0);

    const changeCity = (cityName:string):void=>{
 
        setCity(cityName);
 
    }



    return(
        
        <header className='headerComponent'>
            <span className='headerComponent__logo' >X windbnb</span>
            
            <div className='headerComponent__inputs'> 
                <div className='headerComponent__location'>
                    <input type="text" readOnly value={`${city}, Finland`}/>
                    <button onClick={()=>changeCity('Helsinki')}>Helsinki, Finland</button>
                    <button onClick={()=>changeCity('Turku')}>Turku, Finland</button>
                    <button onClick={()=>changeCity('Oulu')}>Oulu, Finland</button>
                    <button onClick={()=>changeCity('Vaasa')}>Vaasa, Finland</button>
                </div>

                <div className="headerComponent__guests">
                    <input
                        onKeyDown={(event) => {
                            console.log(event.key);
                            if (!/[0-9]|Backspace|ArrowLeft|ArrowRight/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}
                        value={`${adults+children}`}
                    />
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
                </div>
            </div>
        </header>

    );
}

export {Header};