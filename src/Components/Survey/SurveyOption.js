import React, { useState } from 'react'

export default function SurveyOption({title , question , num}) {

    const [show, setShow] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [name, setName] = useState(title)
    const [questionTitle, setQuestionTitle] = useState(question)

    return (
        <div className='bg-white p-4 rounded-15p mt-4'>
            <div className='d-flex align-items-center'>
                <span className='border-gold rounded-50 p-2 d-flex align-items-center justify-content-center'>{num}</span>
                <p className='ms-2'>{name}</p>
                <span className='border-gold rounded-50 p-2 d-flex align-items-center justify-content-center ms-auto me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 color-gold1 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </span>
                <span className='border-gold rounded-50 p-2 d-flex align-items-center justify-content-center me-2'
                    onClick={() => setShow(prev => !prev)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 color-gold1 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                <span className='border-gold rounded-50 p-2 d-flex align-items-center justify-content-center me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 color-gold1 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div>
            {show &&
                <div>
                    <div className='d-flex align-items-center my-4'>
                        <label className='form-lable w-25 fs-14'>Title : </label>
                        <input value={name} onChange={(e) => setName(e.target.value)}
                        type="text" className='form-control' />
                    </div>
                    <div className='d-flex align-items-center my-4'>
                        <label className='form-lable w-25 fs-14'>Question : </label>
                        <input value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)}
                        type="text" className='form-control' />
                    </div>
                    <div className='d-flex align-items-center my-4'>
                        <label className='form-lable w-25 fs-14'>Answer Type : </label>
                        <select 
                        className='form-select '>
                            <option value="Textarea">Textarea</option>
                            <option value="Checkbox">Checkbox</option>
                            <option value="RadioButton">RadioButton</option>
                        </select>
                    </div>
                    {
                        showAnswer &&
                        <div className='d-flex align-items-center my-4'>
                            <label className='form-lable w-25 fs-14'>Answers : </label>
                            <input 
                            type="text" className='form-control' />
                        </div>
                    }
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <button className='btn border-gold color-gold4 rounded-50p fs-14 hover-gold'
                            onClick={() => setShowAnswer(true)}
                        >Add Answer</button>
                    </div>
                </div>
            }
        </div>
    )
}
