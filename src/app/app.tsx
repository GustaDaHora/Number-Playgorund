import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Utilities from './pages/Utilities';
import Tables from './pages/Tables';
import Check from './pages/Check';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utilities" element={<Utilities />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/check" element={<Check />} />
    </Routes>
  );
};

export default AppRoutes;
