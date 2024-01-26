import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/header"
import Body from "./src/body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/component/about";
import Contact from "./src/component/contact";
import RestaurantMenu from "./src/component/restaurabt_menu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/component/cart";


const App=()=>{
     return(
         <div> 
            <Provider store={appStore}>
               <Header />
              <Outlet />
              </Provider>
         </div>
     )
}

 const approuter= createBrowserRouter([
     {
         path:"/",
         element:<App />,
         children:[
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/restaurants/:Id",
                element:<RestaurantMenu />
            },
            {
                path:"/cart",
                element:<Cart />
            },
           
         ],
         errorElement:<Error />
     },
 ])


const root=ReactDOM.createRoot(document.getElementById("rostes"));
root.render(<RouterProvider  router={approuter} />);

