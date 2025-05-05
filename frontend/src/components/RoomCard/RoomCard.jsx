// ../components/RoomCard.jsx
export default function RoomCard({ id, desc, image }) {
    return (
      <div className="relative group rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <img
          src={image}
          alt={id}
          className="h-80 w-full object-cover transition duration-300 group-hover:brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-80 text-white px-4 py-5 transition-all duration-300">
          <h4 className="text-lg font-bold">{id}</h4>
          <p className="text-sm mt-1">{desc}</p>
        </div>
      </div>
    );
  }
  