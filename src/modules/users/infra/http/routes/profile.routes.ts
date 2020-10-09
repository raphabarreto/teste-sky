import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAunthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get('/', ensureAuthenticated, profileController.show);

export default profileRouter;
