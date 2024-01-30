import axios from "axios";
import React, { useEffect, useState } from "react";

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
      const handleClick = async () => {
        try {
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
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
);



}
export default AddNewTodoForm;