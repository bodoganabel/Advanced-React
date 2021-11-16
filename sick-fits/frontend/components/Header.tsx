import React from 'react'
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';


const Logo = styled.h1`
  font-size: 4em;
  z-index: 2;
  background-color: red;
  transform: skew(-7deg);
  margin-left: 2rem;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`
const HeaderStyles = styled.header`
  .bar{
    border-bottom: 10px solid var(--black,black);
    display:grid;
    grid-template-columns: space-between;
    justify-content: space-between;
    align-items: center;
  }
  
  .sub-bar {
    display: grid;
    grid-template-rows: 1fr auto;
    border-bottom: 1px solid var(--black,black);
  }

`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">
          <Logo>
            <Link href="/">
              Sick fits
            </Link>
          </Logo>
        </Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav></Nav>
    </HeaderStyles>
  )
}
