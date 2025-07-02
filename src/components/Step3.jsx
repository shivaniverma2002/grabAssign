const Step3 = ({ formData }) => (
  <div>
    <h4 className="mb-3">Review Your Information</h4>
    <ul className="list-group">
      {Object.entries(formData).map(([key, value]) => (
        <li
          className="list-group-item d-flex justify-content-between bg-dark text-white"
          key={key}
        >
          <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>
          <span>{value || "—"}</span>
        </li>
      ))}
    </ul>
  </div>
);
export default Step3;
