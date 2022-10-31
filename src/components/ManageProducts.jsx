import React from "react";

import { Typography } from "@material-ui/core";
import { useLoaderData } from "react-router-dom";
const ManageProducts = () => {
  const products = useLoaderData();

  return (
    <Typography align="center" variant="h5" color="initial">
      <p>Manage Products: {products.length}</p>
    </Typography>
  );
};

export default ManageProducts;
