import React from "react";
import axios from "axios";

export default function DeleteBtn(props: any) {
  return (
    <button
      onClick={() => {
        if(props.car){
          axios
          .delete(`http://localhost:3000/api/cars/${props.car.id}`)
          .then(() => alert("deleted"))
          .catch(() => alert("error"));
        } if(props.user){
          axios
          .delete(`http://localhost:3000/api/users/${props.user.id}`)
          .then(() => alert("deleted"))
          .catch(() => alert("error"));
        } if(props.brand){

          axios
            .delete(`http://localhost:3000/api/brands/${props.brand.id}`)
            .then(() => alert("deleted"))
            .catch(() => alert("error"));
        }
      }}
      type="button"
      className="text-red-700 border border-red-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-red-700 dark:text-red-700 dark:hover:text-white dark:focus:ring-blue-800"
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
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <span className="sr-only"></span>
    </button>
  );
}
