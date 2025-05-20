const SkillCard = ({ title, icon, skills }) => (
  <div className="p-4 border rounded-lg">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
