import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';  
import SymptomChecker from './components/SymptomChecker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />  
      <Route path="/symptom" element={<SymptomChecker />} />
     </Routes>
  );
}

export default App;
