import React from 'react'

export default function Message({ message, img, how }) {
    return (
        <>
            {how == 1 ? (
                <div className='bg-white rounded-15p p-3 mb-3 me-2' style={{ width: "fit-content" }}>
                    <div className="d-flex">
                        <span className='fs-12 p-color4 ms-auto'>9:14</span>
                    </div>
                    <div className='d-flex p-1'>
                        <img src={`/img/${img}`} className='img-40 rounded-50 me-3' />
                        <div>
                            <p className=''>Linn Ronning</p>
                            <p className='fs-14 p-color-4 mt-1 lh-sm'>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='bg-white rounded-15p p-3 mb-3 ms-auto me-2' style={{ width: "fit-content" }}>
                    <div className="d-flex">
                        <span className='fs-12 p-color4 me-auto'>9:14</span>
                    </div>
                    <div className='d-flex p-1'>
                        <p className='fs-14 p-color-4 mt-1 lh-sm pe-3'>
                            {message}
                        </p>
                        <img src={`/img/l-1.jpg`} className='img-40 rounded-50 ms-3' />
                    </div>
                </div>
            )}
        </>
    )
}
