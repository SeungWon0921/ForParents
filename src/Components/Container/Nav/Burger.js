    import React, { useState } from 'react';
    import styled from 'styled-components';
    import RightNav from './RightNav';

    const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 960px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#243884' : '#243884'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.5s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    `;

    const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav open={open}/>
        </>
    )
    }

    export default Burger