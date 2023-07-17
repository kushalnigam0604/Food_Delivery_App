import React from 'react'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, Outlet } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      
    ],
  },
]);


