import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/AddProducts";
import ManageProducts from "../components/ManageProducts";
import UpdateProduct from "../components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManageProducts />,
    loader: () => fetch(`http://localhost:15000/add`),
  },
  {
    path: "/add",
    element: <AddProducts />,
  },
  {
    path: "/update/:id",
    element: <UpdateProduct />,
    loader: ({ params }) => fetch(`http://localhost:15000/update/${params.id}`),
  },
]);

export default router;
