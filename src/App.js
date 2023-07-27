// import logo from './logo.svg';
// import './App.css';
import {Routes , Route} from "react-router-dom";
import Search from "./Components/Search/Search.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage.jsx";

function App() {
  return (
  <>

    

    <Routes>
      <Route path="/" element={ <>
                <Navbar/>
                <Search/>
                                </>}>

      </Route>
      <Route path="/Register" element={<RegistrationPage/>}> </Route>
    </Routes>
    


    
    </>
  );
}

export default App;
