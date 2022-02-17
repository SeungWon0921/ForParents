import React, { useState } from "react";
import GlobalStyle from "../GlobalStyles";
import MainContainer3 from "../Components/Container/MainContainer3";
import Navbar from "../Components/Container/Nav/Navbar";

const MainPage = () => {
    return(
        <>
        <GlobalStyle/>
        <Navbar/>
        <MainContainer3/>
        </>
    );
}

export default MainPage;