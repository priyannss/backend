import {UserLikedSong} from '../models/LikedSong.models.js'
import { User } from '../models/User.models.js'
import { Playlist } from '../models/Playlist.models.js'
import { RecentlyPlayed } from '../models/RecentlyPlayed.models.js'
import { Song } from '../models/Song.models.js'
import { Recommendation } from '../models/Recommendation.models.js'
import getSpotifyId from '../services/spotifySongId.js'
import {getSongFromId} from '../services/getSongFromId.js'


//total two incomplete and ten complete

//one -> incomplete
export const getRecommendations = async (req, res) => {

}


//two -> complete
export const getRecentlyPlayed = async (req, res) => {
    const userID=req.user._id;
    const recentlyPlayed=await RecentlyPlayed.find({user:userID}).populate('song');
    res.status(200).json({recentlyPlayed});
}


//three -> complete
export const getPlaylists = async (req, res) => {
    const userID=req.user._id;
    const playlists=await Playlist.find({user:userID});
    res.status(200).json({playlists});
}


//four -> complete
export const getPlaylistSongs = async (req, res) => {
    const userID=req.user._id;
    const playlists=await Playlist.find({user:userID}).populate('songs');
    res.status(200).json({playlists});
}


//five -> complete
export const getLikedSongs = async (req, res) => {
    const userID=req.user._id;
    const likedSongs=await UserLikedSong.find({user:userID}).populate('song');
    res.status(200).json({likedSongs});
}


//six -> complete
export const getUser = async (req, res) => {
    const user=req.user;
    res.status(200).json({user});
}


//seven -> complete
export const getSelectedSong = async (req, res) => {
    const {songId}=req.body
    const song=await getSongFromId(songId);
    res.status(200).json(song);
}


//eight -> complete

export const addSongs = async (req, res) => {
    try {
        const songs = req.body; // Expecting an array of { title, artist }

        if (!Array.isArray(songs) || songs.length === 0) {
            return res.status(400).json({ message: "Songs array is required" });
        }

        const addedSongs = [];

        for (const { title, artist } of songs) {
            if (!title || !artist) continue; // Skip invalid entries

            // Fetch song details from Spotify
            const songData = await getSpotifyId(title, artist);
            if (!songData) continue; // Skip if song not found

            const { spotifyId, duration, album, coverImage } = songData;

            // Check if the song already exists
            const existingSong = await Song.findOne({ spotifyId });
            if (existingSong) continue; // Skip duplicates

            // Create and save the new song
            const newSong = new Song({ title, artist, spotifyId, duration, album, coverImage });
            await newSong.save();
            addedSongs.push(newSong);
        }

        if (addedSongs.length === 0) {
            return res.status(400).json({ message: "No new songs were added" });
        }

        res.status(201).json({ message: "Songs added successfully", songs: addedSongs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};



//nine -> complete
export const getAllSongFromBackend = async (req, res) => {
    const songs=await Song.find();
    res.status(200).json({songs});
}



//ten -> complete
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User
        .findOne({ email: email })
        
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.passwordMatched(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = user.getToken();
    res.cookie({token})
    res.status(200).json({ message: 'Logged in' });
}




//eleven -> incomplete
export const register = async (req, res) => {

}


//twelve -> complete
export const logout = async (req, res) => {
    req.cookies.token = null;
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out' });
}