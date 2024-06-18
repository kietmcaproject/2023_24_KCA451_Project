import mongoose from "mongoose";

const dataSechmea= new mongoose.Schema({
    classname:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    graduation:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    entrance:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    }
},{timestamps:true})


const DataModel= mongoose.model('data',dataSechmea)


export default DataModel