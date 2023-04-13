import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
