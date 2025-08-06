import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromValueByKey } from "./2.ValueByKey/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/ValueByKey", routerFromValueByKey);

export { router };