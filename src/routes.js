import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import DataIngestion from './pages/DataIngestion';
import DataIngestionNew from './pages/DataIngestionJob';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/home', element: <DashboardApp /> },
        { path: '/data-ingestion', element: <DataIngestion /> },
        { path: '/data-ingestion/job/', element: <DataIngestionNew /> },
        { path: '/data-ingestion/job/:jobId', element: <DataIngestionNew /> },
      ],
    },
  ]);
}
