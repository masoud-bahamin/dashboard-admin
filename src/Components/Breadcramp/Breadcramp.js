import React from 'react'

export default function Breadcramp({ title, subTitle, sub }) {
    return (
        <div className='main-container '>
            <div className='d-flex pt-4 pb-3 align-items-end border-bottom'>
                <p className='fs-3'>{title}</p>
                <p className='p-2 fs-14 pointer hover-gold ms-3 d-none-450'>Home</p>
                <p className='p-2 fs-14 pointer hover-gold d-none-450'>|</p>
                <p className='p-2 fs-14 pointer hover-gold d-none-450'>{subTitle}</p>
                <p className='p-2 fs-14 pointer hover-gold d-none-450'>|</p>
                <p className='p-2 fs-14  d-none-450'>{sub}</p>
            </div>
        </div>
    )
}
