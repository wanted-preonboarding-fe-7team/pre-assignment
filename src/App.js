import { Login } from 'pages';
import Test from 'pages/Test';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
