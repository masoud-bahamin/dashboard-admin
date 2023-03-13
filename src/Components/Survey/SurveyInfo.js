import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcramp from '../Breadcramp/Breadcramp'
import { LoopChart } from '../Charts/LoopChart'
import { SurveyChart } from '../Charts/SurveyChart'
import SurveyOption from './SurveyOption'

export default function SurveyInfo() {

    const [showOptions, setShowOptions] = useState(false)
    const [surveys, setSurveys] = useState([
        { title: "Developer Survey", category: "Development", status: "off", id: 458712, checked: 0 },
        { title: "Designer Survey", category: "Workplace", status: "on", id: 812712, checked: 1 },
        { title: "Backend Survey", category: "Hardware", status: "on", id: 172831, checked: 0 },
    ])
    const [options, setOptions] = useState([
        { title: "Name", question: "What is your name?", id: 457412 },
        { title: "Age", question: "How old are you?", id: 812682 },
        { title: "Work", question: "What is your gender?", id: 212831 },
    ])
    const [surveyInfo, setSurveyInfo] = useState({})
    const [tab, setTab] = useState("details")

    let { id } = useParams()

    const getInfos = async () => {
        const newSurveyInfo = surveys.find(item => item.id == id)
        setSurveyInfo(newSurveyInfo)
    }

    useEffect(() => {
        getInfos()
    }, [id])

    return (
        <>
            <Breadcramp title="Survey Developer" subTitle="Applicatins" sub="Survey Developer" />
            <div onClick={() => setShowOptions(false)} className='main-container bg-main mt-3'>
                <div className='d-flex row'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-6 d-flex align-items-end'>
                        <p
                            onClick={() => setTab("details")}
                            className='me-3 fs-14 hover-gold'>
                            DETAILS
                        </p>
                        <p
                            onClick={() => {
                                setTab("results")
                                console.log("result");
                            }}
                            className='ms-3 fs-14 hover-gold'>
                            RESULTS
                        </p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-6 d-flex'>
                        <span class="position-relative d-flex rounded-25p align-items-center color-gold4 border-gold  fs-14 px-3">
                            Save
                            <button onClick={(e) => {
                                e.stopPropagation()
                                setShowOptions(prev => !prev)
                            }}
                                class="btn dropdown-toggle color-gold4 border-none" >
                            </button>
                            <ul class={showOptions ? "dropdown-menu dropdown-menu-end top-100 end-0 py-3  show" : "dropdown-menu dropdown-menu-end"}>
                                <li ><a class="dropdown-item" href="#">Delete</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
                {tab === "details" ? (
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className='p-4 bg-white rounded-15p mt-4 align-items-center'>
                                <p className='mb-3 hover-gold fw-600 pointer'>Summary</p>
                                <p className='mb-3 fs-12 p-color4'>Name</p>
                                <p className='mb-3 fs-14 p-color1'>{surveyInfo.title}</p>
                                <p className='mb-3 fs-12 p-color4'>Details</p>
                                <p className='mb-3 fs-14 p-color1 lh-sm'>As a software professional, you are an innovator,
                                    problem solver, researcher, and a creative. Your job is to take big ideas and make them a reality.
                                    With the right support, the possibilities are endless.<br /><br />
                                    When roadblocks are removed and you’re allowed do your best work, you change the world.
                                </p>
                                <p className='mb-3 fs-12 p-color4'>Category</p>
                                <p className='mb-3 fs-14 p-color1'>{surveyInfo.category}</p>
                                <p className='mb-3 fs-12 p-color4'>Label</p>
                                <span className='mb-3 fs-12 bg-gold1 text-white rounded-15p py-1 px-3'>EDUCATION</span>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            {
                                options.map((i, inx) => (<SurveyOption key={i.id} {...i} num={inx + 1} />))
                            }
                            <div className='d-flex align-items-center justify-content-center my-4'>
                                <button className='btn border-gold color-gold4 rounded-50p fs-14 hover-gold'
                                    onClick={() => {
                                        setOptions(prev => {
                                            return [...prev, {}]
                                        })
                                    }}
                                >Add Question</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='p-4 bg-white rounded-15p mt-4 align-items-center'>
                                <p className='mb-3 hover-gold fw-600 pointer'>Quota</p>
                                <div class="mb-4">
                                    <div className='d-flex mb-2'>
                                        <p class="fs-14 p-color4">Gender
                                        </p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar w-75 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <div class="fs-14 p-color4 mb-2 mt-3">105/125 Male</div>
                                    <div class="fs-14 p-color4">90/125 Female</div>
                                </div>
                                <div class="mb-4">
                                    <div className='d-flex mb-2'>
                                        <p class="fs-14 p-color4">Education
                                        </p>

                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar w-25 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <div class="fs-14 p-color4 mb-2 mt-3">300/125 College</div>
                                    <div class="fs-14 p-color4">95/125 High School</div>
                                </div>
                                <div class="mb-4">
                                    <div className='d-flex mb-2'>
                                        <p class="fs-14 p-color4">Age
                                        </p>

                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar w-75 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <div class="fs-14 p-color4 mb-2 mt-3">	50/75 18-24</div>
                                    <div class="fs-14 p-color4 mb-2">40/75 24-30</div>
                                    <div class="fs-14 p-color4">60/75 30-40</div>
                                </div>
                                <div class="mb-4">
                                    <div className='d-flex mb-2'>
                                        <p class="fs-14 p-color4">Work
                                        </p>
                                        
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar w-50 fs.8" role="progressbar" aria-valuenow="66.66666666666666" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    <div class="fs-14 p-color4 mb-2 mt-3">7/15 Looking for work</div>
                                    <div class="fs-14 p-color4 mb-2">3/15 Employed for wages</div>
                                    <div class="fs-14 p-color4">9-15 Self-employed</div>
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
                        <div className="col-lg-8 col-md-8 col-sm-6">
                            <div className='row mt-2'>
                                <div className='col-md-6  p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-100'>
                                        <h5 className='h5 py-3 fw-600'>How old are you?</h5>
                                        <SurveyChart datalist={[17, 10, 19, 23, 45]}
                                            labels={['12-24', '24-30', '30-40', "40-50", "50-60"]}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6  p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-100'>
                                        <h5 className='h5 py-3 fw-600'>What is your gender?</h5>
                                        <SurveyChart datalist={[43, 30, 3]}
                                            labels={['Male', 'Female', 'Other']}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-6 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-100'>
                                        <h5 className='h5 py-3 fw-600'>What is your employment status?</h5>
                                        <SurveyChart datalist={[37, 20, 91, 15]}
                                            labels={['Looking for work', 'Employed for wages', 'Self-employed', "Retired"]}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6 p-3'>
                                    <div className='bg-white p-4 rounded-25p shadow-sm h-100'>
                                        <h5 className='h5 py-3 fw-600'>What programming languages do you use?</h5>
                                        <SurveyChart datalist={[22, 27, 31, 14, 9]}
                                            labels={['Java', 'Pyton', 'JS', "C#", "C++"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
