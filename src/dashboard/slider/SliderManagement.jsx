import React, { useState } from "react";
import AddSliderForm from "./AddSliderForm";
import EditSliderForm from "./EditSliderForm";
import { useGetSliderQuery } from "../../tools/api/slider";
import DataSlider from "./DataSlider";

const SliderManagement = () => {
  const [editingSlider, setEditingSlider] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { data: slider = [], refetch } = useGetSliderQuery();

  return (
    <div className="container mt-4">
      <h2>Slider Management</h2>

      {showAddForm ? (
        <AddSliderForm onClose={() => setShowAddForm(false)} />
      ) : editingSlider ? (
        <EditSliderForm
        slider={editingSlider}
          onClose={() => setEditingSlider(null)}
          refetch={refetch}
        />
      ) : (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowAddForm(true)}
          >
            + Add Slider
          </button>
          <DataSlider onEdit={setEditingSlider} />
        </>
      )}
    </div>
  );
}

export default SliderManagement;
