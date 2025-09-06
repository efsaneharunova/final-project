import React, { useState } from "react";
import { useAddSliderMutation } from "../../tools/api/slider";

const AddSliderForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    img: "",
    url: "",
  });

  const [addSlider] = useAddSliderMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSlider(formData)
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error("Failed to add slider:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add New Slider</h4>
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

export default AddSliderForm;
