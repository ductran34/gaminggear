import React from "react";

interface InputFieldProps {
  type: string;
  label: string;
  options?: Array<string>;
  productAttributeState: Map<string, any>;
  setProductAttributeState: React.Dispatch<React.SetStateAction<any>>;
}

function handleChange(evt: React.ChangeEvent<HTMLInputElement>, label: string,  productAttributeState: Map<string, any>, setProductAttributeState: React.Dispatch<React.SetStateAction<any>>) {
  const value = evt.target.value;
  setProductAttributeState(new Map(productAttributeState.set(label,value)));
}
function handleChangeSelect(evt: React.ChangeEvent<HTMLSelectElement>, label: string,  productAttributeState: Map<string, any>, setProductAttributeState: React.Dispatch<React.SetStateAction<any>>) {
  const value = evt.target.value;
  setProductAttributeState(new Map(productAttributeState.set(label,value)));
}
function handleChangeTextArea(evt: React.ChangeEvent<HTMLTextAreaElement>, label: string,  productAttributeState: Map<string, any>, setProductAttributeState: React.Dispatch<React.SetStateAction<any>>) {
  const value = evt.target.value;
  setProductAttributeState(new Map(productAttributeState.set(label,value)));
}


function InputField({
  type,
  label,
  options,
  productAttributeState,
  setProductAttributeState,
}: InputFieldProps) {
  return (
    <div className="w-full">
      {type === "text" ? (
        <Text
          label={label}
          productAttributeState={productAttributeState}
          setProductAttributeState={setProductAttributeState}
        />
      ) : (
        <>
          {type === "option" ? (
            <Select
              label={label}
              options={options}
              productAttributeState={productAttributeState}
              setProductAttributeState={setProductAttributeState}
            />
          ) : (
            <>
              {type === "number" ? (
                <Number
                  label={label}
                  productAttributeState={productAttributeState}
                  setProductAttributeState={setProductAttributeState}
                />
              ) : (
                <TextArea
                  label={label}
                  productAttributeState={productAttributeState}
                  setProductAttributeState={setProductAttributeState}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

interface FieldProps {
  label: string;
  options?: Array<string>;
  productAttributeState: Map<string, any>;
  setProductAttributeState: React.Dispatch<React.SetStateAction<any>>;
}

function Select({
  label,
  options,
  productAttributeState,
  setProductAttributeState,
}: FieldProps) {

  return (
    <div className="relative ">
      <label
        className="block uppercase tracking-wide text-[#fff] text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <select 
        onChange={(evt: React.ChangeEvent<HTMLSelectElement>)=> {
          handleChangeSelect(evt,label,productAttributeState,setProductAttributeState);
        }}
        className="block appearance-none w-full bg-[#262632] text-[#fff] border border-[#fff] hover:border-[#fb4959] py-3 px-4 rounded shadow leading-tight focus:outline-none ">
        {options?.map((option, index) => 
        {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center py-3 px-4 text-grey-700">
        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

function Text({
  label,
  productAttributeState,
  setProductAttributeState,
}: FieldProps) {


  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-[#fff] text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <input
        className="block w-full bg-transparent border border-[#fff] rounded py-3 px-4 leading-tight hover:border-[#fb4959] focus:outline-none focus:border-[#fb4959] focus:bg-[#fb495970] focus:text-[#eae7dd] placeholder:text-[#eae7dd]"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>)=> {
          handleChange(evt,label,productAttributeState,setProductAttributeState);
        }}
      />
    </div>
  );
}

function Number({
  label,
  productAttributeState,
  setProductAttributeState,
}: FieldProps) {
  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-[#fff] text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <input
        className="block appearance-none w-full bg-transparent border border-[#fff] rounded py-3 px-4 leading-tight hover:border-[#fb4959] focus:outline-none focus:border-[#fb4959] focus:bg-[#fb495970] focus:text-[#eae7dd] placeholder:text-[#eae7dd]"
        id="grid-last-name"
        type="number"
        placeholder="Doe"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>)=> {
          handleChange(evt,label,productAttributeState,setProductAttributeState);
        }}
      />
    </div>
  );
}

function TextArea({
  label,
  productAttributeState,
  setProductAttributeState,
}: FieldProps) {
  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-[#fff] text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <textarea
        className="block w-full bg-transparent border border-[#fff] rounded py-3 px-4 leading-tight hover:border-[#fb4959] focus:outline-none focus:border-[#fb4959] focus:bg-[#fb495970] focus:text-[#eae7dd] placeholder:text-[#eae7dd]"
        id="grid-last-name"
        placeholder="Description"
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>)=> {
          handleChangeTextArea(evt,label,productAttributeState,setProductAttributeState);
        }}
      />
    </div>
  );
}

export default InputField;
