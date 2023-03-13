import React, { useState } from 'react'
import MenuItem from './MenuItem'

export default function AcordeonListItem({ children , title}) {

    const [show, setShow] = useState(true)

    return (

        <div className='mb-4'>
            <div onClick={() => setShow(prev => !prev)}
                className='d-flex mb-3 acardeon-pages-items p-color4 pointer'>
                <i className='bx bxs-chevron-down me-2'></i>
                <p>{title}</p>
            </div>

            <div className={show ? "" : "d-none"}>
                {children}
            </div>
        </div>
    )
}
