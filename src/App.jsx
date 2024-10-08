import './App.css';
import { Notebook } from './components/NotebookList/Notebook/Notebook';
import { Input } from './components/ToDoList/Input/Input';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route path="/notebook" element={
            <div className='name'>
              <Link to="/">TODO LIST</Link>
              <h1>NOTEBOOK</h1>
              <Notebook />
            </div>
          } />
          <Route path="/" element={
            <div className='name'>
              <Link to="/notebook">Notebook</Link>
              <h1>TODO LIST</h1>
              <Input />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
