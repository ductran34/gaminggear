import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components';

export interface INavProps {
  variant?: "primary" | "secondary";
  scrollNav: boolean;
}

const Nav = styled.nav.attrs<Pick<INavProps, "scrollNav">>(
  (props) => {
    scrollNav: props?.scrollNav;
  }
)<INavProps>`
  position: fixed;
  height: 80px;
  width: 100%;
  background: ${(props) => (props?.scrollNav === false ? "transparent" : "#FE665B")};;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const InfoBar = styled.a`
  display: flex;
  flex-direction: "row";
`;

const Circle = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  background-color: #FE665B;
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
`;

const Text = styled.a`
  padding: 0rem 2rem;
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Nav scrollNav={isScrolled}>
      <div>
        <Link href='/' passHref>
          <StyledLink>NXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/mouse' passHref>
          <StyledLink>Mouse</StyledLink>
        </Link>
        <Link href='/keyboard' passHref>
          <StyledLink>Keyboard</StyledLink>
        </Link>
        <Link href='/headsets' passHref>
          <StyledLink>Headsets</StyledLink>
        </Link>
        <Link href='/mousepads' passHref>
          <StyledLink>Mousepads</StyledLink>
        </Link>
      </div>
      <InfoBar>
        <div css={`display: flex;`}>
          <Circle>3</Circle>
          <Text>$450</Text>
        </div>
        <div css={`display: flex;`}>
          <Circle>3</Circle>
          <Text>Chris Tran</Text>
        </div>
      </InfoBar>
    </Nav>
  )
}

export default Header