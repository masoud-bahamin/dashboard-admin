import React from 'react'
import Input from '../../Components/Form/Input'
import { reqValid , minValid , maxValid } from '../../validations/rouls'
import useForm from '../../Hooks/useForm'


export default function Register() {

    const [formState, inputHandler] = useForm({
        name:{
            value:"",
            isValid: false
        },
        email:{
            value:"",
            isValid: false
        },
        password:{
            value:"",
            isValid: false
        },
    } , false)

    return (
        <div className='login-container' >
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row bg-light rounded-15p '>
                    <div className='login-container-div col-lg-4 col-xs-12 py-5 px-4  text-white'>
                        <h5 className='h3 py-5'>MAGIC IS IN THE DETAILS</h5>
                        <p className='my-3 fs-14'>Please use this form to register.</p>
                        <p className='fs-14'>If you are a member, please login.</p>
                    </div>
                    <div className='col-lg-8  col-xs-12 p-5 bg-white'>
                        <div>
                            <img src='/img/logo-login.svg' className='img-100 my-5'/>
                        </div>
                        <div>
                            <p className='fw-600 h5 my-4'>Register</p>
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3 '>Full Nmae : </label>
                                <Input 
                                id="name"
                                validatoins={[
                                    reqValid(),
                                    minValid(4),
                                    maxValid(10)
                                ]}
                                inputHandler={inputHandler}
                                className='form-control'
                                />
                            </div>
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3 '>E-mail : </label>
                                <Input 
                                id="email"
                                validatoins={[
                                    reqValid(),
                                    minValid(4),
                                    maxValid(20)
                                ]}
                                inputHandler={inputHandler}
                                className='form-control'
                                />
                            </div>
                            
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3'>Password : </label>
                                <Input 
                                id="password"
                                validatoins={[
                                    reqValid(),
                                    minValid(4),
                                    maxValid(20)
                                ]}
                                inputHandler={inputHandler}
                                className='form-control'
                                />
                            </div>
                            <div className='d-flex mb-4 align-items-center'>
                                
                                <button className='ms-auto btn btn-light bg-gold4 text-white rounded-25p px-4'>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
