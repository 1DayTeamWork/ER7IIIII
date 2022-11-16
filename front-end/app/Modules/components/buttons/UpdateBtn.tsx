import React, { useState } from "react";
import BrandUpdateForm from "../forms/brand/BrandUpdateForm";

import CarUpdateForm from "../forms/car/CarUpdateForm";
import UserUpdateForm from "../forms/user/UserUpdateForm";

const UpdateBtn = (props: any) => {
  const [hide, setHide] = useState('');

  const handleHideChange = (e: any) => {
    e.preventDefault();
    return setHide(props.type);
  };

  return (
    <div>
      <>
        <div>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            onClick={(e) => {
              handleHideChange(e);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            <span className="sr-only">Add</span>
          </button>
        </div>
        {hide === 'users' ? <UserUpdateForm hide={setHide} user={props.user} /> : <></>}
        {hide === 'cars' ? <CarUpdateForm hide={setHide} car={props.car}/> : <></>}
        {hide === 'brands' ? <BrandUpdateForm hide={setHide} brand={props.brand}/> : <></>}
      </>
    </div>
  );
};

export default UpdateBtn;
