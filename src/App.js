import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import SignInPage from './Pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = { <Home /> } exact />
        <Route path='/signin' element = { <SignInPage/> } exact />
      </Routes>
    </Router>
  );
}

export default App;
