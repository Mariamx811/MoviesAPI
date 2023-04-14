const express = require("express");
const router = express.Router();

var pool = require("../DataBase/db");

router.post("/ratings",(req,res)=>{
    try{

        let m_review =  req.body.movie_review;
        let m_date = req.body.date;
        let m_id = req.body.movie_id;
        pool.query(
            `insert into thecamp_movies_ratings (movie_id,movie_review,date) values ("${m_id}","${m_review}","${m_date}")`,
            function(err,result,fields){
                if(err) throw err;
                res.send(result);
            }
        );
    }
    catch{
        res.status(500).send("Error in sending data")
    }
});

module.exports = router;