import { useState } from 'react';
import JobButton from './components/JobButton/JobButton'
import './style/JobDescPage.css'
import JDPopup from './components/JDPopup/JDPopup';
import { backend_engineer, data_scientist, frontend_engineer, full_stack_engineer, software_developer } from './data/jobData';
const JobDescPage = ({setCount,setData}) => {
  const [show,setShow] = useState(false);
  function handleJob(x){
    setCount(2);
    setData(x);
    console.log(x);
  }
  function handleCustom(){
    setShow(true);
  }
  return (
    <div className='job-desc'>
      <h2>Select the Job Description</h2>
      <div className='job-title-container'> 
        <JobButton title={"Software Developer"} action={()=>handleJob(software_developer)}/>
        <JobButton title={"Frontend Engineer"} action={()=>handleJob(frontend_engineer)}/>
        <JobButton title={"Full Stack Engineer"} action={()=>handleJob(full_stack_engineer)}/>
        <JobButton title={"Backend Engineer"} action={()=>handleJob(backend_engineer)}/>
        <JobButton title={"Data Scientist"} action={()=>handleJob(data_scientist)}/>
        <JobButton title={"Custom"} action={handleCustom}/>
      </div>
      {
        show && <JDPopup setShow={setShow} setCount={setCount} setData={setData}/>
      }
    </div>
  )
}

export default JobDescPage
