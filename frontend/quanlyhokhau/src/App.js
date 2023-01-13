import { BrowserRouter, Route, Routes } from "react-router-dom";
import HoKhau from "./pages/HoKhau";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/hokhau' element={<HoKhau />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
