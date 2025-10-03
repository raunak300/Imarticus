const express=require('express')
const Router=express.Router()

const {summariseDocs}=require('../Controller/summarise')
Router.get('/docs/:docid',summariseDocs);

module.exports=Router;