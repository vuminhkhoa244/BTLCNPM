import React from "react"; // Add this import

function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-blue-100 py-10 px-6 text-center">
          <img
            src="/your-image.jpg"
            alt="Main Room"
            className="w-full h-96 object-cover rounded-md mx-auto"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg";
            }}
          />
          <h2 className="text-3xl font-bold mt-4">BẠN MUỐN ĐẶT PHÒNG</h2>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            ĐẶT NGAY
          </button>
        </div>

        {/* Placeholder for next components */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Danh sách các phòng được đặt nhiều nhất
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-200 h-40 rounded-md p-4">H6-401</div>
            <div className="bg-pink-200 h-40 rounded-md p-4">H6-402</div>
            <div className="bg-purple-200 h-40 rounded-md p-4">H6-403</div>
            <div className="bg-blue-200 h-40 rounded-md p-4">H6-404</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;