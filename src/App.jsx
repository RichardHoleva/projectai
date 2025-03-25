import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import ForwardChain from "./views/ForwardChain";
import BackwardChain from "./views/BackwardChain";

import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/", // changed from "/projectai/" to "/"
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
], { basename: "/projectai" }); // new basename option

function App() {
  return <RouterProvider router={router} />;
}

export default App;
