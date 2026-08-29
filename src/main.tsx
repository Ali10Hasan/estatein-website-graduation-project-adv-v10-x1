import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider, useSelector } from 'react-redux';
import store, { type RootState } from './redux/store/store';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Services from './pages/Services';
import Contact from './pages/Contact';
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
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "properties", element: <Properties /> },
      { path: "property/:id", element: <PropertyContainer /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
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
      { index: true, element: <Navigate to="properties" replace /> },
      { path: "properties", element: <PropertiesTable /> },
      { path: "faqs", element: <FaqsTable /> },
      { path: "testimonials", element: <TestimonialsTable /> },
    ],
  }
]);

const ThemeManager = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DataListener />
      <ThemeManager />
    </Provider>
  </StrictMode>,
)