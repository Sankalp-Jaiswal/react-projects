import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './pages/about/About.jsx';
import Resume from './pages/resume/Resume.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Blog from './pages/blog/Blog.jsx';
import Contact from './pages/contact-us/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/blogs",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
