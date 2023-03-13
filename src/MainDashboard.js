import React, { useContext } from 'react'
import { Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import MainSidebar from './Components/MainSidebar/MainSidebar'
import MainContext from './Context'

export default function MainDashboard() {

const {mainMenu} = useContext(MainContext)

  return (
    <>
      <Header />
      <div className='bg-main row overflow-x-hidden'>
        <div className={ mainMenu == 1 ? 'col-1' : "col-3"}>
          <MainSidebar />
        </div>
        <div className={mainMenu == 2 ? 'bg-main col-9' : mainMenu == 1 ? "bg-main col-11" : "bg-main col-12"} >
          <Outlet />
          <div className='main-container border-top p-5 mt-3 footer-main'>
            <p className='fs-14 p-color4' ><a href='http://webrund.com'>WEBROUND Masoud Bahamin 2023</a></p>
          </div>
        </div>
      </div>

    </>
  )
}
