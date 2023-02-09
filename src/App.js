import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
