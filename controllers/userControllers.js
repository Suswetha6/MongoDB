const userModel = require('../models/user')

exports.createUser = async (req, res) => {
  await userModel.create({
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
  createdAt: req.body.createdAt,
});

return res.status(201).json({ message: "User Created" });
}


exports.getUser =async(req , res)=>{
  const user = await userModel.findById(req.params.id)
 
  return res.json(user)
}

exports.getAllUsers = async(req,res)=>{
  const users = await userModel.find({});
  return res.json(users);
}

exports.deleteUser = async(req,res)=>{
  const deletedUser  = await userModel.findByIdAndDelete(req.params.id)
  return res.json(deletedUser)
}

