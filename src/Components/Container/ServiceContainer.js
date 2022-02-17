import React from "react";
import './ServiceContainer.css';

const ServiceContainer = () => {
    return(
        <div className="Wrap">
            <header>
                <div className="S_header">
                    <div className="S_header_area">
                        <div className="Main_title">
                            <h1>오직 당신의 부모님만을 위한 나들이 친구부터 차량, 식사, 카페까지
포페런츠에서 ONE-STOP으로 해결하세요.</h1>
                        </div>
                        <a onClick={()=> window.open('http://naver.me/Fql4XzSx','_blank')}>
                        <div className="shin_btn">
                            <span>신청하기 →</span>
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
                                <h1>'트레블헬퍼(Travel Helper)'란?</h1>
                            </div>
                            <div className="S_stxt">
                                <p>포페런츠의 모든 헬퍼는 전문성을 가진 사회복지사로,<br/>
혼자 여행이 어려운 어르신 및 교통약자를 위하여 고용된 나들이 도우미를 뜻합니다.</p>
                            </div>
                        </div>
                        <div className="S_img">
                                <img src="/images/Service_helper.png"/>
                            </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="S_Gin_sec">
                    <div className="S_Gin_sec_area">
                        <div className="G_title">
                        <h1>진행과정</h1>
                        </div>
                        <div className="G_img">
                            <img src="/images/Gin_R.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceContainer;