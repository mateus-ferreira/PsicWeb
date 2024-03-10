import { Request, Response, Router } from 'express';
import { UserController } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/users', async(req: Request, res: Response): Promise<void> => {
    res.send(await UserController.createNewUser(req, res));
});

userRouter.get('/users', async(req: Request, res: Response): Promise<void> => {
    res.send(await UserController.getAllUsers(req, res));
});

userRouter.get('/users/:id', async(req: Request, res: Response): Promise<void> => {
    res.send(await UserController.getOneUser(req, res));
});

userRouter.patch('/users/:id', async(req: Request, res: Response): Promise<void> => {
    res.send(await UserController.updateOneUser(req, res));
});

userRouter.delete('/users/:id', async(req: Request, res: Response): Promise<void> => {
    await UserController.deleteOneUser(req, res);
});

export default userRouter;