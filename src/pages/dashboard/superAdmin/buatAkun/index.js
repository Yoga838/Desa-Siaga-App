import Link from "next/link";
import Image from "next/image";
import bgbuatAkun from "../../../../../public/bg-2.jpg";
import nookies from "nookies";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import AddAkun from "./addAkun";

const buatAkun = () => {
  const [showModalAddAkun, setShowModalAddAkun] = useState(false);

  const showVisibleAddAkun = () => {
    setShowModalAddAkun(true);
  };

  const handleCloseModal = () => {
    setShowModalAddAkun(false)
  };

  return (
    <section className="container-fluid h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgbuatAkun}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      {/* Modal Start */}
      <AddAkun
        isShow={showModalAddAkun}
        onClose={handleCloseModal}
      />
      {/* Modal End */}
      <div className="flex flex-col justify-center mx-8 md:mx-14 lg:mx-32 xl:mx-32 pt-10">
        <div className="flex w-full justify-between mb-4">
          <h1 className="text-black text-xl font-bold">
            Data Akun
          </h1>
          <div>
            {/* <Link href="/dashboard/editWilayah/dataDesa/tambahDesa"> */}
            <button
              type=""
              onClick={showVisibleAddAkun}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Tambah Akun
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
            <thead className="">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    user@gmail.com
                  </td>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    admin
                  </td>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    Super Admin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap flex items-center">
                    <button class="px-3 py-3 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10 10C10 10.5523 10.4477 11 11 11V17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17V9H11C10.4477 9 10 9.44772 10 10Z"
                            fill="#0F0F0F"
                          ></path>{" "}
                          <path
                            d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z"
                            fill="#0F0F0F"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                            fill="#0F0F0F"
                          ></path>{" "}
                        </g>
                      </svg>
                    </button>
                    <button
                      onClick={showVisibleAddAkun}
                      class="ml-2 px-3 py-3 bg-amber-400 rounded-md hover:bg-amber-200 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title></title>{" "}
                          <g id="Complete">
                            {" "}
                            <g id="edit">
                              {" "}
                              <g>
                                {" "}
                                <path
                                  d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                  fill="none"
                                  stroke="#0F0F0F"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></path>{" "}
                                <polygon
                                  fill="none"
                                  points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                  stroke="#0F0F0F"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></polygon>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default buatAkun;