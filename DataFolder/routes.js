import express from 'express';

const router = express.Router();

import { router as routerFromChats } from "./Chats/routes.js";

router.use("/Chats", routerFromChats);

export { router };