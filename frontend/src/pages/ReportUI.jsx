import React from 'react';
import Thankyou from "../assets/img/ThankYou.jpg";

import Header from "../components/Header/Header";  // Import Header component

function ReportUI() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Header Section */}
      <Header />  {/* Add Header here */}

      {/* Báo cáo tổng quan */}
      <section className="px-6 py-10 bg-blue-100">
        <h2 className="text-2xl font-semibold">Báo cáo tổng quan</h2>
        <p className="mt-4">Số lượng phòng đã mượn trong tuần qua: 120</p>
      </section>

      {/* Bảng báo cáo */}
      <section className="px-6 py-10">
        <h3 className="text-xl font-semibold mb-4">Danh sách phòng mượn</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID Phòng</th>
              <th className="border px-4 py-2">Tên phòng</th>
              <th className="border px-4 py-2">Ngày mượn</th>
              <th className="border px-4 py-2">Ngày trả</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">H6-401</td>
              <td className="border px-4 py-2">Phòng học A</td>
              <td className="border px-4 py-2">01/05/2025</td>
              <td className="border px-4 py-2">03/05/2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">H6-402</td>
              <td className="border px-4 py-2">Phòng học B</td>
              <td className="border px-4 py-2">02/05/2025</td>
              <td className="border px-4 py-2">04/05/2025</td>
            </tr>
            {/* Các dữ liệu khác */}
          </tbody>
        </table>
      </section>

      

      {/* Hình ảnh cảm ơn */}
      <section className="flex justify-center items-center py-10">
        <div className="text-center">
          <img
            src= {Thankyou}
            alt="Cảm ơn bạn đã ghé thăm"
            className="w-64 h-64 object-contain mx-auto"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Cảm ơn bạn đã ghé thăm!</h2>
        </div>
      </section>
    </div>
  );
}

export default ReportUI;
