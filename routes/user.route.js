import {Router} from 'express';
import {getLikedSongs,getPlaylists,getRecommendations,getRecentlyPlayed, getUser,getSong,login,register,logout} from '../controllers/user.controller';
const router = Router();

router.post('/getLikedSongs',getLikedSongs)

router.post('/getPlaylists',getPlaylists)
router.post('/getRecommendations',getRecommendations)
router.post('/getRecentlyPlayed',getRecentlyPlayed)
router.post('/getUser',getUser)
router.post('getSong',getSong)
router.post('/login',login)
router.post('/register',register)
router.post('/logout',logout)

export default router

