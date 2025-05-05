import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">BK RESERVATION</h1>
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Tìm phòng hoặc phòng học"
            className="p-2 rounded-md text-black w-48"
          />
          <input type="date" className="p-2 rounded-md text-black" />
          <input type="date" className="p-2 rounded-md text-black" />
          <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded-md">
            🔍
          </button>
        </div>
        <Link
          to="/login"
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition"
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}
