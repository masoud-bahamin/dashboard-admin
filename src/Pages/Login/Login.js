import React from 'react'
import Input from '../../Components/Form/Input'
import "./Login.css"
import { reqValid , minValid , maxValid } from '../../validations/rouls'
import useForm from '../../Hooks/useForm'

export default function Login() {

    const [formState, inputHandler] = useForm({
        username:{
            value:"",
            isValid: false
        },
        password:{
            value:"",
            isValid: false
        },
    } , false)

    console.log(formState);

    return (
        <div className='login-container' >
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row bg-light rounded-15p '>
                    <div className='login-container-div col-lg-4 col-xs-12 py-5 px-4  text-white'>
                        <h5 className='h3 py-5'>MAGIC IS IN THE DETAILS</h5>
                        <p className='my-3 fs-14'>Please use your credentials to login.</p>
                        <p className='fs-14'>If you are not a member, please register.</p>
                    </div>
                    <div className='col-lg-8  col-xs-12 p-5 bg-white'>
                        <div>
                            <img src='/img/logo-login.svg' className='img-100 my-5'/>
                        </div>
                        <div>
                            <p className='fw-600 h5 my-4'>Login</p>
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3 '>E-mail : </label>
                                <Input 
                                id="username"
                                validatoins={[
                                    reqValid(),
                                    minValid(4),
                                    maxValid(10)
                                ]}
                                inputHandler={inputHandler}
                                className='form-control'
                                />
                                {/* <input type="text" placeholder='E-mail' className='form-control' /> */}
                            </div>
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3'>Password : </label>
                                <Input 
                                id="password"
                                validatoins={[
                                    reqValid(),
                                    minValid(4),
                                    maxValid(10)
                                ]}
                                inputHandler={inputHandler}
                                className='form-control'
                                />
                                {/* <input type="text" placeholder='password' className='form-control' /> */}
                            </div>
                            <div className='d-flex mb-4 align-items-center'>
                                <p className='pointer fs-14'>Forget password?</p>
                                <button className='ms-auto btn btn-light bg-gold4 text-white rounded-25p px-4'>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
