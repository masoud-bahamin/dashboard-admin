import React, { useState } from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import AreaChart from '../../Components/Charts/AreaChart'
import { BarChart } from '../../Components/Charts/BarChart'
import PieChart from '../../Components/Charts/PieChart'
import Comments from '../../Components/Comments/Comments'
import OrderBox from '../../Components/OrderBox/OrderBox'
import Progress from '../../Components/Progress/Progress'
import ProgressBox from '../../Components/ProgressBox/ProgressBox'

export default function DetailsAlt() {
    const [tab, setTab] = useState("1")

    return (
        <>
            <Breadcramp title="Chocolate Cake" subTitle="Product" sub="Details Alt" />
            <div className='main-container bg-main mt-3'>
                <div className='d-flex mb-4'>
                    <span onClick={() => setTab("1")}
                        className={`fs-14 pointer hover-gold me-4 ${tab === "1" && "color-gold4"}`}>DETAILS</span>
                    <span onClick={() => setTab("2")}
                        className={`fs-14 pointer hover-gold me-4 ${tab === "2" && "color-gold4"}`}>ORDERS</span>

                </div>{tab === "1" ? (
                    <div className='row'>

                        <div className='col-lg-4 col-md-4 col-sm-6  p-3'>
                            <div className='bg-white rounded-25p shadow-sm mb-4'>
                                <div className="mb-3">
                                    <img src='/img/3.jpg' className='w-100' />
                                </div>
                                <div className='p-3'>
                                    <p className='p-color4 fs-14 mb-3'>Description</p>
                                    <p className='fs-14 p-color3 ms-1 mb-3 lh-sm'>
                                        Vivamus ultricies augue vitae commodo condimentum.
                                        Nullam faucibus eros eu mauris feugiat, eget consectetur tortor tempus.
                                    </p>
                                    <p className='fs-14 p-color3 ms-1 mb-3 lh-sm'>
                                        Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.
                                        Vestibulum ante ipsum primis in
                                        faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.
                                    </p>
                                    <p className='mt-3 mb-1 fs-12 p-color-4'>Rating</p>
                                    <i className='bx bxs-star color-gold4'></i>
                                    <i className='bx bxs-star color-gold4'></i>
                                    <i className='bx bxs-star color-gold4'></i>
                                    <i className='bx bxs-star color-gold4'></i>
                                    <i className='bx bxs-star color-gold4'></i>
                                    <p className='mt-3 mb-1 fs-12 p-color-4'>Price</p>

                                    <p className=' mb-3 fs-14'>$8.14</p>
                                    <p className='p-color4 fs-12 my-2'>Ingredients</p>
                                    <div className='d-flex flex-wrap'>
                                        <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>DESSERT</span>
                                        <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>PASTA</span>
                                        <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>CAKE</span>
                                        <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>ALPANIA</span>
                                    </div>
                                    <p className='mt-3 mb-2 fs-12 p-color-4'>Is Vegan</p>
                                    <p className=' mb-3 fs-14'>No</p>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-white'>
                                    <h5 className='h5'>Order Stutus</h5>
                                    <div className='ms-auto'>
                                        <Progress number={3} />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-white'>
                                    <h5 className='h5'>Sell Stutus</h5>
                                    <div className='ms-auto'>
                                        <Progress number={5} />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-white'>
                                    <h5 className='h5'>Stock Stutus</h5>
                                    <div className='ms-auto'>
                                        <Progress number={1} />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex align-items-center px-3 py-4 rounded-15p bg-white'>
                                    <h5 className='h5'>Cost Stutus</h5>
                                    <div className='ms-auto'>
                                        <Progress number={4} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-8 col-md-8 col-sm-6 p-3'>

                            <div className='row'>
                                <div className='col-lg-6 col-md-12 mb-3'>
                                    <div className='pb-3'>
                                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                                            <BarChart chartTitle="Total Sells FEB" />
                                        </div>
                                    </div>
                                    <div className='pt-3'>
                                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                                            <BarChart chartTitle="Total Orders JUL" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <div className='pb-3'>
                                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                                            <BarChart chartTitle="Total Sells FEB" />
                                        </div>
                                    </div>
                                    <div className='pt-3'>
                                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                                            <BarChart chartTitle="Total Orders JUL" />
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                            <div className='bg-white p-4 rounded-25p shadow-sm my-4'>
                                    <div className='py-2'>
                                        <AreaChart />
                                    </div>
                                </div>

                            <div className='bg-white p-4 rounded-25p shadow-sm mb-4'>
                                <div className='py-2'>
                                    <h5 className='h5 mb-4 fw-600'>New Comments</h5>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-4.jpg" details="Pellentesque quis cursus mauris." />
                                        <div className="ms-auto">
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-5.jpg" details="Pellentesque quis cursus mauris." />
                                        <div className="ms-auto">
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-1.jpg" details="Pellentesque quis cursus mauris." />
                                        <div className="ms-auto">
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                            <i className='bx bxs-star color-gold4'></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>) : (
                    <div>
                        <OrderBox title="Kühndorf, Germany" name="Ken Ballweg"/>
                        <OrderBox title="Toronto, Canada" name="Linn Ronning"/>
                        <OrderBox title="Birmingham, UK" name="Esperanza Lodge" pr="yes"/>
                        <OrderBox title="Toronto, Canada" name="Linn Ronning"/>
                        <OrderBox title="Birmingham, UK" name="Esperanza Lodge" pr="yes"/>
                    </div>
                )}
            </div>

        </>
    )
}
