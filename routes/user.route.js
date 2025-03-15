import {Router} from 'express';
import { verifyToken } from '../middleware/user.middleware.js';
import {getLikedSongs,getPlaylists,getRecommendations,getRecentlyPlayed,
     getUser,login,register,logout,getPlaylistSongs,addSongs,getAllSongFromBackend,getSelectedSong} from '../controller/user.controller.js';
const router = Router();

router.post('/getLikedSongs',verifyToken,getLikedSongs)

router.post('/getPlaylists',verifyToken,getPlaylists)
router.post('/getRecommendations',verifyToken,getRecommendations)
router.post('/getRecentlyPlayed',verifyToken,getRecentlyPlayed)
router.post('/getUser',verifyToken,getUser)
router.post('/getSelectedSong',getSelectedSong)
router.get('/getAllSongs',getAllSongFromBackend)
router.post('/getPlaylistSongs',verifyToken,getPlaylistSongs)
router.post('/logout',verifyToken,logout)
router.post('/addSong',addSongs)
router.post('/login',login)
router.post('/register',register)

export default router

