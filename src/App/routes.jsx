import Home from "../components/HomePage/HomePage.jsx";
import ProductCatalog from "../components/ProductCatalog/ProductCatalog.jsx";
import ProductInfo from "../components/ProductCatalog/components/ProductInfo.jsx";
import CartCheckout from "../components/CartCheckout/CartCheckout.jsx";
import App from "./App.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import ItemDataForm from "../components/ItemDataForm/ItemDataForm.jsx";
import Login from "../components/logIn/login.jsx";
import { Navigate } from "react-router";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index:true, 
        element:<Navigate to="/home" replace/>
      },
      {
        path:'/home', 
        element:<Home/>
      },
      {
        path: '/catalog',
        element: <ProductCatalog/>
      },
      {
        path: '/catalog/:productId',
        element: <ProductInfo/>
      },
      {
        path:'/checkout',
        element: <CartCheckout/>
      },
      {
        path:'/itemForm',
        element:<ItemDataForm/>
      },
      {
        path:'/itemForm/:itemId',
        element:<ItemDataForm/>
      },
      {
        path:'/login',
        element:<Login/>
      }

    ]
  }
  
  
];

export default routes;
