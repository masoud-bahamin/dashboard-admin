import React from 'react'
import ApplocationsItems from './SidbarItems/ApplocationsItems'
import DashboardItems from './SidbarItems/DashboardItems'
import MenuItems from './SidbarItems/MenuItems'
import PagesItems from './SidbarItems/PagesItems'
import UIItems from './SidbarItems/UIItems'

export default function SecondSidebar({ menu }) {
  return (
    <div className='p-4 second-sidebar-container'>
      {menu === "1" ? (<DashboardItems />
      ) : menu === "2" ? (<PagesItems />
      ) : menu === "3" ? (<ApplocationsItems />
      ) : menu === "4" ? (<UIItems />
      ) : (<MenuItems />)
      }</div>
  )
}
