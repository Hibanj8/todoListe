const express = require("express");
// const db = require("./models/index")
const db = require("./models");
const taskRoutes = require("./routes/task.routes");
const cors = require("cors");


const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 8000; 

app.use(express.json());
app.use(cors("*"));



app.use('/api/tasks', taskRoutes);

const connectionString = db.url;
console.log(connectionString);

const startserver = async () =>{
    try{ 
        await db.mongoose.connect(connectionString, {
            dbName : ""        
        });
        console.log("Connection to the database successful");
        
        app.listen(PORT,()=>{
            console.log("http://localhost:"+PORT);
        })  
    }catch(error){
        console.log(error.message);
    }
} 
// To start the server:
startserver();