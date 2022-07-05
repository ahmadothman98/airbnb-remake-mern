import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main'
import  Navbar from './components/Navbar'
import  Filters from './components/Filters'
import { IconName } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Filters />
        <Routes>
            <Route exact path='/main' element={<Main  />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
