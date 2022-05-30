import React from "react";
import Navbar from "../Components/Container/Nav/Navbar";
import NoticeContainer from "../Components/Container/NoticeContainer";
import GlobalStyle from "../GlobalStyles";

const NoticePage = () => {
    return(
        <>
        <GlobalStyle/>
        <Navbar/>
        <NoticeContainer/>
        </>
    )
}

export default NoticePage;