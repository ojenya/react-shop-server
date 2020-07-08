const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      id:{
        type:Number
      },
      title:{
        type:String
      },
      count:{
        type:Number
      },
      total:{
        type:Number
      },
    }
  ],
  totalOrder: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model('order', orderSchema);