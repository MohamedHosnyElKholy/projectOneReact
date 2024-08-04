import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfilio from "./components/Portfilio/Portfilio";
import Contact from "./components/Contact/Contact";
import Erorr from "./components/Erorr/Erorr";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfilio", element: <Portfilio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Erorr /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
