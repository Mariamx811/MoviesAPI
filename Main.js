const express = require("express");
const app = express();
const moviePath = require("./Routes/cinema");
const ratingPath = require("./Routes/rating");

app.use(express.json());
app.use("/cinema",moviePath);
app.use("/cinema/movies",ratingPath);

app.listen(5000,"localhost",()=>{
    console.log("Server is listening on port 5000");
});