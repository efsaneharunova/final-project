import React, { useState } from "react";
import AddFeaturesForm from "./AddFeaturesForm";
import DataFeatures from "./DataFeatures";
import EditFeaturesForm from "./EditFeaturesForm";
import { useGetFeaturesQuery } from "../../tools/api/features";

const FeaturesManagement = () => {
  const [editingFeature, setEditingFeature] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { data: features = [], refetch } = useGetFeaturesQuery();

  return (
    <div className="container mt-4">
      <h2>Features Management</h2>

      {showAddForm ? (
        <AddFeaturesForm onClose={() => setShowAddForm(false)} />
      ) : editingFeature ? (
        <EditFeaturesForm
          feature={editingFeature}
          onClose={() => setEditingFeature(null)}
          refetch={refetch}
        />
      ) : (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowAddForm(true)}
          >
            + Add Features
          </button>
          <DataFeatures onEdit={setEditingFeature} />
        </>
      )}
    </div>
  );
}

export default FeaturesManagement;
