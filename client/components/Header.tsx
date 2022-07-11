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
  padding: 0 3rem;
  background: ${(props) => (props?.scrollNav === false ? "transparent" : "#FE665B")};;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 99;
`;

const StyledLink = styled.div`
  padding: 0rem 2rem;
  cursor: pointer;
  font-weight: 600;
  :hover {
    color: #FE665B;
  }
`;

const Circle = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #FE665B;
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
  margin-left:1rem;
  line-height: 2rem;
`;

const Text = styled.div`
  padding: 0rem 1rem;
  cursor: pointer;
  font-weight: 600;
  :hover {
    color: #FE665B;
  }
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
      <div className={"flex"}>
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
      <div className={"flex "}>
        <div className={"flex items-center"}>
          <Circle>3</Circle>
          <Text>$450</Text>
        </div>
        <div className={"border border-solid border-gray-400"}></div>
        <div className={"flex items-center"}>
          <Circle>3</Circle>
          <Text>Chris Tran</Text>
        </div>
      </div>
    </Nav>
  )
}

export default Header