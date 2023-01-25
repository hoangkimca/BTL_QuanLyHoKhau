import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { gettamtruRoute } from '../utils/APIRoutes';

function DanhSachTamTru() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      let resPage = await axios.get(`${gettamtruRoute}?page=${page}`)
      console.log("resonse tra ve", resPage);

      if (resPage.status == 200) {
        let res = await resPage.data.data;
        console.log("danh sach cach ho", res);
        setData(res);
      }
    }
    loadData();
  }, [page])


  const handleDesPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(0);
    }
  }

  const handleAcsPage = () => {
    setPage(page + 1);
  }

  const handleDelete = async (event) => {
    console.log("DELETE", event);
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Danh sách tạm trú</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <a href='/addhokhau'>Thêm mới</a>
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Mã giấy tạm trú
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Họ tên
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Giới tính
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Ngày sinh
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Nguyên quán
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Dân tộc
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Nghề nghiệp
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Nơi tạm trú
                    </th>

                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Từ ngày
                    </th>

                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Đến ngày
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Lý do
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Người thực hiện
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.magiaytamtru}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.hoten}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.gioitinh}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.ngaysinh.split('T')[0]}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.nguyenquan}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.dantoc}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.nghenghiep}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.noitamtru}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.tungay.split('T')[0]}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.denngay.split('T')[0]}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.lydo}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.nguoithuchien}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Xóa
                      </button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handleDesPage()}
          >
            Previous
          </button>
          <button
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handleAcsPage()}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  )
}

export default DanhSachTamTru;