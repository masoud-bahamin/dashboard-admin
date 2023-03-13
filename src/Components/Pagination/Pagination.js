import React from 'react'

export default function Pagination() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <div>
        <button className='btn btn-light bg-gold4 text-white rounded-25p px-3 mx-3'>&#10092;</button>
            <span className='border-gold rounded-50 py-1 px-2  me-3'>1</span>
            <span className='me-3'>2</span>
            <span className='me-3'>3</span>
            <span className='me-4'>4</span>
            <button className='btn btn-light bg-gold4 text-white rounded-25p px-3 '>&#10093;</button>
        </div>
    </div>
  )
}
