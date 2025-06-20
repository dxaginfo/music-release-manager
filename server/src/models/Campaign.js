const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  artist: {
    type: String,
    required: true,
    trim: true
  },
  releaseType: {
    type: String,
    enum: ['single', 'ep', 'album'],
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  status: {
    type: String,
    enum: ['planning', 'in_progress', 'completed'],
    default: 'planning'
  },
  description: {
    type: String
  },
  coverArt: {
    type: String
  },
  budget: {
    total: Number,
    spent: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' }
  },
  timeline: {
    startDate: Date,
    endDate: Date,
    milestones: [{
      title: String,
      date: Date,
      completed: { type: Boolean, default: false }
    }]
  },
  distributionPlatforms: [{
    name: String,
    status: String,
    url: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Campaign', CampaignSchema);