import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Main } from '../pages/Main';
import { Utilities } from '../pages/utilities';
import { Tables } from '../pages/Tables';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/utilities" element={<Utilities />} />
      <Route path="/tables" element={<Tables />} />
    </Routes>
  );
}

export default AppRoutes;
