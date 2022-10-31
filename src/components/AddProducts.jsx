import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Product Name")} placeholder="Products Name" />
        <br />
        <input {...register("Quantity")} placeholder="Quantity" />
        <br />
        <input {...register("Price")} placeholder="Price" />
        <br />
        <input {...register("Picture")} placeholder="Picture" />
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
