"use client"
import { useEffect, useState } from 'react';
import "./style/Navbar.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShared } from '@/app/context/SharedContext';

const Navbar = () => {
  
  const {currentNav,setCurrentNav}=useShared();
  const handleNavClick = (x)=>{
    setCurrentNav(x);
  }

  const [width, setWidth] = useState();
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  const handleMenu=()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <div className='nav-wrapper'>
            <div className='logo'>{"AimazingCareers"}</div>
            {width >= 600?
            <div className='nav-list-wrapper'>
              <div className={currentNav==="home"?"nav-highlight":""} onClick={()=>handleNavClick("home")}><Link href="/#" className='redirect'>{"Home"}</Link></div>
              <div className={currentNav==="ats"?"nav-highlight":""} onClick={()=>handleNavClick("ats")}><Link href="/ats-analyzer" className='redirect'>{"Ats-analyzer"}</Link></div>
              <div className={currentNav==="contact"?"nav-highlight":""} onClick={()=>handleNavClick("contact")}><Link href="/#footer" className='redirect'>{"Contact Us"}</Link></div>
            </div>:
            <>
            <div className="ham-menu">
              <div onClick={handleMenu} className="ham-icon">{menuOpen?"X":"☰"}</div>
            </div>
            {menuOpen?<div className='menu-dropdown'>
              <div className={currentNav==="home"?"nav-highlight":""} onClick={()=>handleNavClick("home")}><Link href="/#" className='redirect'>{"Home"}</Link></div>
              <div className={currentNav==="ats"?"nav-highlight":""} onClick={()=>handleNavClick("ats")}><Link href="/ats-analyzer" className='redirect'>{"Ats-analyzer"}</Link></div>
              <div className={currentNav==="contact"?"nav-highlight":""} onClick={()=>handleNavClick("contact")}><Link href="/#footer" className='redirect'>{"Contact Us"}</Link></div>
            </div>:<></>}
            </>
            }
          </div>
  )
}

export default Navbar
