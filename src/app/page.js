"use client"
import { useEffect, useState } from 'react';
import './style/page.css';
import Image from 'next/image';
import Card from './components/Card/Card';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Contact from './components/Contact/Contact';

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenu=()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className='nav-wrapper'>
        <div className='logo'>{"AimazingCareers"}</div>
        {width >= 600?
        <div className='nav-list-wrapper'>
          <div><a href="#" className='redirect'>{"Home"}</a></div>
          <div><a href="/ats-analyzer" className='redirect'>{"Ats-analyzer"}</a></div>
          <div><a href="#footer" className='redirect'>{"Contact Us"}</a></div>
        </div>:
        <>
        <div className="ham-menu">
          <div onClick={handleMenu} className="ham-icon">{menuOpen?"X":"☰"}</div>
        </div>
        {menuOpen?<div className='menu-dropdown'>
          <div><a href="#home" className='redirect'>{"Home"}</a></div>
          <div><a href="/ats-analyzer" className='redirect'>{"Ats-analyzer"}</a></div>
          <div><a href="#footer" className='redirect'>{"Contact Us"}</a></div>
        </div>:<></>}
        </>
        }
      </div>

      <div className='home' >
        <h1>{"Unlock Your Career Potential with AimazingCareers Tailored Job Solutions"}</h1>
        <p>{"Welcome message and brief introduction about aimazingCareers and its recruitment services"}</p>
        <div className='home-btn'>
          <div className='download-btn'>{"Download"}</div>
          <div className='signup-btn'>{"Sign Up"}</div>
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
