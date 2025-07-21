import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Blog from "./components/pages/Blog.jsx";
import Contact from "./components/pages/Contact.jsx";
import Shop from "./components/pages/Shop.jsx";
import Cart from "./components/pages/Cart.jsx";

const router = createBrowserRouter(
  [
    { 
      path: "/", 
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: '/about-us',
          element: <About/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/blogs',
          element: <Blog/>
        },
        {
          path: '/contect-us',
          element: <Contact/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
      ]
    }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
