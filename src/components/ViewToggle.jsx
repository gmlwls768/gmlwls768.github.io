import { views } from "@/data/portfolio";

const ViewToggle = ({ view, onChange }) => (
  <div className="inline-flex p-1 bg-gray-100 rounded-lg">
    {views.map((item) => (
      <button
        key={item.id}
        onClick={() => onChange(item.id)}
        className={`px-4 py-2 text-sm rounded-md transition-colors ${
          view === item.id
            ? "bg-white text-blue-800 shadow-sm"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        {item.label}
      </button>
    ))}
  </div>
);

export default ViewToggle;
