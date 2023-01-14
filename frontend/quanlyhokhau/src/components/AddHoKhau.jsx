import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function AddHoKhau() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='m-8'>
      <span className='ml-48 bg-slate-500 p-1 text-white'>
        <a href='/hokhau'>Quay lại</a>
      </span>
      <form className=" divide-y divide-gray-200 w-full flex justify-center">
        <div className="divide-y divide-gray-200 sm:space-y-5">
          <div className=" pt-8 sm:space-y-5 sm:pt-10 flex">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Thêm hộ khẩu mới</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Điền đầy đủ các thông tin cần thiết</p>
            </div>
            <div className="space-y-2 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã hộ khẩu
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="mahokhau"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã khu vực
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="makhuvuc"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Tên chủ hộ
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="tenchuho"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Địa chỉ thường trú
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="diachi"
                    type="email"
                    autoComplete="email"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ngày chuyển đi
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
              </div>


              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Lý do chuyển
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="lydochuyen"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Người thực hiện
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="nguoithuchien"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>


            </div>
          </div>
          <button
            type="submit"
            className="ml-[550px] w-32 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Thêm hộ mới
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddHoKhau