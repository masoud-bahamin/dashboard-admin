import React, { useState } from 'react'
import "./Dropdown.css"

export default function Dropdown({ toggle, children ,show , setShow}) {

    return (
        <div className='position-relative'>
            <div 
                onClick={(e) =>{ 
                    e.stopPropagation()
                    setShow(prev => !prev)}}
            >
                {toggle}
            </div>
           
                <div className= {show ? 'dropdown-show' : "dropdown-close"}>
                    {children}
                </div>
        </div>
    )
}
