import React from "react";
import { useNavigate } from "react-router-dom";
import bk from "../assets/img/hcmut.jpg";
import logo from "../assets/img/logo_hcmut.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/"); 
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-300 to-blue-600">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={bk}
          alt="BK Campus"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>

      {/* Right Side: Login Box */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white w-full max-w-sm p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            <img src={logo} alt="BK Logo" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Hệ thống quản lý và đặt chỗ <br /> thông minh
            </h2>
            <button
              onClick={handleLoginClick}
              className="w-full bg-blue-600 hover:bg-white-700 text-white font-semibold py-3 rounded-full transition duration-300 mt-4"
            >
              ĐĂNG NHẬP VỚI HCMUT_SSO
            </button>
            <p className="text-sm text-center text-gray-500 mt-4">
              Cần hỗ trợ?{" "}
              <a href="#" className="text-blue-500 underline">
                Liên hệ IT
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
