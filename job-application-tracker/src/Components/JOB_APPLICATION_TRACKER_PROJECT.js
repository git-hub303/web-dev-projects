import React, { useEffect, useState } from 'react'

import './JOB_APPLICATION_TRACKER_PROJECT.css';
import JOB_CARD_DIV from './JOB_CARD_DIV';
function JOB_APPLICATION_TRACKER_PROJECT() {

    const [JobCard, AddJobCard] = useState([])

    const [CompanyName, SetCompanyName] = useState('');

    const [JobRole, SetJobRole] = useState('');

    const [Status, SetStatus] = useState('');



    const Submitting = (event) => {
        AddJobCard([...JobCard, {
            CompanyName: CompanyName,
            JobRole: JobRole,
            Status: Status,
            id: Date.now()
        }])
        event.preventDefault();

        SetCompanyName('');
        SetJobRole('');
        SetStatus('');
    }

const deleteHandler = (id) =>{
const Updated = JobCard.filter( items=> items.id !== id)
 AddJobCard(Updated)
}


    return (
        <div>
         
            <form onSubmit={Submitting}>
                <label>Company Name</label>
                <input
                    type='text'
                    value={CompanyName}
                    onChange={(event) => {
                        SetCompanyName(event.target.value)

                    }} ></input>
                <br></br>
                <label>Job role</label>
                <input type='text'

                    value={JobRole}
                    onChange={(event) => {
                        SetJobRole(event.target.value)

                    }}  ></input>
                <br></br>
                <label> Status :</label>
                <select value={Status} onChange={(event) => { SetStatus(event.target.value); }}>
                    <option>Interview</option>
                    <option>Applied</option>
                    <option>Offered</option>
                    <option>Rejected</option>

                </select>
                <br></br>
                <button type="submit">Add Application</button>

            </form>
            <JOB_CARD_DIV JobCard = {JobCard} deleteHandler = {deleteHandler} />

        </div>
    )
}

export default JOB_APPLICATION_TRACKER_PROJECT
