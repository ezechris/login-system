const express = require("express");
const path = require("path");
const cookie = require("cookie-parser");
const {v4:uuidv4} = require("uuid");
const ejs = require("ejs");
const router = require("./router")
const bodyParser = require("body-parser"); 
const session = require("express-session");



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 3000

app.set("view engine","ejs")

app.use(express.static("public"));

app.use(session({

    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use("/route", router)



app.get("/", (req, res)=>{
res.render("index", {title: "login system"})

});




app.listen(port, ()=>{
    console.log(`server running at http://localhost${port}`);
})