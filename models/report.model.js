const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({}, { timestamps: true, strict: false });

module.exports = mongoose.model("Report", reportSchema);
