const express = require("express")
var router = express.Router();

const auth_login = {
    email: "ezechris2005@gmail.com",
    password: "game"
}

router.post("/login", (req, res)=>{
    if (req.body.email == auth_login.email && req.body.password == auth_login.password) {
        req.session.user = req.body.email
        // res.end("welcome to the dashboard")
        res.redirect('/route/dashboard')
    } else {
        res.end("invalid id")
    }
})

router.get('/dashboard', (req, res)=>{

    if (req.session.user){

        res.render('dashboard', {user: req.session.user})
    }else{
        res.send('Unauthorised user')
    }

})


router.get("/logout", (req, res) =>{

req.session.destroy();

res.render("index", {title: "Logout", logout: "Logout successful"})

})

module.exports = router