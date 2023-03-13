import React, { useState } from 'react'
import Breadcramp from '../Components/Breadcramp/Breadcramp'
import RightModal from '../Components/Modals/RightModal'
import Todo from './Todo'

export default function ToDoList() {

    const [showRightModal, setShowRightModal] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [todos, setTodos] = useState([
        { title: "Book train tickets", category: "Flexbox", status: "off", id: 458712, checked: 0 },
        { title: "Take photos of cakes", category: "Html", status: "on", id: 812712, checked: 1 },
        { title: "Complete weekly delivery", category: "React", status: "on", id: 172831, checked: 0 },
    ])
    const [showTodos, setShowTodos] = useState([
        { title: "Book train tickets", category: "Flexbox", status: "off", id: 458712, checked: 0 },
        { title: "Take photos of cakes", category: "Html", status: "on", id: 812712, checked: 1 },
        { title: "Complete weekly delivery", category: "React", status: "on", id: 172831, checked: 0 },
    ])
    const [inputsValu, setInputsValu] = useState({})

    const changeHandler = (e) => {
        setInputsValu(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submitHandler = () => {
        let id = Math.floor(Math.random() * 999999)
        let newTodo = { ...inputsValu, id }
        setTodos(prev => {
            return [...prev, newTodo]
        })
        setShowTodos(prev => {
            return [...prev, newTodo]
        })
        setInputsValu({})
        setShowRightModal(false)
    }

    const deleteHandler = (e) => {
        let arrey = todos.filter(todo => todo.checked == 0)
        setTodos(arrey)
        setShowTodos(arrey)
    }

    const filterHandler = (key , value) => {
        let arrey = todos.filter(todo => todo[key] == value)
        setShowTodos(arrey)
    }

    const sortHandler = (key) => {
        console.log([...showTodos].sort((a, b) => a.id - b.id));
        let arrey = [...showTodos].sort((a,b) => a[key].localeCompare(b[key], undefined, { caseFirst: "upper" }))
        setShowTodos(arrey)
    }

    console.log(inputsValu);

    return (
        <div>
            {showRightModal &&
                <RightModal title="New Todo" setShowRightModal={setShowRightModal}>
                    <div>
                        <div className="mb-4">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input name="title" onChange={changeHandler}
                                type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label">Detail</label>
                            <textarea name="detail" onChange={changeHandler}
                                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlInput1" className="form-label">Category</label>
                            <select name="category" onChange={changeHandler}
                                className='form-select'>
                                <option></option>
                                <option value="Flexbox">Flexbox</option>
                                <option value="Html">Html</option>
                                <option value="React">React</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlInput1" className="form-label">Lable</label>
                            <select name="status" onChange={changeHandler}
                                className='form-select'>
                                <option></option>
                                <option value="on">EDUCATION</option>
                                <option value="off">PERSONAL</option>
                            
                            </select>
                            
                        </div>
                        <p className='mb-3 p-color4 fs-14 mt-5'>Status</p>
                        <div className="form-check fs-14">
                            <input onChange={changeHandler} value={1}
                                className="form-check-input" type="radio" name="checked" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                COMPLETED
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={changeHandler} value={0}
                                className="form-check-input" type="radio" name="checked" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                PENDIING
                            </label>
                        </div>
                        <div className='mt-3 border-top text-center py-3'>
                            <button onClick={() => setShowRightModal(false)}
                                className="btn btn-outline-secondary rounded-25p  border-gold me-2" type="button">
                                Cancel
                            </button>
                            <button onClick={submitHandler}
                                className="btn btn-outline-secondary rounded-25p bg-gold4 text-white border-none" type="button">
                                Submit
                            </button>

                        </div>
                    </div>
                </RightModal>
            }
            <Breadcramp title="To-do List" subTitle="Applicatins" sub="To-do List" />
            <div onClick={() => setShowOptions(false)}
                className='main-container bg-main mt-3'>
                <div className='d-flex row'>
                    <div className='col-lg-4 col-md-4 d-flex my-1'>
                        <select onChange={(e) => sortHandler(e.target.value)}
                            className='form-select w-50 fs-12 rounded-25p bg-main'>
                            <option>Order By  </option>
                            <option value="title">Title </option>
                            <option value="category">Category</option>
                            <option value="status">Status</option>
                        </select>
                        <div className="input-group  rounded-25p align-items-center d-flex w-50 fs-12 ms-2 border">
                            <input type="text" className="form-control border-none rounded-25p bg-l fs-12" placeholder="Search" />
                            <button className="btn btn-outline-secondary rounded-25p border-none" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-25 hover-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 d-flex my-1'>
                        <button onClick={() => setShowRightModal(true)}
                            className='btn btn-light bg-gold4 text-white rounded-25p fs-14 fw-600 px-4 ms-auto me-2'>ADD NEW</button>
                        <span className="input-group position-relative d-flex rounded-25p align-items-center rounded-50p bg-gold4 text-white img-100 px-3">
                            <input style={{ border: "1px solid white", background: "#ae8c27" }}
                                className="form-check-input me-3" type="checkbox" value="all" id="flexCheckDefault" />
                            <button onClick={(e) => {
                                e.stopPropagation()
                                setShowOptions(prev => !prev)
                            }}
                                className="btn btn-outline-secondary dropdown-toggle text-white border-none" >
                            </button>
                            <ul className={showOptions ? "dropdown-menu dropdown-menu-end top-100 end-0 py-3  show" : "dropdown-menu dropdown-menu-end"}>
                                <li onClick={deleteHandler}
                                ><a className="dropdown-item" href="#">Delete</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </span>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-12 py-3 '>
                        {showTodos.map(item => (
                            <Todo key={item.id} {...item} todos={todos} setTodos={setTodos} setShowTodos={setShowTodos}/>
                        ))}

                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 ps-3 py-3 mt-4 '>
                        <div className='bg-white p-4 rounded-25p h-600'>
                            <p className='mb-3 p-color4 fs-14'>Status</p>
                            <div onClick={() => setShowTodos(todos)}
                                className='d-flex align-items-center mb-3 pointer hover-gold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                                <p className='ms-2 fs-14 '>All Tasks</p>
                                <p className='ms-auto fs-14'>{todos.length}</p>
                            </div>
                            <div onClick={() => filterHandler("status","off")}
                            className='d-flex align-items-center mb-3 hover-gold pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                </svg>
                                <p className='ms-2 fs-14'>Pending Tasks</p>
                                <p className='ms-auto fs-14'>{todos.filter(t => t.checked == 0).length}</p>
                            </div>
                            <div onClick={() => filterHandler("status","on")}
                            className='d-flex align-items-center mb-3 hover-gold pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                </svg>

                                <p className='ms-2 fs-14'>Completed Tasks</p>
                                <p className='ms-auto fs-14'>{todos.filter(t => t.checked == 1).length}</p>
                            </div>
                            <p className='mb-3 p-color4 fs-14 mt-5'>Categories</p>
                            <div className="form-check fs-14">
                                <input onChange={() => filterHandler("category","Flexbox")}
                                    className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Flexbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={() => filterHandler("category","Html")}
                                    className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Html
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={() => filterHandler("category","React")}
                                    className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    React
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
