import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import IdeasPage from "./pages/IdeasPage";

//Hello World 1

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="ideas" element={<IdeasPage />} />
      </Routes>
    </div>
  );
}

export default App;
