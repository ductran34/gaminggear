import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import InputField from "components/AdministratorPage/InputField";
import { useState } from "react";
import TitleList from "components/HomePage/TitleList";


const SignUpBtn = styled.div`
  color: #eae7dd;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background: #c5c5c586;
  border: 2px solid #eae7dd;
  margin-right: 1rem;
  :hover {
    background: #eae7dd;
    color: #fb4959
  }
  @media (min-width: 640px) {
    padding: 0.5rem 3rem;
  }
`
const LognInBtn = styled.div`
  color: #eae7dd;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background: #fb495970;
  border: 2px solid #fb4959;
  :hover {
    background: #fb4959;
  }
  @media (min-width: 640px) {
    padding: 0.5rem 3rem;
  }
`
const authenticationPage = () => {
  const [state, setState] = useState("indie")
  const attribute = [
    {
      label: "USERNAME",
      type: "text"
    },
    {
      label: "PASSWORD",
      type: "text"
    },
  ]
  return (
    <BasicLayout>
      <Header></Header>
      <div className="flex justify-center items-center w-screen h-screen">
        {state === "indie" ? (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70vw", height: "70vh", border: "2px solid #fb4959", justifySelf: "center" }}>
            <div className="text-[#eae7dd] text-2xl mb-[2rem]">GET SET UP TO BUY</div>
            <div className="flex flex-row">
              <SignUpBtn onClick={() => setState("signup")}>SIGN UP</SignUpBtn>
              <LognInBtn onClick={() => setState("login")}>LOG IN</LognInBtn>
            </div>
          </div>
        ) : (
          <>
            {state === "login" ? (
              <div className="grid gap-x-5 grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1 lg:col-span-1.5 ">
                <TitleList title={"creating   an acount"} size={"small"}/>
                </div>
                <div className="bg-[#fb4959] col-span-1 lg:col-span-2.5 ">
                  <div>WHAT IS YOUR EMAIL</div>
                  <InputField type={attribute[0].type} label={attribute[0].label} />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-screen h-screen">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70vw", height: "70vh", border: "2px solid #fb4959", justifySelf: "center" }}>
                  <div className="text-[#eae7dd] text-2xl mb-[2rem]">sign up</div>
                  <div className="flex flex-row">
                    <SignUpBtn onClick={() => setState("indie")}>SIGN UP</SignUpBtn>
                    <LognInBtn onClick={() => setState("login")}>LOG IN</LognInBtn>
                  </div>
                </div>
              </div>
            )}</>
        )}
        {/* <div className="grid gap-x-5 grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-3 space-y-5 text-[#eae7dd] text-[4rem]">
                CREATE AN ACCOUNT
            </div>
            <div className="bg-[#fb4959] col-span-1 lg:col-span-2 ">
                <div>WHAT IS YOUR EMAIL</div>
                <InputField type={attribute[0].type} label={attribute[0].label}/>
            </div>
        </div> */}
      </div>
    </BasicLayout>
  );
};

export default authenticationPage;
