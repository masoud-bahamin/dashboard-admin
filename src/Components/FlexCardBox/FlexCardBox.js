import React from 'react'

export default function FlexCardBox({img , title}) {
  return (
    <div className='d-flex align-items-center my-2'>
        <div>
            <img src={`/img/${img}`} className="img-100 rounded-15p me-3"/>
        </div>
        <div>
            <h6 className='h6 mb-3 fw-600'>{title}</h6>
            <p className='p-color-4 fs-12 mb-1'>Wedding cake with flowers Macarons and blueberries</p>
            <p className='color-gold4 fs-12'>01.05.2020</p>
        </div>
    </div>
  )
}
