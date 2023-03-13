import React from 'react'
import Progress from "../Progress/Progress"

export default function ProgressBox({number , title}) {
  return (
    <div className='col-md-3  p-3'>
        <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-white'>
            <h5 className='h5'>{title}</h5>
            <div className='ms-auto'>
                <Progress number={number}/>
            </div>
        </div>
    </div>
  )
}
