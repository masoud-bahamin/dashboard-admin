import React from 'react'

export default function NormalBox({ title, number, children }) {
    return (
        <div className='col-lg-4 mb-3'>
            <div className='d-flex justify-content-between align-items-center flex-column bg-white px-3 py-4 rounded-25p shadow-sm'>
                {children}
                <p className='py-3  fs-14 mb-3 p-color4'>{title}</p>
                <h4 className='h3 color-gold4 px-5'>{number}</h4>
            </div>
        </div>
    )
}
