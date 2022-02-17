
    import React from 'react';
import { Link } from 'react-router-dom';
    import styled from 'styled-components';
    import Burger from './Burger';

    const Nav = styled.nav`
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #f1f1f1;
    .logo{
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        padding 15px 0;
        height:90px;
    }
    .logo img.pc-logo{
        height: 60px;
    }
    .m-logo{
        display:none;
    }
    @media screen and (max-width:960px) {
        height: 50px;
        .logo{
            padding: 0;
            position:absolute;
            left:50%;
            transform: translateX(-50%);
            height:50px;
        }
        
        .m-logo{
            height:50px;
            display:block;
        }
        .pc-logo{
            display:none;
        }
    }
    `

    const Navbar = () => {
    return (
        <Nav>
        <div className="logo">
        <Link to={"/"}><img className='m-logo' src="/images/Mobil_log.png"/>
                <img className='pc-logo' src="/images/mili_01.png"/>
                    </Link>
        </div>
        <Burger />
        </Nav>
    )
    }

    export default Navbar