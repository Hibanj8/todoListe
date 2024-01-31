import axios from "axios";
import React, { useEffect, useState } from "react";



function Todo_liste() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/tasks");
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error.message || "An error occurred while fetching data.");
        }
      };
  
      fetchData();
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Priority
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Created By
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Deadline
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Comment
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tasks.reverse().map((task, id) => (
                                    <tr key={id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {task.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.priority}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.status}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.description}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.createdBy}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.deadline}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            {task.comments}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-green-500 hover:text-green-700"
                                                href="#"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                className="text-red-500 hover:text-red-700"
                                                href="#"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Todo_liste;
