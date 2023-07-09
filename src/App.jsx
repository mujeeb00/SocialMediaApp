import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingMain from "./components/Settings/SettingMain";
import Signuplogin from "./components/Authentication/Signuplogin";
import { useState } from "react";
import Error from "./Error";
import Createpage from "./components/createPage/Createpage";

function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signuplogin setUser={setUser} />} />
        
        {user ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<SettingMain/>} />
            <Route path="/createpage" element={<Createpage/>} />

          </>
        ) : <Route path="*" element= {<Error/>}/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
