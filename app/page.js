"use client";
import { useState } from "react";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState([
    { id: 1, name: "Product 1", quantity: 1, price: 24 },
    { id: 2, name: "Product 2", quantity: 5, price: 48 },
    { id: 3, name: "Product 3", quantity: 8, price: 62 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchModal, setSearchModal] = useState(false);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: stock.length + 1,
      name: productName,
      quantity: quantity,
      price: price,
    };

    setStock([...stock, newProduct]);
    setProductName("");
    setQuantity("");
    setPrice("");
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = stock.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchTerm ? setSearchResults(filteredResults) : "";
    searchTerm && setSearchModal(!searchModal);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold my-5">Add a Product</h2>

          <div className="flex container">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={handleProductNameChange}
              className="p-2 border border-gray-400 mr-2"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="p-2 border border-gray-400 mr-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={handlePriceChange}
              className="p-2 border border-gray-400 mr-2"
            />
            <button
              onClick={handleAddProduct}
              className="p-2 bg-green-500 text-white"
            >
              Add
            </button>
          </div>
        </div>

        <div className="relative">
          <h2 className="text-xl font-bold my-5">Search</h2>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter a product name"
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="p-2 border border-gray-400 mr-2"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-green-500 text-white"
            >
              Search
            </button>
          </div>

          {searchResults.length > 0 && searchModal && (
            <div className="mt-4 absolute bg-white w-full">
              <h3 className="bg-green-500 p-4 text-white">Search Results:</h3>
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id} className="p-4 border-b">
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold my-5">Display Current Stock</h2>

      <table className="border-collapse border border-gray-400 container">
        <thead>
          <tr>
            <th className="p-2 border border-gray-400">ID</th>
            <th className="p-2 border border-gray-400">Product Name</th>
            <th className="p-2 border border-gray-400">Quantity</th>
            <th className="p-2 border border-gray-400">Price</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border border-gray-400">{product.id}</td>
              <td className="p-2 border border-gray-400">{product.name}</td>
              <td className="p-2 border border-gray-400">{product.quantity}</td>
              <td className="p-2 border border-gray-400">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
