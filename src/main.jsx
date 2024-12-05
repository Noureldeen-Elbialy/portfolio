import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Skills from './pages/Skills/Skills.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Work from './pages/Work/Work.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: 'true', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'work', element: <Work /> },
    ], errorElement: <NotFound />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}>

    </RouterProvider>
  </StrictMode>,
);
