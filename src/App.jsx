import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import ForwardChain from "./views/ForwardChain";
import BackwardChain from "./views/BackwardChain";

import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/aisystems/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "first",
        element: <ForwardChain />,
      },
      {
        path: "second",
        element: <BackwardChain />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
