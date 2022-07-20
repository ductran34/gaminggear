import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { useRef, useState } from "react";
import TitleList from "components/HomePage/TitleList";
import InputField from "components/AdministratorPage/InputField";
import { productAttribute, settings } from "../data/settings";


function administratorPage() {
  const router = useRouter();
  // Check whether router.query is empty {} or not
  // if (Object.keys(router.query).length !== 0) {
  //   const queryParams = router.query;
  //   console.log(queryParams);
  //   console.log("Search", queryParams.search);
  //   console.log("Page", queryParams.page);
  //   console.log("Limit", queryParams.limit);
  // }

  const [productAttributeState, setProductAttributeState] = React.useState(
    new Map(
      productAttribute.map((attribute) => {
        return [
          attribute.label,
          attribute.type === "number"
            ? 0
            : "option"
            ? attribute.options === undefined
              ? ""
              : attribute.options[0]
            : "",
        ];
      })
    )
  );

  useEffect(() => {
    console.log(productAttributeState);
  }, [productAttributeState]);


  function addNewProduct(){
    
  }

  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <TitleList title="ADMINISTRATOR" />
        <div className="grid grid-cols-3 gap-2">
          <div>IMAGE</div>
          <div className={"col-span-2 grid grid-cols-3 gap-4"}>
            {productAttribute.map((attribute, index) => {
              return (
                <div
                  key={index}
                  className={
                    attribute.label === "Description"
                      ? "col-span-full"
                      : "col-span-1"
                  }
                >
                  <InputField
                    type={attribute.type}
                    label={attribute.label}
                    options={attribute.options}
                    productAttributeState={productAttributeState}
                    setProductAttributeState={setProductAttributeState}
                  />
                </div>
              );
            })}
            <div
              onClick={addNewProduct} 
              className="col-end-4 cursor-pointer w-full text-[#fff] bg-[#fb4959] border border-[#fff] rounded py-3 px-4">
                Add New Product
            </div>
          </div>
        </div>
      </Container>
    </BasicLayout>
  );
}

export default administratorPage;
