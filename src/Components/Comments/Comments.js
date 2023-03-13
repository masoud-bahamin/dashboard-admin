import React from 'react'

export default function Comments({title , img , details , className}) {
  return (
    <div className={`d-flex  align-items-center mb-3 pb-3 ${className}`}>
            <img className='img-50 rounded-50' src={`/img/${img}`} />
            <div className='ms-3'>
                <p className='mb-2 '>{title}</p>
                <p className='p-color4 fs-12'>{details}</p>
            </div>
        </div>
  )
}
