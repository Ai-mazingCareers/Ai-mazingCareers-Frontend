import { useEffect, useState } from 'react';
import './style/ReportPage.css';
  
const ReportPage = ({response,setCount, setPdfUrl}) => {
  const [ats,setATS]=useState(0);
  const [nameFound, setNameFound]=useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [formatScore,setFormatScore]=useState(0.0);
  const [experienceMatch,setExperienceMatch]=useState(0.0);
  const [emailFound, setEmailFound]=useState(false);
  const [phoneFound, setPhoneFound]=useState(false);
  const [missingSkills, setMissingSkills]=useState([]);
  const [skillScore,setSkillScore]=useState(0);
  const [skillCount,setSkillCount]=useState({
                                            tech:0,
                                            soft:0
                                            });
  
  function handleClose(){
    setCount(0);
    setPdfUrl(null);
  }
  useEffect(()=>{
    if(response){
      setATS(response.ats_score);
      if(response.details){
        if(response.details.contact_details){ 
          if(response.details.contact_details.name){
            setNameFound(true);
            setName(response.details.contact_details.name);
          } 
          if(response.details.contact_details.email){
            setEmailFound(true);
            setEmail(response.details.contact_details.email);
          }
          if(response.details.contact_details.phone_number){
            setPhoneFound(true);
            setPhone(response.details.contact_details.phone_number);
          }
          if(response.details.missing_skills){
            setMissingSkills(response.details.missing_skills)
          }
          if(response.details.match_percentage){
            setSkillScore(response.details.match_percentage)
          }
          if(response.details.formatting_score){
            setFormatScore(Number(response.details.formatting_score.toFixed(2)))
          }
          if(response.details.experience_score){
            setExperienceMatch(Number(response.details.experience_score.toFixed(2)))
          }
          if(response.details.resume_data){
            setSkillCount({tech:response.details.resume_data.technical_skills.length,soft:response.details.resume_data.soft_skills.length})
          }
        }
      }
    }
  },[response]);
  return (
    <div className='report'>
      <div className='report-close-btn' onClick={handleClose}>x</div>
      <div className='report-header'>Analysis Report</div>
      <div>{"ATS Score: "}<span>{ats}{"%"}</span></div><br></br>

      <div>{`Skill Matched: `}<span>{skillScore}{`%`}</span></div><br></br>

      <div>{`Experience Match Score: `}<span>{experienceMatch}{`/5`}</span></div><br></br>
      
      <div>{`Formatting Score: `}<span>{formatScore}{`/5`}</span></div><br></br>
  
      <br></br>
      <div>{`Detailed Analysis:`}</div><br></br>
      <div>{`Name ${nameFound?"":"not"} found`} {nameFound?<><span className='tick'>&#10004;</span> {name}</>:<span className='cross'>&#10008;</span>}</div>
      <div>{`Email ${emailFound?"":"not"}  Found`} {emailFound?<><span className='tick'>&#10004;</span> {email}</>:<span className='cross'>&#10008;</span>}</div>
      <div>{`Phone Number ${phoneFound?"":"not"}  Found`} {phoneFound?<><span className='tick'>&#10004;</span> {phone}</>:<span className='cross'>&#10008;</span>}</div><br/>


      <div>{"Number of Skills Detected:"}</div>
      <div>{"Technical skills: "}{skillCount.tech}<br/>{" Soft Skills: "}{skillCount.soft}</div>
      
      <br/>
      <div>{`Recommended skills based on Job Description:`}</div>
      <div>
      {
        missingSkills.map((e,i)=><li key={i}>{e}</li>)
      }
      
      </div>
    </div>
  )
}

export default ReportPage
