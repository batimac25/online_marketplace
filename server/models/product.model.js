import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  description: {
    type: String,
    trim: true,
    required: 'Description is required'
  },
  price: {
    type: Number,
    required: 'price is required'
  },
  quantity: {
    type: Number,
    required: 'price is required'
  },
  category: {
    type: String,
    trim: true,
    required: 'Category is required'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});
export default mongoose.model('Products', productSchema);

