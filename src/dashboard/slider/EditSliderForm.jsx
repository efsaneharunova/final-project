import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useUpdateSliderMutation } from "../../tools/api/slider";

const EditSliderForm = ({ slider, onClose, refetch }) => {
  const [updateSlider, { isLoading }] = useUpdateSliderMutation();
  const [formData, setFormData] = useState({
    img: '',
    url: ''
  });

  useEffect(() => {
    if (slider) {
      setFormData({
        img: slider.img || '',
        url: slider.url || ''
      });
    }
  }, [slider]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "id" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slider || !slider.id) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Invalid slider data",
      });
      return;
    }

    try {
      await updateSlider({ id: slider.id, ...formData }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Slider updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      if (refetch) refetch();
      onClose();
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.data?.message || "Selider could not be updated",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Update Slider</h4>
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
       Update
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

export default EditSliderForm;