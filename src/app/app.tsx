import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
