import React from "react";
import Navbar from "../Components/Container/Nav/Navbar";
import ServiceContainer from "../Components/Container/ServiceContainer";
import GlobalStyle from "../GlobalStyles";
import { Helmet } from "react-helmet";


const ServicePage = () => {
    return(
        <>
        <Helmet>
        <title>트레블헬퍼 || 서비스</title>
        </Helmet>
        <GlobalStyle/>
        <Navbar/>
        <ServiceContainer/>
        </>
    )
}

export default ServicePage;