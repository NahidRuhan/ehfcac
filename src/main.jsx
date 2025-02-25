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
      { path: "", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "program-courses", element: <ProgramCourse /> },
      { path: "research", element: <Research /> },
      { path: "services", element: <Services /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "resources", element: <Resources /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);