import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import NotFound from "./component/NotFound/NotFound";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
