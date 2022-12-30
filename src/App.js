import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TrackOrder from "./components/Track/track";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Success from "./pages/Success/Success";
import NotSuccess from "./pages/Success/notSuccess";
import Contactus from "./pages/otherPages/contactus";
import ReturnPolicy from "./pages/otherPages/returnPolicy";
import TermsAndConditions from "./pages/otherPages/tnc";
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/success=true",
        element: <Success />,
      },
      {
        path: "/success=false",
        element: <NotSuccess />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/returnpolicy",
        element: <ReturnPolicy />,
      },
      {
        path: "/trackorder",
        element: <TrackOrder />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
