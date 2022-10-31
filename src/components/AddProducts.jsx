import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (productinfo) => {
    console.log(productinfo);

    // ** sending the data to the server using the post method

    axios
      .post("http://localhost:15000/add", productinfo)
      .then((response) => {
        if (response.acknowledged) {
          console.log("data has been sent");
          console.log(response);
          alert("data has been uploaded to DB");
        }
      })
      .catch((e) => console.log(e));
  };

  //   const sendData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:15000/add`, {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(productinfo),
  //       });

  //       const data = await response.json();

  // if (data.acknowledged) {
  //   console.log("data has been sent");
  //   console.log(data);
  //   alert("data has been uploaded to DB");
  // }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   sendData();
  // };

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
        <input {...register("productName")} placeholder="Products Name" />
        <br />
        <input {...register("quantity")} placeholder="Quantity" />
        <br />
        <input {...register("price")} placeholder="Price" />
        <br />
        <input {...register("picture")} placeholder="Picture" />
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
