const mongoose = require('mongoose');

const Request = new mongoose.Schema({
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'worker'
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  Request.pre('save', async function(next) {
    if (this.isModified('status') && this.status === 'Accepted') {
      const existingRequest = await this.constructor.findOne({ from: this.from, to:this.to, status: 'Pending' });
      if (!existingRequest) {
        const err = new Error('User has already accepted a request');
        err.name = 'DuplicateRequestError';
        next(err);
        return;
      }

    } else if (this.isNew) {
      const existingRequest = await this.constructor.findOne({ from: this.from, to:this.to, status: 'Pending' });
      if (existingRequest) {
        const err = new Error('User already has a pending request');
        err.name = 'DuplicateRequestError';
        next(err);
        return;
      }
    }
    next();
  });
  

  module.exports= mongoose.model('Request', Request);