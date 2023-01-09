import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { registerRoute } from '../utils/APIRoutes';




function Register() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    hoten: "",
    taikhoan: "",
    matkhau: "",
    nhaplaimatkhau: ""
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { hoten, taikhoan, matkhau, nhaplaimatkhau } = values;
      console.log("___values___", values);
      const { data } = await axios.post(registerRoute, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        hoten,
        taikhoan,
        matkhau
      })
      console.log("data register", data.data);

      if (data.status == "000") {
        localStorage.setItem("tai-khoan", JSON.stringify(data.data));
        navigate("/login");
        alert("true");
      } else {
        alert("sai");
      }
    }
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleValidation = () => {
    const { hoten, taikhoan, matkhau, nhaplaimatkhau } = values;

    if (matkhau === "" || nhaplaimatkhau === "" || taikhoan === "" || hoten === "") {
      return false;
    } else if (hoten.length < 6) {
      return false;
    } else if (matkhau.length < 8) {
      return false;
    } else if (taikhoan === "") {
      return false;
    } else if (matkhau !== nhaplaimatkhau) {
      return false;
    }

    return true;
  }


  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Đăng ký tài khoản</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(event) => handleSubmit(event)}>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              placeholder="Họ và tên"
              name="hoten"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              placeholder="Tài khoản"
              name="taikhoan"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="password"
              placeholder="Mật khẩu"
              name="matkhau"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="password"
              placeholder="Nhập lại mật khẩu"
              name="nhaplaimatkhau"
              onChange={e => handleChange(e)}
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register