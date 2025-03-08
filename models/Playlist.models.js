const PlaylistSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    isPublic: {
      type: Boolean,
      default: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    },
    songs: [{
      song: {
        type: Schema.Types.ObjectId,
        ref: 'Song',
        required: true
      },
      addedAt: {
        type: Date,
        default: Date.now
      },
      position: {
        type: Number,
        required: true
      }
    }]
  });



const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = {
  Playlist
};