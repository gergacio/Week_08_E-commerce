import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = ( { user } ) => {

  const Header = styled.header`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
  `

  const HeaderGroup = styled.hgroup `
    display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 30px;
  `
  const Span = styled.span`
   background-color: white;

   padding: 5px;
   `


  return (
    <Header>
        <HeaderGroup>
          <h1>JavaScript Masters Courses</h1>
         
        </HeaderGroup>

      <nav>
        <ul>
          <li><Span><Link to="/">View Stock</Link></Span></li>
        </ul>


      </nav>
      <div id="user-info">
        <h3>Welcome back { user.name }</h3>
        <h4>You have { user.basket.length } items in your basket</h4>
        <Span>
          <Link to="/basket">Go to Basket</Link>
         </Span>
        
       

      </div>
    </Header>
  );
};

export default Header;