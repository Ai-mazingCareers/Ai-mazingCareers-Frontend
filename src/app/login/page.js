"use client"
import BackgroundAnimation from '../globalComponents/BackgroundAnimation/BackgroundAnimation';
import LoginBox from './components/LoginBox/LoginBox';
import './style/page.css';

export default function login(){
    return(
        <div className="login-page">
            <BackgroundAnimation/>
            <div className="logo">
                <h1>{"Ai-mazingCareers"}</h1>
            </div>
            <LoginBox/>
        </div>
    )
}