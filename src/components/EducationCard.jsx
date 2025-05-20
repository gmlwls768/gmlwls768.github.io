const EducationCard = ({ school, major, period, grade }) => (
  <div className="flex justify-between">
    <div>
      <h3 className="font-semibold">{school}</h3>
      <p className="text-gray-600">{major}</p>
      <p className="pt-3 text-gray-600">전체 평점 : {grade} / 4.5</p>
    </div>
    <span className="text-gray-500">{period}</span>
  </div>
);

export default EducationCard;
