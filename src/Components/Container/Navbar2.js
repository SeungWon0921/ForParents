import React from "react";
import { Link } from "react-router-dom";
import './Navbar2.css';

const Navbar2 = ({toggle}) => {
    return(
        <div id="Navbar">
            <div className="Nav_area">
                <ul className="Nav">
                    <li><Link to={"/"}><span>메인</span></Link></li>
                    <li><Link to={"/service"}><span>서비스</span></Link></li>
                    <li><Link to={"/company"}><span>회사</span></Link></li>
                    <li><Link to={"/"}><img src="/images/mili_01.png"/>
                    <img src="/images/logo_m.png"/></Link></li>
                    <li><Link to={"/"} style={{display:'none'}}><span>트레블헬퍼</span></Link></li>
                    <li><Link to={"/"} ><span>신청하기</span></Link></li>
                    <li><Link to={"/"} ><span>공지/문의</span></Link></li>
                </ul>
                <div className="Nav_m">
                    <div className="Nav_logo"><img src="/images/Mobil_log.png"/></div>
                    <div className="ham_menu" onClick={toggle}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2;