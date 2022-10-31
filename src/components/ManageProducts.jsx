import React, { useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
const ManageProducts = () => {
  const products = useLoaderData();
  console.log(products);

  const [productDisplay, setProductDisplay] = useState(products);

  const handleDelete = (product) => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete this itmem?"
    );

    const { _id } = product;

    if (deleteConfirmation) {
      const deleteData = async () => {
        try {
          const response = await fetch(`http://localhost:15000/delete/${_id}`, {
            method: "delete",
          });

          const data = await response.json();
          console.log(data);

          if (data.deletedCount > 0) {
            const remaingProducts = productDisplay.filter(
              (pr) => pr._id !== _id
            );
            setProductDisplay(remaingProducts);
          }
        } catch (error) {
          console.log(error);
        }
      };
      deleteData();
    }
  };

  return (
    <div>
      <div>Products: {productDisplay.length}</div>
      <div>
        {productDisplay.map((product) => (
          <div key={product._id}>
            <h1>{product.productName}</h1>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <img style={{ width: "250px" }} src={product.picture} alt="" />
            <br />
            <button onClick={() => handleDelete(product)}>X</button>
            <br />
            <Link to={`/update/${product._id}`}>
              {" "}
              <button>Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
