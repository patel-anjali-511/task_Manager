const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["low", "meduim", "high"],
    },
    status:{
       type:String,
       enum:[
        "todo",
        "in_progress",
        "done"
       ]
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const taskModel = mongoose.model("task", taskSchema);
module.exports = taskModel;
