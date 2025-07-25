import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";

router.use("/AsIs", routerFromAsIs);

export { router };