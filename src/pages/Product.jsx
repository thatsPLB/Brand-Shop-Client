import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const data = props.params;

  return (
    <>
      <div className="grid md:grid-cols-4 md:gap-4 sm:grid-cols-1">
        {data.map((pd) => {
          return (
            <div className="m-auto sm:mb-6">
              <div class="w-full flex items-center justify-center flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="p-8 rounded-t-lg"
                    src={pd.image_url}
                    alt="product image"
                    style={{ height: "300px", borderRadius: "50px" }}
                  />
                </a>
                <div class="px-5 pb-5 text-center">
                  <a href="#">
                    <h3 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {pd.product_name}
                    </h3>
                  </a>
                  <p
                    className="text-white font-mono mt-1"
                    style={{ fontSize: "16px" }}
                  >
                    <b>Brand:</b> {pd.brand_name}
                  </p>
                  <div class="flex justify-center items-center mt-2.5 mb-5">
                    <svg
                      class="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {pd.rating}
                    </span>
                  </div>
                  <div class="flex items-center justify-between flex-col">
                    <span class="text-3xl mb-2 font-bold text-gray-900 dark:text-white">
                      ${pd.price}
                    </span>
                    <div className="mb-4">
                      <Link
                        to="/detail"
                        class="m-2 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        state={{"data": pd}}
                      >
                        Detail
                      </Link>

                      <a
                        class="m-2 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          const data = {
                            image: pd.image_url,
                            product_name: pd.product_name,
                            price: pd.price
                          };
                          const listofp = [];
                          if (localStorage.getItem("cart")) {
                            const ndata = localStorage.getItem("cart");
                            listofp.push(ndata);
                            listofp.push(JSON.stringify(data));
                            localStorage.setItem("cart", listofp);
                          } else {
                            listofp.push(JSON.stringify(data));
                            localStorage.setItem("cart", listofp);
                          }
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                    {/* <a
                      class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        const data = {
                          image: pd.image,
                          product_name: pd.product_name,
                        }
                        const listofp = [];
                        if(localStorage.getItem("cart")){
                          const ndata = localStorage.getItem("cart");
                          listofp.push(ndata);
                          listofp.push(JSON.stringify(data));
                          localStorage.setItem("cart", listofp)
                        } else {
                          listofp.push(JSON.stringify(data));
                          localStorage.setItem("cart", listofp)
                        }
                      }}
                    >
                      Add to cart
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
