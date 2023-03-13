import React from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import AreaChart from '../../Components/Charts/AreaChart'
import { BarChart } from '../../Components/Charts/BarChart'
import { LoopChart } from '../../Components/Charts/LoopChart'
import PieChart from '../../Components/Charts/PieChart'
import { RadarChart } from '../../Components/Charts/RadarChart'
import ProgressBox from '../../Components/ProgressBox/ProgressBox'

export default function Analytics() {
    return (
        <>
            <Breadcramp title="Analytics" subTitle="Dashboard" sub="Analytics" />
            <div className='main-container bg-main mt-3'>
                <div className='row'>
                    <div className='col-md-6 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Website Visits</h5>
                            <AreaChart />
                        </div>
                    </div>
                    <div className='col-md-6 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Sells</h5>
                            <AreaChart vData={[3, 5, 7, 6, 7, 4, 5]} hData={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm h-100'>
                            <h5 className='h5 py-3 fw-600'>Product Categoris</h5>
                            <LoopChart />
                        </div>
                    </div>
                    <div className='col-md-4 p-3'>
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
                        <div className='pb-3'>
                            <div className='bg-white p-4 rounded-25p shadow-sm h-50'>
                                <BarChart chartTitle="Total Sells FEB"/>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <div className='bg-white p-4 rounded-25p shadow-sm h-50'>
                                <BarChart  chartTitle="Total Orders JUL"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row '>
                    <ProgressBox number={1} title="Payment Status"/>
                    <ProgressBox number={4} title="Work Progress"/>
                    <ProgressBox number={2} title="Task Completed"/>
                    <ProgressBox number={6} title="Peyments Done"/>
                </div>
                <div className='row'>
                    <div className='col-md-6 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Order - Stock</h5>
                            <RadarChart />
                        </div>
                    </div>
                    <div className='col-md-6 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm'>
                            <h5 className='h5 py-3 fw-600'>Product Categories</h5>
                            <PieChart />
                        </div>
                    </div>
                </div>

                <div className='bg-white p-4 my-3 rounded-25p shadow-sm'>
                        <h5 className='h5 py-3 fw-600'>Sells</h5>
                             <AreaChart />
                        </div>
            </div>
        </>
    )
}
