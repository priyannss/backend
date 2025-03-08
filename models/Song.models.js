import {Schema} from 'mongoose';
const SongSchema = new Schema({
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
    album: {
      type: String,
      trim: true
    },
    duration: {
      type: Number, // in seconds
      min: 0
    },
    releaseDate: {
      type: Date
    },
    genre: {
      type: String,
      trim: true
    },
   
    audioUrl: {
      type: String
    },
    imageUrl: {
      type: String
    }
  });

const Song = mongoose.model('Song', SongSchema);

export default Song;