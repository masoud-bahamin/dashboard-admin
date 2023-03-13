import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SurveyItem({ category, title, pr, status, setTodos, id, todos, checked, setShowTodos }) {

    const [value, setValue] = useState(checked)

    return (
        <div className='row p-4 bg-white rounded-15p mt-4 align-items-center'>
            <p className='col-lg-4 col-md-4 col-sm-4 col-xs-12 col-6 hover-gold fw-600 pointer'>
                <Link to={`/dashboard/survey-info/${id}`}>
                    {title}
                </Link>
            </p>
            <p className='col-lg-2 col-md-2 col-sm-2 col-xs-6 col-6 fs-12 p-color4'>{category}</p>
            <p className='col-lg-2 col-md-2 col-sm-2 col-xs-6 col-6 fs-12 p-color4 my-1'>14.07.2021</p>
            {status === "on" ? (
                <button className='col-lg-2 col-md-2 col-sm-2 col-xs-6 col-6 my-1 btn btn-light btn-sm bg-gold4 text-white rounded-25p fs-12'>EDUCATION</button>)
                : (<button
                    className='col-lg-2 col-md-2 col-sm-2 col-xs-6 col-6 btn btn-sm border-gold rounded-25p fs-12'>PERSONAL</button>)}
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 d-flex align-items-center'>
                <input type="checkbox" className='form-check-input ms-2'
                    onChange={(e) => {
                        setValue(prev => !prev)
                        let all = [...todos]
                        all.forEach(todo => {
                            if (todo.id == id) {
                                if (e.target.checked) {
                                    todo.checked = 1
                                } else {
                                    todo.checked = 0
                                }
                            }
                        })
                        setTodos(all)
                    }}
                    checked={value == 1 ? true : false}
                />
                <button onClick={(e) => {
                    let arrey = todos.filter(todo => todo.id !== id)
                    setTodos(arrey)
                    setShowTodos(arrey)
                }}
                    className='btn btn-sm ms-auto'>x</button>
            </div>
            <p className='fs-14 lh-sm p-color4 mt-3'>Lorem ipsum dolor sit elit. Alias veritatis sapiente
                deserunt vero, fugit dolore libero enim quisquam,
                animi ex nulla maiores nemo ad. Laborum quaerat doloremque accusamus itaque adipisci?
            </p>
        </div>

    )
}
