const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose")
const User = require ("./models/User")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookiePaser = require('cookie-parser')
require('dotenv').config();

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfoiu4534ijklakjf'

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookiePaser());

 mongoose.connect(`mongodb+srv://ashkam58:${process.env.MONGO_DB_API_KEY}@n9he69v.mongodb.net/?retryWrites=true&w=majority&appName=deshi`)


app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt)
        })
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e)
    }
    
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    // res.json(userDoc);
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //logged in user
        jwt.sign({username, id:userDoc._id},secret, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        })

    }else{
        res.status(400).json('wrong credentials')
    }
})

app.get('/profile', (req, res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err;
        res.json(info);
    })
    res.json(req.cookies);
})


app.post('/logout', (req, res)=>{
    res.cookie('token', '').json('ok')
})

app.listen(4000,()=>{
console.log('app is listening to the port 4000')
});



//mongodb+srv://ashkam58:<password>@deshi.n9he69v.mongodb.net/?retryWrites=true&w=majority&appName=deshi
//khuljasimsimDeshi123