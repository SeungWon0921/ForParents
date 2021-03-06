// import react, { useEffect, useState,useRef} from "react";
// import './MainContainer3.css';
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { SliderData, SliderData2 } from "../../Data/Slider";
// import { IoIosArrowDropright } from "react-icons/io";
// import {IoIosArrowDropleft} from 'react-icons/io';
// const MainContainer3_e = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);
//     const updateScroll = () => {
//         setScrollPosition(window.scrollY - window.innerHeight);
//     }
//     useEffect(()=>{
//         window.addEventListener('scroll', updateScroll);
//         return ( ) => {
//             window.removeEventListener('scroll',updateScroll)
//         };
//     },[]);
//     const [current, setCurrent] =useState(0);
//     const timeout =useRef(null);
//     const length = SliderData.length;

//     useEffect(() => {
//         const nextSlide = () => {
//             setCurrent(current => (current === length - 1 ? 0 : current +1))
//         }
//         timeout.current = setTimeout(nextSlide, 3000)
//         return function() {
//             if(timeout.current){
//                 clearTimeout(timeout.current);
//             }
//         }
//     },[current,length])
//     const nextSlide= () =>{
//         setCurrent (current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length -1 : current -1);
//     };
//     if(!Array.isArray(SliderData) || SliderData.length <= 0) {
//         return null
//     }
//     const PrevBtn = styled(IoIosArrowDropleft)`
//         display:none;
//     `
//     const NextBtn = styled(IoIosArrowDropright)`
//     display: none;
//     `

//     return(
//         <div className="Wrap">
//             <header>
//                 <div className="header">
//                     <div className="header_area">
//                         <div className="Main_title">
//                             <h1>Parent's Outing <br/>With ForParents</h1>
//                         </div>
//                         <div className="Sub_txt">
//                         <p>A special gift just for your parents.<br/>Gift happiness to your parents with one click.</p>
//                         </div>
//                         <a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>
//                         <div className="shin_btn">
//                             <span>Apply ???</span>
//                         </div>
//                         </a>
//                     </div>
//                 </div>
//             </header>
//                 <div className="Container">
//                     <section id="scroll" className={scrollPosition < 0.1 ? "" : scrollPosition < 440 ? "fir_sec_fixed" : "fir_sec_absolute" }>
//                         <div className="fir_sec">
//                             <div className="bg">
//                                 <div style={{opacity:0.5-(scrollPosition-400)/70,filter: `blur(${scrollPosition/50}px`}} className="bg_img"></div>
//                             </div>
//                         <ul className="slider-wrapper">
//                         <li className="fir_sec_title">
//                         <span className="fir_txt"style={{opacity: (60-scrollPosition)/80}}>Are our parents living<br/> a happy old age?</span>
//                         </li>
//                         <li className="fir_sec_triger1">
//                         <span className="fir_stxt" style={{opacity: (scrollPosition)/100-0.5}}>"All i can think of is staying quiet and going. <br/>I thought that I would go without being greedy, quietly"</span>
//                         </li>
//                         <li className="fir_sec_triger2">
//                         <span className="fir_stxt" style={{opacity: (scrollPosition)/100-0.5}}>"don't be bored I'm bored, there's nothing I can do <br/>Just sit and pass the time, nothing to do"</span>
//                         </li>
//                         <li className="fir_sec_triger3">
//                         <span className="fir_stxt" style={{opacity: (scrollPosition)/100-0.5}}>"It was nice when the kids were chattering during the Lunar New Year... <br/>Why do tears keep coming after I go?<br/>?????? ??????????????? ????????? ????????? ????????? ?????? ?????? ??????</span>
//                         </li>
//                         </ul>
//                         </div>
//                     </section>
//                     <section className="sec_sec">
//                         <div className="txt_area">
//                         <div className="sec_sec_title">
//                             <span>????????? ???????????? ???????????? ????????? ?????????????</span>
//                         </div>
//                         <div className="sec_sec_txt">
//                             <span>????????? ????????? ??????????????? ???????????? ????????????, ????????? ????????? ????????????????<br/>
//                             ?????? ??? ???????????? '????????? ???????????? ?????? ??????.'<br/>
//                             ????????? ????????? ???????????? ?????????????????? ????????????????</span>
//                         </div>
//                         </div>
//                         <div className="slider">
//                             <ul className="slide_list">
//                                 {SliderData2.map((item, index)=>{
//                                     return(
//                                     <div className="Slide_wrap" key={index}>
//                                         {index === current && (
//                                     <div className="Slide_img_list">
//                                     <li>
//                                     <img src={item.img}/>
//                                     <a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>
//                                     <div className="shin_btn"><span>Apply ???</span>
//                                     </div>
//                                     </a>
//                                     </li>
//                                     </div>
//                                 )}
//                                 </div>
//                                 )})}    
                                
//                             </ul>
//                         </div>
//                     </section>
//                     <section className="tri_sec">
//                         <div className="tri_title">
//                             <h1><span>We promise you a</span> <span style={{color:"#424895"}}>safe and comfortable outing<br/></span>as well as <span style={{color:"#424895"}}>fun</span></h1>
//                         </div>
//                         <div className="tri_img">
//                             <ul className="tri">
//                                 <li className="helper">
//                                     <img src="/images/XS109058.jpg"/>
//                                     <div className="txt_area">
//                                     <h2>Helper</h2>
//                                     <p>?????? ?????? ???????????? ???????????? ???????????????<br/> ???????????? ?????? ?????????????????? ???????????????.</p>
//                                     </div>
//                                 </li>
//                                 <li className="private">
//                                 <img src="/images/XS109456.jpg"/>
//                                 <div className="txt_area">
//                                 <h2>Private</h2>
//                                     <p>????????? ?????? ????????? ????????? ????????? ??????,<br/> ????????? ?????? ????????? ????????? ???????????????.</p>
//                                 </div>
//                                 </li>
//                                 <li className="pyun">
//                                 <img src="/images/XS109391.jpg"/>
//                                 <div className="txt_area">
//                                 <h2>Comfortable travel</h2>
//                                     <p>????????? ???????????? ????????????<br/>???????????? ???????????? ????????????.</p>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </section>
//                     <section className="for_sec">
//                         <div className="for_area">
//                             <div className="for_area01">
//                             <div className="bg_c">
//                                 <h1 className="for_title">What is Travel-helper?</h1>
//                                 <p className="for_txt">???????????? ?????? ???????????? ?????? ??? ????????? ???????????????</p>
//                                 <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>Introduce Helper ???</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('http://naver.me/5mrUl7On','_blank')} >
//                             <div className="s_btn_2">
//                                 <span>Apply Helper ???</span>
//                             </div>
//                             </a>
//                             </div>
//                             <img src="/images/XS109363.jpg"/>
//                             </div>
//                             <div className="for_area02">
//                             <div className="for_area02-1">
//                             <div className="bg_c">
//                             <h1 className="Na_title">????????? ????????? ?????? ????????????????</h1>
//                                 <p className="Na_txt">??????????????? ????????????, ???????????? ????????? ????????????</p>
//                                 <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>???????????? ???</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>
//                             <div className="s_btn_2">
//                                 <span>Apply ???</span>
//                             </div>
//                             </a>
//                             </div>
//                             <img src="/images/XS109898.jpg"/>
//                             </div>
//                             <div className="for_area02-2">
//                             <div className="bg_c">
//                             <h1 className="Ask_title">???????????? ???????????????<br/>???????????? ?????? ??????</h1>
//                             <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>?????? ?????? ?????? ???</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}>
//                             <div className="s_btn_2">
//                                 <span>???????????? ???</span>
//                             </div>
//                             </a>

//                             </div>
//                             <img src="/images/XE039009.jpg"/>
//                             </div>
//                             </div>
                            
//                         </div>
//                     </section>
//                     <section className="logo_area">
//                         <div>
//                             <img src="/images/mon_logo.svg"/>
//                             <img src="/images/han_logo.svg"/>
//                             <img src="/images/yon_logo.svg"/>
//                             <img src="/images/hana_logo.svg"/>
//                             <img src="/images/buxi_logo.svg"/>
//                         </div>
//                     </section>
//                 </div>
//         </div>
//     )
// }

// export default MainContainer3_e;