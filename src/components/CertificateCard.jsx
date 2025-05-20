const CertificateCard = ({ name, date }) => (
  <div className="flex justify-between">
    <span className="font-semibold">{name}</span>
    <span className="text-gray-500">{date}</span>
  </div>
);

export default CertificateCard;
