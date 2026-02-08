import React from 'react'
import './JOB_APPLICATION_TRACKER_PROJECT.css';
import './JOB_APPLICATION_TRACKER_PROJECT'
function JOB_CARD_DIV({ JobCard, deleteHandler }) {
  return (
    <div className='Job_card'>
      {JobCard.map(items => (

        // <div className='Display_Job-card-div' key={items.id}>
          <div className='Job-card-div' key={items.id}>
            <button onClick={() =>  deleteHandler(items.id) } className='Cut_button'>X</button>
            <h2>CompanyName = {items.CompanyName}</h2>
            <div>JobRole = {items.JobRole}</div>
            <div>Status = {items.Status}</div>

          </div>


        // </div>




      )
      )

      }

    </div>
  )
}

export default JOB_CARD_DIV

