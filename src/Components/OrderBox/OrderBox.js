import React from 'react'

export default function OrderBox({ name, title, pr, data }) {
    return (
        <div className='row p-4 bg-white rounded-15p mt-4 align-items-center'>
            <p className='col-lg-5 col-md-3 col-sm-3 col-xs-6 col-6 mb-3 hover-gold fw-600 pointer'>{name}</p>
            <p className='col-lg-3 col-md-3 col-sm-3 col-xs-6 col-6 mb-3 fs-12 p-color4'>{title}</p>
            <p className='col-lg-3 col-md-3 col-sm-3 col-xs-6 col-6 mb-3 fs-12 p-color4'>14.07.2021</p>
            {pr ? (
                <button className='col-lg-1 col-md-2 col-sm-3 col-xs-6 col-6 mb-3 btn btn-light btn-sm bg-gold4 text-white rounded-25p fs-12'> PROCESSED</button>)
                : (<button className='col-lg-1 col-md-2 col-sm-3 col-xs-6 col-6 mb-3 btn btn-sm border-gold rounded-25p fs-12'> ON HOLD</button>)}
        </div>
    )
}
