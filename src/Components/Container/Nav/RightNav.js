    import React from 'react';
    import styled from 'styled-components';
    import { Link } from "react-router-dom";

    const Ul = styled.ul`
    list-style: none;
    line-height:90px;
    z-index:999;
    li{
        position:absolute;
    }
    li span{
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #707070;
    }
    li {
        left:15%;
        transform: translateX(-15%);
    }
    li + li{
        left:25%;
        transform: translateX(-25%);
    }
    li + li + li{
        left:35%;
        transform: translateX(-35%);
    }
    li + li + li + li{
        left:65%;
        transform: translateX(-65%);
    }
    li + li + li + li + li{
        left:75%;
        transform: translateX(-75%);
    }
    li + li + li + li + li + li{
        left:85%;
        transform: translateX(-85%);
    }
    li:hover span{
        color: #424895;
        border-bottom: 2px solid #424895;
    }
    @media (max-width: 960px) {
        background-color: #fff;
        position: fixed;
        opacity: ${({open}) => open ? '1' : '0'}
        top: 0;
        right: ${({open}) => open ? '0' : '-100%'};
        height: 100vh;
        width:200px;
        margin-top:50px;
        transition:0.7s ease-in-out;
        padding-left:80px;
        li {
        text-align:left;
        position:relative;
        color: #fff;
        }
    }
    `;

    const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            
                    <li><Link to={"/"}><span>메인</span></Link></li>
                    <li><Link to={"/service"}><span>서비스</span></Link></li>
                    <li><Link to={"/company"}><span>포페런츠</span></Link></li>
                    <li><Link to={"/company"}><span>트래블 헬퍼</span></Link></li>
                    <li><a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}><span>신청서</span></a></li>
                    <li><a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}><span>공지/문의</span></a></li>
        </Ul>
    )
    }

    export default RightNav
