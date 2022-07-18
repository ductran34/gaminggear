import React from "react";

interface InputFieldProps {
  type: string;
  label:string;
  options?: Array<string>;
}

function InputField({ type, label, options}: InputFieldProps) {
  return (
    <div className="w-full px-3">
      {type === "text" ? (
        <Text label={label}/>
      ) : (
        <>
          {type === "option" ? (
            <Select label={label} options={options}/>
          ) : (
            <>{type === "number" ? <Number  label={label}/> : <TextArea label={label}/>}</>
          )}
        </>
      )}
    </div>
  );
}

interface FieldProps {
  label:string;
  options?: Array<string>;
}

function Select({label, options}:FieldProps) {
  return (
    <div className="relative ">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <select className="block placeholder-pink-400 appearance-none w-full bg-[#262632] border hover:border-gray-500 py-3 px-4 rounded shadow leading-tight focus:outline-none ">
          {options?.map((option,index) => {
              return (
                <option key={index}>{option}</option>
              )
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

function Text({label}:FieldProps) {
  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <input
        className="block w-full bg-transparent border rounded py-3 px-4 leading-tight hover:border-[#FE665B] focus:outline-none focus:border-[#FE665B] focus:bg-[#fe665b86] focus:text-[#fff] placeholder:text-[#fff]"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
      />
    </div>
  );
}

function Number({label}:FieldProps) {
  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
       {label}
      </label>
      <input
        className="block appearance-none w-full bg-transparent border rounded py-3 px-4 leading-tight hover:border-[#FE665B] focus:outline-none focus:border-[#FE665B] focus:bg-[#fe665b86] focus:text-[#fff] placeholder:text-[#fff]"
        id="grid-last-name"
        type="number"
        placeholder="Doe"
      />
    </div>
  );
}

function TextArea({label}:FieldProps) {
  return (
    <div className="">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {label}
      </label>
      <textarea
        className="block w-full bg-transparent border rounded py-3 px-4 leading-tight hover:border-[#FE665B] focus:outline-none focus:border-[#FE665B] focus:bg-[#fe665b86] focus:text-[#fff] placeholder:text-[#fff]"
        id="grid-last-name"
        placeholder="Description"
      />
    </div>
  );
}

export default InputField;
