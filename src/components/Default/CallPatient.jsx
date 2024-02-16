import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


function CallPatient() {
    const {id} = useParams()
    const [patient, setPatient] = useState({})
    const [report, setReport] = useState({})
    // useEffect(()=>{
    //     const singlePatient = async () =>{
    //         await axios.get(`http://localhost:3500/api/patient/single/${id}`)
    //         .then((res)=>{
    //             console.log(res)
    //             setPatient(res.data.patient)
    //             setReport({
    //                 name:res.data.patient.name,
    //                 mobile:res.data.patient.mobile,
    //                 issue:res.data.patient.issue
    //             })
    //         })
    //         .catch((err)=>{
    //             toast.error(err)
    //         })
    //     }
    //     singlePatient()

    // },[])
    useEffect(()=>{
        const getPatients =async () =>{
            await axios.get(`http://localhost:3500/api/patient/single/${id}`)
            .then((res)=>{
                console.log(res)
                setPatient(res.data.data)
            })
            .catch((err)=>{
                console.log("Error",err)
            })
        }
        getPatients()
    },[])

    const updateReport = async()=>{
        await axios.post('http://localhost:3100/api/new/report', report)
        .then((res)=>{
            // toast.success("report is updated")
            console.log(res)
        })
        .catch((err)=>{
            // toast.error('report cannot updated', err)
            console.log("error", err)
        })
    }
  return (
    // <div className='container-fluid individual-patient p-3'>
    //     <div className="row">
    //         <div className="col-md-4 offset-md-4">
    //             <div className="patient-view card  shadow">
    //                 <div className="card-header d-flex  justify-content-center">
    //                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5LrSywe2BjHhdkj-8pBq-9NUyjwjGW0jui_E8OAf6e7mIXu7vUz8axzY2dqVexrIMl4&usqp=CAU" alt="" style={{ height:"160px"}} />
    //                 </div>
    //                 <div className="card-body">
    //                    <div className="d-flex align-items-center justify-content-center gap-4">
    //                    <h1 className="fs-5 text-center"><i className='bi bi-person text-primary'></i> {patient.name}</h1>
    //                     <h1 className="fs-5 text-center text-secondary"><i className='bi bi-person text-primary'></i> {patient.mobile}</h1>
    //                    </div>
    //                    <div className="alert  shadow problem" >
    //                     <h1 className="alert-heading fs-3">Problem</h1>
    //                     <p className='alert-subheading'>{patient.problemDesc}</p>
    //                    </div>
                       
    //                    <div className="d-flex gap-2 align-items-center py-3">
    //                    <span className="lead text-secondary w-100">Call the patient Now?</span>
    //                    <a href={`tel:${patient.mobile}`} className="btn btn-primary"><i class="bi bi-telephone-fill"></i></a>
    //                    </div>
    //                    <div className="btns d-flex gap-2">
    //                     <button className="btn btn-success p-2 fs-5 w-100" onClick={updateReport}>Checked</button>
    //                     <button className="btn btn-warning p-3 fs-5 w-100">Reject</button>
    //                    </div>
    //                 </div>
    //             </div>
    //         </div>      
    //     </div>
    // </div>

    
      <div className='container-fluid individual-patient p-2 '>
       
        <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">
        <div class="col-md-4">
            <div class="card user-card">
                <div class="card-header text-center">
                    <h2>Patient Info</h2>
                </div>
                <div class="card-block">
                    <div class="user-image">
                        {
                            patient.gender =="female"? <img src='https://bootdey.com/img/Content/avatar/avatar3.png' class="img-radius" alt="User-Profile-Image" /> : <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-radius" alt="User-Profile-Image" />
                        }
                       
                    </div>
                    <h6 class="f-w-600 m-t-25 m-b-10">{patient.name}</h6>
                    <p class="text-muted"> {patient.gender } | {patient.token}</p>
                    <hr/>
                    {/* <p class="text-muted m-t-15">Activity Level: 87%</p>
                    <ul class="list-unstyled activity-leval">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li></li>
                        <li></li> */}
                    {/* </ul> */}
                    <div class="bg-c-blue rounded-3 counter-block m-t-6 p-8 ">
                        <div class="row ">
                            <h1 className="alert-heading fs-3">Problem</h1>
                        <p className='alert-subheading'>{patient.problemDesc}</p>
                     <div className="d-flex gap-2 align-items-center py-3">
                       <span className="lead text-secondary w-100 ">Call the patient Now?</span>
                       <a href={`tel:${patient.mobile}`} className="btn btn-primary p-2 mx-2"><i class="bi bi-telephone-fill "></i></a>
                      </div>
                        </div>
                    </div>
                    <p class="m-t-15 text-muted"></p>
                    <hr/>
                   
                    <div className="row justify-content">
                    <div className="btns d-flex gap-2">
                        <button className="btn btn-success p-2 fs-5 w-100" onClick={updateReport}>Checked</button>
                       <button className="btn btn-warning p-3 fs-5 w-100">Reject</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        </div>
     
    
  )
}

export default CallPatient