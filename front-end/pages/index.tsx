import Link from "next/link";
export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-9 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
          <div className="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">
                GarageTn
              </h1>
              <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">
                GarageTn for cars fans where they can have the garage of their
                dreams in a virtual Platform . make a great collection
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-6 md:mt-8 lg:mt-0">
            <div className="relative w-200 h-200">
              <img
                src="https://ae01.alicdn.com/kf/U47c4c5be7e3a40d29aa081d9e0867a57u/Car-Garage-Vintage-Wall-Sticker-Decal-Artist-Sticker-Garage-Wall-Art-Decoration-A00975.jpg_Q90.jpg_.webp"
                alt="Car"
                role="img"
                className="w-200 h-200  relative  lg:block"
              />

              <div className=" lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                <Link
                  href="/auth/LoginPage"
                  className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
                >
                  Login
                  <div>
                    <svg
                      className="fill-stroke dark:hover:text-gray-600"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66663 16H25.3333"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 10.667L25.3333 16.0003"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className=" lg:block absolute bottom-0 left-0 bg-red-200 w-1/2">
                <Link
                  href="auth/RegisterPage"
                  className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
                >
                  Register
                  <div>
                    <svg
                      className="fill-stroke dark:hover:text-gray-600"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66663 16H25.3333"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 10.667L25.3333 16.0003"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="mt-6 md:mt-8 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
