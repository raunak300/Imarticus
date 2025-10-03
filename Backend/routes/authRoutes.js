const express=require('express')
const Router=express.Router()

const {signup,login,check,logout}=require('../Controller/auth');

Router.post('/signup',signup)
Router.post('/login',login)
Router.get('/check',check)
Router.get('/logout',logout)
module.exports=Router;