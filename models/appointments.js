
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true, unique: true }
    

})

// exporting the schema

module.exports = mongoose.model('Appointments', appointmentSchema);
