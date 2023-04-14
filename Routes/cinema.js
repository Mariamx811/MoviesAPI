const express = require("express");
const router = express.Router();

var pool = require("../DataBase/db");

router.get("/movies",(req,res)=>
{
    try
    {
        pool.query(
            'select * from thecamp_cinema',
            function(error,results,fields){
                if(error) throw error;
                res.send(results);
            }
        )
    }
    catch
    {
        res.status(500).send("Error in retrieving data");
    }
});

router.post("/movies",(req,res)=>{
    try{

        let m_name =  req.body.movie_name;
        let m_length = req.body.movie_length;
        let m_director = req.body.movie_director;
        pool.query(
            `insert into thecamp_cinema (movie_name,movie_length,movie_director) values ("${m_name}","${m_length}","${m_director}")`,
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

router.patch("/movies/:id",(req,res)=>{
    try{
        let id = req.query["id"];
        let m_name =  req.body.movie_name;
        let m_length = req.body.movie_length;
        let m_director = req.body.movie_director;
        pool.query(
            `update thecamp_cinema set movie_name = "${m_name}", movie_length = "${m_length}" , movie_director = "${m_director}" where id = "${id}"`,
            
            function(err,result,fields)
            {
                if(err) throw err
                res.send(result)
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).send("Error in Updating data");
    }

});

router.delete("/movies/:id",(req,res)=>{
    let id = req.query["id"];
    pool.query(
        `delete from thecamp_cinema where id = "${id}"`,
        function(err,result,fields)
        {
            if(err) throw err
            res.send(result)
        }
    )
});

module.exports = router;