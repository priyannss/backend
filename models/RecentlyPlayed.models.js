import mongoose from 'mongoose';
const { Schema } = mongoose;
const RecentlyPlayedSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    song: {
      type: Schema.Types.ObjectId,
      ref: 'Song',
      required: true
    },
    playedAt: {
      type: Date,
      default: Date.now
    },
    playDuration: {
      type: Number, // in seconds
      min: 0
    }
  });

  // Create an index for efficient querying of a user's recently played tracks
RecentlyPlayedSchema.index({ user: 1, playedAt: -1 });


export const RecentlyPlayed = mongoose.model('RecentlyPlayed', RecentlyPlayedSchema);

