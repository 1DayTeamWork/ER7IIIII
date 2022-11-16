import React, { useState } from "react";
import BrandAddForm from "../forms/brand/BrandAddForm";

const CreateBrandBtn = () => {
  const [show, setshow] = useState(false);
  const handleShowChange = (e: any) => {
    e.preventDefault();
    return setshow(!show);
  };
  return (
    <div>
      <div className='lg:ml-40 ml-10 space-x-8'>
        <button
          className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'
          onClick={(e) => {
            handleShowChange(e);
          }}
        >
          Creat New Brand
        </button>
        {show ? <BrandAddForm show={setshow} /> : <></>}
      </div>
    </div>
  );
};

export default CreateBrandBtn;
