// routes
import { ToastContainer } from 'react-toastify';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './providers/data-ingestion-context';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <ToastContainer />
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </DataProvider>
    </ThemeProvider>
  );
}
