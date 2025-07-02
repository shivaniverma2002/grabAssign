const Step2 = ({ formData, handleChange, errors }) => (
  <div>
    <h4 className="mb-3">Address Information</h4>
    <div className="mb-2">
      <label>Address Line 1</label>
      <input
        type="text"
        className={`form-control ${errors.address1 && "is-invalid"}`}
        value={formData.address1}
        onChange={(e) => handleChange("address1", e.target.value)}
      />
      <div className="invalid-feedback">{errors.address1}</div>
    </div>
    <div className="mb-2">
      <label>Address Line 2</label>
      <input
        type="text"
        className="form-control"
        value={formData.address2}
        onChange={(e) => handleChange("address2", e.target.value)}
      />
    </div>
    <div className="mb-2">
      <label>City</label>
      <input
        type="text"
        className={`form-control ${errors.city && "is-invalid"}`}
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />
      <div className="invalid-feedback">{errors.city}</div>
    </div>
    <div className="mb-2">
      <label>State</label>
      <input
        type="text"
        className={`form-control ${errors.state && "is-invalid"}`}
        value={formData.state}
        onChange={(e) => handleChange("state", e.target.value)}
      />
      <div className="invalid-feedback">{errors.state}</div>
    </div>
    <div className="mb-2">
      <label>ZIP Code</label>
      <input
        type="text"
        className={`form-control ${errors.zip && "is-invalid"}`}
        value={formData.zip}
        onChange={(e) => handleChange("zip", e.target.value)}
      />
      <div className="invalid-feedback">{errors.zip}</div>
    </div>
  </div>
);
export default Step2;
