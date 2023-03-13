import React from 'react'

export default function ContactBox(props) {
    return (
        <div onClick={() => props.setMainChat(props)}
        className='d-flex align-items-center py-3 border-bottom pointer'>
            <img src={`/img/${props.img}`}  className="img-40 rounded-50 me-4"/>
            <p className='fs-14 hover-gold'>{props.name}</p>
        </div>
    )
}
