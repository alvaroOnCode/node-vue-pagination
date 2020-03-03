import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response): Response => {
    return res.status(200).json({
        result: true,
        message: "Welcome to the API."
    })
})

export default router;