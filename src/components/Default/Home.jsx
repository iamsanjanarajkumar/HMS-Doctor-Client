import React,{useState , useCallback , useEffect} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify'


const URL = 'http://localhost:3500'

const Home = () => {
  const [patients, setPatients] = useState([])

  // const getCallback = useCallback(() => {
  //   const getInput = async () => {
  //     await axios
  //     .get(`${URL}/api/patient/all`)
  //     .then(res => setDocs(res.data.patients))
  //     .catch(err => toast.error(err.response.data.msg))
  //   }
  //   getInput()
  // },[])
  // useEffect(() => {
  //   getCallback()
  // },[])


  useEffect(()=>{
    const getPatientsAll = async ()=>{
      await axios.get(`${URL}/api/patient/all`)
      .then((res)=>{
        console.log("data",res)
        setPatients(res.data.patients)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    getPatientsAll()
  },[])

  return (
    <div className='main-content'>
      <div className="home-banner d-flex align-items-center justify-content-center">
        <h1 className="display-3 fw-bold text-center  heading-home">ALL PATIENTS DETAILS</h1>
      </div>
      <div className="patients-search justify-content-between d-flex p-3 gap-3 flex-wrap border-bottom shadow sticky-top bg-white">
        <h1>HMS</h1>
        <div className="search d-flex gap-3">
          <input type="text" className="form-control" placeholder='Search Patients' />
          <button className='btn btn-info text-white fs-4'><i className='bi bi-search'></i></button>
        </div>
      </div>
     <div className="container-fluid p-3">
      <div className="row">
      {
              patients.map((item, index) => {
                return (
                   <div className="col-12 col-md-3">
                    <div className="card mb-3 shadow patient-card">
                    <div className='card-body'>
                    <span className="fs-6  badge bg-dark p-1 px-3 rounded-pill mb-2"><small className="small text-light">Token</small> {item.token}</span>
                    <hr />
                    <p className="fs-5 fw-bold text-dark"><i className='bi bi-person'></i> {item.name}</p>
                    <div className="btns d-flex gap-2">
                      <a href={`/patient/${item._id}`} className='w-100'><button className="btn bg-info text-white rounded-pill w-100">CALL PATIENT</button></a>
                      <button className="btn btn-light text-dark border rounded-pill w-100">CANCEL</button>
                    </div>
                   </div>
                    </div>
                   </div>
                )
              })
              }
      </div>
     </div>
    </div>
  )
}

export default Home