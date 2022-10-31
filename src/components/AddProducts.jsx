import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (productinfo) => {
    console.log(productinfo);

    // ** sending the data to the server using the post method

    const sendData = async () => {
      try {
        const response = await fetch(`http://localhost:15000/add`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productinfo),
        });
        console.log("data has been sent");
        const data = await response.json();
        console.log(data);
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
