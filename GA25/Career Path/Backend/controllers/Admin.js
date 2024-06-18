import DataModel from "../models/data.js";
import UserModel from "../models/user.js"
const Getuser=async(req,res)=>{
    try {
        const users=await UserModel.find()
         res.status(200).json({users})
    } catch (error) {
        res.status(500).json({message:"intenral server error"})
        console.log(error)
    }
}

const Getdata=async(req,res)=>{
    try {
        const datas=await DataModel.find()
         res.status(200).json({datas})
    } catch (error) {
        res.status(500).json({message:"intenral server error"})
        console.log(error)
    }
}

const deletUser=async(req,res)=>{
    try {
        const userId=req.params.id
              const checkAdmin=await UserModel.findById(userId)

              if (checkAdmin.role =='admin') {
                return  res.status(409).json({message:"Admin can't delete an Admin"})
              }
        const user=await UserModel.findByIdAndDelete(userId)
        if (!user) {
          return  res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"user delet successfully ",user})
    } catch (error) {
        res.status(500).json({message:"intenral server error"})
        console.log(error)
    }
}

const savedata = async (req, res) => {
    try {
        const { classname, subject, graduation, interest, course, entrance, college } = req.body;

        const existData = await DataModel.findOne({ classname, subject, graduation, interest, course, entrance, college });
        if (existData) {
        return res
            .status(401)
            .json({ success: false, message: "Data already Exist" });
    }

        const newData = new DataModel({
            classname,
            subject,
            graduation,
            interest,
            course,
            entrance,
            college
        });

        await newData.save();

        res.status(200).json({ message: "Data save successfully", newData })
    } catch (error) {
      res.status(500).json({success:false,message:"Internal server error"})
      console.log(error)
    }
  };

export {Getuser,deletUser, savedata, Getdata}