import './App.css';
import List from './components/List';
import Service from './components/Service';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Navigate replace to="/services" />} />
          <Route path="/services" element={<List />} />
          <Route path="/services/:id/details" element={<Service />} />
          <Route path="*" element={<Navigate replace to="/services" />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
