import { Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage/MainPage.jsx'
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage.jsx";
import ProfilePage from './Components/ProfilePage/ProfilePage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/Register/*" element={<RegistrationPage />}/>
          <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
}

export default App;
