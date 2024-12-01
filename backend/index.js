const express = require('express');
const session = require('express-session')
const auth = require('./auth');
const passport = require('passport');
const cors = require('cors');

function isLogginIn(req,res, next) {
    req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(cors({
    origin: "http://localhost:5173",  // frontend URL
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({secret : "cats"}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', 
    passport.authenticate('google', { scope: ['email', 'profile']}) 
)

app.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173/',
        failureRedirect: '/auth/failure'
    })
);

app.get('/logout', (req,res)=>{
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: "Error destroying session" });
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({ message: "Logged out successfully" });
        });
    });
})

app.get('/auth/failure', (req, res)=>{
    res.send("retry login");
})

app.get('/protected', isLogginIn, (req,res)=>{
    res.send('Hello!')
})



app.listen(3000, ()=> console.log('listening on 3000'));