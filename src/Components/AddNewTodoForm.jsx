import axios from "axios";
import React, { useState } from "react";


function AddNewTodoForm (){

    const [values, setValues] = useState({
        title: "",
        priority: "",
        status: "",
        description: "",
        createdBy:"",
        deadline:"",
        comments:""
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(values);
          const res = await axios.post("http://localhost:5000/api/tasks", values);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
    
        setValues({
            title: "",
            priority: "",
            status: "",
            description: "",
            createdBy:"",
            deadline:"",
            comments:""
        });
      };

return(
<>
    <div className="flex flex-col justify-center ">

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-2xl">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form method="POST" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" >
                           title
                        </label>
                        <div className="mt-1">
                            <input
                                className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                                required=""
                                type="text"
                                name="title"
                                id="title"
                                value={values.title}
                                onChange={(e) =>
                                    setValues({ ...values, title: e.target.value })
                                  }
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="priority">
                  Priorité
                </label>
                <div className="mt-1">
                  <select
                    id="priority"
                    name="priority"
                    value={values.priority}
                    onChange={(e) => setValues({ ...values, priority: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                  >
                    <option value="" disabled>Select Priorité</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="status">
                  Statut
                </label>
                <div className="mt-1">
                  <select
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={(e) => setValues({ ...values, status: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-bg-teal-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                  >
                    <option value="" disabled>Select Statut</option>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700" >
                         description
                        </label>
                        <div className="mt-1">
                            <input
                                className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                                required=""
                                type="text"
                                name="description"
                                id="description"
                                value={values.description}
                                onChange={(e) =>
                                    setValues({ ...values, description: e.target.value })
                                  }
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700" >
                        createdBy
                        </label>
                        <div className="mt-1">
                            <input
                                className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                                required=""
                                type="text"
                                name="createdBy"
                                id="createdBy"
                                value={values.createdBy}
                                onChange={(e) =>
                                    setValues({ ...values, createdBy: e.target.value })
                                }
                        />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">
                        deadline
                        </label>
                        <div className="mt-1">
                            <input
                                className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                                required=""
                                type="date"
                                name="deadline"
                                id="deadline"
                                value={values.deadline}
                                onChange={(e) =>
                                    setValues({ ...values, deadline: e.target.value })
                                  }
                        />
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">
                        comments
                        </label>
                        <div className="mt-1">
                            <input
                                className="appearance-none block w-full px-3 py-2 border border-bg-teal-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-bg-teal-300 sm:text-sm"
                                required=""
                                type="text"
                                name="comments"
                                id="comments"
                                value={values.comments}
                                onChange={(e) =>
                                    setValues({ ...values, comments: e.target.value })
                                  }
                        />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none " type="submit">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
   </div>

</>
);
}
export default AddNewTodoForm;