import express from 'express';

const router = express.Router();

import { router as routerFromStudentNames } from "./StudentNames/routes.js";
import { router as routerFrommobiles } from "./mobiles/routes.js";

router.use("/StudentNames", routerFromStudentNames);
router.use("/mobiles", routerFrommobiles);

export { router };