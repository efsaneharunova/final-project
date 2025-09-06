import React, { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import EditServiceForm from "./EditServiceForm";
import { useGetServiceQuery } from "../../tools/api/service";
import DataService from "./DataService";

const ServiceManagement = () => {
  const [editingService, setEditingService] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { data: service = [], refetch } = useGetServiceQuery();

  return (
    <div className="container mt-4">
      <h2>Service Management</h2>

      {showAddForm ? (
        <AddServiceForm onClose={() => setShowAddForm(false)} />
      ) : editingService ? (
        <EditServiceForm
        service={editingService}
          onClose={() => setEditingService(null)}
          refetch={refetch}
        />
      ) : (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowAddForm(true)}
          >
            + Add Service
          </button>
          <DataService onEdit={setEditingService} />
        </>
      )}
    </div>
  );
}

export default ServiceManagement;
