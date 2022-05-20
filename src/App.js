import{BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
   <Router>
     <Routes>
       

       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
     </Routes>
   </Router>
  );
}

export default App;
