const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose)

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.plugin(AutoIncrement, {
  inc_field: 'task',
  id: 'taskIds',
  start_seq: 100
})

module.exports = mongoose.model("Task", taskSchema);
