import React, {useState}from 'react';
import styled from 'styled-components';
import './HelperContainer.css';
import { HelperData } from "../../Data/HelperData";
import { AreaData } from '../../Data/AreaData';
import { BiCaretDownCircle,BiCaretUpCircle} from "react-icons/bi";

const BiCaretDownCircles = styled(BiCaretDownCircle)`
    transform:translateY(2px);
`
const BiCaretUpCircles = styled(BiCaretUpCircle)`
    transform:translateY(2px);
`


const HelperContainer = () => {
    
    const [area,setArea] = useState('전국');
    
    const changeArea = (e) =>{
        setArea(e);
        console.log(window.innerHeight);
    }

    return(
        <div className="Wrap">
            <header>
                <div className="S_header">
                    <div className="S_header_area">
                        <div className="Main_title">
                            <h1>트레블헬퍼(Travel Helper)란, 혼자 여행이 어려운 어르신 및 교통약자를 위하여 고용된 나들이 도우미를 뜻합니다.</h1>
                        </div>
                        <a onClick={()=> window.open('http://naver.me/5mrUl7On','_blank')}>
                        <div className="shin_btn">
                            <span>헬퍼등록 →</span>
                        </div>
                        </a>
                    </div>
                </div>
            </header>
            <section>
                <div className="S_fir_sec">
                    <div className="S_fir_sec_area">
                        <div className="S_txt">
                            <div className="S_title">
                                <h1>소속 트레블헬퍼(Travel Helper)</h1>
                            </div>
                            <div className="S_stxt">
                                <p>포페런츠의 모든 헬퍼는 전문성을 가진 사회복지사로,<br/>
혼자 여행이 어려운 어르신 및 교통약자를 위하여 고용된 나들이 도우미를 뜻합니다.</p>
                            </div>
                        </div>
                        <div className="helper">
                            <div className='option'><ul>
                                {AreaData.map(
                                    (item,index)=>(
                                        <li onClick={()=>changeArea(item)}><span className={area == item ? "Checked" : ""}>{item}</span></li>
                                    ))}
                                </ul>
                                </div>
                                <div className='helper_div'>
                                    <div className='sogae'>
                                <ul className={'helper_ul'}>
                                {HelperData.map((item,index)=>(
                                    <>
                                    {area != '전국' && item.area == area ?
                                    <li className='helper_list'>
                                    <img className='helper_img' src={item.img == '' && item.gender=='남자' ? "/images/premium-icon-man-3741578.png" : "/images/premium-icon-woman-3741708.png"}/>
                                    <p className='helper_name' >이름 : {item.name}</p>
                                    <p className='helper_age'>나이 : {item.age}</p>
                                    <p className='helper_gyong'>경력 : {item.gyong}</p>
                                    </li>
                                    : area == '전국' ?
                                    <li className='helper_list'>
                                    <img className='helper_img' src={item.img == '' && item.gender=='남자' ? "/images/premium-icon-man-3741578.png" : "/images/premium-icon-woman-3741708.png"}/>
                                    <p className='helper_name' >이름 : {item.name}</p>
                                    <p className='helper_age'>나이 : {item.age}</p>
                                    <p className='helper_gyong'>경력 : {item.gyong}</p>
                                    </li>
                                    :""}
                                    </>
                                ))}
                                </ul>
                                </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default HelperContainer;