import { userInfo } from 'os';
import router from '../router';
import { Request, Response } from "express";
// import Test from "../../models/test";

router.route('/extra')
    .get((req: Request, res: Response) => {
        res.json({ username: userInfo().username });
    })
    .post((req: Request, res: Response) => {
        // const { text } = new Test(`This is what you posted: ${req.body.text}` as any);
        res.json({ text: req.body.text });
    })
    .put((req: Request, res: Response) => {
        // const { text } = new Test(`I put this somewhere: ${req.body.text}` as any);
        res.json({ text: req.body.text });
    });

export default router;
