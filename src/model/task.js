const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  usuario: String,
  fecha: String,
  actividad: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
