import React from 'react';
import { createBrowserRouter } from 'react-router'
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import AppDetail from '../Pages/AppDetail';
import ErrorPage from '../Components/ErrorPage';
import Install from '../Pages/Install';
import AppError from '../Pages/AppError';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'/allapps',
          Component:AllApps
        },
        {
          path:'/AppDetails/:id',
          errorElement:<AppError></AppError>,
          Component:AppDetail
        },
        {
          path:'/installation',
          Component:Install
        }
    ]
  },
]);

export default router;