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
  height: 5rem;
  width: 100%;
  padding: 0 1.5rem;
  background: ${(props) => (props?.scrollNav === false ? "transparent" : "#FE665B")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props?.scrollNav === false ? "#fff" : "#16202a")};
  z-index: 99;
`;

const StyledLink = styled.div.attrs<Pick<INavProps, "scrollNav">>(
  (props) => {
    scrollNav: props?.scrollNav;
  }
)<INavProps>`
  padding: 0rem 2rem;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => (props?.scrollNav === false ? "#fff" : "#16202a")};
  :hover {
    color: ${(props) => (props?.scrollNav === false ? "#FE665B" : "#fff")};;
  }
`;
const Circle = styled.div.attrs<Pick<INavProps, "scrollNav">>(
  (props) => {
    scrollNav: props?.scrollNav;
  }
)<INavProps>`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: ${(props) => (props?.scrollNav === false ? "#fe665b86" : "#c5c5c586")};
  color: ${(props) => (props?.scrollNav === false ? "#FFFFFF" : "#fff")};
  border: 2px solid ${(props) => (props?.scrollNav === false ? "#FE665B" : "#fff")};;
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
  margin-left:1rem;
  line-height: 1.75rem;
`;

const Text = styled.div.attrs<Pick<INavProps, "scrollNav">>(
  (props) => {
    scrollNav: props?.scrollNav;
  }
)<INavProps>`
  padding: 0rem 1rem;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) => (props?.scrollNav === false ? "#fff" : "#c5c5c5")};
  :hover {
    color: #fff;
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
          <StyledLink scrollNav={isScrolled}>NXT</StyledLink>
        </Link>
      </div>
      <div className={"flex"}>
        <Link href='/mouse' passHref>
          <StyledLink scrollNav={isScrolled}>Mouse</StyledLink>
        </Link>
        <Link href='/keyboard' passHref>
          <StyledLink scrollNav={isScrolled}>Keyboard</StyledLink>
        </Link>
        <Link href='/headsets' passHref>
          <StyledLink scrollNav={isScrolled}>Headsets</StyledLink>
        </Link>
        <Link href='/mousepads' passHref>
          <StyledLink scrollNav={isScrolled}>Mousepads</StyledLink>
        </Link>
      </div>
      <div className={"flex "}>
        <Link href='/cartPage' passHref>
          <div className={"flex items-center"}>
            <Circle scrollNav={isScrolled}>3</Circle>
            <Text scrollNav={isScrolled}>$450</Text>
          </div>
        </Link>
        <div className={"border border-solid border-gray-400"}></div>
        <div className={"flex items-center"}>
          <Circle scrollNav={isScrolled}>3</Circle>
          <Text scrollNav={isScrolled}>Chris Tran</Text>
        </div>
      </div>
    </Nav>
  )
}

export default Header