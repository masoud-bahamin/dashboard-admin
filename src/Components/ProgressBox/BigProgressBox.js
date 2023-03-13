import React, { Children } from 'react'
import Progress from '../Progress/Progress'

export default function BigProgressBox({number , title , children}) {
  return (
    <div className='col-md-4  py-5 px-3'>
        <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-gold1'>
            <div>
                {children}
                <h5 className='h5 text-white mt-4'>{title}</h5>
                <p className='text-white fs-14'>Pending for puublish</p>
            </div>
            <div className='ms-auto' >
                <Progress number={number}/>
            </div>
        </div>
    </div>
  )
}
