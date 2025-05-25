"use client"
import { useEffect, useState } from 'react';
import './style/page.css';
import Image from 'next/image';
import Card from './components/Card/Card';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Contact from './components/Contact/Contact';
import Link from 'next/link';
import { useShared } from './context/SharedContext';

export default function Home() {
  const {currentNav,setCurrentNav}=useShared();
    const handleNavClick = (x)=>{
      setCurrentNav(x);
    }
  
  return (
    <>

      <div className='home' >
        <h1>{"Unlock Your Career Potential with AimazingCareers Tailored Job Solutions"}</h1>
        <p>{"Discover job opportunities that match your skills and boost your ATS score with us."}</p>
        <div className='home-btn'>
          <div className='download-btn'>{"Download"}</div>
          <div className='signup-btn'><Link href="/ats-analyzer" onClick={()=>handleNavClick("ats")} className='redirect'>{"Try Ats Analyzer!"}</Link></div>
        </div>
        <div className='home-image'>
          <Image
            src="/hero.jpg"
            fill
            alt="image"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
       <hr/>
      <div className='section-1'>
        <div className='section-1-content'>
          <div className='section-1-heading'>{"Unlock Your Career Potential with Tailored Job Recommendations"}</div>
          <div className='section-1-desc'>{"Our innovative platform analyzes your ATS score to provide personalized job recommendations that align with your skills and experience. Discover opportunities that truly match your qualifications and take the next step in your career journey."}</div>
        </div>
        <div className='section-1-image'>
          <Image
            src="/section1.jpg"
            fill
            alt="image"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <hr id="sectiona"/>
      <div className='sectiona' >
        <div className='sectiona_header'>
          <div className='sectiona_heading'>{"Unlock Your Job Potential with ATS Analyzer"}</div>
          <div className='sectiona_subheading'>{"Our ATS Analyzer uses a custom algorithm to evaluate your resume's compatibility with applicant tracking systems. Discover what elements you need to enhance for better job opportunities."}</div>
        </div>
        <div className='sectiona_cards'>
        <Card 
            link={"/icon_cube.png"}
            head={"How Our ATS Analyzer Works"}
            body={"Get a detailed analysis of your ATS score."}
          />
        <Card 
            link={"/icon_cube.png"}
            head={"Identify Key Areas for Improvement"}
            body={"Receive personalized recommendations to enhance your resume."}
          />
         <Card 
            link={"/icon_cube.png"}
            head={"Start Your Journey to Career Success"}
            body={"Empower your job search with actionable insights."}
          />
        </div>
        <div className='sectiona_btn'>
          <Link href="/ats-analyzer" onClick={()=>handleNavClick("ats")} className='sectiona_btn1'>{"Analyze"}</Link>
          <div className='sectiona_btn2'>{"Learn More >"}</div>
        </div>
      </div>
      <hr/>
      <div className='section-2'>
        <div className='section-2-head'>{"Unlock Your Career Potential with Aimazing"}</div>
        <div className='section-2-content'>{"At Aimazing, we connect job seekers with opportunities that match their skills. Our innovative "}<br/>{"tools simplify the job search and recruitment process."}</div>
        <div className='section-2-cards'>
          <Card 
            link={"/section2_1.png"}
            head={"Find Your Perfect Job Posting Today"}
            body={"Explore a wide range of job postings tailored to your expertise."}
          />
          <Card 
            link={"/section2_2.png"}
            head={"Comprehensive Recruitment Services for Employers"}
            body={"We provide end-to-end recruitment solutions to streamline your hiring process."}
          />
          <Card 
            link={"/section2_3.jpg"}
            head={"Essential Job Seeking Tools at Your Fingertips"}
            body={"Utilize our job seeking tools to enhance your application success."}
          />          
        </div>
        <div className='section2-btn'>{"Download Now "}&#x2B07;</div>
      </div>

      <div className='footer' id="footer">
        <div className='footer-sec-1'>
          <div className='logo'>{"AimazingCareers"}</div>
          <div><b>{"Address:"}</b><br/>{"Haldwani, Uttarakhand, India"}</div>
          <div><b>{"Contact:"}</b><br/>{"Info@aimazingcareers.com"}</div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} style={{ color: 'grey' }}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} style={{ color: 'grey' }}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ color: 'grey' }}/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} style={{ color: 'grey' }}/>
            </a>
          </div>
        </div>
        <Contact/>

      </div>
      <div className='copyright'>{"© 2025 aimazingCareers. All rights reserved."}</div>
    </>
  );
}
