import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import DanhSachTamTru from '../components/DanhSachTamTru'
const navigation = [
  { name: 'Hộ khẩu', href: '/hokhau' },
  { name: 'Tạm trú', href: '/tamtru' },
  { name: 'Tạm vắng', href: '/tamvang' },
  { name: 'Sinh hoạt', href: '/sinhhoat' },
]

function TamTru() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      setUserInfo(localStorage.getItem("tai-khoan"));
      if (userInfo) {
        setIsLogin(true);
      }
    }
    loadData();
  }, [isLogin, userInfo])
  if (userInfo) {
  } else {
    navigate("/login");
  }
  return (
    <div className='w-full h-full flex-col gap-4'>
      <Popover>
        <div className="relative px-6 pt-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" hidden md:ml-10 md:flex md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
              {isLogin && userInfo ?
                <p className="font-medium text-indigo-600 hover:text-indigo-500">{JSON.parse(userInfo).taikhoan}</p> :
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng nhập
                </a>
              }
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="/login"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
              >
                Đăng nhập
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <DanhSachTamTru />
    </div>
  )
}

export default TamTru;