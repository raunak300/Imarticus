const express=require('express')
const Router=express.Router()

const {signup,login,check}=require('../Controller/auth');

Router.post('/signup',signup)
Router.post('/login',login)
Router.get('/check',check)
module.exports=Router;