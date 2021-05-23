//require the just installed express app
var express = require('express');
var bodyParser = require("body-parser");

//then we call express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
//the task array with initial placeholders for added task
var task = ["buy socks", "practise with nodejs"];
//post route for adding new task
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    //add the new task from the post route into the array
    task.push(newTask);
    //after adding to the array go back to the root route
    res.redirect("/");
});

//render the ejs and display added task, task(index.ejs) = task(array)
app.get("/", function(req, res) {    
    res.render("index", { task: task, complete: complete });
});

//the completed task array with initial placeholders for removed task
var complete = ["finish jquery"];
app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exist in the task when checked, then remove using the array splice method
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {  
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});


//the server is listening on port 3000 for connections
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});