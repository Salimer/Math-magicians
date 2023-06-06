import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Quote from './routes/Quote';
import Calculate from './routes/Calculate';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="quote" element={<Quote />} />
      <Route path="calculate" element={<Calculate />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
