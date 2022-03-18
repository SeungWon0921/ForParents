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
//                             <span>Apply →</span>
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
//                         <span className="fir_stxt" style={{opacity: (scrollPosition)/100-0.5}}>"It was nice when the kids were chattering during the Lunar New Year... <br/>Why do tears keep coming after I go?<br/>집에 돌려보내긴 했지만 쓸쓸한 마음은 어쩔 수가 없어</span>
//                         </li>
//                         </ul>
//                         </div>
//                     </section>
//                     <section className="sec_sec">
//                         <div className="txt_area">
//                         <div className="sec_sec_title">
//                             <span>반나절 나들이로 부모님이 행복해 하신다면?</span>
//                         </div>
//                         <div className="sec_sec_txt">
//                             <span>어차피 안쓰고 손주들에게 돌아가는 용돈말고, 나들이 선물은 어떠신가요?<br/>
//                             그런 말 있잖아요 '사람은 추억으로 먹고 산다.'<br/>
//                             나이가 들어도 마음만은 청춘이라는거 공감하시죠?</span>
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
//                                     <div className="shin_btn"><span>Apply →</span>
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
//                                     <p>제약 많은 어르신도 나들이가 가능하도록<br/> 전문성을 가진 사회복지사가 동행합니다.</p>
//                                     </div>
//                                 </li>
//                                 <li className="private">
//                                 <img src="/images/XS109456.jpg"/>
//                                 <div className="txt_area">
//                                 <h2>Private</h2>
//                                     <p>타인과 섞여 불편한 패키지 여행과 달리,<br/> 지인과 함께 원하는 코스를 선택합니다.</p>
//                                 </div>
//                                 </li>
//                                 <li className="pyun">
//                                 <img src="/images/XS109391.jpg"/>
//                                 <div className="txt_area">
//                                 <h2>Comfortable travel</h2>
//                                     <p>안락한 차량으로 부모님을<br/>안전하고 편안하게 모십니다.</p>
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
//                                 <p className="for_txt">어르신과 함께 나들이를 가게 될 헬퍼를 만나보세요</p>
//                                 <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>Introduce Helper →</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('http://naver.me/5mrUl7On','_blank')} >
//                             <div className="s_btn_2">
//                                 <span>Apply Helper →</span>
//                             </div>
//                             </a>
//                             </div>
//                             <img src="/images/XS109363.jpg"/>
//                             </div>
//                             <div className="for_area02">
//                             <div className="for_area02-1">
//                             <div className="bg_c">
//                             <h1 className="Na_title">나들이 신청을 하고 싶으신가요?</h1>
//                                 <p className="Na_txt">진행과정을 살펴보고, 신청하기 버튼을 누르세요</p>
//                                 <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>진행과정 →</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>
//                             <div className="s_btn_2">
//                                 <span>Apply →</span>
//                             </div>
//                             </a>
//                             </div>
//                             <img src="/images/XS109898.jpg"/>
//                             </div>
//                             <div className="for_area02-2">
//                             <div className="bg_c">
//                             <h1 className="Ask_title">고객님과 포페런츠의<br/>아름다운 소통 창구</h1>
//                             <Link to={"/"}>
//                             <div className="s_btn_1">
//                                 <span>자주 하는 질문 →</span>
//                             </div>
//                             </Link>
//                             <a onClick={()=> window.open('https://pf.kakao.com/_KxdKxfb/chat','_blank')}>
//                             <div className="s_btn_2">
//                                 <span>문의하기 →</span>
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