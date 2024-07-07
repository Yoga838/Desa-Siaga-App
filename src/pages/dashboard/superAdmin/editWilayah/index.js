import Link from "next/link";
import Image from "next/image";
import bgEditWilayah from "../../../../../public/bg-2.jpg";
import nookies from "nookies";
import addKec from "./addKec";
import { useEffect, useState } from "react";
import AddKec from "./addKec";
import EditKec from "./editKec";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import ReactPaginate from "react-paginate";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "desa" || cookies.role === "relawan") {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
}

const dataWilayah = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [selectData, setSelectData] = useState(null);

  const visible = () => {
    setVisibleModal(true);
  };
  const visibleEdit = (data) => {
    setSelectData(data);
    setVisibleModalEdit(true);
  };

  //get data kecamatan
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const getData = async () => {
    const res = await axios.get("/api/Kecamatan");
    const data = res.data;
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleCloseModal = (isUpdated) => {
    setVisibleModal(false);
    setVisibleModalEdit(false);
    if (isUpdated) {
      getData();
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const router = useRouter();
  const passDataDesa = (data) => {
    router.push(
      `/dashboard/superAdmin/editWilayah/dataDesa?id=${encodeURIComponent(data.id)}`
    );
  };

  const handleBack = () => {
    Router.back()
  }

  return (
    <section className="container-fluid h-screen relative">
      <ToastContainer />
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgEditWilayah}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      <div className="flex flex-col justify-center mx-8 md:mx-14 lg:mx-32 xl:mx-32 pt-10">
        <div className="flex w-full justify-between mb-4">
          <div>
            <button
              type="button"
              onClick={handleBack}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Kembali
            </button>
          </div>
          <h1 className="text-black text-xl font-bold">
            Data Wilayah Kecamatan
          </h1>
          <div>
            <button
              type="button"
              onClick={visible}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Tambah Kecamatan
            </button>
          </div>
        </div>
        {/* Modal Start */}
        <AddKec isvisible={visibleModal} onClose={handleCloseModal} />
        <EditKec
          isvisible={visibleModalEdit}
          data={selectData}
          onClose={handleCloseModal}
        />
        {/* Modal End */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Kecamatan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alamat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {currentPageData.map((items, index) => {
                const pageIndex = index + currentPage * itemsPerPage + 1;
                return (
                  <tr key={items.id}>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {pageIndex}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {items.nama}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {items.alamat}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      {/* <button class="px-3 py-3 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">
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
                      </button> */}
                      <button
                        onClick={() => visibleEdit(items)}
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
                      {/* <Link href="/dashboard/editWilayah/dataDesa"> */}
                      <button
                        onClick={() => passDataDesa(items)}
                        class="ml-2 px-5 py-3  text-white font-medium text-sm bg-secondary-default rounded-md hover:bg-secondary-light focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
                      >
                        Lihat Desa
                      </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center space-x-2"}
            pageClassName={"page-item"}
            pageLinkClassName={
              "page-link px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            previousClassName={"page-item"}
            previousLinkClassName={
              "page-link px-4 py-2 mr-2 border rounded-md bg-secondary-default text-white hover:bg-secondary-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            nextClassName={"page-item"}
            nextLinkClassName={
              "page-link px-4 py-2 ml-2 border rounded-md bg-secondary-default text-white hover:bg-secondary-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            activeLinkClassName={
              "active-link border-secondary-default text-secondary-default"
            }
            disabledClassName={"disabled opacity-50 cursor-not-allowed -z-10"}
          />
        </div>
      </div>
    </section>
  );
};

export default dataWilayah;
