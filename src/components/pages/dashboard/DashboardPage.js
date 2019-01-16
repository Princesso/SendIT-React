import React from 'react'
import DashboardTable from '../../shared/dashboard-table'
import Header from '../../shared/header'
import Footer from '../../shared/footer'

const DashboardPage = () => {
  return(
    <div>
      <Header/>
      <DashboardTable/>
      <Footer/>
    </div>
  )
}

export default DashboardPage