import {UserLikedSong} from '../models/LikedSong.models.js'
import { User } from '../models/User.models.js'
import { Playlist } from '../models/Playlist.models.js'
import { RecentlyPlayed } from '../models/RecentlyPlayed.models.js'
import { Song } from '../models/Song.models.js'
import { Recommendation } from '../models/Recommendation.models.js'

export const getRecommendations = async (req, res) => {

}
export const getRecentlyPlayed = async (req, res) => {
    const userID=req.user._id;
    const recentlyPlayed=await RecentlyPlayed.find({user:userID}).populate('song');
    res.status(200).json({recentlyPlayed});
}
export const getPlaylists = async (req, res) => {
    const userID=req.user._id;
    const playlists=await Playlist.find({user:userID});
    res.status(200).json({playlists});
}
export const getPlaylistSongs = async (req, res) => {
    const userID=req.user._id;
    const playlists=await Playlist.find({user:userID}).populate('songs');
    res.status(200).json({playlists});
}
export const getLikedSongs = async (req, res) => {
    const userID=req.user._id;
    const likedSongs=await UserLikedSong.find({user:userID}).populate('song');
    res.status(200).json({likedSongs});
}
export const getUser = async (req, res) => {
    const user=req.user;
    res.status(200).json({user});
}
export const getSong = async (req, res) => {
    
}
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
export const register = async (req, res) => {

}
export const logout = async (req, res) => {
    req.cookies.token = null;
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out' });
}