import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddHoKhau from "./components/AddHoKhau";
import AddNhanKhau from "./components/AddNhanKhau";
import AddTamTru from "./components/AddTamTru";
import AddTamVang from "./components/AddTamVang";
import ChiTietHoKhau from "./components/ChiTietHoKhau";
import EditHoKhau from "./components/EditHoKhau";
import HoKhau from "./pages/HoKhau";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NhanKhau from "./pages/NhanKhau";
import Register from "./pages/Register";
import TamTru from "./pages/TamTru";
import TamVang from "./pages/TamVang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/hokhau' element={<HoKhau />} />
        <Route path='/addhokhau' element={<AddHoKhau />} />
        <Route path='/updatehokhau/:mahokhauchitiet' element={<EditHoKhau />} />
        <Route path='/hokhau/:mahokhau' element={<NhanKhau />} />
        <Route path='/addnhankhau' element={<AddNhanKhau />} />

        <Route path='/tamtru' element={<TamTru />} />
        <Route path='/addtamtru' element={<AddTamTru />} />

        <Route path='/tamvang' element={<TamVang />} />
        <Route path='/addtamvang' element={<AddTamVang />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
