import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/AddProducts";
import ManageProducts from "../components/ManageProducts";

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
]);

export default router;
