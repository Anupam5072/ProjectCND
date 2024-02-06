import mongoose from "mongoose";

const wetWasteSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const wetWasteModel = mongoose.model(waste, wetWasteSchema);