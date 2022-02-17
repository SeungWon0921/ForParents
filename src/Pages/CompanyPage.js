import React from "react";
import CompanyContainer from "../Components/Container/CompanyContainer";
import Navbar from "../Components/Container/Nav/Navbar";
import GlobalStyle from "../GlobalStyles";

const CompanyPage = () => {
    return(
        <>
        <GlobalStyle/>
        <Navbar/>
        <CompanyContainer/>
        </>
    )
}
export default CompanyPage;