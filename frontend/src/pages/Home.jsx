import RoomCard from "../components/RoomCard/RoomCard";
import Phong1 from "../assets/img/phong-da-chuc-nang_OISP.jpg";
import Phong2 from "../assets/img/phong-da-chuc-nang_OISP_02.jpg";
import Phong3 from "../assets/img/phong-hoc_OISP_02.jpg";
import Phong4 from "../assets/img/phong-hoc_OISP.jpg";
import Header from "../components/Header/Header";
export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <Header />
      <section className="bg-blue-100 py-6 px-4 text-center">
        <img
          src={Phong2}
          alt="Main Room"
          className="w-full h-96 object-cover rounded-md"
        />
        <h2 className="text-3xl font-semibold mt-4">BẠN MUỐN ĐẶT PHÒNG</h2>
        <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full">
          ĐẶT NGAY
        </button>
      </section>

      {/* Most Booked Rooms */}
      <section className="px-6 py-10">
        <h3 className="text-xl font-semibold mb-4">
          Danh sách các phòng được đặt nhiều nhất
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              id: "H6-401",
              desc: "Có máy lạnh. Được bố trí các thiết bị đầy đủ",
              image: Phong1,
            },
            {
              id: "H6-402",
              desc: "Được bố trí máy chiếu cùng với thiết bị âm thanh hiện đại",
              image: Phong2,
            },
            {
              id: "H6-403",
              desc: "Không gian rộng. Có đầy đủ thiết bị hỗ trợ",
              image: Phong3,
            },
            {
              id: "H6-404",
              desc: "Được bố trí máy chiếu cùng với thiết bị âm thanh hiện đại",
              image: Phong4,
            },
          ].map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </section>

      {/* Room Categories */}
      <section className="px-6 pb-10">
        <h3 className="text-xl font-semibold mb-4">
          Lựa chọn phòng theo nhu cầu
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <img
              src={Phong1}
              alt="Phòng học"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-bold">PHÒNG HỌC</span>
            </div>
          </div>
          <div className="relative group">
            <img
              src={Phong3}
              alt="Phòng họp"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-bold">PHÒNG HỌP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
