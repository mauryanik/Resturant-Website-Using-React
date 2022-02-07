import React from 'react'
import './style.css'
const Temp = () => {
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='search...'
                        autoFocus
                        id="search" 
                        className='searchTerm'
                    ></input>
                    <button className='searchButton' type='button'>
                        Search
                    </button>
               </div>
            </div>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={'wi wi-day-sunny'}></i>
                </div>
                <div className='weatherInfo'></div>
            </article>
        </>
        
    )
}
export default Temp;