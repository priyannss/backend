import {Router} from 'express';
import { verifyToken } from '../middleware/user.middleware.js';
import {getLikedSongs,getPlaylists,getRecommendations,getRecentlyPlayed,
     getUser,getSong,login,register,logout,getPlaylistSongs} from '../controllers/user.controller';
const router = Router();

router.post('/getLikedSongs',verifyToken,getLikedSongs)

router.post('/getPlaylists',verifyToken,getPlaylists)
router.post('/getRecommendations',verifyToken,getRecommendations)
router.post('/getRecentlyPlayed',verifyToken,getRecentlyPlayed)
router.post('/getUser',verifyToken,getUser)
router.post('getSong',verifyToken,getSong)
router.post('/getPlaylistSongs',verifyToken,getPlaylistSongs)
router.post('/logout',verifyToken,logout)
router.post('/login',login)
router.post('/register',register)

export default router

