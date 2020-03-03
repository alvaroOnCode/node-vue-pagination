import { Router } from 'express';

import ArticleController from '../controllers/article';

const router = Router();

// GET > /
router.get('/', ArticleController.getAll);

// GET > create
router.get('/create', ArticleController.create);

export default router;