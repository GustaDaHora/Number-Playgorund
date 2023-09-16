import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Utilities from './pages/Utilities';
import Tables from './pages/Tables';
import Cronics from './pages/Cronics';
import Check from './pages/Check';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<Main />} />
      <Route path="/utilities" element={<Utilities />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/cronics" element={<Cronics />} />
      <Route path="/check" element={<Check />} />
    </Routes>
  );
};

export default AppRoutes;
