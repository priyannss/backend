import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserLikedSongSchema = new Schema({
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
    likedAt: {
      type: Date,
      default: Date.now
    }
  });

  // Create a compound index to ensure a user can only like a song once
UserLikedSongSchema.index({ user: 1, song: 1 }, { unique: true });


export const UserLikedSong = mongoose.model('UserLikedSong', UserLikedSongSchema);

