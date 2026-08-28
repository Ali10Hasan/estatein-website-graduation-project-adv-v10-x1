import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Provider, useSelector } from 'react-redux';
import store, { type RootState } from './redux/store/store';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import DataListener from './components/DataListener';
import FaqsTable from './components/dashboard/FaqsTable';
import TestimonialsTable from './components/dashboard/TestimonialsTable';
import PropertiesTable from './components/dashboard/PropertiesTable';


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
        element: <PropertyDetails />,
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
        element:<PropertiesTable />,
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


const App = () => {
    const theme = useSelector(
        (state: RootState) => state.ui.theme
    );

    return (
        <div className={theme}>
            <RouterProvider router={router} />
        </div>
    );
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DataListener />
      <App />
    </Provider>
  </StrictMode>,
)
