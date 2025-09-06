import React, { useState } from "react";
import { useAddServiceMutation } from "../../tools/api/service";

const AddServiceForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    icon: "",
    titleAz: "",
    titleEn: "",
    descriptionAz: "",
    descriptionEn: "",
  });

  const [addService] = useAddServiceMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addService(formData)
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error("Failed to add service:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add New Service</h4>
      {Object.keys(formData).map((key) => (
        <div className="mb-3" key={key}>
          <label className="form-label">{key}</label>
          <input
            type="text"
            className="form-control"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-success">
        Save
      </button>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={onClose}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddServiceForm;
