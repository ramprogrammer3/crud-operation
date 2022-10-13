
const express = require("express");
const app = express();
const {PORT} = require("./config/envConfig");
const cors = require("cors");
const connect = require ("./config/db");
const userRoutes = require("./routes/userRoutes");


// connect mongodb database
connect();
app.use(cors());
app.use(express.json());
app.use(userRoutes);



const port = PORT || 8080;

app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`);
})