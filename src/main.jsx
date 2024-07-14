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
import Resources from './components/resources/Resources.jsx';
import ContactUs from './components/contact us/ContactUs.jsx';
import Error from './components/error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/civil",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      { path: "/civil", element: <Home /> },
      { path: "/civil/about-us", element: <AboutUs /> },
      { path: "/civil/program-courses", element: <ProgramCourse /> },
      { path: "/civil/research", element: <Research /> },
      { path: "/civil/services", element: <Services /> },
      { path: "/civil/news-events", element: <NewsEvents /> },
      { path: "/civil/resources", element: <Resources /> },
      { path: "/civil/contact-us", element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/civil" />
  </React.StrictMode>
);