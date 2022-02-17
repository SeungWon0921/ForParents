import React from "react";
import './CompanyContainer.css';

const CompanyContainer = () => {
    return(
        <div className="Wrap">
            <header className="Company">
            </header>
            <div className="C_Container">
                <div className="Ceo">
                    <div className="C_960_img">
                        
                    </div>
                    <div className="img"><img src="/images/CEO_PC.png"/></div>
                    <div className="CEO_txt">
                        <div className="CEO_NAME">
                            <h1>장준표</h1>
                            <p>포페런츠 대표 | 연세대학교 사회복지학</p>
                        </div>
                        <div className="CEO_T">
                            <p>포페런츠의 트레블헬퍼 서비스는 단순 관광업이 아닌, <span className="mit">‘정신건강 증진을 위한 돌봄 서비스’</span> 입니다. 꼼꼼한 이력서 검토와 면접을 거쳐 요양 및 노인복지 분야의 베테랑 사회복지사 선생님들을 헬퍼로 모셨습니다. </p>
                            <p>조부모님께서는 승합차를 개조하여 전국일주를 다니실 만큼 활동적이셨습니다. 그러나 면허 반납 이후, 집에서 TV만 시청하시며 날이 갈수록 무기력해지시는 모습이 안타까워 매주 일요일이면 조부모님을 모시고 근교 나들이를 다녔습니다. 그럼에도 불구하고, 점점 바빠지는 일상에서 <span className="mit">“믿을 수 있는 누군가 대신 조부모님을 즐겁게 해드릴 수 있으면 좋겠다”</span> 라는 생각으로 일본과 미국 등에서 활발히 진행되고 있는 ‘트레블헬퍼’ 서비스를 국내에 도입하였습니다.</p>
                            <p>부모님의 소중한 추억은 물론, 사회복지 사례관리 상담을 통해 무료함과 우울감의 개선 정도를 과학적으로 전달하겠습니다. 포페런츠는 늘 안전한 환경에서 고객의 부모님의 즐겁고 건강한 노후를 위해 최선을 다하겠습니다.</p>
                            <p className="end">- 포페런츠 대표 장준표 드림 -</p>
                        </div>
                    </div>
                </div>
                <div className="C_team">
                    <div className="text_area">
                        <h1>Team</h1>
                        <p>저희 포페런츠 구성원은 전문성을 바탕으로 늘 부모님의 즐겁고 안전한 여가를 위해 노력하고 있습니다. 젊은 감각으로 트랜디한 시니어 여가 문화를 선도하겠습니다.</p>
                        </div>
                    <div className="team_list">
                        <ul className="team_ul">
                            <li><div className="img_area"></div><p><span>장준표</span> <span>경영책임(CEO)</span></p><p>연세대학교 사회복지학</p></li>
                            <li><div className="img_area"></div><p><span>박지훈</span> <span>크리에이티브책임(CCO)</span></p><p>대한적십자사 센터 근무</p></li>
                            <li><div className="img_area"></div><p><span>장재원</span> <span>전략책임(CSO)</span></p><p>고려대학교 체육학</p></li>
                            <li><div className="img_area"></div><p><span>장수연</span> <span>운영책임(COO)</span></p><p>연세대학교 경영학</p></li>
                        </ul>
                    </div>
                </div>
                <div className="C_logo">
                    <div className="text_area">
                        <h1>logo</h1>
                        <span>For Parents의 약자 FP를 부모님의 선물을 준비하는 마음으로 선물로 형상화하였습니다.</span> <span>
청색,황색,회색 3색을 각각 Active Navy, Pleasure Yellow, Eternal Silver 컬러로 명명하였습니다.</span> <span>이는 활력, 기쁨, 영원함으로 For Parents가 바라는 시니어의 속성을 담고 있습니다. </span>
                    </div>
                    <div className="img_area">
                        <img src="/images/CompanyLogo.png"/>
                    </div>
                </div>
            </div>
            <div className="Ga_chi">
                <h1 className="title">핵심가치</h1>
                <div className="Ga_chi_wrap">
                <ul className="Ga_chi_ul">
                    <li><h1>즐거움</h1>
                        <h1>Pleasure</h1></li>
                    <li><h1>안전</h1><h1>Safety</h1></li>
                    <li><h1>편안함</h1><h1>Comfort</h1></li>
                </ul>
                <ul className="Ga_chi_ul_d">
                    <li><p>빡빡한 일정 속 고단한 여행이 아닌, 부모님의 
즐거움이 우선되어야한다는 철학을 갖고 있습니다.</p></li>
                    <li><p>포페런츠의 꼼꼼한 사례관리 상담과 체계적인
가이드라인은 든든한 안전망을 제공합니다.</p></li>
                    <li><p>넓고 쾌적한 차량과 이동 중 헬퍼의 케어는
고객의 신체는 물론 심리적 안정감을 제공합니다.</p></li>
                </ul>
                </div>
                <div className="Ga_chi_wrap_m">
                <div className="img_area">
                    <img src="/images/Gachi_m.png"/>
                </div>
                <ul className="Ga_chi_ul_d">
                    <li><p className="Ga_t">즐거움</p><p>빡빡한 일정 속 고단한 여행이 아닌, 부모님의 
즐거움이 우선되어야한다는 철학을 갖고 있습니다.</p></li>
                    <li><p className="Ga_t">안전</p><p>포페런츠의 꼼꼼한 사례관리 상담과 체계적인
가이드라인은 든든한 안전망을 제공합니다.</p></li>
                    <li><p className="Ga_t">편안함</p><p>넓고 쾌적한 차량과 이동 중 헬퍼의 케어는
고객의 신체는 물론 심리적 안정감을 제공합니다.</p></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyContainer;