import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MainContext from '../../Context'
import Dropdown from '../Dropdown/Dropdown'
import "./Header.css"
import logo from "./../../img/l-1.jpg"

export default function Header() {

    const [show, setShow] = useState("")

    const [width, setWindowWidth] = useState(window.innerWidth)

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    }, [])

    const { setMainMenu } = useContext(MainContext)

    const menuHandler = () => {
        setMainMenu(prev => {
            if (prev < 2) {
                return prev + 1
            } else {
                return 0
            }
        })
    }

    return (
        <>
            {width > 850 ? (
                <div className='main-container py-4 border-bottom header-container bg-white z-3'
                    onClick={() => setShow("")}
                >
                    <div className='row align-items-center'>
                        <div className=' col-xl-4 col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                            <div className='d-flex align-items-center justify-content-around'>
                                <svg onClick={menuHandler}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <div className="input-group  rounded-25p bg-l align-items-center d-flex w-75">
                                    <input type="text" className="form-control border-none rounded-25p bg-l fs-12" placeholder="Search" />
                                    <button className="btn btn-outline-secondary rounded-25p border-none" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='position-relative d-none-450'>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        setShow("lan")
                                    }}
                                        className='btn btn-light py-2 px-3 rounded-25p p-color4 fs-12'>
                                        EN
                                        <i className='bx bx-chevron-down ms-1 '></i>
                                    </button>
                                    <div className={show === "lan" ? 'bd-white py-2 shadow-sm border rounded dropdown-show' : 'bd-white py-2 shadow-sm border rounded dropdown-close'}>
                                        <ul>
                                            <li className='list-item'>English</li>
                                            <li className='list-item'>Espanol</li>
                                            <li className='list-item'>Turkish</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src='/img/bahamino.png' className='w-25' />
                            </div>
                        </div>
                        <div className=' col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-none-450'>
                            <div className='d-flex align-items-center justify-content-around'>
                                <div className="form-check form-switch d-flex align-items-center ms-5 pointer">
                                    <input className="form-check-input header-form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                </div>
                                <div className='position-relative'>
                                    <svg onClick={(e) => {
                                        e.stopPropagation()
                                        setShow("gallery")
                                    }}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                    </svg>
                                    <div className={show === "gallery" ? 'bd-white py-2 shadow-sm border rounded dropdown-show' : 'bd-white py-2 shadow-sm border rounded dropdown-close'}>
                                        <div className='d-flex flex-wrap' style={{ width: 210 }}>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>Dashboards</p>
                                            </div>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>Pages</p>
                                            </div>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>Applications</p>
                                            </div>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>UI</p>
                                            </div>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>Menu</p>
                                            </div>
                                            <div
                                                className='hover-gold p-4 p-color3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-50">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                </svg>
                                                <p className='fw-600 fs-14 mt-2'>Blank Page</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='position-relative'>
                                    <svg onClick={(e) => {
                                        e.stopPropagation()
                                        setShow("notif")
                                    }}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                    <div className={show === "notif" ? 'bd-white py-2 shadow-sm border rounded dropdown-show' : 'bd-white py-2 shadow-sm border rounded dropdown-close'}>
                                        <ul>
                                            <li className='list-item'>
                                                Joisse Kaycee just sent a new comment!

                                                09.04.2018 - 12:45
                                            </li>
                                            <li className='list-item'>
                                                Joisse Kaycee just sent a new comment!

                                                09.04.2018 - 12:45
                                            </li>
                                            <li className='list-item'>
                                                New order received! It is total $147,20.

                                                09.04.2018 - 12:45
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                                <div className='position-relative'>
                                    <div className='d-flex align-items-center justify-content-around pointer'
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setShow("profile")
                                        }}
                                    >
                                        <span className='fs-12 me-2'>Sarah Kortney</span>
                                        <img src={logo} className='img-40 rounded-50' />
                                    </div>
                                    <div className={show === "profile" ? 'bd-white py-2 shadow-sm border rounded dropdown-show' : 'bd-white py-2 shadow-sm border rounded dropdown-close'}>
                                        <ul>
                                            <li className='list-item'>Account</li>
                                            <li className='list-item'>Feachers</li>
                                            <li className='list-item'>History</li>
                                            <li className='list-item'>Suport</li>
                                            <hr />
                                            <li className='list-item'>Sign out</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='main-container py-2 border-bottom header-container-mobil bg-white z-3'>
                    <div className=' d-flex align-items-center justify-content-around'>
                        <svg onClick={menuHandler}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <button className="btn btn-outline-secondary rounded-25p border-none" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                        </div>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </div>
                        <div >
                            <img src='/img/l-1.jpg' className='img-40 rounded-50' />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
