import { useEffect, useState } from 'react';
import './style/ReportPage.css';
  
const ReportPage = ({response,setCount, setPdfUrl, setUpload}) => {
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
    setUpload(false);
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
      <div className='report-header'><u>Analysis Report</u></div>
      
      <div className='report-box'>
      <div>{"ATS Score "}<br/><b><span>{ats?ats:"0"}{"%"}</span></b></div>

      <div>{`Skill Matched `}<br/><b><span>{skillScore}{`%`}</span></b></div>
      </div>
      <div className='report-box'>
      <div>{`Experience Match `}<br/><b><span>{experienceMatch}{`/5`}</span></b></div>
      
      <div>{`Formatting Score `}<br/><b><span>{formatScore}{`/5`}</span></b></div>
      </div>

      <div className='detailed-analysis-header'>{`Detailed Analysis`}</div><hr/>
      <div>{`Name ${nameFound?"":"not"} found`} {nameFound?<><span className='tick'>&#10004;</span> {name}</>:<span className='cross'>&#10008;</span>}</div><hr/>
      <div>{`Email ${emailFound?"":"not"}  Found`} {emailFound?<><span className='tick'>&#10004;</span> {email}</>:<span className='cross'>&#10008;</span>}</div><hr/>
      <div>{`Phone Number ${phoneFound?"":"not"}  Found`} {phoneFound?<><span className='tick'>&#10004;</span> {phone}</>:<span className='cross'>&#10008;</span>}</div><hr/><br/>


      <div className='detailed-analysis-header'>{"Number of Skills Detected"}</div>
      <div className='report-box'>
        <div>{"Technical skills "}<br/><b>{skillCount.tech}</b></div>
        <div>{" Soft Skills "}<br/><b>{skillCount.soft}</b></div>
      </div>
      <br/>
      <div className='detailed-analysis-header'>{`Recommended skills based on Job Description`}</div>
      <hr/>
      <div>
      {
        missingSkills.map((e,i)=><li key={i}>{e}</li>)
      }
      <hr/>
      </div>
    </div>
  )
}

export default ReportPage
