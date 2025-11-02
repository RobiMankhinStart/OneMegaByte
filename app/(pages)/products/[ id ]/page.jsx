import React from "react";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="font-inter p-10 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-[300px] h-[300px] object-cover rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold text-black">${product.price}</p>

        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 w-fit">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
