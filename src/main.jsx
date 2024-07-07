import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root.jsx';
import Home from './components/home/Home.jsx';
import AboutUs from './components/aboutUs/AboutUs.jsx';
import ProgramCourse from './components/courses/ProgramCourse.jsx';
import Research from './components/research/Research.jsx';
import Services from './components/services/Services.jsx';
import NewsEvents from './components/news and events/NewsEvents.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/program-courses", element: <ProgramCourse /> },
      { path: "/research", element: <Research /> },
      { path: "/services", element: <Services /> },
      { path: "/news-events", element: <NewsEvents /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);