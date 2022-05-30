import React from "react";
import Navbar from "../Components/Container/Nav/Navbar";
import GlobalStyle from "../GlobalStyles";
import { Helmet } from "react-helmet";
import HelperContainer from "../Components/Container/HelperContainer";


const HelperPage = () => {
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 헬퍼</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar/>
        <HelperContainer/>
        </>
    )
}

export default HelperPage;