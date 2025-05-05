import React, { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "H6-401",
    status: "available",
    description: "Phòng học cá nhân, không gian yên tĩnh.",
    equipment: ["Đèn", "Ổ cắm", "Máy lạnh", "Bàn ghế cá nhân"],
  },
  {
    id: 2,
    name: "H6-402",
    status: "occupied",
    description: "Phòng nhóm 4 người, có bảng trắng và máy chiếu.",
    equipment: ["Bảng trắng", "Máy chiếu", "Ổ cắm", "Wi-Fi"],
  },
  {
    id: 3,
    name: "H6-403",
    status: "available",
    description: "Phòng mentoring 1-1 với không gian riêng tư.",
    equipment: ["Máy lạnh", "Webcam", "Micro", "Màn hình trình chiếu"],
  },
  {
    id: 4,
    name: "H6-404",
    status: "available",
    description: "Phòng học nhóm, phù hợp cho buổi họp trực tuyến.",
    equipment: ["Thiết bị họp trực tuyến", "Đèn", "Máy lạnh", "Bảng viết"],
  },
];

export default function BookingUI() {
  const [expandedRoom, setExpandedRoom] = useState(null);

  const toggleExpand = (roomId) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  const handleBooking = (room) => {
    // Bạn có thể gọi API tại đây
    alert(`Bạn đã đặt chỗ thành công: ${room.name}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Đặt chỗ Không gian Học tập</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room) => {
          const isExpanded = room.id === expandedRoom;
          const isAvailable = room.status === "available";

          return (
            <div key={room.id} className="border rounded-xl overflow-hidden">
              {/* Header phòng */}
              <div
                onClick={() => toggleExpand(room.id)}
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  isAvailable
                    ? "bg-green-100 hover:bg-green-200"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <div>
                  <h2 className="text-lg font-semibold">{room.name}</h2>
                  <p className="text-sm">
                    {isAvailable ? "Trống" : "Đang sử dụng"}
                  </p>
                </div>
                <div>
                  {isExpanded ? (
                    <span className="text-xl">−</span>
                  ) : (
                    <span className="text-xl">Thông tin chi tiết</span>
                  )}
                </div>
              </div>

              {/* Chi tiết phòng */}
              {isExpanded && (
                <div className="p-4 bg-white">
                  <p className="mb-2">{room.description}</p>
                  <ul className="list-disc pl-5 mb-4">
                    {room.equipment.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBooking(room)}
                    disabled={!isAvailable}
                    className={`w-full text-center py-2 rounded ${
                      isAvailable
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Đặt chỗ
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
