import { Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage/MainPage.jsx'
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/Register/*" element={<RegistrationPage />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
