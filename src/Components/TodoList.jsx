import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
  

    const handleDelete = async (id) => {
        try {
          const result = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            fetchData();
        } catch (error) {
          console.log(error);
        }

    };
      
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/tasks");
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error.message || "An error occurred while fetching data.");
        }
      };


    useEffect(() => {
      fetchData();
    }, []);

  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    

    <form className="w-full max-w-sm mx-auto px-4 py-2">

            <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none">To-Do List</h1>
    </div>
            <Link to="/Create"
                className=" ml-10 sm:ml-30 ml-36 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mx-5"
                type="button">
                 Add a task
             </Link>
        </div>
    </form>

    <ul className="divide-y divide-gray-200 px-4">
    {tasks.reverse().map((task, id) => ( 
        <li className="py-4" key={id}>
            <div className="flex items-center">

                <input id="todo1" name="todo1" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>

                <label htmlFor="todo1" className="ml-2 text-gray-900 grid grid-cols-4">
                   <div className="col-span-3 mt-2"> <span className="text-lg font-medium">{task.title}</span>
                    <span className="text-sm font-light text-gray-500">  {task.createdBy}</span>
                         </div>
                       <div > 
                        <Link to={`/update/${task._id}`}  className="inline-flex items-center justify-center w-10 h-10 mr-2 focus:ring-teal-500 transition-colors duration-150 bg-white rounded-full focus:shadow-outline">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                        </Link>
                        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 focus:ring-teal-500 transition-colors duration-150 bg-white rounded-full focus:shadow-outline">

                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            ></path>
                        </svg>
                        </button>
                        </div>
                </label>
            </div>
        </li>))}
    </ul>
</div>
    );
}
export default TodoList;