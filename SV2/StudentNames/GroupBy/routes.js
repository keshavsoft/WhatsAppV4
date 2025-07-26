import express from 'express';

const router = express.Router();

import { router as routerFromSingleColLength } from "./2.SingleColLength/routes.js";
import { router as routerFromSingleColumn } from "./1.SingleColumn/routes.js";
import { router as routerFromSetSingleColumn } from "./3.SetSingleColumn/routes.js";

router.use("/SingleColLength", routerFromSingleColLength);
router.use("/SingleColumn", routerFromSingleColumn);
router.use("/SetSingleColumn", routerFromSetSingleColumn);

export { router };