import react from 'react'
import {Container} from "@mui/material"
import {useDispatch} from 'react-redux';//use t dispatch an action
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Auth from './components/Auth/Auth';
function App() {
 
  return (
    <>
    <Container maxWidth="lg">
       <Navbar/>
       <Home/>
    </Container>
    {/* <Router>
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Routes>
    </Router> */}
    </>
     
  );
}

export default App;
