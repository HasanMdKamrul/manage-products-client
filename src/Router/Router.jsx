import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/AddProducts";
import ManageProducts from "../components/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManageProducts />,
  },
  {
    path: "/add",
    element: <AddProducts />,
  },
]);

export default router;
