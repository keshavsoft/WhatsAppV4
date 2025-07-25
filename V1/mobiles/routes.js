import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromInsert } from "./Insert/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromReadSchema } from "./ReadSchema/routes.js";
import { router as routerFromGroupBy } from "./GroupBy/routes.js";
import { router as routerFromAggregateFunctions } from "./AggregateFunctions/routes.js";
import { router as routerFromSubTable } from "./SubTable/routes.js";

router.use("/Read", routerFromRead);
router.use("/Insert", routerFromInsert);
router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);
router.use("/ReadSchema", routerFromReadSchema);
router.use("/GroupBy", routerFromGroupBy);
router.use("/AggregateFunctions", routerFromAggregateFunctions);

router.use("/SubTable", routerFromSubTable);//Sub Table CRUD

export { router };