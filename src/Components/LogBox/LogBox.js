import React from 'react'

export default function LogBox({ title, time }) {
    return (
        <div className='d-flex  align-items-center mb-3'>
            <div className='d-flex align-items-center'>
                <i class='bx bx-radio-circle color-gold4 '></i>
                <p className='ms-2 p-color4 fs-14'>{title}</p>
            </div>

            <p className='ms-auto p-color4 fs-14'>{time}</p>
        </div>
    )
}
