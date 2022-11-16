import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import loginUser from "../../app/Modules/api/user-login";
import registerAdmin from "../../app/Modules/api/register";
import { UserRegister } from "./user-register.interface";

export default function Register() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "admin",
    photo: "",
  });

  const { mutate, isLoading } = useMutation(registerAdmin, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const onSubmit = (data: UserRegister) => {
    mutate(data);
  };
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-left bg-contain bg-Garage-register">
        <div>
          <h1 className="text-blue-800 font-bold text-4xl font-sans">
            GarageTn
          </h1>
          <p className="text-white mt-1">
            Open your garage now make it full of cars
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Welcome to the Family
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="username"
              onChange={(event) =>
                setUser((prevState) => {
                  return { ...prevState, fullName: event.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="picture link"
              onChange={(event) =>
                setUser((prevState) => {
                  return { ...prevState, photo: event.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              onChange={(event) =>
                setUser((prevState) => {
                  return { ...prevState, email: event.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
              onChange={(event) =>
                setUser((prevState) => {
                  return { ...prevState, phoneNumber: event.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              onChange={(event) =>
                setUser((prevState) => {
                  return { ...prevState, password: event.target.value };
                })
              }
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={() => onSubmit(user)}
          >
            Register
          </button>
          <span className="text-blue-800  ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
