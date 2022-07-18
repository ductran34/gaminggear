import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { useRef, useState } from "react";
import React from "react";
import TitleList from "components/HomePage/TitleList";
import { useRouter } from "next/router";

function categoryPage() {
  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <TitleList title="GAMING MICE" />
        <DropDownSortedBy />
        <ContainerSortedBy />
      </Container>
    </BasicLayout>
  );
}

function DropDownSortedBy() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selection, setSelection] = useState("NEWEST");
  const btnRef = useRef();

  // useEffect(()=>{
  //   const closeDropdown = (e:any) => {
  //     if(e.path[0] !== btnRef.current) {
  //       setIsDropdown(false);
  //     }
  //   }

  //   document.body.addEventListener('click',closeDropdown);

  //   return () => document.body.removeEventListener('click',closeDropdown);

  // },[]);

  return (
    <div className="relative w-full bg-[#FE665B] p-2 text-[#ffffff] flex justify-between">
      <div>FILTER</div>
      <button
        // ref={btnRef}
        style={{
          display: !isDropdown ? "block" : "none",
        }}
        onClick={() => {
          setIsDropdown(!isDropdown);
        }}
      >
        SORTED BY: {selection}
      </button>
      <div
        className="absolute right-2 bg-[#FE665B] "
        style={{
          display: isDropdown ? "block" : "none",
        }}
      >
        <a
          className="block cursor-pointer p-2 border"
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        >
          Price: Low To High
        </a>
        <a
          className="block cursor-pointer p-2 border"
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        >
          Price: High To Low
        </a>
        <a
          className="block cursor-pointer p-2 border"
          onClick={() => {
            setIsDropdown(!isDropdown);
          }}
        >
          Avg. Customer Review
        </a>
      </div>
    </div>
  );
}

function ContainerSortedBy() {
  const [filteredList, setFilteredList] = useState([]);

  return (
    <div className="xl:flex xl:flex-row">
      <div className="hidden xl:block xl:flex-none w-[15rem] p-4">
        <MenuFilter />
      </div>
      <div className="xl:grow p-4">
        <div className="flex gap-4">
          {[...Array(5)].map((brand, index) => {
            return <div className="bg-[#30303C] px-2 py-1 text-[1rem]">Logitech {index}</div>;
          })}
        </div>
        <div>List</div>
      </div>
    </div>
  );
}

function MenuFilter() {
  return (
    <div className="">
      <div>MAIN MENU</div>
      <SectionFilter />
    </div>
  );
}

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2px;
`;

// INPUT - RADIO STYLED-COMPONENTED
const RadioButtonLabel = styled.label`
  position: absolute;
  top: 20%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  border: 3px solid #fe665b;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #fe665b;
  }
  &:checked + ${Item} {
    background: #fe665b;
  }
  &:checked + ${RadioButtonLabel} {
    background: #fe665b;
  }
`;

function SectionFilter() {
  const [select, setSelect] = useState("optionA");

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <div>
      {[...Array(5)].map((brand, index) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="border-b-2 border-[#cccccc] py-4 cursor-pointer">
            <div
              className="flex justify-between"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div>BRAND</div>
              <div>+</div>
            </div>
            <div style={{ display: isOpen === true ? "block" : "none" }}>
              {[...Array(5)].map((brand, idx) => {
                return (
                  <Item key={idx}>
                    <RadioButton
                      type="radio"
                      name={index.toString()}
                      value="optionA"
                      checked={select === "optionA"}
                      onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div className="text-[1rem] font-normal">Choose Pickup</div>
                  </Item>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default categoryPage;
