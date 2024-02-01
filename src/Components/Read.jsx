import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';



function Read() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    useEffect(() => {
     
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
          setTasks(response.data);
          console.log(tasks);
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
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
            <div className="divide-y divide-gray-200 px-4">
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-teal-500 ">
                        <div className="px-4 py-2">
                                    <h1 className="text-center spantext-gray-900 font-bold text-2xl uppercase ">{tasks.title}</h1>
                                </div>
                    </label>
                </div>
                <div></div>
                </div>

        <ul>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                        <label className="block text-sm font-medium text-gray-700">Priority :<span className="text-sm font-light text-gray-500 "> {tasks.priority}</span></label>                                </div>
                    </label>
                </div>
            </li>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                                   <label className="block text-sm font-medium text-gray-700">Status : <span className="text-sm font-light text-gray-500 "> {tasks.status}</span></label>
                                </div>
                    </label>
                </div>
            </li>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                                    <label className="block text-sm font-medium text-gray-700">Description : <span className="text-sm font-light text-gray-500 "> {tasks.description}</span></label>  
                                </div>
                    </label>
                </div>
            </li>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                                  <label className="block text-sm font-medium text-gray-700">CreatedBy : <span className="text-sm font-light text-gray-500 "> {tasks.createdBy}</span></label>
                                </div>
                    </label>
                </div>
            </li>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                                  <label className="block text-sm font-medium text-gray-700">Deadline :<span className="text-sm font-light text-gray-500 "> {tasks.deadline}</span></label>
                                </div>
                    </label>
                </div>
            </li>
            <li className="py-4" >
                <div className="flex items-center">
                    <label for="todo1" className="ml-2 text-gray-900 ">
                        <div className="px-4 py-2">
                                  <label className="block text-sm font-medium text-gray-700">Comments :<span className="text-sm font-light text-gray-500 "> {tasks.comments}</span></label>
                                </div>
                    </label>
                </div>
            </li>
            <li>
            <Link to="/"
                className="mb-5 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mx-5"
                type="button">
                 Return
             </Link>
            </li>
        </ul>
    </div>
    );
}
export default Read;
