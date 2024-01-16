const taskModel = require('../Models/tasksModel')

const createTask = async (req, res) => {
   try {
    const { title, description} = req.body
    const newTask = taskModel({
      title,
      description
    })
  
    const savedTask = await newTask.save()
    res.status(201).json({success: true, message: "Task Created Successfully.", savedTask})
   }
   catch(err){
    console.log(err.message)
   }
}



module.exports = createTask