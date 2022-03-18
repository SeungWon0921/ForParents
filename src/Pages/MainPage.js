import React, { useState } from "react";
import GlobalStyle from "../GlobalStyles";
import MainContainer3 from "../Components/Container/MainContainer3";
import Navbar from "../Components/Container/Nav/Navbar";
import { Helmet } from "react-helmet";

const MainPage = () => {
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 메인</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar/>
        <MainContainer3/>
        </>
    );
}

export default MainPage;

