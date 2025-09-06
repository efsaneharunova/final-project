import React from "react";
import { useDeleteSliderMutation, useGetSliderQuery } from "../../tools/api/slider";

const DataSlider = ({ onEdit }) => {
    const { data: slider, error, isLoading } = useGetSliderQuery();
    const [deleteSlider] = useDeleteSliderMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading slider</div>;

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>img</th>
                    <th>url</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {slider?.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                            <img src={item.img} alt='img' style={{ width: '100px' }} />
                        </td>
                        <td>{item.url}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(item)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteSlider(item.id)}
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

export default DataSlider;