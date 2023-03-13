import React, { useState } from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import ListCardBox from '../../Components/ListCardBox/ListCardBox'
import Pagination from '../../Components/Pagination/Pagination'

export default function ThumbList() {

    const [showData , setShowData] = useState("thumb")

    return (
        <>
            <Breadcramp title="Data List" subTitle="Product" sub="Data List" />
            <div className='main-container bg-main mt-3'>
                <div className='row border-bottom py-3'>
                    <div className='col-lg-2'>
                        <svg onClick={() => setShowData("list")}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className={showData === "list" ? "color-gold4 svg-30 me-2 pointer hover-gold w-6 h-6" : "svg-30 me-2 pointer hover-gold w-6 h-6"} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg onClick={() => setShowData("thumb")}
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className={showData === "thumb" ? "color-gold4 svg-30 me-2 pointer hover-gold w-6 h-6" : "svg-30 me-2 pointer hover-gold w-6 h-6"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                        <svg onClick={() => setShowData("img")}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className={showData === "img" ? "color-gold4 svg-30 me-2 pointer hover-gold w-6 h-6" : "svg-30 me-2 pointer hover-gold w-6 h-6"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                    </div>
                    <div className='col-lg-8 d-flex'>
                        <select className='form-select w-25 fs-12 rounded-25p bg-main'>
                            <option>Order By : Product Name </option>
                        </select>
                        <div class="input-group  rounded-25p align-items-center d-flex w-25 fs-12 ms-2 border">
                            <input type="text" class="form-control border-none rounded-25p bg-l fs-12" placeholder="Search" />
                            <button class="btn btn-outline-secondary rounded-25p border-none" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-2 d-flex align-items-center'>
                        <p className='fs-12 me-2'>0-8 of 20</p>
                        <select className='form-select w-50 fs-12 rounded-25p bg-main'>
                            <option>8</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <ListCardBox name="Benita" title="Dessert" pr={true} img="1.jpg" data={showData}/>
                    <ListCardBox name="Lavren" title="Cake" pr={false} img="2.jpg" data={showData}/>
                    <ListCardBox name="Manio" title="Cake" pr={true} img="3.jpg" data={showData}/>
                    <ListCardBox name="Roberto" title="Dessert" pr={true} img="4.jpg" data={showData}/>
                </div>
                <div className='my-3'>
                    <Pagination />
                </div>
            </div>
        </>
    )
}
