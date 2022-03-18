import React from "react";
import { Helmet } from "react-helmet";
import CompanyContainer from "../Components/Container/CompanyContainer";
import Navbar from "../Components/Container/Nav/Navbar";
import GlobalStyle from "../GlobalStyles";

const CompanyPage = () => {
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 포페런츠</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar/>
        <CompanyContainer/>
        </>
    )
}
export default CompanyPage;