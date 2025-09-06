import React from "react";
import { useDeleteServiceMutation, useGetServiceQuery } from "../../tools/api/service";

const DataService = ({ onEdit }) => {
    const { data: service, error, isLoading } = useGetServiceQuery();
    const [deleteService] = useDeleteServiceMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading service</div>;

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Icon</th>
                    <th>Title (AZ)</th>
                    <th>Title (EN)</th>
                    <th>Description (AZ)</th>
                    <th>Description (EN)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {service?.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                            <img src={item.icon} alt={item.titleEn} style={{ width: '100px' }} />
                        </td>
                        <td>{item.titleAz}</td>
                        <td>{item.titleEn}</td>
                        <td>{item.descriptionAz}</td>
                        <td>{item.descriptionEn}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(item)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteService(item.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataService;