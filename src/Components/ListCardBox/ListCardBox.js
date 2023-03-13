import React from 'react'

export default function ListCardBox({ name, title, img, pr, data }) {
    return (
        <>
            {data === "list" ? (
            <div className='col-sm-12 overflow-x-hidden'>
                <div className='row p-4 bg-white rounded-15p mt-4 align-items-center'>
                    <p className='mb-2 col-md-5 col-sm-6 col-6 hover-gold fw-600 pointer'>{name}</p>
                    <p className='mb-2 col-md-2 col-sm-3 col-3 fs-12 p-color4'>{title}</p>
                    <p className='mb-2 col-md-2 col-sm-3 col-3 fs-12 p-color4'>14.07.2021</p>
                    {pr ? (
                        <button className='mb-2 col-md-2 col-sm-4 col-4 btn btn-light btn-sm bg-gold4 text-white rounded-25p fs-12'> PROCESSED</button>)
                        : (<button className='mb-2 col-md-2 col-sm-4 col-4 btn btn-sm border-gold rounded-25p fs-12'> ON HOLD</button>)}
                    <div className='mb-2 col-md-1 col-sm-4 col-8  text-end'>
                        <input type="checkbox" />
                    </div>
                </div>
                </div>
            ) : data === "thumb" ? (
                <div className='row bg-white rounded-15p mt-4 align-items-center overflow-x-hidden'>
                    <div className='col-lg-1 mb-2 col-md-1 col-sm-2 col-xs-12 mt-2'>
                        <img className=' ' src={`/img/${img}`} style={{width:"100%"}}/>
                    </div>               
                    <p className='col-lg-3 mb-2 col-md-3 col-sm-2 col-3 hover-gold fw-600 pointer'>{name}</p>
                    <p className='col-lg-2 mb-2 col-md-2 col-sm-2 col-2 fs-12 p-color4'>{title}</p>
                    <p className='col-lg-2 mb-2 col-md-2 col-sm-2 col-3 fs-12 p-color4'>14.07.2021</p>
                    {pr ? (
                        <button className='col-lg-2 mb-2 col-md-2 col-sm-3 col-3 btn btn-light btn-sm bg-gold4 text-white rounded-25p fs-12'> PROCESSED</button>)
                        : (<button className='col-lg-2 mb-2 col-md-2 col-sm-3 col-3 btn btn-sm border-gold rounded-25p fs-12'> ON HOLD</button>)}
                    <div className='col-lg-2 mb-2 col-md-1 col-sm-1 col-1 text-end'>
                        <input type="checkbox" />
                    </div>
                </div>
            ) : (
                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mt-3 overflow-x-hidden'>
                    <div className='bg-white rounded-15p'>
                        <img className='w-100' src={`/img/${img}`} />
                        <div className='p-3'>
                            <p className=' hover-gold fw-600 pointer mb-3'>{name}</p>
                            <p className=' fs-12 p-color4 mb-2'>{title}</p>
                            <p className=' fs-12 p-color4'>14.07.2021</p>
                        </div>
                        <div className='d-flex p-3 align-items-center'>
                            {pr ? (
                                <button className=' btn btn-light btn-sm bg-gold4 text-white rounded-25p fs-12'> PROCESSED</button>)
                                : (<button className=' btn btn-sm border-gold rounded-25p fs-12'> ON HOLD</button>)}
                            <div className=' text-center ms-auto'>
                                <input type="checkbox" />
                            </div>
                        </div>

                    </div>
                </div>
            )}


        </>
    )
}
