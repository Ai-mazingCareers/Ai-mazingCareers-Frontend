"use client"
import { useEffect, useState } from 'react';
import './style/page.css';
import FilePage from './components/FIlePage/FilePage';
import JobDescPage from './components/JobDescPage/JobDescPage';
import LoadingPage from './components/LoadingPage/LoadingPage';
import ReportPage from './components/ReportPage/ReportPage';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { ScrollMode, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { handleApi } from './api/handleApi';

const page = () => {
    const [scale, setScale] = useState(SpecialZoomLevel.PageWidth);
    const [count,setCount]=useState(0);
    const [pdfUrl,setPdfUrl]=useState(null);
    const [pdfFile,setPdfFile]=useState(null);
    const [data, setData] = useState({
      jobTitle: "",
      location: "",
      employmentType: "",
      minExperience: "",
      preferredExperience: "",
      educationRequired: "",
      skillsRequired: [],
      preferredSkills: [],
      responsibilities: "",
    });
    const [upload,setUpload]=useState(false);
    const [response,setResponse]=useState({});

    useEffect(()=>{
      if(count===2){
        console.log("file upload initiated");
        handleApi({data,pdfFile,setUpload,setResponse});
      }
    },[count])

  return (
    <div className='ats-analyzer-container'>
        <div className="logo">
            <h1>{"Ai-mazingCareers"}</h1>
        </div>
        <div className="header">
                <h1>{"Resume ATS Analyzer"}</h1>
        </div>
        <div className='resume-wrapper'>
        <div className='resume-form'>
            {
              count===0?
                  <FilePage useCount={setCount} setPdfUrl={setPdfUrl} setPdfFile={setPdfFile}/>:
              count===1?
                  <JobDescPage setCount={setCount} setData={setData}/>:
              count===2?
                  <LoadingPage setCount={setCount} upload={upload}/>:
              count===3?
                  <ReportPage response={response} setCount={setCount} setPdfUrl={setPdfUrl} setUpload={setUpload}/>:
              <>{"Something went wrong!"}</>
            }
        </div>
        { pdfUrl?<div className='resume-form resume-viewer'>
            {/* <iframe
          className="pdf-file"
          src={`${pdfUrl}#toolbar=1`}
          title="PDF Preview"
        /> */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} defaultScale={scale}
          scrollMode={ScrollMode.Vertical} />
        </Worker>
        <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
    >open in new tab</a>
        </div>:<></>}
        </div>
    </div>
  )
}

export default page
