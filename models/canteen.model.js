const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const canteenSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Canteen", invoiceSchema);
