const Step1 = ({ formData, handleChange, errors }) => (
  <div>
    <h4 className="mb-3">Personal Information</h4>
    <div className="mb-2">
      <label>Name</label>
      <input
        type="text"
        className={`form-control ${errors.name && "is-invalid"}`}
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <div className="invalid-feedback">{errors.name}</div>
    </div>
    <div className="mb-2">
      <label>Email</label>
      <input
        type="email"
        className={`form-control ${errors.email && "is-invalid"}`}
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <div className="invalid-feedback">{errors.email}</div>
    </div>
    <div className="mb-2">
      <label>Phone</label>
      <input
        type="text"
        className={`form-control ${errors.phone && "is-invalid"}`}
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <div className="invalid-feedback">{errors.phone}</div>
    </div>
  </div>
);
export default Step1;
