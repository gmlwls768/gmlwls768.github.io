import Link from "next/link";

const AwardCard = ({
  title,
  organizer,
  date,
  description,
  sub_description,
}) => (
  <div className="p-4 rounded-lg bg-gray-50">
    <div className="flex items-start justify-between mb-2">
      <div>
        <h3 className="font-semibold text-blue-800">{title}</h3>
        {organizer && <p className="text-gray-600">수여 기관: {organizer}</p>}
      </div>
      <span className="text-gray-500">{date}</span>
    </div>
    <div className="flex-col items-center gap-2">
      <p className="text-gray-600">출품작 : {description}</p>
      {sub_description && (
        <Link
          href={sub_description}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 pt-3 text-sm text-gray-600 hover:text-blue-600"
        >
          관련 기사
        </Link>
      )}
    </div>
  </div>
);

export default AwardCard;
