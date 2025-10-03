const express=require('express')
const Router=express.Router()

const {upload,uploadDocument,getDocuments}=require('../Controller/docs');

Router.post('/upload',upload.single("document"),  uploadDocument)
Router.get('/get',getDocuments)
module.exports=Router;