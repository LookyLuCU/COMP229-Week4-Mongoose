import { Router } from "express";

import { DisplayMoviesList } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/movie-list', DisplayMoviesList);

export default router;