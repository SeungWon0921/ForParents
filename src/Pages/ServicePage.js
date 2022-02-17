import React from "react";
import Navbar from "../Components/Container/Nav/Navbar";
import ServiceContainer from "../Components/Container/ServiceContainer";
import GlobalStyle from "../GlobalStyles";


const ServicePage = () => {
    return(
        <>
        <GlobalStyle/>
        <Navbar/>
        <ServiceContainer/>
        </>
    )
}

export default ServicePage;