import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = (props) => {

   return (
        <article className='event-information'>
            <img src={props.image} alt={props.name} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.name}</h3>
                    
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> {props.duration}
                    </p>
                    
                    {props.description && <p className="description">{props.description}</p>}
                </div>
            </div>
        </article>
    )
}

export default Event