import { useState, useEffect } from "react";
import { useUpdateFeaturesMutation } from "../../tools/api/features";
import Swal from "sweetalert2";

const EditFeaturesForm = ({ feature, onClose, refetch }) => {
  const [updateFeature, { isLoading }] = useUpdateFeaturesMutation();
  const [formData, setFormData] = useState({
    icon: '',
    titleAz: '',
    titleEn: '',
    descriptionAz: '',
    descriptionEn: ''
  });

  useEffect(() => {
    if (feature) {
      setFormData({
        icon: feature.icon || '',
        titleAz: feature.titleAz || '',
        titleEn: feature.titleEn || '',
        descriptionAz: feature.descriptionAz || '',
        descriptionEn: feature.descriptionEn || ''
      });
    }
  }, [feature]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "id" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feature || !feature.id) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Invalid feature data",
      });
      return;
    }

    try {
      await updateFeature({ id: feature.id, ...formData }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Feature updated successfully.",
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
        text: error.data?.message || "Feature could not be updated",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Update Feature</h4>
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

export default EditFeaturesForm;