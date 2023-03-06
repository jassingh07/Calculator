const express = require("express")
const app = express()

const bodyParser = require("body-parser")
//to parse the useful information from request object
app.use(bodyParser.urlencoded({extended: true}))
//whenever parsing data from html form always parse as urlencoded
//and set extended = true, {haje li ratt lo}

app.listen(3000, () =>{
    console.log("Active open on 3000")
})


app.get("/", (req, res) =>{
    // console.log(req.body);
    // res.send("Ready for toughest calculations...");
    //instead of sending bits of html file, send complete file in one command
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname);
    //__dirname is a constant which stores location of directory in which this js file is kept
    //used when location not known, generally when deploying on server
})
app.post("/", (req, res) =>{
    // console.log(req.body);
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let c = 0;
    if(num1.length !== 0)
        c = parseInt(num1, 10);
    if(num2.length !== 0)
        c += parseInt(num2, 10);
    // res.send("Thank you for sending numbers to the backend");
    res.send("Output of addition is: " + c);
})


app.get("/bmiCalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})


app.post("/bmiCalculator", (req, res) => {
    let height = req.body.hgt;
    let weight = req.body.wt;
    let bmi = weight / (height * height);
    res.send("Your BMI is "  + bmi);
})