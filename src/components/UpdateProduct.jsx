import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();

  const product = useLoaderData();
  console.log(product);

  const { picture, price, productName, quantity, _id } = product;

  const onSubmit = (productinfo) => {
    console.log(productinfo);

    const sendData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/product/update/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productinfo),
          }
        );

        const data = await response.json();
        if (data.acknowledged) {
          console.log(data);
          console.log("data updated");
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Update Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={productName}
          {...register("productName")}
          placeholder="Products Name"
        />
        <br />
        <input
          defaultValue={quantity}
          {...register("quantity")}
          placeholder="Quantity"
        />
        <br />
        <input
          defaultValue={price}
          {...register("price")}
          placeholder="Price"
        />
        <br />
        <input
          defaultValue={picture}
          {...register("picture")}
          placeholder="Picture"
        />
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default UpdateProduct;
