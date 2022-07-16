import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components';

export interface INavProps {
  variant?: "primary" | "secondary";
  scrollNav: boolean;
}
export interface ICircleProps {
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
  background: ${(props) => (props?.scrollNav === false ? "transparent" : "#FE665B")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 99;
  transition: 0.2s all ease-in;
`;

const StyledLink = styled.div`
  padding: 0rem 2rem;
  cursor: pointer;
  font-weight: 600;
  :hover {
    color: #FE665B;
  }
`;
const Circle = styled.nav.attrs<Pick<ICircleProps, "scrollNav">>(
  (props) => {
    scrollNav: props?.scrollNav;
  }
)<ICircleProps>`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: ${(props) => (props?.scrollNav === false ? "#FE665B" : "#FFFFFF")};
  color: ${(props) => (props?.scrollNav === false ? "#FFFFFF" : "#FE665B")};
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
  margin-left:1rem;
  line-height: 2rem;
  transition: 0.2s all ease-in;
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
          <Circle scrollNav={isScrolled}>3</Circle>
          <Text>$450</Text>
        </div>
        <div className={"border border-solid border-gray-400"}></div>
        <div className={"flex items-center"}>
          <Circle scrollNav={isScrolled}>3</Circle>
          <Text>Chris Tran</Text>
        </div>
      </div>
    </Nav>
  )
}

export default Header