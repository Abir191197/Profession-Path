import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';

import JobDetails from './components/jobDetails/jobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../data/categories.json"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("../data/categories.json"),
      },
      {
        path: "Blog",
        element: <Blog></Blog>,
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Applied Jobs",
        element: <AppliedJob></AppliedJob>,
      },

      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
