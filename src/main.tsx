import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import DataListener from './components/DataListener';
import FaqsTable from './components/dashboard/FaqsTable';
import TestimonialsTable from './components/dashboard/TestimonialsTable';
import PropertiesTable from './components/dashboard/PropertiesTable';
import PropertyContainer from './components/PropertyDetailsPage/PropertyContainer';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "property/:id",
        element: <PropertyContainer />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="properties" replace />,
      },
      {
        path: "properties",
        element: <PropertiesTable />,
      },
      {
        path: "faqs",
        element: <FaqsTable />,
      },
      {
        path: "testimonials",
        element: <TestimonialsTable />,
      },
    ],
  }
],
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DataListener />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
