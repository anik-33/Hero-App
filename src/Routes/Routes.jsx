import React from 'react';
import { createBrowserRouter } from 'react-router'
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        
    ]
  },
]);

export default router;