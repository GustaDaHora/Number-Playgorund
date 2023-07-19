import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Main } from '../pages/Main';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="main" element={<Main />} />
    </Routes>
  );
}

export default AppRoutes;
