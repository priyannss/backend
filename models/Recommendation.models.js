const RecommendationSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    recommendedAt: {
      type: Date,
      default: Date.now
    },
    recommendations: [{
      song: {
        type: Schema.Types.ObjectId,
        ref: 'Song',
        required: true
      },
      score: {
        type: Number, // relevance score
        min: 0,
        max: 100
      },
      reason: {
        type: String,
        enum: ['liked_songs', 'recently_played', 'genre_preference', 'popular', 'new_release', 'similar_users']
      },
      status: {
        type: String,
        enum: ['new', 'viewed', 'played', 'liked', 'dismissed'],
        default: 'new'
      }
    }]
  });
  
  // Create an index to efficiently query a user's active recommendations
  RecommendationSchema.index({ user: 1, 'recommendations.status': 1 });


const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = {
  Recommendation
};