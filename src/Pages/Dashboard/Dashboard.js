import React, { useContext } from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import AreaChart from '../../Components/Charts/AreaChart'
import PieChart from '../../Components/Charts/PieChart'
import FlexCardBox from '../../Components/FlexCardBox/FlexCardBox'
import Header from '../../Components/Header/Header'
import LogBox from '../../Components/LogBox/LogBox'
import MainSidebar from '../../Components/MainSidebar/MainSidebar'
import NormalBox from '../../Components/NormalBox/NormalBox'
import Pagination from '../../Components/Pagination/Pagination'
import ProgressBox from '../../Components/ProgressBox/ProgressBox'
import TicketBox from '../../Components/TicketBox/TicketBox'
import MainContext from '../../Context'

export default function Dashboard() {

    const {mainMenu} = useContext(MainContext)

    return (
        <>
            <Header />
            <div className='bg-main row'>
                <div className={mainMenu == 1 ?'col-1' : "col-3"}>
                    <MainSidebar />
                </div>
                <div className={mainMenu == 0 ? 'bg-main col-12' : mainMenu == 1 ? 'bg-main col-11' : 'bg-main col-9'} >
                    <>
                        <Breadcramp title="Default" subTitle="Dashboard" sub="Default" />
                        <div className='main-container bg-main mt-3'>
                            <div className='row'>
                                <div className='col-md-6 p-3'>
                                    <div className='d-flex justify-content-between mb-4 row'>
                                        <NormalBox title="Pending Orders" number={14}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </NormalBox>
                                        <NormalBox title="Completad Orders" number={21} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                            </svg>

                                        </NormalBox>
                                        <NormalBox title="Refund Requests" number={48} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-50 color-gold4 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>

                                        </NormalBox>
                                    </div>
                                    <div className='bg-white p-4 rounded-25p shadow-sm'>
                                        <h5 className='h5 py-3 fw-600'>Sells</h5>
                                        <AreaChart />
                                    </div>
                                </div>
                                <div className='col-md-6 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm overflow-y-scroll scroll'>
                                        <h5 className='h5 fw-600 mb-4'>Recent Orders</h5>
                                        <FlexCardBox img="1.jpg" title="Marble Cake" />
                                        <FlexCardBox img="2.jpg" title="Marble Cake" />
                                        <FlexCardBox img="3.jpg" title="Marble Cake" />
                                        <FlexCardBox img="4.jpg" title="Marble Cake" />
                                        <FlexCardBox img="5.jpg" title="Marble Cake" />
                                        <FlexCardBox img="6.jpg" title="Marble Cake" />
                                    </div>
                                </div>
                            </div>
                            <div className='row h-100'>
                                <div className='col-md-4 p-3 '>
                                    <div className='bg-white p-4 rounded-25p shadow-sm  h-400'>
                                        <h5 className='h5 py-3 fw-600'>Product Categories</h5>
                                        <div className=''>
                                            <PieChart />
                                        </div>

                                        {/* <img src='/img/ch2.png' className='w-100' /> */}
                                    </div>
                                </div>
                                <div className='col-md-4 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm overflow-y-scroll scroll h-400'>
                                        <h5 className='h5 py-3 fw-600'>Logs</h5>
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                        <LogBox title="14 products added" time="14:12" />
                                    </div>
                                </div>
                                <div className='col-md-4 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm overflow-y-scroll scroll h-400'>
                                        <h5 className='h5 py-3 fw-600'>Tickets</h5>
                                        <TicketBox title="Mayra Sibley" img="l-1.jpg" />
                                        <TicketBox title="Mimi Carreira" img="l-2.jpg" />
                                        <TicketBox title="Philip Morgan" img="l-3.jpg" />
                                        <TicketBox title="Teresi Milona" img="l-4.jpg" />
                                        <TicketBox title="Alvarez Milona" img="l-5.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-500'>
                                        <h5 className='h5 py-3 fw-600'>Calendar</h5>
                                        <div className='d-flex mb-4'>
                                            <span>February 2023</span>
                                            <button className='btn btn-light bg-gold4 text-white rounded-25p px-3 ms-auto'>Today</button>
                                            <button className='btn btn-light bg-gold4 text-white rounded-25p px-3 mx-2'>&#10092;</button>
                                            <button className='btn btn-light bg-gold4 text-white rounded-25p px-3 '>&#10093;</button>
                                        </div>
                                        <table className='table text-center fs-14'>
                                            <thead>
                                                <tr className='color-gold4'>
                                                    <th>Sun</th>
                                                    <th>Mon</th>
                                                    <th>Tue</th>
                                                    <th>Wed</th>
                                                    <th>Thu</th>
                                                    <th>Fri</th>
                                                    <th>Sat</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span>01</span></td>
                                                    <td><span>02</span></td>
                                                    <td><span>03</span></td>
                                                    <td><span>04</span></td>
                                                    <td><span>05</span></td>
                                                    <td><span>06</span></td>
                                                    <td><span>07</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>08</span></td>
                                                    <td><span>09</span></td>
                                                    <td><span className='date-active'>10</span></td>
                                                    <td><span>11</span></td>
                                                    <td><span>12</span></td>
                                                    <td><span>13</span></td>
                                                    <td><span>14</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>15</span></td>
                                                    <td><span>16</span></td>
                                                    <td><span>17</span></td>
                                                    <td><span>18</span></td>
                                                    <td><span>19</span></td>
                                                    <td><span>20</span></td>
                                                    <td><span>21</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>22</span></td>
                                                    <td><span>23</span></td>
                                                    <td><span>24</span></td>
                                                    <td><span>25</span></td>
                                                    <td><span>26</span></td>
                                                    <td><span>27</span></td>
                                                    <td><span>28</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-6 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-500'>
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
                                            </tbody>
                                        </table>
                                        <Pagination />
                                    </div>
                                </div>
                            </div>


                            <div className='row '>
                                <div className='col-md-4 p-3 '>
                                    <div className='bg-white p-4 rounded-25p shadow-sm  h-400'>
                                        <h5 className='h5 py-3 fw-600'>Product Categories</h5>
                                        <div class="mb-4">
                                            <div className='d-flex mb-2'>
                                                <p class="fs-14 p-color4">Basic Information
                                                </p>
                                                <span class="ms-auto fs-14 p-color4">10/15</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-75 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div className='d-flex mb-2'>
                                                <p class="fs-14 p-color4">Portfolio
                                                </p>
                                                <span class="ms-auto fs-14 p-color4">2/8</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-25 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div className='d-flex mb-2'>
                                                <p class="fs-14 p-color4">Billing Details
                                                </p>
                                                <span class="ms-auto fs-14 p-color4">4/6</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-75 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div className='d-flex mb-2'>
                                                <p class="fs-14 p-color4">Interests
                                                </p>
                                                <span class="ms-auto fs-14 p-color4">5/10</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-50 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div className='d-flex mb-2'>
                                                <p class="fs-14 p-color4">Legal Documents
                                                </p>
                                                <span class="ms-auto fs-14 p-color4">1/3</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-25 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 p-3'>
                                    <div className='bg-gold1 p-4 rounded-25p shadow-sm h-400'>
                                        <button className='btn btn-sm bg-gold4 rounded-25p text-white fs-12 fw-600 mt-5'>GOGO</button>
                                        <h2 className='h2 text-white mt-4'>MAGIC IS IN<br />THE DETALS</h2>
                                        <p className='text-white fs-14'>Yes, its indeed!</p>
                                    </div>
                                </div>
                                <div className='col-md-4 p-3'>
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
                            </div>

                            <div className='row '>
                                <ProgressBox number={1} title="Payment Status" />
                                <ProgressBox number={4} title="Work Progress" />
                                <ProgressBox number={2} title="Task Completed" />
                                <ProgressBox number={6} title="Peyments Done" />
                            </div>


                        </div>

                    </>
                    <div className='main-container border-top p-5 mt-3'>
                        <p className='fs-14 p-color4'>WEBROUND Masoud Bahamin 2023</p>
                    </div>
                </div>
            </div>

        </>

    )
}
