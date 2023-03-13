import React from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import Comments from '../../Components/Comments/Comments'
import FlexCardBox from '../../Components/FlexCardBox/FlexCardBox'
import LogBox from '../../Components/LogBox/LogBox'
import NormalBox from '../../Components/NormalBox/NormalBox'
import Pagination from '../../Components/Pagination/Pagination'
import BigProgressBox from '../../Components/ProgressBox/BigProgressBox'
import ProgressBox from '../../Components/ProgressBox/ProgressBox'
import TicketBox from '../../Components/TicketBox/TicketBox'
import "./Content.css"

export default function Content() {
    return (
        <>
            <Breadcramp title="Content" subTitle="Dashboard" sub="Content" />
            <div className='main-container bg-main mt-3'>
                <div className='row'>
                    <div className='col-md-6 p-3'>
                        <div className='d-flex justify-content-between mb-4 row'>
                            <NormalBox title="Pending Orders" number={23}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </NormalBox>
                            <NormalBox title="Completad Orders" number={17} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                </svg>

                            </NormalBox>
                            <NormalBox title="Refund Requests" number={76} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>

                            </NormalBox>
                        </div>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Quick Post</h5>
                            <form class="dashboard-quick-post"><div class="row form-group">
                                <label class="col-sm-3 col-form-label">Title</label>
                                <div class="col-sm-9">
                                    <input name="text" type="text" class="form-control" />
                                </div>
                            </div>
                                <div class="row form-group">
                                    <label class="col-sm-3 col-form-label">Content</label>
                                    <div class="col-sm-9">
                                        <textarea rows="3" class="form-control my-4"></textarea>
                                    </div>
                                </div>
                                <div class="row form-group ">
                                    <label class="col-sm-3 col-form-label">Category</label>
                                    <div className='col-sm-9 mb-4'>
                                        <select className='form-select  '>
                                            <option>number one</option>
                                        </select>
                                    </div>

                                </div>
                                <div className='d-flex'>
                                    <button class="ms-auto btn btn-primary bg-gold4 border-gold rounded-25p">Save and Publish</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className='col-md-6 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Best Sellers</h5>
                            <table className='table fs-14'>
                                <thead>
                                    <tr className='fw-600'>
                                        <th>Name</th>
                                        <th>Sales</th>
                                        <th>Stock</th>

                                    </tr>
                                </thead>
                                <tbody className='p-color4'>
                                    <tr>
                                        <td><span>Marble Cake</span></td>
                                        <td><span>1743</span></td>
                                        <td><span>53</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Fat Rescal</span></td>
                                        <td><span>1541</span></td>
                                        <td><span >96</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Chocolate Cake</span></td>
                                        <td><span>1350</span></td>
                                        <td><span>36</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Goose Breast</span></td>
                                        <td><span>1124</span></td>
                                        <td><span>47</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Petit Breast</span></td>
                                        <td><span>924</span></td>
                                        <td><span>37</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Petit Breast</span></td>
                                        <td><span>924</span></td>
                                        <td><span>37</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Petit Breast</span></td>
                                        <td><span>924</span></td>
                                        <td><span>37</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Petit Breast</span></td>
                                        <td><span>924</span></td>
                                        <td><span>37</span></td>
                                    </tr>


                                </tbody>
                            </table>
                            <Pagination />
                        </div>
                    </div>
                </div>
                <div className='row h-100'>
                    <div className='col-md-4 p-3 '>
                        <div className='bg-white p-4 rounded-25p shadow-sm  h-400'>
                            <h5 className='h5 py-3 fw-600'>Cakes</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Fruitcake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Chocolate Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Fat Rascal</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Financier</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Genoise</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Gingerbread</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Goose Breast</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Parkin</p>

                                </div>
                                <div className='col-6'>
                                    <p className='py-1 fs-14 hover-gold pointer'>Streuselkuchen</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Tea Loaf</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Napoleonshat</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Magdalena</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Salzburger Nock</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Napoleonshat</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Bebinca</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Marble Cake</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Salzburger Nockerl</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Napoleonshat</p>
                                    <p className='py-1 fs-14 hover-gold pointer'>Bebinca</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm overflow-y-scroll scroll h-400'>
                            <h5 className='h5 py-3 fw-600'>New Comments</h5>
                            <Comments className="border-bottom" title="Very informative content, thank you." img="l-1.jpg" details="Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18" />
                            <Comments className="border-bottom" title="Your post is bad and you should feel bad" img="l-2.jpg" details="Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45" />
                            <Comments className="border-bottom" title="This article was delightful to read. Please keep them coming." img="l-3.jpg" details="Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20" />
                            <Comments className="border-bottom" title="Very informative content, thank you." img="l-4.jpg" />
                            <Comments className="border-bottom" title="Your post is bad and you should feel bad" img="l-5.jpg" details="Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18" />
                        </div>
                    </div>
                </div>

                <div className='row '>
                    <BigProgressBox number={3} title="5 Post" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-75 text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </BigProgressBox>
                    <BigProgressBox number={5} title="14 User" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-75 text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </BigProgressBox>
                    <BigProgressBox number={2} title="8 Alert" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-75 text-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </BigProgressBox>
                </div>


            </div>
            
        </>
    )
}
