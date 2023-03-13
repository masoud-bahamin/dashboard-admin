import React from 'react'

export default function MenuItem({title , href ,children , className}) {
    return (
        <div className={`d-flex align-items-center py-3 fw-500 pointer ${className}`}>
            {children}
            <p className=' fs-14 ms-2 p-color1  hover-gold'>{title}</p>
        </div>
    )
}
