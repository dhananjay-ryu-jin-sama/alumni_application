import React from "react";
import '../styles/dashboard.css'

function Dashboard() {
    return (
        <div>
      <div className='container'>
        <div className='title'>
          <h2>DASHBOARD</h2>
        </div>
        <div className='dashboard'>
        <iframe src="https://play.grafana.org/d-solo/c6259b1f-c21b-49b3-916b-e300c453dfe7/new-dashboard?orgId=1&from=1704240000000&to=1704291473442&panelId=1" width="450" height="200" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    )
  }
  
  export default Dashboard