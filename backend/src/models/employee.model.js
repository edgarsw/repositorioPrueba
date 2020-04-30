const mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.set('useCreateIndex', true);

const EmployeeSchema = new Schema({
    name: {type: String, required: true, trim: true},
    position: {type: String, required: true, trim: true},
    office: {type: String, required: true, trim: true},
    salary: {type: Number, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Employee',EmployeeSchema)