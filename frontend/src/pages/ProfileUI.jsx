import ProfilePic from "../assets/img/Profile1.jpg";
import Header from "../components/Header/Header";

export default function ProfileUI() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <Header />
      <section className="bg-blue-100 py-6 px-4 text-center">
        <img
          src={ProfilePic}
          alt="Profile Picture"
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
        <h2 className="text-3xl font-semibold mt-4">Nguyễn Thị Bình</h2>
        <p className="text-lg text-gray-600 mt-2">Người dùng dịch vụ mượn phòng</p>
      </section>

      {/* About Me Section */}
      <section className="px-6 py-10">
        <h3 className="text-xl font-semibold mb-4">Thông tin tài khoản</h3>
        <p className="text-base text-gray-700">
          Đây là phần hiển thị thông tin tài khoản của người dùng dịch vụ mượn phòng.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="px-6 py-10 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Thông tin liên hệ</h3>
        <p className="text-base text-gray-700">
          <strong>Email:</strong> nguyenvana@example.com
        </p>
        <p className="text-base text-gray-700 mt-2">
          <strong>Phone:</strong> (+84) 0977-343-521
        </p>
        <p className="text-base text-gray-700 mt-2">
          <strong>Địa chỉ:</strong> TPHCM, Việt Nam
        </p>
      </section>

      {/* Profile Settings Section */}
      <section className="px-6 pb-10">
        <h3 className="text-xl font-semibold mb-4">Cài đặt tài khoản</h3>
        <div className="flex justify-between gap-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full">Chỉnh sửa thông tin</button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-full">Đổi mật khẩu</button>
        </div>
      </section>
    </div>
  );
}
