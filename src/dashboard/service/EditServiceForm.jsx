import { useState, useEffect } from "react";
import { useUpdateServiceMutation } from "../../tools/api/service";
import Swal from "sweetalert2";

const EditServiceForm = ({ service, onClose, refetch }) => {
  const [updateService, { isLoading }] = useUpdateServiceMutation();
  const [formData, setFormData] = useState({
    icon: '',
    titleAz: '',
    titleEn: '',
    descriptionAz: '',
    descriptionEn: ''
  });

  useEffect(() => {
    if (service) {
      setFormData({
        icon: service.icon || '',
        titleAz: service.titleAz || '',
        titleEn: service.titleEn || '',
        descriptionAz: service.descriptionAz || '',
        descriptionEn: service.descriptionEn || ''
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "id" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service || !service.id) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Invalid service data",
      });
      return;
    }

    try {
      await updateService({ id: service.id, ...formData }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Service updated successfully.",
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
        text: error.data?.message || "Service could not be updated",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Update Service</h4>
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

export default EditServiceForm;