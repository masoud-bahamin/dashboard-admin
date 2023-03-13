import React from 'react'

export default function TicketBox({title , img}) {
    return (
        <div className='d-flex  align-items-center mb-3 border-bottom pb-3'>
            <img className='img-50 rounded-50' src={`/img/${img}`} />
            <div className='ms-3'>
                <p className='mb-2 p-color4 '>{title}</p>
                <p className='p-color4 fs-12'>09.05.2021 - 12:45</p>
            </div>
        </div>
    )
}
