
import ReactDOM from 'react-dom/client'
import './index.css'

import React from 'react';
import Root from './components/Root/Root';
import Home from './components/home/Home';
import ListedBook from './components/listedBook/ListedBook';
import Pages from './components/pages/Pages';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './components/bookDetails/BookDetails';
import Error from './components/error/Error';


const router = createBrowserRouter([
{
  path:"/",
  element:<Root></Root>,
  errorElement: <Error/>,
  children:[
    {
      path:"/",
      element:<Home></Home>,
    },
    {
      path:"/ListedBook",
      element:<ListedBook></ListedBook>,
      loader:()=>fetch('/blog.json')
    },
    {
      path:"/pages",
      element:<Pages></Pages>,
      loader:()=>fetch('/blog.json')
    },
   {
    path:'/details/:id',
    element:<BookDetails></BookDetails>,
    loader:()=>fetch('/blog.json')
   }

  ]
}
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
