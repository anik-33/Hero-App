import React from 'react';
import { createBrowserRouter } from 'react-router'
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'/allapps',
          Component:AllApps
        }
    ]
  },
]);

export default router;