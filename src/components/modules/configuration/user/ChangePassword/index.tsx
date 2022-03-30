import React from "react";
import { ILoginParams, IUser } from "../../../../../store/auth/types";
import { IPrison } from "../../../../../store/modules/configuration/prison/types";

type EditUserProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: ILoginParams;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ChangeUserPasswordComponent(props: EditUserProps) {
  const { onChange, onSubmit, state } = props;

  const { email, password } = state;
  return (
    <div className="min-h-screen flex flex-col items-center  pt-12 pl-4 bg-gray-100">
      <div
        className="
    flex flex-col
    bg-white
    shadow-md 
    px-2
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-xl
    w-full
    
   
  "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Edit exist user account
        </div>

        <div className="mt-10">
          <form action="#" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row md:mx-8 ">
              <div className="mb-5 px-4 w-3/5">
                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 text-green-700"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                    </svg>{" "}
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e)
                    }
                    value={email}
                    disabled
                  />
                </div>
              </div>
              <div className="mb-5 px-4 w-3/5">
                <label
                  // for="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <div
                    className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-green-700 w-4"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                        <circle cx="12" cy="16" r="1"></circle>
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                    placeholder="Enter your password"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(event)
                    }
                    value={password}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-40 pl-12">
              <button
                type="submit"
                className="
            flex
            mt-2
            items-center
            justify-center
            focus:outline-none
            text-white text-sm
            sm:text-base
            bg-green-900
            hover:bg-green-700
            rounded-2xl
            py-2
            w-full
            transition
            duration-150
            ease-in
          "
              >
                <span className="mr-2 uppercase">Submit</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
