import React, { useEffect, useState } from 'react'

export default function Slider1() {

    const [altImg, setAltImg] = useState("s1.jpg")
    const [img, setImg] = useState("s1.jpg")
    const [left, setLeft] = useState(0)

    const showImage = (e) => {
        setAltImg(img)
        setLeft(0)
        setImg(e.target.name)
       let timer =  setInterval(() => {
            setLeft(prev => {
                if (prev < 650) {
                    return prev + 5
                } else {
                    clearInterval(timer)
                    return 650
                }
            })
        }, 1);

    }

    return (
        <div>
            <div className='text-center position-relative' style={{ height: 500, width: 650, overflow: "hidden" }}>
                <img src={`/img/${img}`}  className='w-100 rounded-15p'/>
                <img src={`/img/${altImg}`} className="w-100 rounded-15p position-absolute" style={{ left: left }} />
            </div>
            <div>
                <div className='mt-4 text-center'>
                    <img name="s1.jpg"
                    onClick={showImage}
                        src='/img/s1.jpg' className={img === "s1.jpg" ? ` img-75 pointer rounded-15p me-3` : `opacity-50 img-75 pointer rounded-15p me-3`} />
                    <img name="s2.jpg"
                    onClick={showImage}
                        src='/img/s2.jpg' className={img === "s2.jpg" ? ` img-75 pointer rounded-15p me-3` : `opacity-50 img-75 pointer rounded-15p me-3`} />
                    <img name="s3.jpg"
                    onClick={showImage}
                        src='/img/s3.jpg' className={img === "s3.jpg" ? ` img-75 pointer rounded-15p me-3` : `opacity-50 img-75 pointer rounded-15p me-3`} />
                    <img onClick={showImage} name="s4.jpg"
                        src='/img/s4.jpg' className={img === "s4.jpg" ? ` img-75 pointer rounded-15p me-3` : `opacity-50 img-75 pointer rounded-15p me-3`} />
                    <img onClick={showImage} name="s5.jpg"
                        src='/img/s5.jpg' className={img === "s5.jpg" ? ` img-75 pointer rounded-15p me-3` : `opacity-50 img-75 pointer rounded-15p me-3`} />
                </div>
            </div>
        </div>
    )
}
