import express from 'express';

const router = express.Router();

import { router as routerFromValidate } from "./Validate/routes.js";

router.use("/Validate", routerFromValidate);

export { router };