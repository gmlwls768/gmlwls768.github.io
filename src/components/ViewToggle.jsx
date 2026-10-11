import { views } from "@/data/portfolio";

const ViewToggle = ({ view, onChange }) => (
  <div className="inline-flex p-1 bg-slate-200/70 rounded-xl">
    {views.map((item) => (
      <button
        key={item.id}
        onClick={() => onChange(item.id)}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
          view === item.id
            ? "bg-white text-indigo-600 shadow-sm"
            : "text-slate-500 hover:text-slate-900"
        }`}
      >
        {item.label}
      </button>
    ))}
  </div>
);

export default ViewToggle;
