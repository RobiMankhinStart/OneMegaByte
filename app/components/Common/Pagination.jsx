"use client";

import React, { useEffect, useState } from "react";
import ProCard from "./ProCard";
// import ProCard from "@/app/components/Common/ProCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(total / limit);
  const currentPage = skip / limit + 1;

  const fetchProducts = async (limit, skip) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(limit, skip);
  }, [limit, skip]);

  return (
    <div className="mt-4 font-inter">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-[#6C6C6C] text-lg font-medium">
            Selected Products :
            <span className="text-black font-medium text-[20px] ml-1">
              {products.length}
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Limit:</label>
          <select
            value={limit}
            onChange={(e) => {
              setSkip(0);
              setLimit(Number(e.target.value));
            }}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-blue-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSkip(Math.max(skip - limit, 0))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-sm">
              {currentPage} / {totalPages || 1}
            </span>
            <button
              onClick={() =>
                setSkip(Math.min(skip + limit, (totalPages - 1) * limit))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-4">
          {products.map((item) => (
            <ProCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
