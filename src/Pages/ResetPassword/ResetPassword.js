import React from 'react'

export default function ResetPassword() {
  return (
    <div className='login-container' >
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row bg-light rounded-15p '>
                    <div className='login-container-div col-lg-4 col-xs-12 py-5 px-4  text-white'>
                        <h5 className='h3 py-5'>MAGIC IS IN THE DETAILS</h5>
                        <p className='my-3 fs-14'>Please use your e-mail to reset your password.</p>
                        <p className='fs-14'>If you are not a member, please register.</p>
                    </div>
                    <div className='col-lg-8  col-xs-12 p-5 bg-white'>
                        <div>
                            <img src='/img/logo-login.svg' className='img-100 my-5'/>
                        </div>
                        <div>
                            <p className='fw-600 h5 my-4'>Reset Password</p>
                            
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3'>New Password : </label>
                                <input type="text" placeholder='password' className='form-control' />
                            </div>
                            <div className='d-flex mb-4 align-items-center'>
                                <label className='lable col-3'>Confirm Password : </label>
                                <input type="text" placeholder='password' className='form-control' />
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
