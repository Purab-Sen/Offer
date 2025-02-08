import express from 'express'
import { getTopPostsByCategory } from '../controllers/visitor.controller';


const router = express.Router();
router.get('/category/all',getTopPostsByCategory)
router.get('/category/list',)
router.get('/category/:categoryName/all',)
router.get('/category/:searchTerm',)
router.get('/post/:postId',)

export default router;