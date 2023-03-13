import React from 'react'
import "./Modals.css"

export default function RightModal({ title, children ,setShowRightModal}) {
    return (
        <div className='right-modal-container'>
            <div className='right-modal-main'>
                <div className='d-flex mb-4 pb-3 border-bottom'>
                    <h4 className='h5 fw-600'>ADD { title}</h4>
                    <button onClick={() => setShowRightModal(false)}
                    className='btn btn-close ms-auto'></button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
